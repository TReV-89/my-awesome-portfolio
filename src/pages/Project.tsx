import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { Github, ExternalLink, Copy, Check } from "lucide-react";
import { useState, useEffect } from "react";
import ProjectNavigation from "@/components/ProjectNavigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import PageTransition from "@/components/PageTransition";
import FoodOrderingArchitecture from "@/components/FoodOrderingArchitecture";

// Project data with enhanced details
const projectsData: Record<string, {
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  github?: string;
  live?: string;
  features: string[];
  techStack: string[];
  architecture: {
    description: string;
    diagram: string;
    useCustomComponent?: boolean;
  };
  codeSnippet: {
    title: string;
    language: string;
    code: string;
  };
  screenshots: {
    title: string;
    url: string;
  }[];
}> = {
  "ml-pipeline-orchestrator": {
    title: "Food Ordering AI Assistant",
    description: "Conversational AI system for food ordering using multi-agent RAG architecture with LangGraph and ChromaDB.",
    fullDescription: "An intelligent food ordering assistant powered by a multi-agent Retrieval-Augmented Generation (RAG) system. This conversational AI understands natural language requests, searches through restaurant menus using semantic similarity, and provides personalized recommendations. Built with LangGraph for orchestration, ChromaDB for vector storage, and a supervisor agent pattern for coordinating specialized retrieval and generation agents.",
    tags: ["LangGraph", "ChromaDB", "Python", "RAG"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop",
    github: "#",
    live: "#",
    features: [
      "Natural language food ordering through conversational interface",
      "Multi-agent system with supervisor, retrieval, and generator agents",
      "Semantic search across restaurant menus using ChromaDB embeddings",
      "Context-aware recommendations based on dietary preferences",
      "Real-time conversation state management with LangGraph"
    ],
    techStack: ["Python", "LangGraph", "LangChain", "ChromaDB", "Streamlit", "OpenAI", "Glovo API"],
    architecture: {
      description: "The system implements a multi-agent RAG architecture with four distinct layers: User Interface (Streamlit), Orchestration (LangGraph/LangChain), Multi-Agent System (Supervisor, Retrieval, Generator), and Data Layer (ChromaDB, Glovo). The supervisor agent coordinates between specialized agents to handle user requests.",
      diagram: "custom",
      useCustomComponent: true
    },
    codeSnippet: {
      title: "LangGraph Agent Workflow",
      language: "python",
      code: `from langgraph.graph import StateGraph, END
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, AIMessage

class AgentState(TypedDict):
    messages: List[BaseMessage]
    current_agent: str
    context: Dict[str, Any]

def create_food_ordering_graph():
    graph = StateGraph(AgentState)
    
    # Add nodes for each agent
    graph.add_node("supervisor", supervisor_agent)
    graph.add_node("retrieval", retrieval_agent)
    graph.add_node("generator", generator_agent)
    
    # Define routing logic
    graph.add_conditional_edges(
        "supervisor",
        route_to_agent,
        {
            "retrieval": "retrieval",
            "generator": "generator",
            "end": END
        }
    )
    
    # Connect agents back to supervisor
    graph.add_edge("retrieval", "supervisor")
    graph.add_edge("generator", "supervisor")
    
    graph.set_entry_point("supervisor")
    return graph.compile()

def retrieval_agent(state: AgentState) -> AgentState:
    query = state["messages"][-1].content
    results = chroma_collection.query(
        query_texts=[query],
        n_results=5
    )
    state["context"]["menu_items"] = results
    return state`
    },
    screenshots: [
      { title: "Chat Interface", url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop" },
      { title: "Menu Recommendations", url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop" },
      { title: "Order Confirmation", url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop" }
    ]
  },
  "real-time-feature-store": {
    title: "Real-time Feature Store",
    description: "Low-latency feature serving infrastructure supporting both batch and streaming feature computation.",
    fullDescription: "A high-performance feature store designed for real-time ML applications. This infrastructure enables sub-millisecond feature retrieval while maintaining consistency between online and offline feature values. The system supports both batch feature computation for training and streaming feature updates for real-time inference.",
    tags: ["Redis", "Kafka", "Feast"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop",
    github: "#",
    live: "#",
    features: [
      "Sub-millisecond feature retrieval latency",
      "Unified batch and streaming feature pipelines",
      "Point-in-time correct feature joins",
      "Feature versioning and lineage tracking",
      "Automatic feature freshness monitoring"
    ],
    techStack: ["Redis", "Apache Kafka", "Feast", "Spark", "Python", "Go", "PostgreSQL"],
    architecture: {
      description: "Dual-path architecture separating batch and streaming pipelines while maintaining feature consistency through a unified registry and serving layer.",
      diagram: `
┌─────────────────────────────────────────────────────────────────┐
│                      Feature Registry                            │
│    ┌──────────────────────────────────────────────────────┐     │
│    │  Feature Definitions  │  Schemas  │  Metadata        │     │
│    └──────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────┘
          │                                       │
          ▼                                       ▼
┌─────────────────────┐             ┌─────────────────────────────┐
│   Batch Pipeline    │             │    Streaming Pipeline       │
│  ┌───────────────┐  │             │  ┌───────────────────────┐  │
│  │  Spark Jobs   │  │             │  │   Kafka Consumers     │  │
│  └───────┬───────┘  │             │  └───────────┬───────────┘  │
│          │          │             │              │              │
│  ┌───────▼───────┐  │             │  ┌───────────▼───────────┐  │
│  │  Data Lake    │  │             │  │   Stream Processor    │  │
│  └───────┬───────┘  │             │  └───────────┬───────────┘  │
└──────────┼──────────┘             └──────────────┼──────────────┘
           │                                       │
           ▼                                       ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Feature Store                               │
│  ┌─────────────────────┐    ┌─────────────────────────────────┐ │
│  │   Offline Store     │    │       Online Store              │ │
│  │   (Data Lake)       │    │       (Redis Cluster)           │ │
│  └─────────────────────┘    └─────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Feature Serving API                           │
│    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐     │
│    │  gRPC API    │    │  REST API    │    │  SDK Client  │     │
│    └──────────────┘    └──────────────┘    └──────────────┘     │
└─────────────────────────────────────────────────────────────────┘
      `
    },
    codeSnippet: {
      title: "Feature Definition",
      language: "python",
      code: `from feast import Entity, Feature, FeatureView, Field
from feast.types import Float32, Int64, String
from datetime import timedelta

# Define entity
user = Entity(
    name="user_id",
    description="User identifier"
)

# Define feature view for user behavior
user_behavior_fv = FeatureView(
    name="user_behavior_features",
    entities=[user],
    ttl=timedelta(days=1),
    schema=[
        Field(name="session_count_7d", dtype=Int64),
        Field(name="avg_session_duration", dtype=Float32),
        Field(name="last_active_category", dtype=String),
        Field(name="purchase_frequency", dtype=Float32),
        Field(name="lifetime_value", dtype=Float32),
    ],
    online=True,
    source=user_behavior_source,
    tags={"team": "ml-platform"},
)

# Retrieve features for inference
def get_user_features(user_ids: list[str]):
    feature_store = FeatureStore(repo_path=".")
    
    feature_vector = feature_store.get_online_features(
        features=[
            "user_behavior_features:session_count_7d",
            "user_behavior_features:avg_session_duration",
            "user_behavior_features:purchase_frequency",
        ],
        entity_rows=[{"user_id": uid} for uid in user_ids]
    )
    
    return feature_vector.to_dict()`
    },
    screenshots: [
      { title: "Feature Catalog", url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop" },
      { title: "Streaming Dashboard", url: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=500&fit=crop" }
    ]
  },
  "model-monitoring-dashboard": {
    title: "Model Monitoring Dashboard",
    description: "Comprehensive monitoring solution tracking model drift, performance degradation, and data quality.",
    fullDescription: "A real-time monitoring platform that provides visibility into production ML model performance. The dashboard tracks key metrics including prediction drift, feature distribution changes, and data quality issues. Alert systems notify teams of potential problems before they impact business outcomes.",
    tags: ["Grafana", "Prometheus", "Python"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    github: "#",
    live: "#",
    features: [
      "Real-time model performance metrics",
      "Statistical drift detection algorithms",
      "Customizable alerting rules",
      "Historical performance trending",
      "Integration with incident management tools"
    ],
    techStack: ["Grafana", "Prometheus", "Python", "InfluxDB", "React", "FastAPI", "scikit-learn"],
    architecture: {
      description: "Event-driven architecture collecting predictions and ground truth, computing drift metrics, and exposing them through a unified monitoring interface.",
      diagram: `
┌─────────────────────────────────────────────────────────────────┐
│                    Model Serving Layer                           │
│    ┌──────────────────────────────────────────────────────┐     │
│    │  Prediction Endpoints (REST/gRPC)                     │     │
│    └──────────────────────┬───────────────────────────────┘     │
└───────────────────────────┼─────────────────────────────────────┘
                            │ predictions + metadata
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Event Collection                              │
│  ┌─────────────────┐    ┌─────────────────┐                     │
│  │  Kafka Topic    │    │  Ground Truth   │                     │
│  │  (predictions)  │    │  Collector      │                     │
│  └────────┬────────┘    └────────┬────────┘                     │
└───────────┼──────────────────────┼──────────────────────────────┘
            │                      │
            ▼                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Metrics Computation                           │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │  Drift Detector │  │  Performance    │  │  Data Quality   │  │
│  │  (PSI, KS-test) │  │  Calculator     │  │  Checker        │  │
│  └────────┬────────┘  └────────┬────────┘  └────────┬────────┘  │
└───────────┼────────────────────┼────────────────────┼───────────┘
            │                    │                    │
            ▼                    ▼                    ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Time Series Storage                           │
│    ┌──────────────────────────────────────────────────────┐     │
│    │         Prometheus / InfluxDB Cluster                 │     │
│    └──────────────────────┬───────────────────────────────┘     │
└───────────────────────────┼─────────────────────────────────────┘
                            │
            ┌───────────────┼───────────────┐
            ▼               ▼               ▼
┌───────────────┐  ┌───────────────┐  ┌───────────────────────────┐
│   Grafana     │  │  Alert        │  │  API for Custom           │
│   Dashboards  │  │  Manager      │  │  Integrations             │
└───────────────┘  └───────────────┘  └───────────────────────────┘
      `
    },
    codeSnippet: {
      title: "Drift Detection",
      language: "python",
      code: `import numpy as np
from scipy import stats
from prometheus_client import Gauge, start_http_server

# Prometheus metrics
drift_score = Gauge(
    'model_feature_drift_psi',
    'Population Stability Index for feature drift',
    ['model_name', 'feature_name']
)

def calculate_psi(expected: np.ndarray, actual: np.ndarray, 
                  buckets: int = 10) -> float:
    """Calculate Population Stability Index."""
    
    # Create bucket boundaries from expected distribution
    breakpoints = np.percentile(
        expected, 
        np.linspace(0, 100, buckets + 1)
    )
    
    # Calculate frequencies
    expected_freq = np.histogram(expected, breakpoints)[0]
    actual_freq = np.histogram(actual, breakpoints)[0]
    
    # Normalize to percentages
    expected_pct = expected_freq / len(expected)
    actual_pct = actual_freq / len(actual)
    
    # Avoid division by zero
    expected_pct = np.clip(expected_pct, 0.0001, None)
    actual_pct = np.clip(actual_pct, 0.0001, None)
    
    # Calculate PSI
    psi = np.sum(
        (actual_pct - expected_pct) * 
        np.log(actual_pct / expected_pct)
    )
    
    return psi

class DriftMonitor:
    def __init__(self, model_name: str, baseline_data: dict):
        self.model_name = model_name
        self.baseline = baseline_data
        
    def check_drift(self, current_data: dict) -> dict:
        results = {}
        for feature, values in current_data.items():
            psi = calculate_psi(
                self.baseline[feature], 
                np.array(values)
            )
            drift_score.labels(
                model_name=self.model_name,
                feature_name=feature
            ).set(psi)
            results[feature] = {
                'psi': psi,
                'drifted': psi > 0.2  # Threshold
            }
        return results`
    },
    screenshots: [
      { title: "Overview Dashboard", url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop" },
      { title: "Drift Analysis", url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop" }
    ]
  },
  "gpu-cluster-manager": {
    title: "GPU Cluster Manager",
    description: "Resource allocation and scheduling system for distributed model training across GPU clusters.",
    fullDescription: "An intelligent resource management system optimized for GPU workloads. This platform handles job scheduling, resource allocation, and cluster autoscaling for distributed deep learning training. It maximizes GPU utilization while ensuring fair resource distribution across teams and projects.",
    tags: ["CUDA", "Slurm", "Ray"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop",
    github: "#",
    live: "#",
    features: [
      "Intelligent GPU job scheduling",
      "Automatic cluster scaling based on demand",
      "Multi-tenant resource quotas",
      "Job preemption and priority queuing",
      "Cost optimization recommendations"
    ],
    techStack: ["CUDA", "Slurm", "Ray", "Python", "Kubernetes", "NVIDIA DCGM", "Terraform"],
    architecture: {
      description: "Hierarchical scheduling system with a central controller managing multiple GPU node pools, each optimized for different workload types.",
      diagram: `
┌─────────────────────────────────────────────────────────────────┐
│                    Job Submission Layer                          │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │  CLI Client     │  │  Web UI         │  │  SDK/API        │  │
│  └────────┬────────┘  └────────┬────────┘  └────────┬────────┘  │
└───────────┼────────────────────┼────────────────────┼───────────┘
            │                    │                    │
            ▼                    ▼                    ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Cluster Controller                            │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                    Job Queue Manager                         ││
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    ││
│  │  │ Priority │  │ Standard │  │  Batch   │  │ Preempt  │    ││
│  │  │  Queue   │  │  Queue   │  │  Queue   │  │  Queue   │    ││
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘    ││
│  └─────────────────────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                    Resource Scheduler                        ││
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       ││
│  │  │  Quota Mgr   │  │  Placement   │  │  Autoscaler  │       ││
│  │  └──────────────┘  └──────────────┘  └──────────────┘       ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
                            │
            ┌───────────────┼───────────────┐
            ▼               ▼               ▼
┌───────────────┐  ┌───────────────┐  ┌───────────────────────────┐
│  GPU Pool A   │  │  GPU Pool B   │  │  GPU Pool C               │
│  (A100 x 32)  │  │  (V100 x 64)  │  │  (T4 x 128)               │
│               │  │               │  │                           │
│ ┌───┐ ┌───┐   │  │ ┌───┐ ┌───┐   │  │ ┌───┐ ┌───┐ ┌───┐ ┌───┐  │
│ │GPU│ │GPU│...│  │ │GPU│ │GPU│...│  │ │GPU│ │GPU│ │GPU│ │GPU│  │
│ └───┘ └───┘   │  │ └───┘ └───┘   │  │ └───┘ └───┘ └───┘ └───┘  │
└───────────────┘  └───────────────┘  └───────────────────────────┘
      `
    },
    codeSnippet: {
      title: "Job Scheduler",
      language: "python",
      code: `import ray
from dataclasses import dataclass
from typing import Optional
from enum import Enum

class Priority(Enum):
    LOW = 0
    NORMAL = 1
    HIGH = 2
    CRITICAL = 3

@dataclass
class GPUJobConfig:
    name: str
    gpu_count: int
    gpu_memory_gb: int
    priority: Priority = Priority.NORMAL
    max_runtime_hours: int = 24
    preemptible: bool = True

class GPUScheduler:
    def __init__(self, cluster_config: dict):
        ray.init(address=cluster_config['ray_address'])
        self.quota_manager = QuotaManager(cluster_config['quotas'])
        self.pools = self._init_gpu_pools(cluster_config['pools'])
        
    def submit_job(
        self, 
        job_config: GPUJobConfig,
        training_func: callable,
        team_id: str
    ) -> str:
        # Check quota
        if not self.quota_manager.can_allocate(
            team_id, 
            job_config.gpu_count
        ):
            raise QuotaExceededException(
                f"Team {team_id} quota exceeded"
            )
        
        # Find best placement
        placement = self._find_optimal_placement(job_config)
        
        # Create Ray actor with GPU resources
        @ray.remote(num_gpus=job_config.gpu_count)
        class GPUWorker:
            def run(self, func, *args, **kwargs):
                return func(*args, **kwargs)
        
        # Submit to appropriate pool
        worker = GPUWorker.options(
            resources={placement.pool_name: 1},
            max_retries=3
        ).remote()
        
        job_id = worker.run.remote(training_func)
        
        self.quota_manager.allocate(
            team_id, 
            job_config.gpu_count,
            job_id
        )
        
        return job_id
    
    def _find_optimal_placement(
        self, 
        config: GPUJobConfig
    ) -> Placement:
        # Bin-packing algorithm for GPU allocation
        for pool in sorted(
            self.pools, 
            key=lambda p: p.available_gpus,
            reverse=True
        ):
            if pool.can_fit(config):
                return Placement(pool_name=pool.name)
        raise NoResourcesAvailable()`
    },
    screenshots: [
      { title: "Cluster Overview", url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop" },
      { title: "GPU Utilization", url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop" }
    ]
  }
};

// Code block component with copy functionality
const CodeBlock = ({ code, language, title }: { code: string; language: string; title: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border border-border">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/50">
        <span className="font-mono text-xs text-muted-foreground">{title}</span>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-muted-foreground">{language}</span>
          <button
            onClick={handleCopy}
            className="p-1 hover:bg-muted transition-colors"
            aria-label="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
      </div>
      <pre className="p-4 overflow-x-auto text-sm">
        <code className="font-mono text-foreground/80">{code}</code>
      </pre>
    </div>
  );
};

const Project = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <ProjectNavigation />
        <main className="container mx-auto px-6 py-24">
          <p className="text-muted-foreground">Project not found.</p>
          <Link to="/#projects" className="inline-flex items-center gap-2 mt-4 text-sm hover:underline">
            Back to projects
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{project.title} | MLOps Portfolio</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <ProjectNavigation />

      <PageTransition>
        <main className="container mx-auto px-6 py-24">
          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-light mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-4 mb-6">
              {project.tags.map((tag, index) => (
                <span key={index} className="font-mono text-xs text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={16} />
                  GitHub
                </a>
              )}
              {project.live && (
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Hero Image */}
          <div className="aspect-video mb-16 overflow-hidden bg-muted border border-border">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale-img"
            />
          </div>

          {/* Overview Section */}
          <section className="mb-16">
            <h2 className="font-mono text-sm text-muted-foreground mb-4">Overview</h2>
            <p className="text-foreground/80 leading-relaxed max-w-3xl">
              {project.fullDescription}
            </p>
          </section>

          {/* Features & Tech Stack */}
          <section className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="font-mono text-sm text-muted-foreground mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-foreground/80 text-sm flex items-start gap-2">
                    <span className="text-muted-foreground">—</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-mono text-sm text-muted-foreground mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-xs font-mono px-2 py-1 border border-border text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Architecture Diagram */}
          <section className="mb-16">
            <h2 className="font-mono text-sm text-muted-foreground mb-4">Architecture</h2>
            <p className="text-foreground/80 text-sm mb-6 max-w-3xl">
              {project.architecture.description}
            </p>
            {slug === "ml-pipeline-orchestrator" ? (
              <FoodOrderingArchitecture />
            ) : (
              <div className="border border-border bg-muted/30 p-6 overflow-x-auto">
                <pre className="font-mono text-xs text-foreground/70 whitespace-pre">
                  {project.architecture.diagram}
                </pre>
              </div>
            )}
          </section>

          {/* Code Snippet */}
          <section className="mb-16">
            <h2 className="font-mono text-sm text-muted-foreground mb-4">Code Example</h2>
            <CodeBlock 
              code={project.codeSnippet.code}
              language={project.codeSnippet.language}
              title={project.codeSnippet.title}
            />
          </section>

          {/* Screenshots */}
          <section className="mb-16">
            <h2 className="font-mono text-sm text-muted-foreground mb-4">Screenshots</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="border border-border overflow-hidden">
                  <img
                    src={screenshot.url}
                    alt={screenshot.title}
                    className="w-full aspect-video object-cover grayscale-img"
                  />
                  <div className="p-3 border-t border-border">
                    <span className="font-mono text-xs text-muted-foreground">
                      {screenshot.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Navigation to other projects */}
          <section className="pt-8 border-t border-border">
            <h2 className="font-mono text-sm text-muted-foreground mb-4">Other Projects</h2>
            <div className="flex flex-wrap gap-4">
              {Object.entries(projectsData)
                .filter(([key]) => key !== slug)
                .map(([key, proj]) => (
                  <Link
                    key={key}
                    to={`/project/${key}`}
                    className="text-sm hover:underline underline-offset-4"
                  >
                    {proj.title}
                  </Link>
                ))}
            </div>
          </section>
        </main>
      </PageTransition>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Project;
