import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Your Name | Full-Stack Developer Portfolio</title>
        <meta 
          name="description" 
          content="Full-Stack Developer specializing in React, TypeScript, and Node.js. View my projects and get in touch for collaboration opportunities." 
        />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
