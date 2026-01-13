import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { Github, ExternalLink, Copy, Check } from "lucide-react";
import { useState, useEffect } from "react";
import ProjectNavigation from "@/components/ProjectNavigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import PageTransition from "@/components/PageTransition";
import FoodOrderingArchitecture from "@/components/FoodOrderingArchitecture";
import EBSchedulerArchitecture from "@/components/EBSchedulerArchitecture";

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
  "ai-food-ordering-agent": {
    title: "Online Food Ordering Agent",
    description: "An AI-powered food ordering agent that automates searching menus, deals, and placing orders on Glovo through a conversational, multi-agent system.",
    fullDescription: "This project involves the development of an AI-driven food ordering agent named 'Krustie' that leverages a multi-agent architecture to interact with users, search for restaurant menus, find deals, and place orders on the Glovo platform. The system utilizes LangGraph for orchestration and LangChain for core functionalities, enabling natural language interactions and seamless order processing. Key features include real-time menu retrieval, personalized recommendations, and order confirmation through a user-friendly chat interface.",
    tags: ["Langgraph", "Python", "Docker"],
    image: "/food-agent.png",
    github: "https://github.com/TReV-89/food_ordering_agent_glovo",
    features: [
      "Natural language chat interface for user interactions",
      "Multi-agent system for information retrieval and order generation",
      "Dietary, price and food preference handling",
    ],
    techStack: ["Python", "Docker", "LangGraph", "LangChain", "Streamlit", "Gemini API"],
    architecture: {
      description: "Multi-agent architecture utilizing LangGraph to orchestrate interactions between retrieval and generator agents, enabling dynamic information flow and decision-making for food ordering tasks.",
      diagram: "custom",
      useCustomComponent: true
    },
    codeSnippet: {
      title: "Supervisor Agent Implementation",
      language: "python",
      code: `from langgraph.graph import StateGraph
from langgraph_supervisor import create_supervisor
from langchain_core.messages import AIMessage
from retrieval_agent import retrieval
from generator_agent import generator
from state_models import SupervisorState
from initialize import llm


supervisor_graph: StateGraph = create_supervisor(
    supervisor_name="supervisor",
    model=llm,
    prompt=(
        """You are a sophisticated food ordering assistant called "Krustie" and supervisor, designed to provide users with a seamless and delightful experience. Your primary goal is to understand user requests and orchestrate the appropriate tools to fulfill them effectively.

1. **Direct Assistance:** For general inquiries, clarifications, or non-data-dependent responses, engage with users directly as a helpful assistant. This includes asking for clarifications or providing general guidance.

2. **Information Retrieval Flow:** When a user requests specific information about restaurants, menus, dishes, or other food-related data:
   - ALWAYS use the 'retrieval' agent first
   - ONLY after successful retrieval, always pass the information to the 'generator' agent. Never answer directly after successful retrieval.
   - The 'generator' agent will then synthesize the information into a user-friendly response. You MUST use the output from the 'generator' agent to respond to the user.

3. **Clarification:** If a user's request is ambiguous or lacks sufficient detail, engage them in a brief, clarifying conversation. For example, ask for:
   - Preferred cuisine
   - Price range
   - Dietary restrictions

4. **Error Handling:** If the 'retrieval' agent fails to find relevant information:
   - Inform the user politely
   - Offer alternative options
   - Do NOT use the generator agent
   - Handle the response directly as an assistant

5. **Conversation Management:**
   - Maintain context of previous interactions
   - Provide personalized recommendations based on conversation history
   - Keep track of user preferences for future interactions
NEVER ask them about the restaurant name.
Remember: ALWAYS USE the 'generator' agent's response to answer the user when you have successfully retrieved data through the 'retrieval' agent. For all other interactions, respond directly as an assistant.
        """
    ),
    state_schema=SupervisorState,
    agents=[generator, retrieval],
)

supervisor = supervisor_graph.compile()


def process_messages(state: SupervisorState) -> AIMessage:
    """Process the messages and return an AI response."""
    return supervisor.invoke(
        state,
        config={"configurable": {"thread_id": state["thread_id"]}},
    )`
    },
    screenshots: [
      { title: "Chat Interface", url: "/Screenshot_food_agent.png" },      
    ]
  },
  "energy-consumption-based-charging-scheduler": {
    title: "Charging Scheduling Framework Based on Energy Consumption Prediction for Kayoola Electric Buses",
    description: "Optimized scheduling model for electric bus fleets using energy consumption predictions to minimize costs and battery degradation.",
    fullDescription: "This project presents a comprehensive framework for scheduling the charging of electric bus fleets, leveraging energy consumption predictions to optimize operational efficiency. By integrating a Mixed-Integer Linear Programming (MILP) model with Gurobi optimization, the framework aims to minimize electricity costs and battery degradation while ensuring that buses are adequately charged for their routes. Key components include data-driven energy consumption forecasting, dynamic scheduling algorithms, and real-time adaptation to changing conditions such as electricity prices and bus schedules.",
    tags: ["MILP", "Gurobi", "Python"],
    image: "/iganga_station.jpg",
    github: "https://github.com/TReV-89/kayoola_eb_scheduler_and_predictor",
    live: "",
    features: [
      "Data-driven energy consumption prediction using historical trip data",
      "MILP-based charging schedule optimization minimizing costs and battery wear",
      "Dynamic adaptation to real-time electricity pricing and bus schedules",
    ],
    techStack: ["Gurobi", "Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "MILP"],
    architecture: {
      description: "Modular architecture combining data ingestion, energy consumption prediction, and MILP optimization to generate efficient charging schedules for electric bus fleets.",
      diagram: "custom",
      useCustomComponent: true
    },
    codeSnippet: {
      title: "MILP Model Constants for Charging Scheduler",
      language: "python",
      code: `from amplpy import modules
import gurobipy as gp
import pyomo.environ as py
import random as rd
import math

#Define constants to be used to create sets
num_of_trips = 14
num_of_buses = 3


trip_start_times = {
                    1:5.00,
                    2:6.50,
                    3:7.00,
                    4:8.50,
                    5:9.00,
                    6:10.50,
                    7:11.0,
                    8:13.50,
                    9:13.50,
                    10:15.50,
                    11:16.00,
                    12:17.50,
                    13:18.00,
                    14:19.00}



trip_end_times = {
                    1:6.00,
                    2:8.0,
                    3:8.50,
                    4:10.00,
                    5:10.25,
                    6:12.00,
                    7:12.30,
                    8:14.75,
                    9:15.00,
                    10:17.00,
                    11:17.50,
                    12:19.00,
                    13:19.30,
                    14:20.30}



for i in trip_end_times:
  trip_end_times[i] = round(trip_end_times[i]*60)

for i in trip_start_times:
  trip_start_times[i] = round(trip_start_times[i]*60)

trip_times = {}
for i in range(1,num_of_trips + 1):
    trip_times[i] = trip_end_times[i] - trip_start_times[i]

energy_consumption = {}
for i in range(num_of_trips):
  energy_consumption[i+1] = float(round(trip_predictions['Predicted_Energy_kWh'][i],1))
next_day_energy_demand = round(trip_predictions['Predicted_Energy_kWh'].sum(),1)


gamma_1 = -0.000409
gamma_2 = -2.167
gamma_3 = 0.00001408
gamma_4 = 6.13

# Create a concrete model
model = py.ConcreteModel()

# Define the sets of trips and buses using Set instead of RangeSet
model.trips = py.Set(initialize=range(1, num_of_trips + 1))
model.buses = py.Set(initialize=range(1, num_of_buses + 1))



#Define Parameters (These will be fine tuned to get the lowest battery degradation)
model.T_start = py.Param(model.trips, initialize=trip_start_times)
model.T_end = py.Param(model.trips, initialize=trip_end_times)
model.T_trip = py.Param(model.trips, initialize=trip_times)
model.lambda_min = py.Param(initialize=30)
model.lambda_max = py.Param(initialize=90)
model.CB = py.Param(initialize=250)
model.EC = py.Param(model.trips, initialize=energy_consumption)
model.E_all = py.Param(initialize=next_day_energy_demand)
model.gamma1 = py.Param(initialize=gamma_1)
model.gamma2 = py.Param(initialize=gamma_2)
model.gamma3 = py.Param(initialize=gamma_3)
model.gamma4 = py.Param(initialize=gamma_4)


# Define Decision Variables

model.assigned_buses = py.Var(model.trips, model.buses, domain=py.Binary)
model.is_charging = py.Var(model.trips, model.buses, domain=py.Binary)
model.SOC = py.Var(model.trips,model.buses)
model.E_charge_total = py.Var(domain=py.NonNegativeReals)
model.E_rest = py.Var(within=py.NonNegativeReals)
model.degradation = py.Var(bounds = (0,1),initialize = 0.1,within=py.NonNegativeReals)`
    },
    screenshots: [
      { title: "Proposed Charging Schedule", url: "/charging-schedule.png" },
      { title: "Annual Loss Of Different Schedules", url: "/annual-loss.png" }
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
        <title>{project.title} | Trevor Tebaweswa Portfolio</title>
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
            {slug === "ai-food-ordering-agent" ? (
              <FoodOrderingArchitecture />
            ) : slug === "energy-consumption-based-charging-scheduler" ? (
              <EBSchedulerArchitecture />
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
