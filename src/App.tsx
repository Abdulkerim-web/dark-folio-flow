import React from 'react';
import { motion, useScroll, useSpring, Variants } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'sonner';
import './global.css';

const MotionHeading: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    },
  };

  const words = title.split(' ');
  const lastWord = words.pop();
  const firstPart = words.join(' ');

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mb-16 text-center"
    >
      {subtitle && (
        <motion.span 
          variants={item}
          className="text-[#E74C3C] font-semibold tracking-widest uppercase mb-4 block"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        variants={item}
        className="text-4xl md:text-6xl font-bold"
      >
        {firstPart} <span className="text-[#E74C3C] text-glow">{lastWord}</span>
      </motion.h2>
      <motion.div 
        variants={item}
        className="h-1 w-24 bg-[#E74C3C] mx-auto mt-6 rounded-full"
      />
    </motion.div>
  );
};

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-[#E74C3C] selection:text-white overflow-x-hidden font-inter">
      <Toaster position="top-right" expand={false} richColors />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#E74C3C] z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <section id="experience" className="py-32 px-6 max-w-7xl mx-auto">
          <MotionHeading title="Career Roadmap" subtitle="My Journey" />
          <Timeline />
        </section>

        <section id="skills" className="py-32 bg-[#050505] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <MotionHeading title="Technical Proficiency" subtitle="What I do" />
            <Skills />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
        </section>

        <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
          <MotionHeading title="Creative Portfolio" subtitle="Recent Works" />
          <Projects />
        </section>

        <section id="contact" className="py-32 bg-[#050505] relative">
          <div className="max-w-4xl mx-auto px-6">
            <MotionHeading title="Let's Connect" subtitle="Contact Me" />
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;