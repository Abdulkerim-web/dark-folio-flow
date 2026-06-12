import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, MousePointer2 } from 'lucide-react';

const Hero: React.FC = () => {
  const titleVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#E74C3C]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#E74C3C]/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center z-10">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={childVariants} className="flex items-center gap-2 mb-6">
            <div className="w-10 h-[2px] bg-[#E74C3C]" />
            <span className="text-[#E74C3C] font-semibold tracking-widest uppercase">
              Available for work
            </span>
          </motion.div>

          <motion.h1 
            variants={childVariants}
            className="text-5xl md:text-8xl font-black leading-[1.1] mb-8 tracking-tighter"
          >
            Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E74C3C] via-white to-gray-500">
              Visionary.
            </span>
          </motion.h1>

          <motion.p 
            variants={childVariants}
            className="text-gray-400 text-lg md:text-2xl mb-12 max-w-lg leading-relaxed font-light"
          >
            Building high-performance web applications with precision and passion. Currently bridging the gap between design and scalable code.
          </motion.p>
          
          <motion.div variants={childVariants} className="flex flex-wrap gap-6 items-center">
            <a
              href="#projects"
              className="px-10 py-5 bg-[#E74C3C] text-white font-black rounded-full flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_-10px_rgba(231,76,60,0.5)]"
            >
              PROJECTS
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
            </a>
            <div className="flex gap-6 items-center">
              <a href="#" className="p-3 text-gray-400 hover:text-white hover:scale-110 transition-all border border-transparent hover:border-white/10 rounded-full">
                <Github size={26} />
              </a>
              <a href="#" className="p-3 text-gray-400 hover:text-white hover:scale-110 transition-all border border-transparent hover:border-white/10 rounded-full">
                <Linkedin size={26} />
              </a>
              <a href="#" className="p-3 text-gray-400 hover:text-white hover:scale-110 transition-all border border-transparent hover:border-white/10 rounded-full">
                <Mail size={26} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative justify-self-center lg:justify-self-end"
        >
          <div className="relative w-72 h-80 md:w-[450px] md:h-[550px]">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-40 h-40 border-2 border-[#E74C3C]/20 rounded-full border-dashed -z-10"
            />
            
            <div className="absolute inset-0 bg-[#E74C3C] translate-x-6 translate-y-6 -z-10 rounded-2xl opacity-20" />
            <div className="absolute inset-0 border-2 border-[#E74C3C] translate-x-3 translate-y-3 -z-10 rounded-2xl" />
            
            <div className="w-full h-full overflow-hidden rounded-2xl shadow-2xl bg-[#0a0a0a]">
              <img
                src={`${import.meta.env.BASE_URL}7043-removebg-preview.jpg`}
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error('Image failed to load from:', e.currentTarget.src);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 glass-panel p-6 rounded-xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#E74C3C] p-3 rounded-lg">
                  <MousePointer2 className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Status</p>
                  <p className="text-sm font-bold">Open for Collaboration</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Scroll</span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-[#E74C3C] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
