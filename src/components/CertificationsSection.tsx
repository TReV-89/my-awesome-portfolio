import { Award, ExternalLink } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}

const certifications: Certification[] = [
  {
    name: "LLM Course Unit 3: Fine-tuning Language Models",
    issuer: "Hugging Face",
    date: "July 2025",
    credentialId: "TReV-89",
    link: "",
  },
  {
    name: "AI Agents Fundamentals",
    issuer: "Hugging Face",
    date: "July 2025",
    credentialId: "TReV-89",
    link: "",
  },
  {
    name: "HTML, CSS, and JavaScript for Web Developers",
    issuer: "Coursera",
    date: "August 2024",
    credentialId: "",
    link: "https://coursera.org/share/f7f88eef1c0e4c963f0bf8329bb0f5cd",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="font-mono text-sm text-muted-foreground mb-4">Certifications</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-8">Professional Credentials</h3>
        
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Award size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{cert.date}</span>
                    {cert.credentialId && (
                      <span className="font-mono text-xs">ID: {cert.credentialId}</span>
                    )}
                  </div>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-sm text-primary hover:underline"
                    >
                      Verify credential
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
