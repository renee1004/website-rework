import HeroSection from "@/components/HeroSection";
import WorksCarousel from "@/components/WorksCarousel";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import MarqueeSection from "@/components/MarqueeSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import StarField from "@/components/StarField";

const Index = () => {
  return (
    <main className="min-h-screen">
      <StarField />
      <HeroSection />
      <WorksCarousel />
      <AboutSection />
      <ProjectsSection />
      <MarqueeSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
};

export default Index;
