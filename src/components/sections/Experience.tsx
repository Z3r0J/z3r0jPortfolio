'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import Text from '@/i18n/Text';
import { Section, GlassCard, Badge } from '@/components/ui';
import { fadeInUp, staggerContainer, slideInFromLeft, slideInFromRight } from '@/lib/animations';
import { experience } from '@/data/experience';
import { education } from '@/data/education';

export default function Experience() {
  return (
    <Section id="experience">
      {/* Experience */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={fadeInUp} className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <Text tid="experienceTitle" />
            <span className="text-accent-cyan">.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/50 via-accent-purple/50 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {experience.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              const slideVariant = isLeft ? slideInFromLeft : slideInFromRight;

              return (
                <motion.div
                  key={exp.id}
                  variants={slideVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 h-3 w-3 rounded-full bg-accent-cyan border-2 border-bg-primary -translate-x-1.5 md:-translate-x-1.5 z-10 shadow-[0_0_10px_rgba(96,165,250,0.5)]" />

                  {/* Card */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    <GlassCard hover className="p-6" glow="cyan">
                      {/* Period badge */}
                      <span className="text-xs font-mono text-accent-cyan">{exp.period}</span>

                      {/* Role & Company */}
                      <h3 className="mt-2 text-lg font-semibold text-text-primary">{exp.role}</h3>
                      <p className="text-sm text-accent-purple font-medium">
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                        {exp.location && (
                          <span className="text-text-muted"> · {exp.location}</span>
                        )}
                      </p>

                      {/* Description */}
                      <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                        <Text tid={exp.description} />
                      </p>

                      {/* Highlights */}
                      <ul className="mt-3 space-y-1.5">
                        {exp.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm text-text-muted">
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-accent-cyan shrink-0" />
                            <Text tid={h} />
                          </li>
                        ))}
                      </ul>

                      {/* Stack */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {exp.stack.map((tech) => (
                          <Badge key={tech} color="cyan">{tech}</Badge>
                        ))}
                      </div>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-16"
      >
        <motion.div variants={fadeInUp} className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <Text tid="educationTitle" />
            <span className="text-accent-purple">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {education.map((edu) => (
            <motion.div key={edu.id} variants={fadeInUp}>
              <GlassCard hover className="p-6 h-full" glow="purple">
                <FaGraduationCap className="text-2xl text-accent-purple mb-3" />
                <h4 className="font-semibold text-text-primary text-sm">{edu.school}</h4>
                <p className="mt-1 text-xs text-accent-purple">{edu.degree}</p>
                <p className="mt-2 text-xs text-text-muted">
                  {edu.startYear} – {edu.endYear}
                </p>
                <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                  {edu.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
