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
      {/* Office Background Elements - Line Art Style */}
      <div className="office-plant" style={{ left: '8%' }}>
        <svg width="80" height="120" viewBox="0 0 80 120" fill="none" className="opacity-[0.05]">
          <rect x="25" y="90" width="30" height="30" fill="none" stroke="#000" strokeWidth="2"/>
          <path d="M40 90 Q30 70 35 50 Q40 45 45 50 Q50 70 40 90" fill="none" stroke="#000" strokeWidth="2"/>
          <path d="M20 60 Q40 40 60 60" fill="none" stroke="#000" strokeWidth="2"/>
        </svg>
      </div>
      <div className="office-plant" style={{ right: '12%' }}>
        <svg width="60" height="100" viewBox="0 0 60 100" fill="none" className="opacity-[0.05]">
          <rect x="20" y="80" width="20" height="20" fill="none" stroke="#000" strokeWidth="2"/>
          <path d="M30 80 L25 60 L35 60 Z" fill="none" stroke="#000" strokeWidth="2"/>
          <path d="M30 80 L20 50 L40 50 Z" fill="none" stroke="#000" strokeWidth="2"/>
        </svg>
      </div>
      <div className="office-desk" style={{ left: '3%' }}>
        <svg width="150" height="80" viewBox="0 0 150 80" fill="none" className="opacity-[0.04]">
          <rect x="10" y="40" width="130" height="30" fill="none" stroke="#000" strokeWidth="2"/>
          <rect x="50" y="20" width="50" height="30" fill="none" stroke="#000" strokeWidth="2"/>
          <circle cx="25" cy="35" r="8" fill="none" stroke="#000" strokeWidth="2"/>
        </svg>
      </div>
      <div className="office-desk" style={{ right: '5%' }}>
        <svg width="100" height="90" viewBox="0 0 100 90" fill="none" className="opacity-[0.04]">
          <rect x="20" y="60" width="60" height="25" fill="none" stroke="#000" strokeWidth="2"/>
          <rect x="25" y="45" width="8" height="20" fill="none" stroke="#000" strokeWidth="2"/>
          <rect x="35" y="40" width="8" height="25" fill="none" stroke="#000" strokeWidth="2"/>
          <rect x="45" y="35" width="8" height="30" fill="none" stroke="#000" strokeWidth="2"/>
        </svg>
      </div>
      
      {/* Animated Cat */}
      <div className="cat-animation">
        <svg className="cat-svg" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cat body */}
          <ellipse cx="30" cy="28" rx="18" ry="8" fill="#333" stroke="#000" strokeWidth="1"/>
          {/* Cat head */}
          <circle cx="45" cy="20" r="8" fill="#333" stroke="#000" strokeWidth="1"/>
          {/* Cat ears */}
          <path d="M38 15 L40 10 L42 15" fill="#333" stroke="#000" strokeWidth="1"/>
          <path d="M48 15 L50 10 L52 15" fill="#333" stroke="#000" strokeWidth="1"/>
          {/* Cat tail */}
          <path d="M12 25 Q5 20 8 15" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
          {/* Cat legs */}
          <line x1="20" y1="35" x2="20" y2="38" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
          <line x1="25" y1="35" x2="25" y2="38" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
          <line x1="35" y1="35" x2="35" y2="38" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
          <line x1="40" y1="35" x2="40" y2="38" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
          {/* Cat eyes */}
          <circle cx="42" cy="18" r="1.5" fill="#000"/>
          <circle cx="48" cy="18" r="1.5" fill="#000"/>
          {/* Cat nose */}
          <circle cx="45" cy="22" r="1" fill="#ff69b4"/>
        </svg>
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
