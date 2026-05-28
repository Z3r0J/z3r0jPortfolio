'use client';

import { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { LangContext } from '@/i18n/LangContext';
import Text from '@/i18n/Text';
import { Container, FlagIcon } from '@/components/ui';

const navLinks = [
  { tid: 'navAbout', href: '/#about' },
  { tid: 'navExperience', href: '/#experience' },
  { tid: 'navProjects', href: '/#projects' },
  { tid: 'navSkills', href: '/#skills' },
  { tid: 'navContact', href: '/#contact' },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const langCtx = useContext(LangContext);
  const currentLang = langCtx?.actualLanguage || 'en';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleLangToggle = () => {
    langCtx?.handleChangeLanguages(currentLang === 'en' ? 'es' : 'en');
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          scrolled
            ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-glass-border shadow-lg shadow-black/10'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold tracking-tight group">
              <span className="text-accent-cyan">&lt;Jean</span>
              <span className="text-accent-purple"> Carlos/&gt;</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors group"
                >
                  <Text tid={link.tid} />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 bg-accent-cyan group-hover:w-3/4 transition-all duration-300" />
                </a>
              ))}

              <button
                onClick={handleLangToggle}
                className="ml-4 flex items-center gap-1.5 rounded-full border border-glass-border px-3 py-1.5 text-sm text-text-secondary hover:text-text-primary hover:border-glass-border-hover transition-all"
                aria-label="Toggle language"
              >
                <FlagIcon country={currentLang === 'en' ? 'us' : 'do'} />
                <span className="text-xs font-mono uppercase">{currentLang}</span>
              </button>

              <a
                href="/jean-carlos-reyes-cv.pdf"
                download
                className="ml-3 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple px-5 py-2 text-sm font-medium text-white shadow-lg shadow-accent-cyan/10 hover:shadow-accent-cyan/30 hover:scale-105 transition-all duration-300"
              >
                Resume
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={handleLangToggle}
                className="rounded-full border border-glass-border p-2 text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Toggle language"
              >
                <FlagIcon country={currentLang === 'en' ? 'us' : 'do'} size={24} />
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 text-text-primary"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* Mobile menu overlay — OUTSIDE header for correct positioning */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[55] bg-bg-primary/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (idx + 1) * 0.1 }}
                  className="text-2xl font-medium text-text-secondary hover:text-accent-cyan transition-colors"
                >
                  <Text tid={link.tid} />
                </motion.a>
              ))}

              <motion.a
                href="/jean-carlos-reyes-cv.pdf"
                download
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.1 }}
                className="mt-4 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple px-8 py-3 text-sm font-semibold text-white"
              >
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
