const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "PostgreSQL", level: 85 },
  { name: "AWS", level: 75 },
];

const technologies = [
  "Next.js", "Vue.js", "Express", "GraphQL", "MongoDB", "Redis",
  "Docker", "Kubernetes", "Git", "Figma", "Tailwind CSS", "SASS"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">My Expertise</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Core Skills */}
            <div>
              <h3 className="font-display text-2xl font-semibold mb-8">Core Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="font-display text-2xl font-semibold mb-8">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-secondary rounded-lg text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Experience Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div className="text-center p-6 rounded-xl bg-background border border-border">
                  <div className="font-display text-3xl font-bold text-gradient mb-2">5+</div>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-background border border-border">
                  <div className="font-display text-3xl font-bold text-gradient mb-2">50+</div>
                  <p className="text-sm text-muted-foreground">Projects Done</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-background border border-border">
                  <div className="font-display text-3xl font-bold text-gradient mb-2">30+</div>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
