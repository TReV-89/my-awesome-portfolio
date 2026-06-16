import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { Github, ExternalLink, Copy, Check, X } from "lucide-react";
import { useState, useEffect } from "react";
import ProjectNavigation from "@/components/ProjectNavigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import PageTransition from "@/components/PageTransition";
import { projectsData } from "@/data/projects";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

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
  const [selectedImage, setSelectedImage] = useState<{ title: string; url: string } | null>(null);

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
            {project.architecture.component ? (
              <project.architecture.component />
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
                <button
                  key={index}
                  onClick={() => setSelectedImage(screenshot)}
                  className="border border-border overflow-hidden text-left hover:border-primary/50 transition-colors cursor-pointer"
                >
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
                </button>
              ))}
            </div>
          </section>

          {/* Image Lightbox Dialog */}
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl w-full p-0 bg-background border-border">
              <DialogTitle className="sr-only">
                {selectedImage?.title || "Screenshot"}
              </DialogTitle>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border hover:bg-secondary transition-colors"
              >
                <X size={20} />
              </button>
              {selectedImage && (
                <div className="p-4">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                  <p className="font-mono text-sm text-muted-foreground mt-4 text-center">
                    {selectedImage.title}
                  </p>
                </div>
              )}
            </DialogContent>
          </Dialog>

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
