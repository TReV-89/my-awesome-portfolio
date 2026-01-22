import { ExternalLink, Briefcase } from "lucide-react";
import { useState } from "react";

const experience = [
  {
    role: "Applied ML Engineer",
    company: "Sunbird AI",
    period: "2023 - Present",
    description: "Building production ML systems for African languages and climate applications.",
  },
  {
    role: "ML Engineer Intern",
    company: "Sunbird AI",
    period: "2022 - 2023",
    description: "Developed NLP models and data pipelines for low-resource languages.",
  },
  {
    role: "Research Assistant",
    company: "Makerere University",
    period: "2021 - 2022",
    description: "Conducted research on machine learning applications for agriculture.",
  },
];

const DemoSection = () => {
  // Replace this with your actual Streamlit app URL
  const streamlitUrl = "https://ragcv.page/";
  const [isLoading, setIsLoading] = useState(true);


  return (
    <section id="demo" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        {/* Experience Timeline */}
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-sm text-muted-foreground mb-6">Experience</p>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-8 group">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-border bg-background group-hover:border-primary transition-colors" />
                  
                  <div className="space-y-1">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="text-sm font-medium">{exp.role}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                          <Briefcase size={12} />
                          {exp.company}
                        </p>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <p className="font-mono text-sm text-muted-foreground mb-4">Interactive</p>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-2xl font-light mb-2">Ask about my experience</h2>
              <p className="text-muted-foreground text-sm max-w-md">
                Chat with an AI-powered assistant that knows my CV. Ask about my skills, 
                projects, or experience.
              </p>
            </div>
            <a
              href={streamlitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Open in new tab
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
  
        {/* Streamlit Embed */}
        <div className="border border-border bg-card">
          <iframe
            src={streamlitUrl}
            title="CV Chat Assistant"
            className="w-full h-[600px] grayscale hover:grayscale-0 transition-all duration-500"
            style={{ border: "none" }}
            allow="clipboard-write"
            onLoad ={() => setIsLoading(false)}
            loading="eager"
            sandbox="allow-same-origin allow-scripts allow-forms"
          />
        </div>

        <p className="text-xs text-muted-foreground mt-4">
          Powered by RAG and Streamlit.
        </p>
      </div>
    </section>
  );
};

export default DemoSection;
