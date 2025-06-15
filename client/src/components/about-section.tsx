import { motion } from "framer-motion";
import Timeline from "./timeline";
import { portfolioData } from "@/data/portfolio-data";

export default function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 px-6 bg-background text-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-black"
        >
          About Me
        </motion.h2>
        
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* About Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-gray-600 leading-relaxed text-lg">
              My fascination with coding began in high school when I watched my friends build impressive websites and Discord bots, sparking my curiosity about programming. What started as simple experimentation quickly turned into a deep passion. I spent countless nights teaching myself Python before gradually transitioning to web development.
            </p>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              Throughout my journey, I've built numerous projects some successful, many failures but each one taught me valuable lessons. Along the way, I've connected with incredible people who saw potential in me. This time I built a website for someone, and for the first time, I got paid for my work. That's when I realized this wasn't just a hobby it was something I could turn into a career.
            </p>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              Running a development agency has let me work with incredible people and tackle complex challenges across industries. Each project has sharpened my problem solving skills and understanding of scalable solutions. And this is just the beginning I'm now diving into Rust, Flutter, and C/C++ to take on even bigger challenges.
            </p>
            
            <div className="flex space-x-4 pt-6">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Contact Me
              </button>
              <button className="border border-gray-400 text-black px-6 py-3 rounded-lg hover:border-gray-600 transition-colors">
                Download Resume
              </button>
            </div>
          </motion.div>

          {/* AI Chat Box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-xl text-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">AI</span>
              </div>
              <h3 className="text-lg font-semibold">Ask AI About Me</h3>
            </div>
            
            <p className="text-white/90 text-sm mb-4 leading-relaxed">
              Have questions about my experience, skills, or projects? Chat with my AI assistant to learn more about my background and expertise.
            </p>
            
            <button className="w-full bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-lg transition-colors font-medium text-sm backdrop-blur-sm">
              Start Conversation
            </button>
            
            <div className="mt-4 text-xs text-white/70">
              Powered by AI trained on my portfolio data
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
