import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Tunde Bakare",
      role: "CEO, TechStream",
      content: "AdeCode delivered a platform that exceeded our expectations. The attention to detail in both UI and backend stability is world-class.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      content: "Working with Salaudeen was a breeze. He understands complex requirements and turns them into elegant digital solutions with speed.",
      rating: 5
    },
    {
      name: "David Adeleke",
      role: "Founder, Fintech Synergy",
      content: "The futuristic design he created for our dashboard has impressed every single one of our investors. Highly professional and skilled.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 relative dark:bg-dark-black/50 bg-black/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="section-title text-3xl md:text-5xl">Client <span className="neon-text">Success Stories</span></h2>
          <p className="dark:text-gray-400 text-gray-500 font-medium">Trusted by entrepreneurs and businesses to deliver technical excellence.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 glass dark:bg-white/5 bg-white/70 rounded-3xl relative flex flex-col justify-between group hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-xl dark:shadow-none"
            >
              <div className="absolute -top-4 -left-4 p-4 bg-primary rounded-2xl text-dark-black shadow-lg shadow-primary/20 rotate-[-10deg] group-hover:rotate-0 transition-transform duration-500">
                <Quote size={24} fill="currentColor" />
              </div>
              
              <div className="pt-4 mb-4">
                <div className="flex space-x-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="dark:text-gray-300 text-gray-600 italic leading-relaxed font-medium text-sm">
                  "{item.content}"
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-6 border-t dark:border-white/10 border-black/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-black text-dark-black">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold dark:text-white text-dark-black">{item.name}</h4>
                  <p className="text-[10px] text-primary uppercase font-bold tracking-widest">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
