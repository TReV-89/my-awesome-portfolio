import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Index = () => {
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
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
