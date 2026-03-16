import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Monitor, X, CheckCircle, ShieldAlert } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-5xl glass-card dark:border-white/10 border-black/5 overflow-hidden shadow-2xl dark:bg-dark-black bg-white mx-2 md:mx-0"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:dark:text-white hover:text-dark-black z-10 transition-colors">
              <X size={24} />
            </button>

            <div className="grid md:grid-cols-2 h-full max-h-[90vh] overflow-y-auto">
              {/* Preview Side */}
              <div className="p-4 md:p-8 space-y-6 bg-primary/[0.03] dark:bg-primary/5">
                <div className="rounded-2xl overflow-hidden border dark:border-white/10 border-black/5 shadow-lg bg-dark-black">
                  <div className="bg-gray-800/50 px-4 py-2 border-b border-white/5 flex items-center space-x-2">
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                    </div>
                    <div className="bg-black/20 px-3 py-0.5 rounded-full text-[10px] text-gray-400 truncate flex-1">
                      {project.url}
                    </div>
                  </div>
                  <iframe
                    src={project.url}
                    className="w-full h-[250px] md:h-[400px] bg-white border-none"
                    title={project.title}
                    loading="lazy"
                  />
                </div>
                
                <div className="flex space-x-4">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 flex items-center justify-center space-x-2">
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  <button 
                    onClick={() => alert("Note: Direct source code access is restricted for security. Please contact me for exploration or collaboration.")}
                    className="btn-secondary flex-1 flex items-center justify-center space-x-2"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </button>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-500 text-[10px] font-bold">
                    <ShieldAlert size={14} />
                    <span>Proprietary Code Protected for Client Security</span>
                </div>
              </div>

              {/* Info Side */}
              <div className="p-4 md:p-8 space-y-8 overflow-y-auto">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-3xl font-black neon-text tracking-tight">{project.title}</h3>
                    <span className="text-[10px] px-2 py-1 rounded-md bg-primary/10 text-primary uppercase tracking-[0.2em] font-black border border-primary/20">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-[10px] font-bold rounded-lg bg-gray-500/10 dark:text-gray-400 text-gray-500 border dark:border-white/5 border-black/5 uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] dark:text-gray-500 text-gray-400">Strategic Case Study</h4>
                    <div className="grid gap-4">
                        <div className="p-5 glass-card border-l-4 border-red-500/50 bg-red-500/[0.02] dark:bg-red-500/[0.02]">
                            <h4 className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em] mb-2 flex items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2 animate-pulse" />
                                The Challenge
                            </h4>
                            <p className="text-sm leading-relaxed dark:text-gray-300 text-gray-600 font-medium">{project.problem}</p>
                        </div>
                        
                        <div className="p-5 glass-card border-l-4 border-primary/50 bg-primary/[0.02] dark:bg-primary/[0.02]">
                            <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 flex items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                                The Strategic Solution
                            </h4>
                            <p className="text-sm leading-relaxed dark:text-gray-300 text-gray-600 font-medium">{project.solution}</p>
                        </div>
                        
                        <div className="p-5 glass-card border-l-4 border-emerald-500/50 bg-emerald-500/[0.02] dark:bg-emerald-500/[0.02]">
                            <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-2 flex items-center">
                                <CheckCircle size={12} className="mr-2" />
                                Key Result
                            </h4>
                            <p className="text-sm leading-relaxed font-bold dark:text-emerald-400 text-emerald-600">{project.result}</p>
                        </div>
                    </div>
                </div>

                <div className="pt-6 border-t dark:border-white/5 border-black/5">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] dark:text-gray-500 text-gray-400 mb-4">Project Narrative</h4>
                  <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative glass-card dark:border-white/5 border-black/5 overflow-hidden cursor-pointer bg-white/50 dark:bg-transparent shadow-sm hover:shadow-xl dark:shadow-none"
      onClick={onClick}
    >
      <div className="p-4">
        {/* Browser Mockup */}
        <div className="relative rounded-xl overflow-hidden border dark:border-white/10 border-black/5 aspect-video mb-4 shadow-2xl bg-black">
          <div className="bg-gray-800/50 px-3 py-1.5 border-b border-white/5 flex items-center justify-between">
            <div className="flex space-x-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/30" />
            </div>
            <div className="bg-white/5 px-2 py-0.5 rounded text-[8px] text-gray-500 truncate max-w-[120px]">
              {project.url}
            </div>
            <Monitor size={10} className="text-gray-600" />
          </div>
          
          <div className="relative h-full scale-100 group-hover:scale-105 transition-transform duration-700">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <iframe 
              src={project.url}
              className="w-full h-full border-none grayscale-[0.5] group-hover:grayscale-0 transition-all pointer-events-none"
              scrolling="no"
              title={project.title}
              loading="lazy"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold dark:text-white text-dark-black group-hover:text-primary transition-colors">{project.title}</h3>
            <span className="text-[10px] px-2 py-1 rounded-md bg-primary/5 text-primary uppercase tracking-widest font-black border border-primary/10">
              {project.category}
            </span>
          </div>
          <p className="dark:text-gray-400 text-gray-600 text-sm line-clamp-2 leading-relaxed font-medium">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.slice(0, 3).map((tech) => (
              <span key={tech} className="text-[10px] font-black text-primary/80 uppercase tracking-tighter">#{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export { ProjectCard, ProjectModal };
