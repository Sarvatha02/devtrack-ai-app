import React from 'react';
import { motion } from 'framer-motion';
import { features } from '../data/features';

const Features = () => {
  return (
    <section id="features" className="section-padding">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Powerful Features for <br /> Modern Developers</h2>
        <p className="text-text/60 max-w-2xl mx-auto">
          We've built everything you need to manage your career growth and land your next role at top-tier companies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card group hover:border-primary/50 relative overflow-hidden"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
              <feature.icon className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-text/60 leading-relaxed">
              {feature.description}
            </p>
            
            {/* Hover Glow */}
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
