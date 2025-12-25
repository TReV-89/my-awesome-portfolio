import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "bg-gradient-to-br from-primary/30 to-primary/10",
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative project management tool with real-time updates, drag-and-drop, and team features.",
    tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    image: "bg-gradient-to-br from-blue-500/30 to-blue-500/10",
    github: "#",
    live: "#",
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered platform for generating marketing copy, blog posts, and social media content.",
    tags: ["React", "Python", "OpenAI", "FastAPI"],
    image: "bg-gradient-to-br from-purple-500/30 to-purple-500/10",
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">My Work</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Project Image */}
                <div className={`aspect-video ${project.image} flex items-center justify-center`}>
                  <span className="font-display text-2xl font-bold text-foreground/20 group-hover:text-foreground/40 transition-colors">
                    Preview
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-secondary rounded-md text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Live
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button variant="hero-outline" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
