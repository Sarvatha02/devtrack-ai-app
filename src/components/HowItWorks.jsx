import React from 'react';
import { motion } from 'framer-motion';
import { Download, Edit3, Trophy } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: "Import Applications",
      desc: "Connect your email or import from LinkedIn/Indeed. We'll automatically sync your application history.",
      icon: Download,
    },
    {
      title: "Optimize & Prepare",
      desc: "Use our AI tools to tailor your resume and prepare for interviews with role-specific practice questions.",
      icon: Edit3,
    },
    {
      title: "Land the Offer",
      desc: "Track interview stages, manage offers, and negotiate like a pro with our compensation insights.",
      icon: Trophy,
    }
  ];

  return (
    <section className="py-24 relative bg-black/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">How It Works</h2>
        <p className="text-text/60">Your journey to a new career, simplified into three simple steps.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 relative">
        {/* Connection Lines (Desktop) */}
        <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-white/5 -z-10"></div>

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 rounded-full glass border border-white/10 flex items-center justify-center mb-8 relative group-hover:border-primary/50 transition-colors shadow-xl">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <step.icon size={32} className="text-primary" />
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-white border-4 border-background">
                {index + 1}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">{step.title}</h3>
            <p className="text-text/60 leading-relaxed px-4">{step.desc}</p>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default HowItWorks;
