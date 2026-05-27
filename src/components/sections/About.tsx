'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaBriefcase, FaGithub, FaCertificate, FaRocket } from 'react-icons/fa';
import Text from '@/i18n/Text';
import { Section, GlassCard } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const stats = [
  { icon: FaBriefcase, tid: 'aboutYearsExp', color: 'text-accent-cyan' },
  { icon: FaGithub, tid: 'aboutRepos', color: 'text-accent-purple' },
  { icon: FaCertificate, tid: 'aboutCerts', color: 'text-accent-emerald' },
  { icon: FaRocket, tid: 'aboutFounder', color: 'text-accent-amber' },
];

export default function About() {
  return (
    <Section id="about">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* Photo side */}
        <motion.div variants={fadeInUp} className="flex justify-center lg:justify-start">
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 blur-2xl scale-110" />
            <div className="relative overflow-hidden rounded-2xl border border-glass-border">
              <Image
                src="/profilephoto.jpg"
                alt="Jean Carlos Reyes"
                width={400}
                height={400}
                className="object-cover"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg-primary/80 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-2 flex items-center gap-2">
              <span className="text-2xl">&#x1F1E9;&#x1F1F4;</span>
              <span className="text-sm text-text-secondary">Santo Domingo, DR</span>
            </div>
          </div>
        </motion.div>

        {/* Content side */}
        <div className="space-y-6">
          <motion.div variants={fadeInUp}>
            <span className="text-sm font-mono text-accent-cyan uppercase tracking-widest">
              <Text tid="aboutTitle" />
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-text-primary">
              Fullstack .NET Developer
            </h2>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-text-secondary leading-relaxed">
            <Text tid="aboutP1" />
          </motion.p>

          <motion.p variants={fadeInUp} className="text-text-secondary leading-relaxed">
            <Text tid="aboutP2" />
          </motion.p>

          {/* Stats grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 gap-3 pt-4"
          >
            {stats.map(({ icon: Icon, tid, color }) => (
              <motion.div key={tid} variants={fadeInUp}>
                <GlassCard hover={false} className="p-4 flex items-center gap-3">
                  <Icon className={`text-xl ${color}`} />
                  <span className="text-sm text-text-secondary">
                    <Text tid={tid} />
                  </span>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
