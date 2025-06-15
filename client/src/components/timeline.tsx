import { motion } from "framer-motion";

interface TimelineItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="timeline-line"></div>
      
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="relative mb-12 pl-8"
        >
          <div className="timeline-dot" style={{ top: '8px' }}></div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <span className="text-blue-500 text-sm">{item.period}</span>
            </div>
            <p className="text-gray-400 text-sm mb-3">{item.company}</p>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
