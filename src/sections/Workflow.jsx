import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Layout, Code2, ShieldCheck, Rocket, Wrench } from 'lucide-react';

const Workflow = () => {
  const steps = [
    {
      icon: <Lightbulb />,
      title: "Requirement Analysis",
      description: "Deep diving into your project goals, target audience, and functional requirements to build a solid strategic foundation.",
      color: "from-blue-500/20 to-blue-500/0"
    },
    {
      icon: <Layout />,
      title: "UI/UX Architecture",
      description: "Designing intuitive user interfaces and seamless experiences using modern design principles and futuristic aesthetics.",
      color: "from-purple-500/20 to-purple-500/0"
    },
    {
      icon: <Code2 />,
      title: "Precision Development",
      description: "Writing clean, scalable, and high-performance code using the latest tech stack (React, Node.js, MongoDB).",
      color: "from-primary/20 to-primary/0"
    },
    {
      icon: <ShieldCheck />,
      title: "Quality Assurance",
      description: "Rigorous testing across devices and browsers to ensure a bug-free, secure, and ultra-fast application.",
      color: "from-emerald-500/20 to-emerald-500/0"
    },
    {
      icon: <Rocket />,
      title: "Strategic Deployment",
      description: "Deploying your product to high-speed cloud infrastructures with optimized SEO and performance metrics.",
      color: "from-orange-500/20 to-orange-500/0"
    },
    {
      icon: <Wrench />,
      title: "Growth & Maintenance",
      description: "Continuous monitoring, security updates, and feature enhancements to keep your digital asset ahead of the curve.",
      color: "from-red-500/20 to-red-500/0"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="section-title">The Engineering <span className="neon-text">Workflow</span></h2>
          <p className="dark:text-gray-400 text-gray-500">A systematic, agency-grade approach to delivering world-class digital products.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 glass-card border-none relative overflow-hidden group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} dark:opacity-30 opacity-10`} />
              
              <div className="relative z-10">
                <div className="p-3 w-fit rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 mb-6 text-primary group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  {React.cloneElement(step.icon, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold dark:text-white text-dark-black mb-4 flex items-center">
                  <span className="text-primary italic mr-2">0{index + 1}.</span>
                  {step.title}
                </h3>
                <p className="dark:text-gray-400 text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
