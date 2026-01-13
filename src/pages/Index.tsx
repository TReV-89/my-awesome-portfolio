import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SectionTabs from "@/components/SectionTabs";
import AboutSection from "@/components/AboutSection";
import DemoSection from "@/components/DemoSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsMap from "@/components/AchievementsMap";
import PublicationsSection from "@/components/PublicationsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import PageTransition from "@/components/PageTransition";

export type SectionType = "about" | "demo" | "projects" | "achievements" | "publications" | "certifications" | "contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState<SectionType>("about");
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && ["about", "demo", "projects", "achievements", "publications", "certifications", "contact"].includes(hash)) {
      setActiveSection(hash as SectionType);
      // Scroll to the section tabs after a short delay to ensure content is rendered
      setTimeout(() => {
        const tabsElement = document.getElementById("section-tabs");
        if (tabsElement) {
          tabsElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location.hash]);

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "demo":
        return <DemoSection />;
      case "projects":
        return <ProjectsSection />;
      case "achievements":
        return <AchievementsMap />;
      case "publications":
        return <PublicationsSection />;
      case "certifications":
        return <CertificationsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Trevor Tebaweswa - Portfolio</title>
        <meta 
          name="description" 
          content="Applied AI engineer specializing in building reliable machine learning infrastructure, ML pipelines, and production ML systems." 
        />
        <meta name="keywords" content="Artificial Intelligence, Machine Learning, Uganda, Applied ML Engineer" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <PageTransition>
          <main>
            <HeroSection />
            <SectionTabs activeSection={activeSection} onSectionChange={setActiveSection} />
            {renderSection()}
          </main>
        </PageTransition>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Index;
