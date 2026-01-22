import { Briefcase } from "lucide-react";

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

const AboutSection = () => {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-muted-foreground mb-4">About</p>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a passionate Applied ML Engineer with an electrical engineering background dedicated to building scalable machine learning 
              solutions that drive real business value.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              My work focuses on translating complex algorithms into production-ready systems. 
              I specialize in designing robust ML pipelines, optimizing model inference, and 
              deploying intelligent applications at scale.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">📍</span>
                <span>Kampala, Uganda</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">🏢</span>
                <span>Sunbird AI</span>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="font-mono text-sm text-muted-foreground mb-4">Stack</p>
              <p className="text-sm text-muted-foreground">
                Python · PyTorch · TensorFlow · FastAPI · MLflow · Weights & Biases · Docker · Supervised & Reinforcement Fine-Tuning (SFT, GRPO) ·
                 Transfer Learning · Time Series ML · Optimization & Scheduling · ML Systems Design
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="pt-8 border-t border-border">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
