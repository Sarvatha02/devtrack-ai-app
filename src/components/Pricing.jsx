import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Star, X } from 'lucide-react';
import { plans } from '../data/pricing';

const SignupModal = ({ plan, onClose }) => {
  // Close on Escape + lock scroll
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      key="signup-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-pointer"
      onClick={onClose}
    >
      <motion.div
        key="signup-card"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="relative w-full max-w-md glass border border-white/10 rounded-2xl p-8 shadow-2xl cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 mb-4">
            {plan?.popular ? <Zap className="text-primary" size={28} /> : <Star className="text-primary" size={28} />}
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">
            {plan?.popular ? 'Start Pro Trial' : 'Create Free Account'}
          </h3>
          <p className="text-text/50 text-sm">
            {plan?.popular ? '14-day free trial • No credit card required' : 'Free forever • No credit card needed'}
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => { e.preventDefault(); alert('🎉 Account created! Welcome to DevTrack AI.'); onClose(); }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-text/60 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Alex Rivera"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-text/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text/60 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="alex@company.com"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-text/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text/60 mb-2">Password</label>
            <input
              type="password"
              placeholder="Create a strong password"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-text/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 rounded-xl font-bold mt-2 transition-all ${
              plan?.popular
                ? 'bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/25'
                : 'bg-accent text-background hover:bg-accent/90 shadow-xl shadow-accent/25'
            }`}
          >
            {plan?.popular ? '🚀 Start Pro Trial' : '✨ Create Free Account'}
          </motion.button>
        </form>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-white/10 transition-colors text-text/40 hover:text-white text-lg leading-none"
        >
          ✕
        </button>

        <p className="text-center text-xs text-text/30 mt-6">
          By signing up you agree to our{' '}
          <a href="#" className="text-primary/60 hover:text-primary">Terms</a> &{' '}
          <a href="#" className="text-primary/60 hover:text-primary">Privacy Policy</a>.
        </p>
      </motion.div>
    </motion.div>
  );
};

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <section id="pricing" className="py-24 relative bg-black/20 border-y border-white/5">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      <div className="max-w-7xl mx-auto px-6">

      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
        <p className="text-text/60">Choose the plan that's right for your career stage.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`glass-card relative flex flex-col justify-between ${
              plan.popular ? 'border-primary/50' : ''
            }`}
          >
            {/* Popular glow ring */}
            {plan.popular && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 -z-10 blur-sm"></div>
            )}

            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full tracking-widest uppercase shadow-lg shadow-primary/30 flex items-center gap-1.5">
                <Zap size={12} /> Most Popular
              </div>
            )}

            <div>
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-text/40">/month</span>
              </div>
              <p className="text-sm text-text/60 mb-8">{plan.description}</p>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-text/80">
                    <Check size={18} className="text-accent shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <motion.button
              onClick={() => setSelectedPlan(plan)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`w-full py-4 rounded-xl font-bold transition-all duration-300 cursor-pointer ${
                plan.popular
                  ? 'bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20'
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {plan.cta}
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Signup Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <SignupModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
        )}
      </AnimatePresence>
      </div>
    </section>
  );
};

export default Pricing;
