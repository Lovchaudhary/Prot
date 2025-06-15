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
      <div className="absolute left-6 top-0 w-0.5 h-full bg-gray-300"></div>
      
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="relative mb-12 pl-12"
        >
          <div className="absolute left-4 top-2 w-4 h-4 bg-black rounded-full border-2 border-white shadow-sm"></div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-black">{item.title}</h4>
              <span className="text-gray-500 text-sm font-medium">{item.period}</span>
            </div>
            <p className="text-gray-600 text-sm mb-3 font-medium">{item.company}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
