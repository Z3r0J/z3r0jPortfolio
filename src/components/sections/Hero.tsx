'use client';

import { motion } from 'framer-motion';
import { FaDownload, FaArrowDown } from 'react-icons/fa';
import Text from '@/i18n/Text';
import { Container } from '@/components/ui';
import { heroTextReveal, heroStagger } from '@/lib/animations';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent-cyan/10 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent-purple/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-accent-blue/5 blur-[120px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <Container className="relative z-10">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-4xl"
        >
          {/* Greeting badge */}
          <motion.div variants={heroTextReveal} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 px-4 py-2 text-sm text-accent-cyan font-mono">
              <span className="h-2 w-2 rounded-full bg-accent-cyan animate-pulse" />
              <Text tid="heroGreeting" />
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={heroTextReveal}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight gradient-text leading-tight"
          >
            Jean Carlos
            <br />
            Reyes
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={heroTextReveal}
            className="mt-4 text-xl sm:text-2xl text-text-secondary font-light"
          >
            <Text tid="heroTitle" />
          </motion.p>

          {/* Description */}
          <motion.p
            variants={heroTextReveal}
            className="mt-6 max-w-2xl text-base sm:text-lg text-text-muted leading-relaxed"
          >
            <Text tid="heroDescription" />
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={heroTextReveal} className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="/jean-carlos-reyes-cv.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-cyan/20 transition-all duration-300 hover:shadow-accent-cyan/40 hover:scale-105"
            >
              <FaDownload className="text-xs transition-transform group-hover:-translate-y-0.5" />
              <Text tid="heroResume" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-glass-border px-8 py-3.5 text-sm font-semibold text-text-primary backdrop-blur-sm transition-all duration-300 hover:border-glass-border-hover hover:bg-white/5"
            >
              <Text tid="heroContact" />
              <FaArrowDown className="text-xs animate-bounce" />
            </a>
          </motion.div>

          {/* Tech stack pills */}
          <motion.div
            variants={heroTextReveal}
            className="mt-12 flex flex-wrap items-center gap-3"
          >
            <span className="text-xs text-text-muted font-mono uppercase tracking-widest">Stack:</span>
            {['.NET', 'React', 'Node.js', 'Azure', 'SQL Server'].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/5 bg-white/[0.02] px-3 py-1 text-xs text-text-secondary font-mono"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors">
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <div className="h-8 w-5 rounded-full border border-text-muted/30 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="h-1.5 w-1.5 rounded-full bg-accent-cyan"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
