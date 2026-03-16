import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Calendar } from 'lucide-react';

const GithubActivity = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = 'Afacehacker';

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        const data = await response.json();
        if (Array.isArray(data)) {
          setRepos(data);
        }
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <h2 className="section-title mb-2">Code <span className="neon-text">Pulse</span></h2>
            <p className="dark:text-gray-400 text-gray-500 font-medium">Monitoring real-time development activity from my GitHub neural network.</p>
          </div>
          <a 
            href={`https://github.com/${username}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary flex items-center space-x-2 w-fit px-6 shadow-sm"
          >
            <Github size={20} />
            <span>Follow @{username}</span>
          </a>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-48 glass-card animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-6 glass-card border-black/5 dark:border-white/5 hover:border-primary/40 transition-all duration-500 flex flex-col justify-between shadow-sm hover:shadow-xl dark:shadow-none"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Github size={20} />
                    </div>
                    <div className="flex space-x-3 text-gray-400 dark:text-gray-500 text-xs font-bold">
                      <span className="flex items-center space-x-1">
                        <Star size={12} />
                        <span>{repo.stargazers_count}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <GitFork size={12} />
                        <span>{repo.forks_count}</span>
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold dark:text-white text-dark-black mb-2 group-hover:text-primary transition-colors truncate">
                    {repo.name}
                  </h3>
                  <p className="dark:text-gray-500 text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {repo.description || 'No description provided.'}
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-[10px] dark:text-gray-400 text-gray-500 font-black uppercase tracking-wider pt-4 border-t border-black/[0.03] dark:border-white/[0.03]">
                  <div className="flex items-center space-x-2">
                    {repo.language && (
                      <span className="flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{repo.language}</span>
                      </span>
                    )}
                  </div>
                  <span className="flex items-center space-x-1">
                    <Calendar size={10} />
                    <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GithubActivity;
