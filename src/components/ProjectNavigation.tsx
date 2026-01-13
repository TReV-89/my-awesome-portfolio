import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);
  const navigate = useNavigate();

  const handleBackToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("");
    setTimeout(() => {
      const tabsElement = document.getElementById("section-tabs");
      if (tabsElement) {
        const offset = 100;
        const elementPosition = tabsElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
      }
    }, 150);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      setShowBackButton(scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navigation - hides on scroll */}
      <AnimatePresence>
        {!showBackButton && (
          <motion.nav
            initial={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isScrolled ? "bg-background/90 backdrop-blur-sm border-b border-border" : "bg-transparent"
            }`}
          >
            <div className="container mx-auto px-6 py-5">
              <div className="flex items-center justify-between">
              <Link to="/" className="font-mono text-sm font-medium tracking-tight">
                  applied.ml.engineer
                </Link>
                <button
                  onClick={handleBackToProjects}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2"
                >
                  <ArrowLeft size={16} />
                  Back to Projects
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Floating Back Button - shows on scroll */}
      <AnimatePresence>
        {showBackButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-6 left-6 z-50"
          >
            <button
              onClick={handleBackToProjects}
              className="flex items-center gap-2 px-4 py-2 bg-background/90 backdrop-blur-sm border border-border rounded-full shadow-lg hover:bg-secondary transition-colors duration-200"
            >
              <ArrowLeft size={16} />
              <span className="font-mono text-sm">Projects</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectNavigation;
