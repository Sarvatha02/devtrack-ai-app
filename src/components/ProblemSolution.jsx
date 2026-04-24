import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    "Losing track of applications in spreadsheets",
    "Missing crucial follow-up deadlines",
    "Zero visibility into search performance",
    "Generic resumes that don't pass ATS"
  ];

  const solutions = [
    "Centralized, automated tracking dashboard",
    "Smart reminders and push notifications",
    "Detailed AI-driven search analytics",
    "AI-powered resume tailoring for each job"
  ];

  return (
    <section className="py-24 relative bg-black/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card border-red-500/20 bg-red-500/[0.02]"
        >
          <h3 className="text-2xl font-bold mb-6 text-red-400">The Struggle</h3>
          <ul className="space-y-4">
            {problems.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-text/60">
                <XCircle className="text-red-500 shrink-0 mt-1" size={20} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card border-accent/20 bg-accent/[0.02]"
        >
          <h3 className="text-2xl font-bold mb-6 text-accent">The Solution</h3>
          <ul className="space-y-4">
            {solutions.map((s, i) => (
              <li key={i} className="flex items-start gap-3 text-text/80 font-medium">
                <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
