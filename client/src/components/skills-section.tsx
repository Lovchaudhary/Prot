import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {portfolioData.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <span className="text-sm font-medium text-center">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
