import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SectionTabs from "@/components/SectionTabs";
import AboutSection from "@/components/AboutSection";
import DemoSection from "@/components/DemoSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsMap from "@/components/AchievementsMap";
import PublicationsSection from "@/components/PublicationsSection";
import CertificationsSection from "@/components/CertificationsSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import PageTransition from "@/components/PageTransition";

export type SectionType = "about" | "demo" | "projects" | "achievements" | "publications" | "certifications";

const Index = () => {
  const [activeSection, setActiveSection] = useState<SectionType>("about");

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
      default:
        return <AboutSection />;
    }
  };

  return (
    <>
      <Helmet>
        <title>MLOps Engineer | Portfolio</title>
        <meta 
          name="description" 
          content="MLOps engineer specializing in building reliable machine learning infrastructure, ML pipelines, and production ML systems." 
        />
        <meta name="keywords" content="MLOps, Machine Learning, DevOps, ML Infrastructure, Data Engineering" />
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
