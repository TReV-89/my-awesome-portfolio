import { SectionType } from "@/pages/Index";

interface SectionTabsProps {
  activeSection: SectionType;
  onSectionChange: (section: SectionType) => void;
}

const tabs: { name: string; section: SectionType }[] = [
  { name: "About", section: "about" },
  { name: "Ask AI", section: "demo" },
  { name: "Projects", section: "projects" },
  { name: "Achievements", section: "achievements" },
  { name: "Publications", section: "publications" },
  { name: "Certifications", section: "certifications" },
  { name: "Contact", section: "contact" },
];

const SectionTabs = ({ activeSection, onSectionChange }: SectionTabsProps) => {
  const handleTabClick = (section: SectionType) => {
    onSectionChange(section);
    setTimeout(() => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  return (
    <div id="section-tabs" className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.section}
              onClick={() => handleTabClick(tab.section)}
              className={`px-4 py-2 text-sm rounded-md whitespace-nowrap transition-colors duration-200 ${
                activeSection === tab.section
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTabs;
