import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Braces, Database, Globe, Layers, Cpu, Cloud, 
  Layout, Server, FastForward, Smartphone, Command
} from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Frontend Development",
      icon: <Layout className="text-blue-500" />,
      skills: [
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "React / Vite", level: 98 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 90 },
      ]
    },
    {
      title: "Backend & database",
      icon: <Server className="text-emerald-500" />,
      skills: [
        { name: "Node.js / Express", level: 92 },
        { name: "MongoDB / Mongoose", level: 88 },
        { name: "RESTful APIs", level: 95 },
        { name: "Authentication (JWT)", level: 90 },
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="text-primary" />,
      skills: [
        { name: "Vercel / Netlify", level: 95 },
        { name: "Firebase / AWS", level: 75 },
        { name: "Git & GitHub", level: 92 },
        { name: "SEO Optimization", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-dark-lighter/5 dark:bg-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="section-title">The Master <span className="neon-text">Stack</span></h2>
          <p className="dark:text-gray-400 text-gray-500">Current technologies powering my high-performance digital solutions.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass-card border-black/5 dark:border-white/5 group hover:border-primary/20 transition-all duration-500"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 group-hover:scale-110 transition-transform duration-500">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold dark:text-white text-dark-black">{cat.title}</h3>
              </div>

              <div className="space-y-6">
                {cat.skills.map((skill, si) => (
                  <div key={si} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="dark:text-gray-400 text-gray-500">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 + si * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Icons Background */}
        <div className="absolute inset-0 -z-10 pointer-events-none opacity-[0.03] overflow-hidden">
            <div className="absolute top-20 left-10"><Code2 size={200} /></div>
            <div className="absolute bottom-20 right-10"><Braces size={200} /></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><FastForward size={400} /></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
