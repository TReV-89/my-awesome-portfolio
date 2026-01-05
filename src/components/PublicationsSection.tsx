import { FileText, ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  link?: string;
  abstract?: string;
}

const publications: Publication[] = [
  {
    title: "Scalable Machine Learning Pipelines for Production Systems",
    authors: "Your Name, Co-Author A, Co-Author B",
    venue: "Conference on Machine Learning Systems (MLSys)",
    year: 2024,
    link: "#",
    abstract: "A framework for building and deploying ML pipelines at scale with automated monitoring and retraining capabilities.",
  },
  {
    title: "Optimizing Feature Stores for Real-Time Inference",
    authors: "Your Name, Co-Author C",
    venue: "International Conference on Data Engineering (ICDE)",
    year: 2023,
    link: "#",
    abstract: "Novel approaches to reduce latency in feature retrieval for real-time ML applications.",
  },
  {
    title: "Automated Model Validation in CI/CD Pipelines",
    authors: "Your Name, Co-Author D, Co-Author E",
    venue: "IEEE Software Engineering for Machine Learning (SE4ML)",
    year: 2023,
    link: "#",
    abstract: "Best practices and tooling for integrating ML model validation into continuous integration workflows.",
  },
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <FileText className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Publications</h2>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <article
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {pub.authors}
                    </p>
                    <p className="text-sm text-primary/80">
                      {pub.venue}, {pub.year}
                    </p>
                    {pub.abstract && (
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                        {pub.abstract}
                      </p>
                    )}
                  </div>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                      aria-label="View publication"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
