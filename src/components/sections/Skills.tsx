'use client';

import { motion } from 'framer-motion';
import {
  SiDotnet, SiNodedotjs, SiExpress, SiReact, SiNextdotjs, SiFlutter,
  SiExpo, SiMysql, SiDocker,
  SiGit, SiJirasoftware, SiJavascript,
  SiOpenai, SiGithubcopilot,
} from 'react-icons/si';
import {
  TbApi, TbComponents, TbBuildingArch, TbHexagons, TbStack2,
  TbBrandAzure, TbSql, TbBrandCSharp, TbLanguage, TbCode,
  TbBrandOpenai,
} from 'react-icons/tb';
import Text from '@/i18n/Text';
import { Section, GlassCard } from '@/components/ui';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';
import { skills } from '@/data/skills';
import { certifications } from '@/data/certifications';

// Icon lookup map
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  SiDotnet, SiNodedotjs, SiExpress, SiReact, SiNextdotjs, SiFlutter,
  SiExpo, SiMysql, SiDocker,
  SiGit, SiJirasoftware, SiJavascript,
  TbApi, TbComponents, TbBuildingArch, TbHexagons, TbStack2,
  TbLanguage, TbSql, TbCode,
  // Mapped aliases for icons renamed/missing in react-icons v5
  SiMicrosoftazure: TbBrandAzure,
  SiMicrosoftsqlserver: TbSql,
  SiCsharp: TbBrandCSharp,
  SiBlazor: SiDotnet,
  // SiClaude doesn't exist in react-icons, use a fallback
  SiClaude: TbCode,
  SiOpenai,
  SiGithubcopilot,
  TbBrandOpenai,
};

const categoryIconColors: Record<string, string> = {
  backend: 'text-accent-cyan',
  frontend: 'text-accent-purple',
  mobile: 'text-accent-pink',
  cloud: 'text-accent-blue',
  database: 'text-accent-emerald',
  integration: 'text-accent-amber',
  architecture: 'text-accent-cyan',
  tools: 'text-text-muted',
};

const spanClasses: Record<string, string> = {
  lg: 'col-span-2 row-span-2',
  md: 'col-span-2 sm:col-span-1 lg:col-span-2',
  sm: 'col-span-1',
};

export default function Skills() {
  return (
    <Section id="skills">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={fadeInUp} className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <Text tid="skillsTitle" />
            <span className="text-accent-cyan">.</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[minmax(100px,auto)]">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];
            const span = spanClasses[skill.gridSpan || 'sm'];
            const colorClass = categoryIconColors[skill.category];

            return (
              <motion.div key={skill.name} variants={scaleIn} className={span}>
                <GlassCard hover className="p-4 h-full flex flex-col items-center justify-center gap-2 text-center">
                  {Icon && <Icon className={`${skill.gridSpan === 'lg' ? 'text-4xl' : 'text-2xl'} ${colorClass}`} />}
                  <span className={`font-medium ${skill.gridSpan === 'lg' ? 'text-base' : 'text-sm'} text-text-primary`}>
                    {skill.name}
                  </span>
                  <span className={`text-[10px] uppercase tracking-wider font-mono ${categoryIconColors[skill.category]}`}>
                    {skill.category}
                  </span>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div variants={fadeInUp} className="mt-20">
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              <Text tid="certsTitle" />
              <span className="text-accent-purple">.</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert) => {
              const Icon = iconMap[cert.icon || ''];
              return (
                <GlassCard key={cert.id} hover={false} className="px-4 py-3 flex items-center gap-3">
                  {Icon && <Icon className="text-lg text-accent-purple" />}
                  <div>
                    <p className="text-sm text-text-primary font-medium">{cert.name}</p>
                    <p className="text-xs text-text-muted">{cert.issuer}</p>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
