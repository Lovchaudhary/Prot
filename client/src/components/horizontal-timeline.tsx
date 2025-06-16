import { motion } from "framer-motion";

interface TimelineItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface HorizontalTimelineProps {
  items: TimelineItem[];
}

export default function HorizontalTimeline({ items }: HorizontalTimelineProps) {
  return (
    <div className="py-12">
      <h3 className="text-2xl font-semibold mb-8 text-black text-center">Experience Timeline</h3>
      
      <div className="relative">
        {/* Horizontal line */}
        <div className="absolute top-8 left-8 right-8 h-0.5 bg-emerald-300"></div>
        
        <div className="flex justify-between items-start">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex-1 relative"
            >
              {/* Dot */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white shadow-sm z-10"></div>
              
              {/* Content */}
              <div className="pt-16 px-4">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-lg border border-emerald-200 shadow-sm hover:shadow-md hover:from-emerald-100 hover:to-teal-100 transition-all duration-300">
                  <div className="text-center">
                    <span className="text-emerald-600 text-xs font-medium bg-emerald-100 px-2 py-1 rounded-full">{item.period}</span>
                    <h4 className="text-sm font-semibold text-emerald-900 mt-2">{item.title}</h4>
                    <p className="text-emerald-700 text-xs font-medium mt-1">{item.company}</p>
                    <p className="text-emerald-600 text-xs leading-relaxed mt-2">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}