import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Food Ordering AI Assistant",
    description: "Conversational AI system for food ordering using multi-agent RAG architecture with LangGraph and ChromaDB.",
    tags: ["LangGraph", "ChromaDB", "Python", "RAG"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    slug: "ml-pipeline-orchestrator",
  },
  {
    title: "Real-time Feature Store",
    description: "Low-latency feature serving infrastructure supporting both batch and streaming feature computation.",
    tags: ["Redis", "Kafka", "Feast"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    slug: "real-time-feature-store",
  },
  {
    title: "Model Monitoring Dashboard",
    description: "Comprehensive monitoring solution tracking model drift, performance degradation, and data quality.",
    tags: ["Grafana", "Prometheus", "Python"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    slug: "model-monitoring-dashboard",
  },
  {
    title: "GPU Cluster Manager",
    description: "Resource allocation and scheduling system for distributed model training across GPU clusters.",
    tags: ["CUDA", "Slurm", "Ray"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    slug: "gpu-cluster-manager",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="font-mono text-sm text-muted-foreground mb-4">Projects</p>
          <h2 className="text-2xl font-light">Selected work</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={`/project/${project.slug}`}
              className="group block"
            >
              {/* Project Image */}
              <div className="aspect-[4/3] mb-4 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-img group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium group-hover:underline underline-offset-4">
                    {project.title}
                  </h3>
                  <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 mt-1" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="font-mono text-xs text-muted-foreground"
                    >
                      {tag}{tagIndex < project.tags.length - 1 && " ·"}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
