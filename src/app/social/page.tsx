'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import Text from '@/i18n/Text';
import { Container, GlassCard } from '@/components/ui';
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/animations';
import socialLinks from '@/data/social-network';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
};

const accentMap: Record<string, string> = {
  LinkedIn: 'text-[#0a66c2]',
  GitHub: 'text-text-primary',
  Instagram: 'text-[#e1306c]',
  Email: 'text-accent-cyan',
};

export default function SocialPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 pt-28">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent-cyan/10 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent-purple/10 blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-md mx-auto"
        >
          {/* Profile */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center text-center mb-10">
            <div className="relative mb-6">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-cyan/30 to-accent-purple/30 blur-2xl scale-110" />
              {/* Photo */}
              <div className="relative h-32 w-32 sm:h-36 sm:w-36 overflow-hidden rounded-full border-2 border-glass-border">
                <Image
                  src="/me.png"
                  alt="Jean Carlos Reyes"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Online indicator */}
              <div className="absolute bottom-2 right-2 h-4 w-4 rounded-full bg-accent-emerald border-2 border-bg-primary shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Jean Carlos Reyes</h1>
            <p className="mt-2 text-sm text-text-secondary">
              Application Development Engineer
            </p>
            <p className="mt-1 text-xs text-text-muted">
              <Text tid="socialDescription" />
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.div variants={fadeInUp} className="text-center mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 px-4 py-1.5 text-xs text-accent-cyan font-mono">
              <span className="h-2 w-2 rounded-full bg-accent-cyan animate-pulse" />
              <Text tid="socialTagline" />
            </span>
          </motion.div>

          {/* Links */}
          <motion.div variants={staggerContainer} className="space-y-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              const accent = accentMap[link.name] || 'text-text-primary';
              const isMailto = link.url.startsWith('mailto:');
              const displayLabel = isMailto ? link.url.replace('mailto:', '') : link.name;

              return (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target={isMailto ? undefined : '_blank'}
                  rel={isMailto ? undefined : 'noopener noreferrer'}
                  variants={scaleIn}
                  className="block group"
                >
                  <GlassCard hover glow="cyan" className="p-4 flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ${accent} group-hover:bg-white/10 transition-colors`}>
                      {Icon && <Icon className="text-xl" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-text-primary">{link.name}</div>
                      <div className="text-xs text-text-muted truncate">
                        {isMailto ? displayLabel : link.url.replace(/^https?:\/\//, '')}
                      </div>
                    </div>
                    <FaArrowRight className="text-text-muted group-hover:text-accent-cyan group-hover:translate-x-1 transition-all" />
                  </GlassCard>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Back to portfolio */}
          <motion.div variants={fadeInUp} className="mt-10 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent-cyan transition-colors"
            >
              ← Back to Portfolio
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </main>
  );
}
