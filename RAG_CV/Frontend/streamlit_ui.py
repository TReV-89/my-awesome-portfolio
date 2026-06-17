import os
import chromadb
import streamlit as st
import streamlit.components.v1 as components

from dotenv import load_dotenv
import base64


from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage, SystemMessage
from rag_methods import (
    clear_chat,
    initialize_session_states,
    generate_response,
    display_chat_messages,
    handle_file_upload,
    get_pdf_page_count,
    get_pdf_page_image,
)

os.environ["TOKENIZERS_PARALLELISM"] = "false"

load_dotenv()
groq_api_key = os.getenv("GROQ_API_KEY")
groq_model = os.getenv("GROQ_MODEL")


# Robust file path handling
class LocalFile:
    def __init__(self, path):
        self.path = path
        self.name = os.path.basename(path)
        self.size = os.path.getsize(path)

    def read(self):
        with open(self.path, "rb") as f:
            return f.read()

    def seek(self, offset):
        pass


def display_pdf(file_path):
    with open(file_path, "rb") as f:
        base64_pdf = base64.b64encode(f.read()).decode("utf-8")

    pdf_display = f'<iframe src="data:application/pdf;base64,{base64_pdf}" width="500" height="700" type="application/pdf"></iframe>'
    st.markdown(pdf_display, unsafe_allow_html=True)


cv_dir = "./CV"

# Prioritize the specific file provided
specific_file = "TREVOR_SAAKA_CURRICULUM_VITAE.pdf"
cv_file_path = os.path.join(cv_dir, specific_file)

# If specific file doesn't exist, fall back to dynamic search
if not os.path.exists(cv_file_path) and os.path.exists(cv_dir):
    # Look for PDF files
    pdf_files = [f for f in os.listdir(cv_dir) if f.lower().endswith(".pdf")]
    if pdf_files:
        # Use the first PDF found
        cv_file_path = os.path.join(cv_dir, pdf_files[0])

# Fallback to hardcoded if dynamic search fails (or handle error)
if not cv_file_path or not os.path.exists(cv_file_path):
    st.error("CV file not found in 'CV' directory.")
    file = None
else:
    file = LocalFile(cv_file_path)


# Resolve the ChromaDB path so it works both locally and inside the container.
# Priority: explicit CHROMA_DB_PATH env var > containerized /app path > local ./
chroma_path = os.getenv("CHROMA_DB_PATH")
if not chroma_path:
    if os.path.isdir("/app"):
        # Running inside the Docker container (workdir is /app)
        chroma_path = "/app/chroma_db_data"
    else:
        # Running locally
        chroma_path = "./chroma_db_data"

os.makedirs(chroma_path, exist_ok=True)


# Cache the client + collection so a SINGLE shared instance is reused across all
# sessions/tabs. A PersistentClient can't be opened concurrently on the same path,
# so creating one per session (e.g. a second tab) causes:
#   "Could not connect to tenant default_tenant"
@st.cache_resource
def get_rag_collection(path):
    client = chromadb.PersistentClient(path=path)
    return client.get_or_create_collection(
        name="rag_collection_user",
        metadata={
            "description": "CV collection",
            "hnsw:space": "cosine",
            "hnsw:batch_size": 10000,
        },
    )


if "rag_collection" not in st.session_state:
    st.session_state.rag_collection = get_rag_collection(chroma_path)


# Ingest the CV exactly once per app process. @st.cache_resource serializes
# concurrent first-callers, so simultaneous users can't both trigger ingestion
# (which would duplicate embedding work and race on the shared Chroma client).
# The leading underscore tells Streamlit not to hash the unhashable args; the
# cache is keyed on file_path + file_name instead.
@st.cache_resource
def ensure_cv_ingested(_collection, _file, file_path, file_name):
    if _collection.count() == 0:
        handle_file_upload(_file, _collection)
    return True

if "llm" not in st.session_state:

    llm = ChatGroq(
        model=groq_model,  # Fast and capable
        temperature=0.5,
        api_key=groq_api_key,
    )
    st.session_state.llm = llm
else:
    llm = st.session_state.llm


initialize_session_states()

# Ingest once per app process (not per session). See ensure_cv_ingested above.
if file:
    ensure_cv_ingested(
        st.session_state.rag_collection, file, file.path, file.name
    )

st.set_page_config(
    layout="wide",
    initial_sidebar_state="expanded",
)

st.markdown("""
<style>
    /* Base background */
    .stApp {
        background-color: #0a0a0a;
        color: #e5e5e5;
    }

    /* Main content area */
    .block-container {
        padding-top: 2rem;
    }

    /* Sidebar */
    [data-testid="stSidebar"] {
        background-color: #111111;
        border-right: 1px solid #222222;
    }

    /* Hide default header */
    header[data-testid="stHeader"] {
        background: transparent;
    }

    /* Title */
    h1, h2, h3 {
        color: #ffffff !important;
        font-weight: 300 !important;
        letter-spacing: 0.05em;
    }

    /* Chat messages */
    [data-testid="stChatMessage"] {
        background-color: #111111 !important;
        border: 1px solid #1e1e1e !important;
        border-radius: 4px !important;
        margin-bottom: 8px;
    }

    /* Chat input */
    [data-testid="stChatInput"] textarea {
        background-color: #111111 !important;
        border: 1px solid #2a2a2a !important;
        color: #e5e5e5 !important;
        border-radius: 4px !important;
    }

    /* Buttons */
    .stButton > button {
        background-color: #1a1a1a !important;
        color: #e5e5e5 !important;
        border: 1px solid #2a2a2a !important;
        border-radius: 4px !important;
        font-size: 0.8rem;
    }
    .stButton > button:hover {
        border-color: #555555 !important;
        color: #ffffff !important;
    }

    /* Download button */
    .stDownloadButton > button {
        background-color: #1a1a1a !important;
        color: #e5e5e5 !important;
        border: 1px solid #2a2a2a !important;
        border-radius: 4px !important;
        width: 100%;
    }

    /* Spinner */
    .stSpinner > div {
        border-top-color: #555555 !important;
    }

    /* Scrollbar */
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #0a0a0a; }
    ::-webkit-scrollbar-thumb { background: #2a2a2a; border-radius: 2px; }
</style>
""", unsafe_allow_html=True)

st.title("Trevor Tebaweswa — CV Assistant")
col1, col2 = st.columns([1, 1])

with col1:
    if file:
        if "pdf_page" not in st.session_state:
            st.session_state.pdf_page = 0

        total_pages = get_pdf_page_count(file.path)

        if "pdf_pages_cache" not in st.session_state:
            st.session_state.pdf_pages_cache = [
                get_pdf_page_image(file.path, i) for i in range(total_pages)
            ]

        nav_col1, nav_col2, nav_col3 = st.columns([1, 2, 1])

        with nav_col1:
            if st.button(
                "⬅️ Prev", key="prev_page", disabled=st.session_state.pdf_page == 0
            ):
                st.session_state.pdf_page -= 1
                st.rerun()

        with nav_col2:
            st.markdown(
                f"<div style='text-align: center; padding-top: 5px; font-size: 0.8rem; color: #888;'>Page {st.session_state.pdf_page + 1} of {total_pages}</div>",
                unsafe_allow_html=True,
            )

        with nav_col3:
            if st.button(
                "Next ➡️",
                key="next_page",
                disabled=st.session_state.pdf_page >= total_pages - 1,
            ):
                st.session_state.pdf_page += 1
                st.rerun()

        image = st.session_state.pdf_pages_cache[st.session_state.pdf_page]
        if image:
            st.image(image, width="content")

with col2:
    st.subheader("Chat Assistant")
    chat_container = st.container(height=620)
    with chat_container:
        display_chat_messages()

    # Keep the input anchored below the message area, outside the scroll
    # container, so its position is independent of the PDF page in col1.
    if message := st.chat_input("Ask about my experience..."):
        st.session_state.messages.append(HumanMessage(content=message))
        with chat_container:
            with st.chat_message("user"):
                st.write(message)
            generate_response(message, st.session_state.rag_collection, llm)

    # Auto-scroll the fixed-height chat container to the latest message.
    components.html(
        """
        <script>
            const containers = parent.document.querySelectorAll(
                'div[data-testid="stVerticalBlockBorderWrapper"] div[style*="overflow"]'
            );
            containers.forEach(c => { c.scrollTop = c.scrollHeight; });
        </script>
        """,
        height=0,
    )

with st.sidebar:
    st.header("Controls")

    if st.button("🗑️ Clear Chat"):
        clear_chat()
        st.success("Chat cleared!")
        st.rerun()

    st.markdown("---")
    if file and os.path.exists(file.path):
        with open(file.path, "rb") as f:
            cv_bytes = f.read()
        st.download_button(
            label="📄 Download CV",
            data=cv_bytes,
            file_name=file.name,
            mime="application/pdf",
        )
