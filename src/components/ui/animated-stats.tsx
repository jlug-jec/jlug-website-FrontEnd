'use client';

import { HyperText } from '@/components/ui/magicui/hyper-text';
import { NumberTicker } from '@/components/ui/magicui/number-ticker';
import { motion } from 'motion/react';

interface StatItem {
  value: number;
  label: string;
  delay?: number;
}

interface AnimatedStatsProps {
  stats: StatItem[];
  className?: string;
}

export function AnimatedStats({ stats, className }: AnimatedStatsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`flex flex-col md:flex-row items-center justify-around w-full max-w-6xl mx-auto px-8 py-12 bg-black/20 backdrop-blur-lg rounded-2xl border border-white/10 ${className}`}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2 + index * 0.2,
            ease: 'easeOut',
          }}
          className="flex flex-col items-center space-y-2 text-center"
        >
          {/* Number with + symbol */}
          <div className="flex items-baseline space-x-1">
            <NumberTicker
              value={stat.value}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              delay={0.5 + index * 0.3}
            />
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              +
            </span>
          </div>

          {/* Animated Label */}
          <div className="mt-2 z-50">
            <HyperText
              className="text-sm md:text-base font-medium text-cyan-400 uppercase tracking-wider"
              duration={1000}
              delay={1 + index * 0.2}
              startOnView={true}
              animateOnHover={false}
            >
              {stat.label}
            </HyperText>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// Default stats for JLUG
export const JLUGStats = () => {
  const stats = [
    { value: 250, label: 'Active Members' },
    { value: 25, label: 'Seminars This Year' },
    { value: 10, label: 'Workshops This Year' },
  ];

  return <AnimatedStats stats={stats} />;
};
