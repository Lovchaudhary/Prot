import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Joeward Peralta. Built with passion and lots of coffee.
          </p>
        </div>
      </footer>
    </div>
  );
}
