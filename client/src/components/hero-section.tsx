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
      {/* Office Background Elements */}
      <div className="office-plant" style={{ left: '10%' }}>
        <div className="text-6xl">🪴</div>
      </div>
      <div className="office-plant" style={{ right: '15%' }}>
        <div className="text-5xl">🌿</div>
      </div>
      <div className="office-desk" style={{ left: '5%' }}>
        <div className="text-8xl">🖥️</div>
      </div>
      <div className="office-desk" style={{ right: '8%' }}>
        <div className="text-7xl">📚</div>
      </div>
      
      {/* Animated Cat */}
      <div className="cat-animation">
        <div className="text-4xl">🐱</div>
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
      
      {/* Sneak Peek of About Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <p className="text-gray-500 text-sm mb-2">Get to know me better</p>
        <div className="w-6 h-6 border-2 border-gray-400 rounded-full mx-auto animate-bounce">
          <div className="w-1 h-1 bg-gray-400 rounded-full mx-auto mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
