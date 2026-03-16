import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Monitor, Database, Rocket, TrendingUp, Paintbrush, FastForward 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Full Stack Web Development",
      description: "Building robust, scalable server-side systems and responsive client interfaces from scratch.",
      icon: <Code2 />,
      tag: "Development"
    },
    {
      title: "Website Design",
      description: "Crafting modern, aesthetically pleasing user interfaces with futuristic themes and glassmorphism.",
      icon: <Paintbrush />,
      tag: "UI/UX"
    },
    {
      title: "API Development",
      description: "Architecting secure and efficient RESTful APIs to power complex digital platforms and integration workflows.",
      icon: <Database />,
      tag: "Backend"
    },
    {
      title: "Deployment & Infrastructure",
      description: "Setting up high-performance cloud hosting environments with automated CI/CD pipelines.",
      icon: <Rocket />,
      tag: "DevOps"
    },
    {
      title: "Performance Optimization",
      description: "Revamping existing sites to ensure ultra-fast load times and perfect Google Lighthouse scores.",
      icon: <FastForward />,
      tag: "Audit"
    },
    {
      title: "Growth & Automation",
      description: "Developing custom bots and automation tools to scale business processes and social media growth.",
      icon: <TrendingUp />,
      tag: "Strategy"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="section-title">Strategic <span className="neon-text">Services</span></h2>
          <p className="dark:text-gray-400 text-gray-500">High-impact digital solutions tailored to elevate your business brand.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 glass-card border-none bg-dark-lighter/5 dark:bg-dark-lighter hover:dark:bg-dark-darker transition-all duration-500 hover:shadow-xl dark:shadow-none"
            >
              <div className="mb-6 flex justify-between items-start">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-dark-black transition-all duration-500 scale-110 shadow-sm">
                  {React.cloneElement(service.icon, { size: 32 })}
                </div>
                <span className="text-[10px] font-bold text-gray-500 dark:text-gray-600 uppercase tracking-widest group-hover:text-primary transition-colors">
                  {service.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold dark:text-white text-dark-black mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="dark:text-gray-400 text-gray-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <motion.div 
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-10 h-0.5 bg-primary/30 group-hover:w-full transition-all duration-500" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
