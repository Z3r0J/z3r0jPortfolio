'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaTerminal, FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
  const ref = useRef<HTMLDivElement>(null);

  // Parallax mouse-follow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const cardRotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const cardRotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const glitchX = useTransform(springX, [-0.5, 0.5], [-15, 15]);
  const glitchY = useTransform(springY, [-0.5, 0.5], [-10, 10]);
  const orbX = useTransform(glitchX, (v) => -v);
  const orbY = useTransform(glitchY, (v) => -v);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <main
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
      style={{ perspective: '1000px' }}
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ x: glitchX, y: glitchY }}
          className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-accent-cyan/10 blur-[120px]"
        />
        <motion.div
          style={{ x: orbX, y: orbY }}
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent-purple/10 blur-[120px]"
        />
      </div>

      {/* Star field */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-0.5 w-0.5 rounded-full bg-white/40"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: (i % 5) * 0.4,
            }}
          />
        ))}
      </div>

      {/* Terminal card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ rotateX: cardRotateX, rotateY: cardRotateY, transformStyle: 'preserve-3d' }}
        className="glass relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl"
      >
        {/* Terminal title bar */}
        <div className="flex items-center gap-2 border-b border-glass-border bg-white/[0.02] px-4 py-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex flex-1 items-center justify-center gap-2 text-xs text-text-muted font-mono">
            <FaTerminal className="text-[10px]" />
            <span>jean-reyes — zsh — 404</span>
          </div>
        </div>

        {/* Terminal body */}
        <div className="p-6 sm:p-10 font-mono">
          {/* Glitch 404 */}
          <div className="flex justify-center mb-8">
            <motion.h1
              style={{ x: glitchX, y: glitchY }}
              className="glitch-404 text-7xl sm:text-9xl font-bold text-text-primary"
              data-text="404"
            >
              404
            </motion.h1>
          </div>

          {/* Shell output */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.4, delayChildren: 0.5 } },
            }}
            className="space-y-2 text-sm sm:text-base"
          >
            <motion.p
              variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
              className="text-text-secondary"
            >
              <span className="text-accent-cyan">$</span> cd /page-not-found
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
              className="text-accent-purple"
            >
              cd: no such file or directory
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
              className="text-text-secondary"
            >
              <span className="text-accent-cyan">$</span> locate page
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
              className="text-text-muted"
            >
              Error 404: this resource drifted off into space 🚀
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
              className="text-text-secondary flex items-center"
            >
              <span className="text-accent-cyan">$</span>
              <span className="ml-2 inline-block h-4 w-2.5 bg-accent-cyan blink-cursor align-middle" />
            </motion.p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-purple px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-cyan/20 transition-all duration-300 hover:shadow-accent-cyan/40 hover:scale-[1.02]"
            >
              <FaArrowLeft className="text-xs transition-transform group-hover:-translate-x-0.5" />
              cd ~/home
            </Link>
            <Link
              href="/social"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-glass-border px-6 py-3 text-sm font-semibold text-text-secondary transition-all duration-300 hover:border-accent-cyan/30 hover:text-text-primary"
            >
              ls ~/social
            </Link>
          </motion.div>
        </div>

        {/* Scanline overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent 0 2px, rgba(96,165,250,1) 3px 4px)',
          }}
        />
      </motion.div>
    </main>
  );
}
