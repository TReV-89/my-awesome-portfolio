import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Profile Photo */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-border bg-muted">
              {/* Replace this placeholder with your actual photo */}
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <span className="font-mono text-xs text-center px-4">Your Photo Here</span>
              </div>
              {/* Uncomment and update src when you have your photo:
              <img 
                src="/your-photo.jpg" 
                alt="Your Name" 
                className="w-full h-full object-cover"
              />
              */}
            </div>
          </div>

          {/* Text Content */}
          <div className="max-w-xl text-center lg:text-left">
            <p className="font-mono text-sm text-muted-foreground mb-4 animate-fade-in">
              Applied ML Engineer
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4 animate-slide-up leading-tight">
              Your Name
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-slide-up font-light" style={{ animationDelay: "0.05s" }}>
              Building reliable machine learning infrastructure
            </p>

            <p className="text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
              I design and implement end-to-end ML pipelines, from data processing 
              to model deployment and monitoring at scale.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
