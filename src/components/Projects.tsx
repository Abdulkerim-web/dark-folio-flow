import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { supabase } from '../integrations/supabase/client';

const projectsData = [
  {
    title: 'Nexus Analytics',
    description: 'Next-gen analytics platform featuring real-time stream processing and 3D data visualizations. Built for massive scalability.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/76f71dc4-5bb4-40c1-b93a-5a85974e5315/project-dashboard-d0b4ee03-1774510120934.webp',
    tags: ['Next.js', 'Three.js', 'Go'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Pulse Fitness',
    description: 'AI-driven fitness ecosystem that synchronizes workout data across devices and provides real-time biomechanical feedback.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/76f71dc4-5bb4-40c1-b93a-5a85974e5315/project-fitness-a8f362b9-1774510121220.webp',
    tags: ['React Native', 'TensorFlow', 'PostgreSQL'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Vogue E-Shop',
    description: 'High-end fashion marketplace with integrated AI styling and ultra-fast global delivery checkout system.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/76f71dc4-5bb4-40c1-b93a-5a85974e5315/project-ecommerce-a2e438e5-1774510121465.webp',
    tags: ['Remix', 'Shopify API', 'Tailwind'],
    demo: '#',
    github: '#',
  },
];

const ProjectCard: React.FC<{
  project: typeof projectsData[0];
  index: number;
}> = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ 
      type: 'spring', 
      stiffness: 100, 
      delay: index * 0.1 
    }}
    className="group relative bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/5 hover:border-[#E74C3C]/30 transition-all duration-500"
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
      
      <div className="absolute top-6 right-6 flex gap-3 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <a
          href={project.github}
          className="p-4 bg-white text-black rounded-2xl hover:bg-[#E74C3C] hover:text-white transition-all hover:rotate-12"
        >
          <Github size={20} />
        </a>
        <a
          href={project.demo}
          className="p-4 bg-white text-black rounded-2xl hover:bg-[#E74C3C] hover:text-white transition-all hover:-rotate-12"
        >
          <ExternalLink size={20} />
        </a>
      </div>
    </div>

    <div className="p-8">
      <div className="flex gap-3 mb-6 flex-wrap">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[10px] uppercase font-black tracking-widest text-white/50 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            {tag}
          </span>
        ))}
      </div>
      
      <h3 className="text-3xl font-black mb-4 group-hover:text-[#E74C3C] transition-colors flex items-center gap-2">
        {project.title}
        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
      </h3>
      
      <p className="text-gray-400 text-base leading-relaxed mb-8 font-light">{project.description}</p>

      <motion.button
        whileHover={{ x: 10 }}
        className="text-sm font-black flex items-center gap-2 text-[#E74C3C] tracking-widest uppercase"
      >
        Explore Case Study <div className="w-8 h-[2px] bg-[#E74C3C]" />
      </motion.button>
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  const [projects, setProjects] = useState(projectsData);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching projects:', error);
        return;
      }

      if (data && data.length > 0) {
        setProjects(data.map(p => ({
          title: p.title,
          description: p.description,
          image: p.image_url || '',
          tags: p.tags || [],
          demo: p.live_url || '#',
          github: p.github_url || '#',
        })));
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} project={project} index={idx} />
      ))}
    </div>
  );
};

export default Projects;