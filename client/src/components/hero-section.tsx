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
      {/* Office Background - Exact recreation of reference image */}
      <div className="absolute inset-0 w-full h-full">
        <svg width="100%" height="100%" viewBox="0 0 1000 600" fill="none" className="opacity-[0.06]" preserveAspectRatio="xMidYMid slice">
          {/* Ceiling grid */}
          <path d="M100 0 L200 80 L800 80 L900 0" stroke="#000" strokeWidth="1.5" fill="none"/>
          <path d="M200 80 L800 80" stroke="#000" strokeWidth="1"/>
          <line x1="300" y1="70" x2="400" y2="0" stroke="#000" strokeWidth="1"/>
          <line x1="400" y1="70" x2="500" y2="0" stroke="#000" strokeWidth="1"/>
          <line x1="500" y1="70" x2="600" y2="0" stroke="#000" strokeWidth="1"/>
          <line x1="600" y1="70" x2="700" y2="0" stroke="#000" strokeWidth="1"/>
          
          {/* Left wall with windows */}
          <path d="M0 100 L200 80 L200 600" stroke="#000" strokeWidth="2"/>
          <rect x="20" y="120" width="60" height="80" fill="none" stroke="#000" strokeWidth="1.5"/>
          <rect x="100" y="140" width="60" height="80" fill="none" stroke="#000" strokeWidth="1.5"/>
          <line x1="50" y1="120" x2="50" y2="200" stroke="#000" strokeWidth="1"/>
          <line x1="20" y1="160" x2="80" y2="160" stroke="#000" strokeWidth="1"/>
          <line x1="130" y1="140" x2="130" y2="220" stroke="#000" strokeWidth="1"/>
          <line x1="100" y1="180" x2="160" y2="180" stroke="#000" strokeWidth="1"/>
          
          {/* Right wall */}
          <path d="M800 80 L1000 100 L1000 600 L800 600" stroke="#000" strokeWidth="2"/>
          
          {/* Floor perspective lines */}
          <path d="M200 600 L400 400 L600 400 L800 600" stroke="#000" strokeWidth="1" fill="none"/>
          
          {/* Left side workstations */}
          <rect x="50" y="350" width="80" height="40" fill="none" stroke="#000" strokeWidth="2"/>
          <rect x="70" y="320" width="40" height="25" fill="none" stroke="#000" strokeWidth="1.5"/>
          <circle cx="90" cy="300" r="8" fill="none" stroke="#000" strokeWidth="1.5"/>
          
          {/* Left person at desk */}
          <circle cx="70" cy="310" r="8" fill="#000"/>
          <path d="M70 318 L70 350" stroke="#000" strokeWidth="2"/>
          <path d="M58 330 L70 325 L82 330" stroke="#000" strokeWidth="1.5"/>
          
          <rect x="140" y="380" width="70" height="35" fill="none" stroke="#000" strokeWidth="2"/>
          <rect x="155" y="355" width="35" height="20" fill="none" stroke="#000" strokeWidth="1.5"/>
          <circle cx="172" cy="340" r="6" fill="none" stroke="#000" strokeWidth="1.5"/>
          
          {/* Second left person */}
          <circle cx="155" cy="350" r="7" fill="#000"/>
          <path d="M155 357 L155 380" stroke="#000" strokeWidth="2"/>
          <path d="M145 368 L155 363 L165 368" stroke="#000" strokeWidth="1.5"/>
          
          {/* Plant in corner */}
          <rect x="40" y="500" width="20" height="20" fill="none" stroke="#000" strokeWidth="2"/>
          <path d="M50 500 Q45 485 48 470 Q50 468 52 470 Q55 485 50 500" fill="none" stroke="#000" strokeWidth="2"/>
          <path d="M35 480 Q50 465 65 480" fill="none" stroke="#000" strokeWidth="2"/>
          <circle cx="38" cy="485" r="3" fill="#000"/>
          
          {/* Center area tables/reception */}
          <rect x="320" y="250" width="120" height="50" fill="none" stroke="#000" strokeWidth="2"/>
          <rect x="330" y="230" width="100" height="20" fill="none" stroke="#000" strokeWidth="1.5"/>
          
          <rect x="480" y="280" width="100" height="40" fill="none" stroke="#000" strokeWidth="2"/>
          <rect x="490" y="260" width="80" height="20" fill="none" stroke="#000" strokeWidth="1.5"/>
          
          {/* Center area people */}
          <circle cx="420" cy="220" r="6" fill="#000"/>
          <path d="M420 226 L420 250" stroke="#000" strokeWidth="2"/>
          <path d="M412 238 L420 233 L428 238" stroke="#000" strokeWidth="1.5"/>
          
          <circle cx="520" cy="250" r="6" fill="#000"/>
          <path d="M520 256 L520 280" stroke="#000" strokeWidth="2"/>
          <path d="M512 268 L520 263 L528 268" stroke="#000" strokeWidth="1.5"/>
          
          {/* Right side workstations */}
          <rect x="720" y="300" width="90" height="45" fill="none" stroke="#000" strokeWidth="2"/>
          <rect x="740" y="275" width="50" height="25" fill="none" stroke="#000" strokeWidth="1.5"/>
          <circle cx="765" cy="260" r="8" fill="none" stroke="#000" strokeWidth="1.5"/>
          
          {/* Right person working */}
          <circle cx="745" cy="270" r="7" fill="#000"/>
          <path d="M745 277 L745 300" stroke="#000" strokeWidth="2"/>
          <path d="M735 288 L745 283 L755 288" stroke="#000" strokeWidth="1.5"/>
          
          <rect x="720" y="400" width="85" height="40" fill="none" stroke="#000" strokeWidth="2"/>
          <rect x="735" y="380" width="45" height="20" fill="none" stroke="#000" strokeWidth="1.5"/>
          
          {/* Right area person */}
          <circle cx="750" cy="375" r="6" fill="#000"/>
          <path d="M750 381 L750 400" stroke="#000" strokeWidth="2"/>
          <path d="M742 390 L750 385 L758 390" stroke="#000" strokeWidth="1.5"/>
          
          {/* Office chairs */}
          <circle cx="90" cy="370" r="12" fill="none" stroke="#000" strokeWidth="1.5"/>
          <path d="M78 360 Q90 350 102 360" stroke="#000" strokeWidth="1.5" fill="none"/>
          
          <circle cx="172" cy="400" r="11" fill="none" stroke="#000" strokeWidth="1.5"/>
          <path d="M161 390 Q172 382 183 390" stroke="#000" strokeWidth="1.5" fill="none"/>
          
          <circle cx="765" cy="320" r="13" fill="none" stroke="#000" strokeWidth="1.5"/>
          <path d="M752 310 Q765 300 778 310" stroke="#000" strokeWidth="1.5" fill="none"/>
          
          <circle cx="750" cy="420" r="12" fill="none" stroke="#000" strokeWidth="1.5"/>
          <path d="M738 410 Q750 402 762 410" stroke="#000" strokeWidth="1.5" fill="none"/>
          
          {/* Shelving unit on right */}
          <rect x="860" y="150" width="60" height="150" fill="none" stroke="#000" strokeWidth="2"/>
          <rect x="865" y="160" width="10" height="25" fill="none" stroke="#000" strokeWidth="1"/>
          <rect x="877" y="155" width="10" height="30" fill="none" stroke="#000" strokeWidth="1"/>
          <rect x="889" y="165" width="10" height="20" fill="none" stroke="#000" strokeWidth="1"/>
          <rect x="901" y="150" width="10" height="35" fill="none" stroke="#000" strokeWidth="1"/>
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
