import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <Sparkles size={16} />
            <span>Futuristic Web Experiences</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-8xl font-black mb-6 tracking-tight dark:text-white text-dark-black"
          >
            Hi, I’m <span className="neon-text">Salaudeen Afeez</span>
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-500 dark:text-gray-400 mb-8 px-4"
          >
            Full Stack Web Developer | Founder of <span className="dark:text-white text-dark-black">AdeCode&lt;/&gt;</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-slate-300 mb-12"
          >
            Crafting high-performance, visually stunning digital products that bridge the gap between imagination and reality.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a href="#projects" className="btn-primary flex items-center space-x-2 w-full sm:w-auto justify-center">
              <span>View Projects</span>
              <Terminal size={18} />
            </a>
            <a href="#contact" className="btn-secondary w-full sm:w-auto text-center">
              Hire Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-500 cursor-pointer"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
