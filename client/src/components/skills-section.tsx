import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";

import HorizontalTimeline from "./horizontal-timeline";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-background text-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-black"
        >
          Skills & Experience
        </motion.h2>
        
        {/* Skills Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-8 text-black text-center">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {portfolioData.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-md transition-all duration-300 cursor-pointer group min-h-[120px]"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-center text-gray-700">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Horizontal Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HorizontalTimeline items={portfolioData.experience} />
        </motion.div>
      </div>
    </section>
  );
}
