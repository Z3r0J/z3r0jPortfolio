'use client';

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaHeart } from 'react-icons/fa';
import Text from '@/i18n/Text';
import { Container } from '@/components/ui';
import socialLinks from '@/data/social-network';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-glass-border py-8">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-sm text-text-muted">
            &copy; {year} Jean Carlos Reyes. <Text tid="footerRights" />
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target={link.url.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="text-text-muted hover:text-accent-cyan transition-colors"
                  aria-label={link.name}
                >
                  {Icon && <Icon className="text-lg" />}
                </a>
              );
            })}
          </div>

          {/* Built with */}
          <div className="flex items-center gap-1 text-xs text-text-muted">
            <Text tid="footerBuilt" />
            <FaHeart className="text-accent-cyan text-[10px]" />
          </div>
        </div>
      </Container>
    </footer>
  );
}
