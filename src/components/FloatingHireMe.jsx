import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Mail, X, Send } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

const FloatingHireMe = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      icon: <WhatsAppIcon size={20} />,
      label: "WhatsApp",
      value: "09078083403",
      href: "https://wa.me/2349078083403",
      color: "bg-green-500"
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "afaceabolade@gmail.com",
      href: "mailto:afaceabolade@gmail.com",
      color: "bg-primary"
    }
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            className="absolute bottom-20 right-0 w-[calc(100vw-2rem)] sm:w-72 mb-4 overflow-hidden"
          >
            <div className="glass rounded-3xl p-6 shadow-2xl border border-primary/30 origin-bottom-right">
              <h3 className="text-xl font-bold neon-text mb-4 flex items-center">
                <Send size={18} className="mr-2" />
                Hire AdeCode
              </h3>
              <p className="text-gray-400 text-xs mb-6">Let's discuss your next big project and build something extraordinary together.</p>
              
              <div className="space-y-3">
                {contacts.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group"
                  >
                    <div className={`p-2 rounded-xl ${contact.color} text-dark-black group-hover:scale-110 transition-transform`}>
                      {contact.icon}
                    </div>
                    <div className="ml-3">
                      <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{contact.label}</p>
                      <p className="text-sm font-medium text-white truncate w-40">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="mt-6 block w-full py-3 text-center rounded-2xl bg-gradient-to-r from-primary to-secondary text-dark-black font-bold text-sm shadow-lg shadow-primary/20"
              >
                Send a Message
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-6 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-dark-black font-bold shadow-[0_0_30px_rgba(0,242,254,0.4)] relative z-10"
      >
        {isOpen ? <X size={24} /> : (
          <>
            <MessageSquare size={24} />
            <span>Hire AdeCode&lt;/&gt;</span>
          </>
        )}
      </motion.button>
    </div>
  );
};

export default FloatingHireMe;
