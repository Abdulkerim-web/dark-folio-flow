import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { supabase } from '../integrations/supabase/client';

const TimelineItem: React.FC<{
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'edu' | 'work';
  index: number;
}> = ({ title, organization, period, description, type, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? -20 : 20 }}
    whileInView={{ opacity: 1, scale: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ 
      type: 'spring', 
      stiffness: 100, 
      damping: 15, 
      delay: index * 0.1 
    }}
    className="group relative pl-12 pb-16 last:pb-0"
  >
    {/* Connector Line */}
    <div className="absolute left-[19px] top-[30px] bottom-0 w-[2px] bg-gradient-to-b from-[#E74C3C] to-transparent last:hidden opacity-30" />
    
    {/* Icon Bubble */}
    <div className="absolute left-0 top-0 w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center group-hover:border-[#E74C3C] transition-colors z-10 shadow-lg">
      {type === 'work' ? (
        <Briefcase className="text-[#E74C3C]" size={18} />
      ) : (
        <GraduationCap className="text-[#E74C3C]" size={18} />
      )}
    </div>

    <div className="glass-panel p-8 rounded-2xl hover:border-[#E74C3C]/30 transition-all duration-500 group-hover:translate-x-2">
      <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
        <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full">
          <Calendar size={12} className="text-[#E74C3C]" />
          {period}
        </span>
        <span className={`px-3 py-1 rounded-full ${type === 'work' ? 'bg-blue-500/10 text-blue-400' : 'bg-purple-500/10 text-purple-400'}`}>
          {type === 'work' ? 'Professional' : 'Academic'}
        </span>
      </div>
      <h3 className="text-2xl font-black mb-1 group-hover:text-[#E74C3C] transition-colors">{title}</h3>
      <h4 className="text-white/70 text-base mb-6 font-medium italic">{organization}</h4>
      <p className="text-gray-400 leading-relaxed max-w-2xl text-lg font-light">{description}</p>
    </div>
  </motion.div>
);

const Timeline: React.FC = () => {
  const [experiences, setExperiences] = useState([
    {
      title: "Bachelor of Information System",
      organization: "Hawassa university",
      period: "2020 - 2024",
      description: "Specialized in Information Systems and Software Development with focus on database design, system architecture, and enterprise web applications. Completed comprehensive coursework in SQL, JavaScript, React, and cloud computing technologies.",
      type: "edu" as const,
    },
    {
      title: "Full Stack Developer",
      organization: "Tech Company",
      period: "2025 - Present",
      description: "Building responsive web platforms and implementing complex features using modern web technologies and best practices.",
      type: "work" as const,
    },
    {
      title: "Bachelor of Business Management",
      organization: "Gokden starts",
      period: "2020 - 2024",
      description: "Advanced Business Management program focusing on strategic leadership, organizational behavior, and innovative business solutions. Developed expertise in project management, financial analysis, and entrepreneurial strategies.",
      type: "edu" as const,
    },
  ]);

  useEffect(() => {
    const fetchExperience = async () => {
      const { data, error } = await supabase
        .from('experience')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching experience:', error);
        return;
      }

      if (data && data.length > 0) {
        setExperiences(data.map(e => ({
          title: e.role,
          organization: e.company,
          period: e.period,
          description: e.description,
          type: e.role.toLowerCase().includes('student') || e.role.toLowerCase().includes('master') || e.role.toLowerCase().includes('degree') ? 'edu' : 'work',
        })));
      }
    };

    fetchExperience();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      {experiences.map((exp, idx) => (
        <TimelineItem key={idx} {...exp} index={idx} />
      ))}
    </div>
  );
};

export default Timeline;