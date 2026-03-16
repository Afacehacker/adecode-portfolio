import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Radio, ShieldCheck, X } from 'lucide-react';
import { WhatsAppIcon } from '../components/Icons';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, sending, success
  const emailAddress = "afaceabolade@gmail.com";

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    
    // Simulate email submission (using mailto for direct client usage in production without backend)
    // Or normally we'd use EmailJS or a custom API.
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const type = formData.get('type');
    const message = formData.get('message');
    
    const subject = `AdeCode Inquiry from ${name} (${type})`;
    const body = `Name: ${name}\nEmail: ${email}\nProject Type: ${type}\n\nMessage:\n${message}`;
    
    setTimeout(() => {
        window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setFormState('success');
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-[10px] font-black uppercase tracking-widest mb-4 border border-red-500/20 shadow-sm">
                <Radio size={12} className="animate-pulse" />
                <span>Available for New Projects</span>
              </div>
              <h2 className="section-title mb-6">Let's Build the <span className="neon-text">Future</span></h2>
              <p className="dark:text-gray-400 text-gray-500 font-medium text-lg">
                Have a groundbreaking idea? Let's turn it into a high-performance digital reality. 
                I'm currently accepting new projects and consulting opportunities.
              </p>
            </div>

            <div className="space-y-6 font-bold">
              <a href={`mailto:${emailAddress}`} className="flex items-center space-x-4 p-4 glass-card border-black/5 dark:border-white/5 group hover:border-primary/50 transition-all shadow-sm">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-dark-black transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-black tracking-widest">Email</p>
                  <p className="font-bold dark:text-white text-dark-black">{emailAddress}</p>
                </div>
              </a>

              <a href="tel:2349078083403" className="flex items-center space-x-4 p-4 glass-card border-black/5 dark:border-white/5 group hover:border-primary/50 transition-all shadow-sm">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-dark-black transition-all">
                  <WhatsAppIcon size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-black tracking-widest">Phone / WhatsApp</p>
                  <p className="font-bold dark:text-white text-dark-black">09078083403</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 glass-card border-black/5 dark:border-white/5 shadow-sm">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-black tracking-widest">Location</p>
                  <p className="font-bold dark:text-white text-dark-black">Lagos, Nigeria (Available Globally)</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              {[
                { icon: <Github />, href: "https://github.com/Afacehacker" },
                { icon: <Linkedin />, href: "#" },
                { icon: <WhatsAppIcon size={20} />, href: "https://wa.me/2349078083403" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl glass-card border-black/5 dark:border-white/5 dark:text-gray-400 text-gray-500 hover:text-primary hover:bg-primary/10 transition-all shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 glass dark:border-white/5 border-black/5 rounded-[2.5rem] shadow-2xl bg-white/50 dark:bg-transparent"
          >
            {formState === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20">
                    <div className="p-6 rounded-full bg-emerald-500/10 text-emerald-500">
                        <ShieldCheck size={48} />
                    </div>
                    <h3 className="text-3xl font-black neon-text tracking-tight">Email Prepared!</h3>
                    <p className="dark:text-gray-400 text-gray-500 font-medium">Your message has been formatted. Please send the prepared email to notify me immediately.</p>
                    <button onClick={() => setFormState('idle')} className="text-primary text-sm font-black uppercase tracking-widest mt-4">Send another message</button>
                </div>
            ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                        <label className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-black tracking-widest ml-4">Full Name</label>
                        <input 
                            name="name"
                            required
                            type="text" 
                            placeholder="John Doe" 
                            className="w-full px-6 py-4 glass-card bg-white/50 dark:bg-transparent dark:text-white text-dark-black border-black/5 dark:border-white/5 focus:border-primary/50 outline-none transition-all placeholder:text-gray-400"
                        />
                        </div>
                        <div className="space-y-2">
                        <label className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-black tracking-widest ml-4">Email Address</label>
                        <input 
                            name="email"
                            required
                            type="email" 
                            placeholder="john@example.com" 
                            className="w-full px-6 py-4 glass-card bg-white/50 dark:bg-transparent dark:text-white text-dark-black border-black/5 dark:border-white/5 focus:border-primary/50 outline-none transition-all placeholder:text-gray-400"
                        />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-black tracking-widest ml-4">Project Type</label>
                        <select name="type" className="w-full px-6 py-4 glass-card bg-white/50 dark:bg-transparent dark:text-white text-dark-black border-black/5 dark:border-white/5 focus:border-primary/50 outline-none transition-all">
                        <option className="bg-white text-black">Full Stack Application</option>
                        <option className="bg-white text-black">Website Redesign</option>
                        <option className="bg-white text-black">API Integration</option>
                        <option className="bg-white text-black">Consultation</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-black tracking-widest ml-4">Message</label>
                        <textarea 
                        name="message"
                        required
                        rows="4" 
                        placeholder="Tell me about your vision..." 
                        className="w-full px-6 py-4 glass-card bg-white/50 dark:bg-transparent dark:text-white text-dark-black border-black/5 dark:border-white/5 focus:border-primary/50 outline-none transition-all placeholder:text-gray-400"
                        />
                    </div>

                    <button 
                        disabled={formState === 'sending'}
                        className="btn-primary w-full py-5 flex items-center justify-center space-x-3 text-lg disabled:opacity-50 shadow-xl"
                    >
                        <span>{formState === 'sending' ? 'Configuring Neural Link...' : 'Engage Initiative'}</span>
                        <Send size={20} />
                    </button>
                </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
