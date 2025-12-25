import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-muted-foreground mb-6 animate-fade-in">
            MLOps Engineer
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8 animate-slide-up leading-tight">
            Building reliable<br />
            machine learning<br />
            infrastructure
          </h1>

          <p className="text-muted-foreground max-w-md leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            I design and implement end-to-end ML pipelines, from data processing 
            to model deployment and monitoring at scale.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-6">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
