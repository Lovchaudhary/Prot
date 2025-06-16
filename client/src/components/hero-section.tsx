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
      {/* Complete Office Background - Line Art Style */}
      <div className="absolute inset-0 w-full h-full">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" fill="none" className="opacity-[0.08]" preserveAspectRatio="xMidYMid slice">
          {/* Ceiling and structure */}
          <path d="M0 0 L200 150 L1000 150 L1200 0" stroke="#000" strokeWidth="2" fill="none"/>
          <path d="M200 150 L200 800" stroke="#000" strokeWidth="2"/>
          <path d="M1000 150 L1000 800" stroke="#000" strokeWidth="2"/>
          <path d="M0 800 L1200 800" stroke="#000" strokeWidth="2"/>
          
          {/* Left side workstations */}
          <rect x="50" y="400" width="120" height="60" fill="none" stroke="#000" strokeWidth="2"/>
          <rect x="80" y="350" width="60" height="40" fill="none" stroke="#000" strokeWidth="2"/>
          <circle cx="110" cy="330" r="15" fill="none" stroke="#000" strokeWidth="2"/>
          <path d="M60 460 Q50 440 70 420" stroke="#000" strokeWidth="2" fill="none"/>
          
          <rect x="220" y="450" width="100" height="50" fill="none" stroke="#000" strokeWidth="2"/>
          <rect x="240" y="400" width="60" height="40" fill="none" stroke="#000" strokeWidth="2"/>
          <circle cx="270" cy="380" r="12" fill="none" stroke="#000" strokeWidth="2"/>
          
          {/* Center aisle and furniture */}
          <path d="M400 200 L800 200 L900 500 L300 500 Z" stroke="#000" strokeWidth="1" fill="none"/>
          
          {/* Reception/central area */}
          <rect x="500" y="300" width="200" height="80" fill="none" stroke="#000" strokeWidth="2"/>
          <rect x="520" y="280" width="160" height="30" fill="none" stroke="#000" strokeWidth="2"/>
          <circle cx="600" cy="260" r="8" fill="none" stroke="#000" strokeWidth="2"/>
          
          {/* Right side workstations */}
          <rect x="900" y="350" width="150" height="70" fill="none" stroke="#000" strokeWidth="2"/>
          <rect x="920" y="300" width="70" height="45" fill="none" stroke="#000" strokeWidth="2"/>
          <circle cx="955" cy="280" r="15" fill="none" stroke="#000" strokeWidth="2"/>
          
          <rect x="900" y="500" width="120" height="55" fill="none" stroke="#000" strokeWidth="2"/>
          <rect x="915" y="450" width="50" height="40" fill="none" stroke="#000" strokeWidth="2"/>
          
          {/* Office chairs (circles with backs) */}
          <circle cx="110" cy="480" r="20" fill="none" stroke="#000" strokeWidth="2"/>
          <path d="M90 470 Q110 450 130 470" stroke="#000" strokeWidth="2" fill="none"/>
          
          <circle cx="270" cy="520" r="18" fill="none" stroke="#000" strokeWidth="2"/>
          <path d="M252 510 Q270 495 288 510" stroke="#000" strokeWidth="2" fill="none"/>
          
          <circle cx="955" cy="440" r="22" fill="none" stroke="#000" strokeWidth="2"/>
          <path d="M933 430 Q955 410 977 430" stroke="#000" strokeWidth="2" fill="none"/>
          
          <circle cx="960" cy="580" r="20" fill="none" stroke="#000" strokeWidth="2"/>
          <path d="M940 570 Q960 550 980 570" stroke="#000" strokeWidth="2" fill="none"/>
          
          {/* Plants and decor */}
          <rect x="150" y="600" width="30" height="30" fill="none" stroke="#000" strokeWidth="2"/>
          <path d="M165 600 Q155 580 160 560 Q165 555 170 560 Q175 580 165 600" fill="none" stroke="#000" strokeWidth="2"/>
          <path d="M140 570 Q165 550 190 570" fill="none" stroke="#000" strokeWidth="2"/>
          
          <rect x="800" y="650" width="25" height="25" fill="none" stroke="#000" strokeWidth="2"/>
          <path d="M812 650 L807 630 L817 630 Z" fill="none" stroke="#000" strokeWidth="2"/>
          <path d="M812 650 L792 620 L832 620 Z" fill="none" stroke="#000" strokeWidth="2"/>
          
          {/* Books/shelving */}
          <rect x="1050" y="200" width="80" height="200" fill="none" stroke="#000" strokeWidth="2"/>
          <rect x="1055" y="220" width="15" height="30" fill="none" stroke="#000" strokeWidth="2"/>
          <rect x="1072" y="215" width="15" height="35" fill="none" stroke="#000" strokeWidth="2"/>
          <rect x="1089" y="225" width="15" height="25" fill="none" stroke="#000" strokeWidth="2"/>
          <rect x="1106" y="210" width="15" height="40" fill="none" stroke="#000" strokeWidth="2"/>
          
          {/* Window frames */}
          <rect x="50" y="180" width="80" height="120" fill="none" stroke="#000" strokeWidth="2"/>
          <line x1="90" y1="180" x2="90" y2="300" stroke="#000" strokeWidth="1"/>
          <line x1="50" y1="240" x2="130" y2="240" stroke="#000" strokeWidth="1"/>
          
          <rect x="1070" y="180" width="80" height="120" fill="none" stroke="#000" strokeWidth="2"/>
          <line x1="1110" y1="180" x2="1110" y2="300" stroke="#000" strokeWidth="1"/>
          <line x1="1070" y1="240" x2="1150" y2="240" stroke="#000" strokeWidth="1"/>
          
          {/* People silhouettes */}
          <circle cx="110" cy="420" r="12" fill="none" stroke="#000" strokeWidth="2"/>
          <path d="M110 432 L110 480" stroke="#000" strokeWidth="3"/>
          <path d="M95 450 L110 440 L125 450" stroke="#000" strokeWidth="2"/>
          <path d="M110 480 L95 520 M110 480 L125 520" stroke="#000" strokeWidth="2"/>
          
          <circle cx="270" cy="470" r="10" fill="none" stroke="#000" strokeWidth="2"/>
          <path d="M270 480 L270 520" stroke="#000" strokeWidth="2"/>
          <path d="M255 500 L270 490 L285 500" stroke="#000" strokeWidth="2"/>
          <path d="M270 520 L260 550 M270 520 L280 550" stroke="#000" strokeWidth="2"/>
          
          <circle cx="955" cy="390" r="11" fill="none" stroke="#000" strokeWidth="2"/>
          <path d="M955 401 L955 440" stroke="#000" strokeWidth="2"/>
          <path d="M942 420 L955 410 L968 420" stroke="#000" strokeWidth="2"/>
          <path d="M955 440 L945 470 M955 440 L965 470" stroke="#000" strokeWidth="2"/>
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
