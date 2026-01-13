import os
import streamlit as st
import time
import pdfplumber  # Add this import
from langchain_text_splitters.character import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import PDFPlumberLoader
import hashlib
from langchain_text_splitters import CharacterTextSplitter


from langchain_core.messages import AIMessage, HumanMessage, SystemMessage
from dotenv import load_dotenv
from sentence_transformers import SentenceTransformer

load_dotenv()
embedding_model_name = os.getenv("EMBEDDING_MODEL")


embedding_model = SentenceTransformer(embedding_model_name)


def get_pdf_page_count(file_path):
    try:
        with pdfplumber.open(file_path) as pdf:
            return len(pdf.pages)
    except Exception as e:
        st.error(f"Error reading PDF: {e}")
        return 0


def get_pdf_page_image(file_path, page_number):
    try:
        with pdfplumber.open(file_path) as pdf:
            if 0 <= page_number < len(pdf.pages):
                # Resolution 200 is a good balance between quality and speed
                return pdf.pages[page_number].to_image(resolution=200).original
    except Exception as e:
        st.error(f"Error rendering page: {e}")
    return None


def clear_chat():
    if "messages" in st.session_state:
        st.session_state.messages.clear()
    if "latest_messages_sent" in st.session_state:
        st.session_state.latest_messages_sent.clear()


def initialize_session_states():
    if "latest_messages_sent" not in st.session_state:
        st.session_state.latest_messages_sent = []

    if "file_path" not in st.session_state:
        st.session_state.file_path = None

    if "messages" not in st.session_state:
        st.session_state.messages = []


def split_and_load_documents(docs, collection):
    progress_bar = st.progress(0)
    status_text = st.empty()

    try:

        # chunker = RecursiveCharacterTextSplitter(chunk_size=800, chunk_overlap=100)
        chunker = CharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
        chunked_docs = chunker.split_documents(docs)

        texts = [doc.page_content for doc in chunked_docs]

        # Generate embeddings
        embeddings = embedding_model.encode(texts).tolist()

        # Get existing IDs to avoid duplicates
        existing_data = collection.get()
        existing_ids = set(existing_data.get("ids", []))

        file_hash = hashlib.md5(str(docs[0].metadata).encode()).hexdigest()[:8]

        # Generate unique IDs that won't conflict
        ids = [f"chunk_{file_hash}_{i}" for i in range(len(texts))]

        # Filter out any existing IDs
        new_items = [
            (text, embedding, id_)
            for text, embedding, id_ in zip(texts, embeddings, ids)
            if id_ not in existing_ids
        ]

        if not new_items:
            progress_bar.empty()
            status_text.empty()
            return True

        new_texts, new_embeddings, new_ids = zip(*new_items)

        collection.add(
            documents=list(new_texts),
            embeddings=list(new_embeddings),
            ids=list(new_ids),
        )

        time.sleep(2)
        progress_bar.empty()
        status_text.empty()
        return True

    except Exception as e:
        st.error(f"Error during document processing: {e}")
        progress_bar.empty()
        status_text.empty()
        return False


def load_document(file_path, file_name):
    try:
        if file_name.endswith(".pdf"):
            loader = PDFPlumberLoader(file_path)
            return loader.load()
        else:
            st.error(f"Unsupported file type: {file_name}")
            return None
    except Exception as e:
        st.error(f"Error loading {file_name}: {e}")
        return None


def save_uploaded_file(file, upload_dir="./RAG_CV/CV_uploaded"):

    if not os.path.exists(upload_dir):
        os.makedirs(upload_dir)

    file_path = os.path.join(upload_dir, file.name)

    if not os.path.exists(file_path):
        file.seek(0)  # Reset file pointer to the beginning
        contents = file.read()
        with open(file_path, "wb") as f:
            f.write(contents)

    return file_path


def generate_response(message, collection, llm):

    # Query the collection for relevant documents
    query_vector = embedding_model.encode([message]).tolist()
    results = collection.query(
        query_embeddings=query_vector,
        n_results=5,
        include=["documents"],
    )
    docs = results["documents"][0]
    system_message = SystemMessage(
        content="""role: You are a helpful assistant analyzing a Curriculum Vitae (CV) or Resume.
                        style_or_tone:
                        - Use clear, professional, and objective language.
                        - Be concise and structured in your responses.
                        instruction:
                        - Analyze and answer questions about the candidate's professional profile based on the provided CV documents.
                        - Extract and summarize key information such as skills, work experience, education, and projects.
                        - Provide insights into the candidate's suitability for roles if asked, based strictly on the provided text.
                        output_constraints:
                        - Only answer questions based on the CV documents provided.
                        - If the question is not related to the CV or the information is not present, respond with "This question cannot be answered based on the available CV data."
                        - Never make up details or qualifications not present in the documents.
                        output_format:
                        - Provide answers in markdown format.
                        - Use bullet points for listing skills, experiences, or qualifications.
                        - Use the content from the documents in your answers."""
    )

    enhanced_system_message = f"""{system_message.content} , Use the following documents to answer the question: {"\n".join(docs)}"""
    messages = [
        SystemMessage(content=enhanced_system_message),
        HumanMessage(content=message),
    ]

    recent_messages = st.session_state.messages
    messages.extend(recent_messages)

    response = llm.invoke(messages)
    st.session_state.messages.append(response)
    st.session_state.latest_messages_sent.append(response)
    return response


def display_chat_messages():
    for message in st.session_state.messages:
        if isinstance(message, HumanMessage):
            with st.chat_message("user"):
                st.write(message.content)
        elif isinstance(message, AIMessage):
            with st.chat_message("assistant"):
                st.write(message.content)


def handle_file_upload(file, collection):
    try:
        # Save file
        file_path = save_uploaded_file(file)
        st.session_state.file_path = file_path

        # Load documents
        rag_documents = load_document(file_path, file.name)

        if not rag_documents:
            st.error(f"Failed to load document: {file.name}")
            return False

        # Split and load into collection - check return value
        success = split_and_load_documents(rag_documents, collection)
        if success:
            return True
        else:
            st.error(f"Failed to process chunks for: {file.name}")
            return False

    except Exception as e:
        st.error(f"Error processing file upload: {e}")
        import traceback

        st.error(f"Traceback: {traceback.format_exc()}")
        return False
