import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, FileText, Globe } from 'lucide-react';
import { WhatsAppIcon } from '../components/Icons';

const Footer = () => {
  const [modalType, setModalType] = useState(null); // 'privacy', 'terms'
  const currentYear = new Date().getFullYear();

  const toggleModal = (type) => setModalType(type);

  const Modal = ({ title, content, onClose }) => (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        />
        <motion.div 
            initial={{ scale: 0.9, y: 20 }} 
            animate={{ scale: 1, y: 0 }} 
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl glass-card p-8 overflow-y-auto max-h-[80vh] shadow-2xl"
        >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
                <X size={24} />
            </button>
            <h3 className="text-2xl font-bold neon-text mb-6 flex items-center">
                {title === 'Privacy Policy' ? <Shield className="mr-2" /> : <FileText className="mr-2" />}
                {title}
            </h3>
            <div className="space-y-4 opacity-80 text-sm leading-relaxed">
                {content}
            </div>
            <button onClick={onClose} className="mt-8 btn-primary w-full py-3">Accept & Close</button>
        </motion.div>
    </div>
  );

  return (
    <footer className="py-12 border-t border-gray-500/10 relative mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-2xl font-bold neon-text tracking-tighter">AdeCode&lt;/&gt;</span>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">Engineering The Future</p>
          </div>

          <div className="text-gray-500 text-sm font-medium">
            &copy; {currentYear} | Designed & Engineered by 
            <span className="text-primary ml-1 font-bold">Salaudeen Afeez Abolade</span>
          </div>

          <div className="flex space-x-8 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            <button onClick={() => toggleModal('privacy')} className="hover:text-primary transition-colors cursor-pointer">Privacy</button>
            <button onClick={() => toggleModal('terms')} className="hover:text-primary transition-colors cursor-pointer">Terms</button>
            <a href="https://wa.me/2349078083403" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-primary border-b border-primary/30 flex items-center">
              <WhatsAppIcon size={12} className="mr-1" />
              Connect
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {modalType === 'privacy' && (
            <Modal 
                title="Privacy Policy"
                onClose={() => setModalType(null)}
                content={
                    <>
                        <p>At AdeCode, we prioritize your security. This project, like all our client work, adheres to strict data protection standards.</p>
                        <p><strong>1. Data Collection:</strong> We only collect information voluntarily provided via the inquiry form to facilitate project discussions.</p>
                        <p><strong>2. Usage:</strong> Your contact details are never shared with third parties. They are used exclusively for official communication from Salaudeen Afeez.</p>
                        <p><strong>3. Code Security:</strong> Public repositories for client projects are restricted. Source code is stored on secure, private servers to protect intellectual property.</p>
                    </>
                }
            />
        )}
        {modalType === 'terms' && (
            <Modal 
                title="Terms of Service"
                onClose={() => setModalType(null)}
                content={
                    <>
                        <p>Welcome to AdeCode. By using this portfolio or engaging our services, you agree to the following terms:</p>
                        <p><strong>1. Service Provision:</strong> All software is delivered with a 100% satisfaction guarantee. Post-deployment maintenance details are defined in individual service agreements.</p>
                        <p><strong>2. Intellectual Property:</strong> Designs and custom code provided to clients remain the client's property upon full payment. Portfolio demonstrations are proprietary to AdeCode.</p>
                        <p><strong>3. Fair Use:</strong> You are encouraged to explore the live demos; however, unauthorized cloning of the UI/UX architecture for commercial use is prohibited.</p>
                    </>
                }
            />
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
