import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Project data - you can expand this with more details
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
}> = {
  "ml-pipeline-orchestrator": {
    title: "ML Pipeline Orchestrator",
    description: "End-to-end ML pipeline orchestration system with automated retraining, A/B testing, and rollback capabilities.",
    fullDescription: "A comprehensive ML pipeline orchestration platform designed to streamline the entire machine learning lifecycle. This system handles everything from data ingestion and feature engineering to model training, validation, and deployment. Built with scalability in mind, it supports distributed training across multiple GPU nodes and includes sophisticated monitoring for model performance degradation.",
    tags: ["Kubeflow", "Python", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop",
    github: "#",
    live: "#",
    features: [
      "Automated model retraining based on data drift detection",
      "A/B testing framework for model comparison",
      "One-click rollback to previous model versions",
      "Real-time pipeline monitoring and alerting",
      "Integration with major cloud providers (AWS, GCP, Azure)"
    ],
    techStack: ["Python", "Kubeflow", "Kubernetes", "Apache Airflow", "MLflow", "Docker", "Prometheus", "Grafana"]
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
    techStack: ["Redis", "Apache Kafka", "Feast", "Spark", "Python", "Go", "PostgreSQL"]
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
    techStack: ["Grafana", "Prometheus", "Python", "InfluxDB", "React", "FastAPI", "scikit-learn"]
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
    techStack: ["CUDA", "Slurm", "Ray", "Python", "Kubernetes", "NVIDIA DCGM", "Terraform"]
  }
};

const Project = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="container mx-auto px-6 py-24">
          <p className="text-muted-foreground">Project not found.</p>
          <Link to="/#projects" className="inline-flex items-center gap-2 mt-4 text-sm hover:underline">
            <ArrowLeft size={14} />
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

      <Navigation />

      <main className="container mx-auto px-6 py-24">
        {/* Back Link */}
        <Link 
          to="/#projects" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to projects
        </Link>

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

        {/* Project Image */}
        <div className="aspect-video mb-12 overflow-hidden bg-muted border border-border">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale-img"
          />
        </div>

        {/* Project Content */}
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="font-mono text-sm text-muted-foreground mb-4">Overview</h2>
              <p className="text-foreground/80 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            <div>
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Project;
