import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, X } from 'lucide-react';
import dashboardImage from '../assets/images/dashboard.png';

// ─── Demo Modal ───────────────────────────────────────────────────────────────
const DemoModal = ({ onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    // Prevent background scroll while modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    /* Backdrop — click anywhere outside the card to close */
    <motion.div
      key="demo-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md cursor-pointer"
      onClick={onClose}
    >
      {/* Card — stop propagation so clicking inside doesn't close */}
      <motion.div
        key="demo-card"
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ type: 'spring', stiffness: 280, damping: 26 }}
        className="relative w-full max-w-5xl bg-[#0F172A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Window chrome bar */}
        <div className="flex items-center justify-between px-5 py-3 bg-white/5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="ml-3 text-xs text-white/30 font-mono tracking-wide hidden sm:block">
              app.devtrack.ai/dashboard
            </span>
          </div>

          {/* ✕ Close button — large, always visible */}
          <button
            onClick={onClose}
            aria-label="Close demo"
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-red-500/80 text-white/60 hover:text-white transition-all duration-200"
          >
            <X size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* Dashboard screenshot */}
        <div className="relative">
          <img
            src={dashboardImage}
            alt="DevTrack AI Dashboard Demo"
            className="w-full h-auto block max-h-[70vh] object-cover object-top"
          />

          {/* Bottom overlay with CTA */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent px-8 py-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <p className="text-white font-bold text-lg sm:text-xl mb-1">DevTrack AI Dashboard</p>
              <p className="text-white/50 text-sm">Track applications · AI insights · Never miss a follow-up</p>
            </div>
            <button
              onClick={() => {
                onClose();
                setTimeout(() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }), 200);
              }}
              className="btn-primary shrink-0"
            >
              Get Started Free <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Hint text */}
        <p className="text-center text-xs text-white/20 py-3 border-t border-white/5">
          Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono">Esc</kbd> or click outside to close
        </p>
      </motion.div>
    </motion.div>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const [showDemo, setShowDemo] = useState(false);

  const handleGetStarted = () =>
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-primary/80">
            Backed by Y Combinator (Demo)
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight heading-gradient">
            Stop Guessing. Start <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Tracking
            </span>{' '}
            Your Job Search.
          </h1>

          <p className="text-lg md:text-xl text-text/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            DevTrack AI helps developers organize applications, track progress, and land jobs
            faster with smart insights and AI-powered optimization.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <motion.button
              onClick={handleGetStarted}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary w-full sm:w-auto px-8"
            >
              Get Started Free <ArrowRight size={18} />
            </motion.button>
            <motion.button
              onClick={() => setShowDemo(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-secondary w-full sm:w-auto px-8"
            >
              View Demo <Play size={18} />
            </motion.button>
          </div>
        </motion.div>

        {/* Dashboard Mockup (clickable) */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto group cursor-pointer"
          onClick={() => setShowDemo(true)}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-700"></div>
          <div className="relative bg-[#0F172A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="h-8 bg-white/5 border-b border-white/10 flex items-center gap-2 px-4">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              <span className="ml-3 text-xs text-text/30 font-mono hidden sm:block">
                app.devtrack.ai/dashboard
              </span>
            </div>
            <div className="relative">
              <img
                src={dashboardImage}
                alt="DevTrack AI Dashboard"
                className="w-full h-auto object-cover"
              />
              {/* Play overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-xl">
                  <Play size={24} className="text-white ml-1" fill="white" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 md:-right-12 p-4 glass-card shadow-2xl hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-accent font-bold">🚀</span>
              </div>
              <div className="text-left">
                <p className="text-xs text-text/40">Success Rate</p>
                <p className="text-sm font-bold text-white">+45% this month</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Demo Modal — AnimatePresence MUST wrap the conditional here ── */}
      <AnimatePresence>
        {showDemo && <DemoModal onClose={() => setShowDemo(false)} />}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
