const AboutSection = () => {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-muted-foreground mb-4">About</p>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a passionate AI Research Engineer with an electrical engineering background, dedicated to advancing intelligent systems through rigorous research and practical innovation.

            </p>
            
            <p className="text-muted-foreground leading-relaxed">
             My work focuses on developing and evaluating machine learning systems for low-resource and underserved environments, bridging the gap between AI research and real-world deployment. I am particularly interested in building reliable AI systems that perform effectively despite limited data, computational constraints, and linguistic diversity. My research interests include AI safety, model alignment, reasoning, and agentic systems, with a focus on ensuring that advanced AI technologies are robust, trustworthy, and accessible within African contexts. I am committed to translating cutting-edge research into solutions that address local challenges and create meaningful societal impact.

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
