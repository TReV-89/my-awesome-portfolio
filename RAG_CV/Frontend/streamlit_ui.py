import os
import chromadb
import streamlit as st

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


# current_dir = os.path.dirname(os.path.abspath(__file__))
# project_root = os.path.dirname(current_dir)
cv_dir = "/app/CV"

# Prioritize the specific file provided
specific_file = "TREVOR_SAAKA_CURRICULUM_VITAE.docx.pdf"
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


# To this:
# chroma_host = os.getenv("CHROMA_HOST", "https://sema-rag-database.onrender.com")
# chroma_port = int(os.getenv("CHROMA_PORT", "443"))
# use_ssl = os.getenv("CHROMA_SSL", "true").lower() == "true"

# client = chromadb.HttpClient(host=chroma_host, port=chroma_port, ssl=use_ssl)
client = chromadb.PersistentClient(path="./RAG_CV/chroma_db_data")

if "rag_collection" not in st.session_state:
    st.session_state.rag_collection = client.get_or_create_collection(
        name="rag_collection_user",
        metadata={
            "description": "CV collection",
            "hnsw:space": "cosine",
            "hnsw:batch_size": 10000,
        },
    )

if "llm" not in st.session_state:

    llm = ChatGroq(
        model=groq_model,  # Fast and capable
        temperature=0.7,
        api_key=groq_api_key,
    )
    st.session_state.llm = llm
else:
    llm = st.session_state.llm


initialize_session_states()
handle_file_upload(file, st.session_state.rag_collection)

st.set_page_config(
    layout="wide",
    initial_sidebar_state="expanded",  # This makes the sidebar hidden by default
)  # Optional: Makes the app wider to accommodate side-by-side view better

st.title("TREVOR TEBAWESWA CV RAG SYSTEM")
col1, col2 = st.columns([1, 1])

with col1:
    if file:
        # Initialize page number in session state
        if "pdf_page" not in st.session_state:
            st.session_state.pdf_page = 0

        total_pages = get_pdf_page_count(file.path)

        # Navigation controls
        nav_col1, nav_col2, nav_col3 = st.columns([1, 2, 1])

        with nav_col1:
            if st.button(
                "⬅️ Prev", key="prev_page", disabled=st.session_state.pdf_page == 0
            ):
                st.session_state.pdf_page -= 1
                st.rerun()

        with nav_col2:
            st.markdown(
                f"<div style='text-align: center; padding-top: 5px;'>Page {st.session_state.pdf_page + 1} of {total_pages}</div>",
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

        # Display the current page image
        image = get_pdf_page_image(file.path, st.session_state.pdf_page)
        if image:
            st.image(image, width="content")

with col2:
    st.subheader("Chat Assistant")
    with st.container(height=700):
        display_chat_messages()
if message := st.chat_input("Type your message here..."):
    st.session_state.messages.append(HumanMessage(content=message))
    response = generate_response(message, st.session_state.rag_collection, llm)
    st.rerun()

with st.sidebar:
    st.header("Controls")

    if st.button("🗑️ Clear Chat"):
        clear_chat()
        st.success("Chat cleared!")
        st.rerun()

    st.markdown("---")
    if file and os.path.exists(file.path):
        with open(file.path, "rb") as f:
            st.download_button(
                label="📄 Download CV",
                data=f,
                file_name=file.name,
                mime="application/pdf",
            )
