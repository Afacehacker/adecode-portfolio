import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { downloadCV } from '../utils/downloadCV';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '4+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Happy Clients', value: '50+' },
    { label: 'Success Rate', value: '100%' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden glass-card border-black/5 dark:border-white/10 shadow-3xl group">
                <img 
                    src="/images/adecode_man.png" 
                    alt="Salaudeen Afeez Abolade" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-black/90 via-transparent to-transparent opacity-80" />
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[120px] rounded-full -z-10" />
          </motion.div>

          {/* Text Side */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-8"
          >
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                The Architect
              </div>
              <h2 className="section-title mb-6">About <span className="neon-text">The Dev</span></h2>
              <div className="space-y-6 dark:text-slate-300 text-gray-600 leading-relaxed text-lg font-medium">
                <p>
                  I am <span className="dark:text-white text-dark-black font-black">Salaudeen Afeez Abolade</span>, a visionary Full Stack Developer. 
                  Under the brand <span className="neon-text font-black">AdeCode&lt;/&gt;</span>, I architect high-end digital experiences 
                  that merge cutting-edge technology with world-class design aesthetics.
                </p>
                <p>
                  I have built scalable web applications ranging from social media automation tools to robust e-commerce marketplaces, 
                  NGO platforms, portfolios e.t.c. Formally trained in <span className="dark:text-white text-dark-black font-black">Full Stack Development at Kwara Tech</span>, 
                  my focus is always on delivering premium quality that drives real business growth.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               {['Agile Systems', 'UI/UX Masterclass', 'Secure Architecture', 'Performance Scaling'].map((item) => (
                 <div key={item} className="flex items-center space-x-2 text-xs dark:text-gray-400 text-gray-500 font-bold uppercase tracking-wider">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                   <span>{item}</span>
                 </div>
               ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <button 
                    onClick={downloadCV}
                    className="btn-primary flex-1 py-4 flex items-center justify-center space-x-2 shadow-xl"
                >
                <span className="font-black uppercase tracking-widest text-xs">Download CV</span>
                </button>
                <button 
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="btn-secondary flex-1 py-4 font-black uppercase tracking-widest text-xs shadow-sm"
                >
                    Get In Touch
                </button>
            </div>
          </motion.div>
        </div>

        {/* Stats Row - Restored to dedicated section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-8 glass-card dark:border-white/5 border-black/5 hover:border-primary/20 transition-all duration-500 text-center bg-white/50 dark:bg-transparent shadow-sm hover:shadow-xl dark:shadow-none"
                >
                    <p className="text-4xl font-black neon-text mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
                    <p className="text-[10px] dark:text-gray-500 text-gray-400 uppercase font-black tracking-[0.2em]">{stat.label}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;
