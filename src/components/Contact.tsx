import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import * as Sonner from 'sonner';
import { supabase } from '../integrations/supabase/client';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
        ]);

      if (error) {
        Sonner.toast.error(error.message || 'Could not send message. Please try again.');
        return;
      }

      Sonner.toast.success('Message intercepted! Launching response protocol...');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      Sonner.toast.error('An unexpected error occurred. Please try again later.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid lg:grid-cols-3 gap-12">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-1 space-y-8"
      >
        <h3 className="text-3xl font-black mb-8">Contact Info</h3>
        
        <div className="flex items-start gap-6 group">
          <div className="p-4 bg-[#E74C3C]/10 rounded-2xl group-hover:bg-[#E74C3C] group-hover:text-white transition-all text-[#E74C3C]">
            <MapPin size={24} />
          </div>
          <div>
            <p className="text-sm font-black uppercase text-gray-500 tracking-widest">Location</p>
            <p className="text-lg">Addis Ababa</p>
          </div>
        </div>

        <div className="flex items-start gap-6 group">
          <div className="p-4 bg-[#E74C3C]/10 rounded-2xl group-hover:bg-[#E74C3C] group-hover:text-white transition-all text-[#E74C3C]">
            <Mail size={24} />
          </div>
          <div>
            <p className="text-sm font-black uppercase text-gray-500 tracking-widest">Email</p>
            <p className="text-lg">aabdulmejid5@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start gap-6 group">
          <div className="p-4 bg-[#E74C3C]/10 rounded-2xl group-hover:bg-[#E74C3C] group-hover:text-white transition-all text-[#E74C3C]">
            <Phone size={24} />
          </div>
          <div>
            <p className="text-sm font-black uppercase text-gray-500 tracking-widest">Call</p>
            <p className="text-lg">+251911264314</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="lg:col-span-2 bg-[#0a0a0a] p-10 md:p-14 rounded-3xl border border-white/5 relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
          <Send size={150} />
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label htmlFor="name" className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Identification</label>
              <input
                required
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-black border-b-2 border-white/10 px-0 py-4 focus:border-[#E74C3C] focus:outline-none transition-colors placeholder:text-gray-800 text-xl font-medium"
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="email" className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Electronic Mail</label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full bg-black border-b-2 border-white/10 px-0 py-4 focus:border-[#E74C3C] focus:outline-none transition-colors placeholder:text-gray-800 text-xl font-medium"
              />
            </div>
          </div>
          <div className="space-y-3">
            <label htmlFor="subject" className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Inquiry Subject</label>
            <input
              required
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is this regarding?"
              className="w-full bg-black border-b-2 border-white/10 px-0 py-4 focus:border-[#E74C3C] focus:outline-none transition-colors placeholder:text-gray-800 text-xl font-medium"
            />
          </div>
          <div className="space-y-3">
            <label htmlFor="message" className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Message Content</label>
            <textarea
              required
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Briefly describe your inquiry..."
              className="w-full bg-black border-b-2 border-white/10 px-0 py-4 focus:border-[#E74C3C] focus:outline-none transition-colors resize-none placeholder:text-gray-800 text-xl font-medium"
            ></textarea>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-[#E74C3C] text-white font-black py-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#c0392b] transition-all disabled:opacity-50 shadow-lg shadow-[#E74C3C]/30"
          >
            {isSubmitting ? 'TRANSMITTING...' : (
              <>
                DISPATCH MESSAGE <Send size={20} />
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;