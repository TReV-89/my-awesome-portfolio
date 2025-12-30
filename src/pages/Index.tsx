import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DemoSection from "@/components/DemoSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsMap from "@/components/AchievementsMap";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Applied AI Engineer | Portfolio</title>
        <meta 
          name="description" 
          content="Applied AI engineer specializing in building reliable machine learning infrastructure, ML pipelines, and production ML systems." 
        />
        <meta name="keywords" content="MLOps, Machine Learning, DevOps, ML Infrastructure, Data Engineering" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <PageTransition>
          <main>
            <HeroSection />
            <AboutSection />
            <DemoSection />
            <ProjectsSection />
            <AchievementsMap />
          </main>
        </PageTransition>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Index;
