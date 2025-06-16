import { motion } from "framer-motion";
import { Instagram, Github, Linkedin } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 bg-background relative overflow-hidden">
      {/* Office Background */}
      <div className="absolute inset-0 w-full h-full opacity-[0.06]">
        <img 
          src="/attached_assets/image_1750059901875.png" 
          alt="Office background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="text-center max-w-4xl relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-black"
        >
          FULL STACK WEB<br />DEVELOPER
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 mb-8"
        >
          Based in Toronto, Canada
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-6 mb-12"
        >
          <a href="#" className="text-2xl text-black hover:text-gray-600 transition-colors">
            <Instagram />
          </a>
          <a href="#" className="text-2xl text-black hover:text-gray-600 transition-colors">
            <Github />
          </a>
          <a href="#" className="text-2xl text-black hover:text-gray-600 transition-colors">
            <Linkedin />
          </a>
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={() => scrollToSection('projects')}
          className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors font-medium"
        >
          View My Projects
        </motion.button>
      </div>
    </section>
  );
}
