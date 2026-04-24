import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Loved by Developers</h2>
        <p className="text-text/60">Join 10,000+ developers tracking their way to career success.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-text/80 italic leading-relaxed mb-8">"{t.content}"</p>
            </div>
            
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white/10" />
              <div>
                <h4 className="font-bold text-white">{t.name}</h4>
                <p className="text-xs text-text/40 font-medium uppercase tracking-wider">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
