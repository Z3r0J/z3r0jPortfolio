'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: 'cyan' | 'purple' | 'none';
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  glow = 'none',
  ...motionProps
}: GlassCardProps) {
  const glowShadow =
    glow === 'cyan'
      ? 'hover:shadow-[0_0_30px_rgba(96,165,250,0.15)]'
      : glow === 'purple'
        ? 'hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]'
        : '';

  return (
    <motion.div
      className={`
        glass
        ${hover ? 'transition-all duration-300 hover:glass-hover hover:scale-[1.02]' : ''}
        ${glowShadow}
        ${className}
      `}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
