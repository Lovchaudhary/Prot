import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-background text-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-black"
        >
          Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="aspect-video bg-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-black">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech.name}
                      className="px-3 py-1 rounded-full text-xs text-white font-medium"
                      style={{ backgroundColor: tech.color }}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={project.githubUrl} 
                    className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub →
                  </a>
                  <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm flex items-center gap-1 font-medium">
                    <ExternalLink className="w-4 h-4" />
                    View
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
