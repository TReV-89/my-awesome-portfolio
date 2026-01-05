import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { SectionType } from "@/pages/Index";

interface NavLink {
  name: string;
  section: SectionType;
}

const navLinks: NavLink[] = [
  { name: "About", section: "about" },
  { name: "Ask AI", section: "demo" },
  { name: "Projects", section: "projects" },
  { name: "Achievements", section: "achievements" },
  { name: "Publications", section: "publications" },
  { name: "Certifications", section: "certifications" },
];

interface NavigationProps {
  activeSection: SectionType;
  onSectionChange: (section: SectionType) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section: SectionType) => {
    onSectionChange(section);
    setIsMobileMenuOpen(false);
    // Scroll to top when switching sections
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <a href="#" className="font-mono text-sm font-medium tracking-tight">
            applied.ml.engineer
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.section)}
                className={`text-sm transition-colors duration-200 ${
                  activeSection === link.section
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.section)}
                  className={`text-sm text-left transition-colors ${
                    activeSection === link.section
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
