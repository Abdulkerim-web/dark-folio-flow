import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-md">
            <a href="#" className="text-3xl font-black tracking-tighter flex items-center gap-3 mb-6">
               <div className="w-10 h-10 bg-[#E74C3C] rounded-xl flex items-center justify-center">
                 <span className="text-sm">P</span>
               </div>
              PORT<span className="text-[#E74C3C]">FOLIO</span>
            </a>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              Crafting digital excellence through minimalist design and robust engineering. Always pushing the boundaries of what's possible on the web.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
             <div className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#E74C3C]">Navigation</h4>
                <ul className="space-y-4 text-gray-400 font-medium">
                   <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                   <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
                   <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                </ul>
             </div>
             <div className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#E74C3C]">Social</h4>
                <ul className="space-y-4 text-gray-400 font-medium">
                   <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                   <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                   <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                </ul>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <div className="flex gap-6">
            <motion.a whileHover={{ y: -5 }} href="#" className="text-gray-400 hover:text-[#E74C3C] transition-colors">
              <Github size={24} />
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href="#" className="text-gray-400 hover:text-[#E74C3C] transition-colors">
              <Linkedin size={24} />
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href="#" className="text-gray-400 hover:text-[#E74C3C] transition-colors">
              <Twitter size={24} />
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href="#" className="text-gray-400 hover:text-[#E74C3C] transition-colors">
              <Mail size={24} />
            </motion.a>
          </div>

          <p className="text-gray-600 text-sm font-medium order-3 md:order-2">
            &copy; {new Date().getFullYear()} Abdulkerim Abdulmejid. All Rights Reserved.
          </p>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/50 hover:text-white transition-colors order-2 md:order-3"
          >
            Back to Top <ArrowUpCircle size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;