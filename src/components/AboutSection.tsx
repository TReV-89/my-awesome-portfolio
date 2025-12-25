import { Code2, Palette, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Palette,
    title: "Design Focus",
    description: "Creating intuitive interfaces with attention to every pixel.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Shipping quality products on time without compromising standards.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">About Me</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Who I <span className="text-gradient">Am</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image/Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 glow">
                <div className="w-full h-full rounded-xl bg-card border border-border flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-6 flex items-center justify-center">
                      <span className="font-display text-4xl font-bold text-primary">YN</span>
                    </div>
                    <p className="text-muted-foreground">Your photo here</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-xl blur-2xl" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate developer with 5+ years of experience building web applications 
                that solve real-world problems. I specialize in React, TypeScript, and Node.js, 
                with a keen eye for design and user experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and pushing the boundaries of what's possible on the web.
              </p>

              {/* Highlights */}
              <div className="grid sm:grid-cols-3 gap-4 pt-6">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-display font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
