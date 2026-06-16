# RAG CV — Deployment Guide

A Streamlit CV assistant (RAG over a PDF CV) deployed via Docker behind Nginx with HTTPS.

## Architecture

- **Frontend** — Streamlit app ([Frontend/streamlit_ui.py](Frontend/streamlit_ui.py)) with a side-by-side PDF viewer and chat assistant.
- **Embeddings** — generated locally with ChromaDB and **baked into the Docker image** (`Frontend/chroma_db_data/`) so the app starts instantly without re-processing the CV.
- **LLM** — Groq (configured via `.env`).
- **Reverse proxy** — Nginx + Certbot (Let's Encrypt) for HTTPS.

## Prerequisites

- A Linux VM (e.g. DigitalOcean droplet) with a public IP
- A domain pointed at the VM (e.g. `app.trevteb.dev`)
- SSH access as `root`
- A Docker Hub account (image is pushed/pulled from there)

---

## 1. Generate Embeddings Locally

The embeddings are baked into the image, so generate them first. Make sure the CV PDF is in `Frontend/CV/`, then run the app once:

```bash
cd ~/Desktop/Timepledgeprojects/my-awesome-portfolio/RAG_CV
streamlit run Frontend/streamlit_ui.py
```

Wait for the app to load and process the CV, then stop it (`Ctrl+C`). You should now see `Frontend/chroma_db_data/` populated.

> The app skips re-ingestion automatically if the collection is already populated, so this only needs to happen when the CV changes.

---

## 2. Build and Push the Docker Image

The Dockerfile copies `Frontend/CV/` and `Frontend/chroma_db_data/` into the image.

Run from the `RAG_CV/` directory (the build context):

```bash
cd ~/Desktop/Timepledgeprojects/my-awesome-portfolio/RAG_CV

# Log in to Docker Hub (first time only)
docker login

# Build the frontend image
docker build -t trev8989/rag_cv-frontend -f Frontend/Dockerfile .

# Push to Docker Hub
docker push trev8989/rag_cv-frontend
```

> **Free up disk space** before/after builds if you're low:
> ```bash
> docker system prune -a
> ```
> Removes all stopped containers, dangling images, and unused networks.

> **Force a clean rebuild** (ignore cache):
> ```bash
> docker build --no-cache -t trev8989/rag_cv-frontend -f Frontend/Dockerfile .
> ```

---

## 3. Install Docker on the VM

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
apt install docker-compose
```

---

## 4. Pull the Image on the VM

```bash
ssh root@<YOUR_VM_IP>
docker pull trev8989/rag_cv-frontend
```

---

## 5. Set Up the App Directory

```bash
mkdir ~/app && cd ~/app
nano docker-compose.yml
```

Paste in your compose config (see [docker-compose.yaml](docker-compose.yaml) in this repo).

---

## 6. Upload the CV PDF to the VM

The `docker-compose.yaml` mounts `./CV:/app/CV`, so the host directory's contents override the CV baked into the image. You must place the CV in `~/app/CV/` on the VM.

From your **local machine**, SCP the PDF up:

```bash
scp ~/Desktop/Timepledgeprojects/my-awesome-portfolio/RAG_CV/Frontend/CV/TREVOR_TEBAWESWA_CURRICULUM_VITAE.pdf root@<YOUR_VM_IP>:/root/app/CV/
```

If the `CV` directory doesn't exist yet on the VM, create it first:

```bash
ssh root@<YOUR_VM_IP> "mkdir -p ~/app/CV"
```

> The PDF filename must match what `streamlit_ui.py` expects (`specific_file`), or the app falls back to the first `.pdf` it finds in the directory.

---

## 7. Configure Environment Variables

```bash
nano .env
```

Add:

```env
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=your_model_name
EMBEDDING_MODEL=your_embedding_model_name
```

---

## 8. Start the App

```bash
cd ~/app
docker-compose up -d
docker-compose ps                 # verify containers are running
docker-compose logs -f frontend   # watch logs
```

The Streamlit app runs on port `8501` internally.

---

## 9. Install and Configure Nginx

```bash
apt install nginx
nano /etc/nginx/sites-available/yourdomain
```

Paste (replace `server_name` with your domain):

```nginx
server {
    listen 80;
    server_name app.trevteb.dev;

    location / {
        proxy_pass http://localhost:8501;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 86400;
    }
}
```

> The `Upgrade`/`Connection` headers and long `proxy_read_timeout` are required for Streamlit's WebSocket connection.

Enable the site and restart Nginx:

```bash
rm /etc/nginx/sites-enabled/*
ln -s /etc/nginx/sites-available/yourdomain /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

---

## 10. Enable HTTPS with Certbot

```bash
apt install certbot python3-certbot-nginx
certbot --nginx -d app.trevteb.dev
```

Certbot automatically updates the Nginx config to redirect HTTP → HTTPS.

---

## 11. Open Firewall

```bash
ufw allow 80/tcp
ufw allow 443/tcp
```

---

## Updating the App

After changing code or the CV:

```bash
# Local
cd ~/Desktop/Timepledgeprojects/my-awesome-portfolio/RAG_CV
docker build -t trev8989/rag_cv-frontend -f Frontend/Dockerfile .
docker push trev8989/rag_cv-frontend

# On the VM
ssh root@<YOUR_VM_IP>
cd ~/app
docker-compose down
docker-compose pull
docker-compose up -d
```

---

## Useful Commands

| Task | Command |
|------|---------|
| Free up disk space | `docker system prune -a` |
| Build image (local) | `docker build -t trev8989/rag_cv-frontend -f Frontend/Dockerfile .` |
| Push image (local) | `docker push trev8989/rag_cv-frontend` |
| Pull image (VM) | `docker pull trev8989/rag_cv-frontend` |
| View running containers | `docker-compose ps` |
| View frontend logs | `docker-compose logs -f frontend` |
| Restart app | `docker-compose down && docker-compose up -d` |
| Shell into container | `docker exec -it app_frontend_1 bash` |
| Check port usage | `netstat -tlnp \| grep :80` |
| Nginx status | `systemctl status nginx` |
| Test Nginx config | `nginx -t` |
| Check server IP | `curl ifconfig.me` |

---

## Troubleshooting

| Symptom | Likely cause / fix |
|---------|--------------------|
| **502 Bad Gateway** | Container crashed — check `docker-compose logs frontend`. Often a startup error (e.g. ChromaDB path/version mismatch). |
| `KeyError: '.../chroma_db_data'` | ChromaDB version in the image differs from the one that generated the embeddings. Pin `chromadb` in [Frontend/requirements.txt](Frontend/requirements.txt) to match your local version. |
| `protobuf` descriptor error | Pin a compatible `protobuf` version in requirements. |
| Embeddings re-processed on every load | Ensure `chroma_db_data/` was baked into the image and the collection is non-empty. |
