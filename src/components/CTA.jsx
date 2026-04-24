import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';

const scrollToPricing = () =>
  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });

const CTA = () => {
  return (
    <section className="section-padding">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative rounded-[2rem] overflow-hidden p-12 md:p-20 text-center"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-indigo-700 to-indigo-900 -z-10"></div>
        {/* Glow orbs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10"></div>

        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-white/10 border border-white/20 rounded-full text-white/70">
          14-day free trial • No credit card required
        </span>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Stop Applying Blindly. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">
            Start Tracking Smartly.
          </span>
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Join thousands of developers who are landing more interviews and better offers by treating their job search like a pro.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            onClick={scrollToPricing}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,255,255,0.2)' }}
            whileTap={{ scale: 0.97 }}
            className="bg-white text-primary hover:bg-white/90 px-10 py-5 rounded-full font-bold text-lg transition-all shadow-2xl flex items-center gap-3"
          >
            Start Your Free Trial <Rocket size={20} />
          </motion.button>
          <motion.button
            onClick={scrollToPricing}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="border border-white/30 text-white hover:bg-white/10 px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center gap-3"
          >
            See Pricing <ArrowRight size={20} />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
