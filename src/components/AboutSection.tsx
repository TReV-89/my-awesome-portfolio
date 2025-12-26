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

            <div className="pt-8 border-t border-border">
              <p className="font-mono text-sm text-muted-foreground mb-4">Stack</p>
              <p className="text-sm text-muted-foreground">
                Python · PyTorch · TensorFlow · FastAPI · MLflow · Weights & Biases · Docker · Supervised & Reinforcement Fine-Tuning (SFT, GRPO) ·
                 Transfer Learning · Time Series ML · Optimization & Scheduling · ML Systems Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
