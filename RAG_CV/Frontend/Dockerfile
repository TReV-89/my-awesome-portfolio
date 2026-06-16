FROM python:3.12-slim

WORKDIR /app

RUN pip install --no-cache-dir uv

# Copy and install dependencies
COPY Frontend/requirements.txt .
RUN uv pip install --system --no-cache-dir -r requirements.txt

# Copy your application files
COPY Frontend/streamlit_ui.py .
COPY Frontend/rag_methods.py .
COPY Frontend/.streamlit/ .streamlit/
COPY Frontend/CV/ CV/
COPY Frontend/chroma_db_data/ chroma_db_data/

ENV PYTHONPATH=/app

# Expose port 8501
EXPOSE 8501

# Run Streamlit on port 8501
CMD ["streamlit", "run", "streamlit_ui.py", "--server.port", "8501", "--server.address", "0.0.0.0"]