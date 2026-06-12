import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Smartphone, Terminal, Cpu, Globe, Lock } from 'lucide-react';
import { supabase } from '../integrations/supabase/client';

interface SkillItem {
  name: string;
  level: number;
  icon: React.ReactNode;
}

const SkillCard: React.FC<{
  name: string;
  level: number;
  icon: React.ReactNode;
  index: number;
}> = ({ name, level, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    whileHover={{ y: -10, transition: { duration: 0.2 } }}
    viewport={{ once: true }}
    transition={{ 
      type: 'spring', 
      stiffness: 100, 
      delay: index * 0.05 
    }}
    className="relative bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl group overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E74C3C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="text-[#E74C3C] mb-6 p-4 bg-[#E74C3C]/5 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>

    <h3 className="text-xl font-black mb-6">{name}</h3>

    <div className="space-y-4">
      <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-[#E74C3C] to-[#c0392b] relative"
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </motion.div>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">Mastery</span>
        <span className="text-sm font-bold text-[#E74C3C]">{level}%</span>
      </div>
    </div>
  </motion.div>
);

const iconMap: Record<string, React.ReactNode> = {
  Terminal: <Terminal size={32} />,
  Layout: <Layout size={32} />,
  Server: <Server size={32} />,
  Smartphone: <Smartphone size={32} />,
  Database: <Database size={32} />,
  Cpu: <Cpu size={32} />,
  Globe: <Globe size={32} />,
  Lock: <Lock size={32} />,
  Code2: <Code2 size={32} />,
};

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<SkillItem[]>([
    { name: 'Data Analyst', level: 90, icon: <Database size={32} /> },
    { name: 'Frontend', level: 98, icon: <Layout size={32} /> },
    { name: 'Backend', level: 90, icon: <Server size={32} /> },
    { name: 'Mobile', level: 85, icon: <Smartphone size={32} /> },
    { name: 'Data Science', level: 82, icon: <Database size={32} /> },
    { name: 'Machine Learning', level: 88, icon: <Cpu size={32} /> },
    { name: 'Networking', level: 75, icon: <Globe size={32} /> },
    { name: 'Security', level: 80, icon: <Lock size={32} /> },
    { name: 'JavaScript', level: 95, icon: <Code2 size={32} /> },
  ]);

  useEffect(() => {
    const fetchSkills = async () => {
      const { data, error } = await supabase
        .from('skills')
        .select('*');

      if (error) {
        console.error('Error fetching skills:', error);
        return;
      }

      if (data && data.length > 0) {
        setSkills(data.map(s => ({
          name: s.name,
          level: 90,
          icon: iconMap[s.icon_name] || <Code2 size={32} />,
        })));
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((skill, idx) => (
        <SkillCard key={idx} {...skill} index={idx} />
      ))}
    </div>
  );
};

export default Skills;