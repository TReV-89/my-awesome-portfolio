import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Online Food Ordering Agent",
    description: `An AI-powered food ordering agent that automates searching menus, deals, and placing orders 
                  on Glovo through a conversational, multi-agent system.`,
    tags: ["Langgraph", "Python", "Docker"],
    image: "/food-agent.png",
    slug: "ai-food-ordering-agent",
  },
  {
    title: "A Charging Scheduling Framework Based on Energy Consumption Prediction for Kayoola Electric Buses",
    description: "Optimized scheduling model for electric bus fleets using energy consumption predictions to minimize costs and battery degradation.",
    tags: ["MILP", "Gurobi", "Python"],
    image: "/iganga_station.jpg",
    slug: "energy-consumption-based-charging-scheduler",
  },
  {
    title: "Long-term Electricity Peak Demand Forecasting",
    description: "Holt-Winters exponential smoothing model for accurate long-term electricity peak demand forecasting.",
    tags: ["Time Series", "Forecasting", "Python"],
    image: "/peak_demand.png",
    slug: "long-term-electricity-peak-demand-forecasting",
  },
  {
    title: "Citizen Feedback RAG System",
    description: "A Retrieval-Augmented Generation system that utilizes Langchain and Sunflower, Uganda's first multilingual LLM,to answer queries based on transcriptions from local service centres like hospitals, police stations, etc in Uganda.",
    tags: ["Langchain", "Sunflower API", "Python"],
    image: "/RAG_SYSTEM.png",
    slug: "citizen-feedback-rag-system",
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
