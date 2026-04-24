import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: 10000, suffix: '+', label: 'Developers Onboarded', prefix: '' },
  { value: 85, suffix: '%', label: 'Interview Success Rate', prefix: '' },
  { value: 3, suffix: 'x', label: 'Faster Job Placements', prefix: '' },
  { value: 50000, suffix: '+', label: 'Applications Tracked', prefix: '' },
];

const Counter = ({ value, suffix, prefix, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="inline-block glass rounded-2xl px-8 py-8 border border-white/5 hover:border-primary/30 hover:scale-[1.03] hover:shadow-[0_20px_40px_-10px_rgba(79,70,229,0.2)] transition-all duration-300 w-full">
                <p className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-3">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </p>
                <p className="text-sm text-text/50 font-medium tracking-wide">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
