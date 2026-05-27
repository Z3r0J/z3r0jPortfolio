'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import Text from '@/i18n/Text';
import { Section, GlassCard, Badge } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <Section id="projects">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="text-sm font-mono text-accent-cyan uppercase tracking-widest">
            <Text tid="projectsTitle" />
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
            Things I&apos;ve Built
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <GlassCard
                hover
                glow={project.featured ? 'cyan' : 'none'}
                className="p-6 h-full flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <span className="h-2 w-2 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                    )}
                    <h3 className="text-lg font-semibold text-text-primary">{project.name}</h3>
                  </div>
                  {project.stars && project.stars > 0 && (
                    <span className="flex items-center gap-1 text-xs text-accent-amber">
                      <FaStar />
                      {project.stars}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed flex-grow">
                  <Text tid={project.description} />
                </p>

                {/* Stack */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <Badge key={tech} color="default">{tech}</Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-5 flex items-center gap-4 pt-4 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-text-muted hover:text-accent-cyan transition-colors"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <FaGithub />
                    <span>Source</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-text-muted hover:text-accent-purple transition-colors"
                      aria-label={`Visit ${project.name} live`}
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* More on GitHub */}
        <motion.div variants={fadeInUp} className="mt-12 text-center">
          <a
            href="https://github.com/Z3r0J?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-glass-border px-6 py-3 text-sm text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300"
          >
            <FaGithub />
            <Text tid="viewMore" />
          </a>
        </motion.div>
      </motion.div>
    </Section>
  );
}
