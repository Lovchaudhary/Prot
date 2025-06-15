import { motion } from "framer-motion";
import { Instagram, Github, Linkedin, Twitter, Mail, Download } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-black"
        >
          Let's Work Together
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 mb-12"
        >
          Ready to bring your ideas to life? Let's discuss your next project.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a 
            href="mailto:hello@joeward.dev" 
            className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 font-medium"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </a>
          <a 
            href="#" 
            className="border-2 border-black text-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2 font-medium"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center space-x-8"
        >
          <a href="#" className="text-2xl text-black hover:text-gray-600 transition-colors" title="Instagram">
            <Instagram />
          </a>
          <a href="#" className="text-2xl text-black hover:text-gray-600 transition-colors" title="GitHub">
            <Github />
          </a>
          <a href="#" className="text-2xl text-black hover:text-gray-600 transition-colors" title="LinkedIn">
            <Linkedin />
          </a>
          <a href="#" className="text-2xl text-black hover:text-gray-600 transition-colors" title="Twitter">
            <Twitter />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
