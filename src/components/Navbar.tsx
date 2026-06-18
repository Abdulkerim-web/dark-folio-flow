import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed w-full z-50 top-0"
    >
      <div className="mx-auto px-6 py-6">
        <div className="max-w-7xl mx-auto bg-black/50 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 flex justify-between items-center shadow-2xl">
          <a href="#home" className="text-2xl font-black tracking-tighter group flex items-center gap-2">
            <div className="w-8 h-8 bg-[#E74C3C] rounded-lg rotate-45 group-hover:rotate-0 transition-transform duration-500 flex items-center justify-center">
              <span className="-rotate-45 group-hover:rotate-0 transition-transform text-xs text-white">P</span>
            </div>
            PORT<span className="text-[#E74C3C]">FOLIO</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <motion.a
                whileHover={{ scale: 1.1 }}
                key={link.name}
                href={link.href}
                className="text-[11px] font-black tracking-[0.2em] hover:text-[#E74C3C] transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
          <div className="hidden md:block absolute top-20 right-6 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl px-6 py-4 text-xs text-gray-400">
            Information Systems & Business Management Professional
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-6 right-6 bg-black border border-white/10 rounded-3xl md:hidden overflow-hidden mt-2"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black tracking-tighter hover:text-[#E74C3C]"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;