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
    <section id="about" className="py-20 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-black"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Journey Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6 text-black">My Journey</h3>
            
            <p className="text-gray-600 leading-relaxed">
              My fascination with coding began in high school when I watched my friends build impressive websites and Discord bots, sparking my curiosity about programming. What started as simple experimentation quickly turned into a deep passion. I spent countless nights teaching myself Python before gradually transitioning to web development.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Throughout my journey, I've built numerous projects some successful, many failures but each one taught me valuable lessons. Along the way, I've connected with incredible people who saw potential in me. This time I built a website for someone, and for the first time, I got paid for my work. That's when I realized this wasn't just a hobby it was something I could turn into a career.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
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

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Timeline items={portfolioData.experience} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
