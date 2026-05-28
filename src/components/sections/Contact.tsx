'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane, FaTimes, FaCheck } from 'react-icons/fa';
import Text from '@/i18n/Text';
import { Section, GlassCard } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const contactInfo = [
  { icon: FaEnvelope, label: 'jeanrey.ese@gmail.com', href: 'mailto:jeanrey.ese@gmail.com' },
  { icon: FaPhone, label: '+1 829-935 0913', href: 'tel:+18299350913' },
  { icon: FaLinkedin, label: 'linkedin.com/in/z3r0j', href: 'https://www.linkedin.com/in/z3r0j/' },
  { icon: FaGithub, label: 'github.com/Z3r0J', href: 'https://github.com/Z3r0J' },
];

interface FormValues {
  name: string;
  email: string;
  message: string;
  honeypot: string;
}

export default function Contact() {
  const [inputValue, setInputValue] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
    honeypot: '',
  });
  const [token, setToken] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [sending, setSending] = useState(false);

  // Fetch submission token on mount
  useEffect(() => {
    let cancelled = false;
    const fetchToken = async () => {
      try {
        const res = await fetch('/api/contact/token');
        if (!res.ok) return;
        const data = await res.json();
        if (!cancelled) setToken(data.token);
      } catch {
        // silent — user will see error on submit
      }
    };
    fetchToken();
    return () => { cancelled = true; };
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const refreshToken = async () => {
    try {
      const res = await fetch('/api/contact/token');
      if (res.ok) {
        const data = await res.json();
        setToken(data.token);
      }
    } catch {
      // silent
    }
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: inputValue.name,
          email: inputValue.email,
          message: inputValue.message,
          honeypot: inputValue.honeypot,
          token,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setInputValue({ name: '', email: '', message: '', honeypot: '' });
        // Get fresh token for next submission
        await refreshToken();
      } else {
        setStatus('error');
        // Refresh token if it expired or was consumed
        if (res.status === 401) await refreshToken();
      }
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    } finally {
      setSending(false);
    }
  };

  return (
    <Section id="contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeInUp} className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <Text tid="contactTitle" />
            <span className="text-accent-cyan">.</span>
          </h2>
          <p className="mt-3 text-text-secondary max-w-md mx-auto">
            <Text tid="contactDescription" />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div variants={fadeInUp} className="space-y-4">
            {contactInfo.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group block"
              >
                <GlassCard hover className="p-4 flex items-center gap-4" glow="cyan">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-cyan/10 text-accent-cyan group-hover:bg-accent-cyan/20 transition-colors">
                    <Icon />
                  </div>
                  <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                    {label}
                  </span>
                </GlassCard>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div variants={fadeInUp}>
            <GlassCard hover={false} className="p-6 sm:p-8">
              <form onSubmit={sendEmail} className="space-y-5">
                {/* Honeypot — hidden from real users, bots fill it */}
                <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
                  <label>
                    Website
                    <input
                      type="text"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={inputValue.honeypot}
                      onChange={handleInput}
                    />
                  </label>
                </div>

                <div>
                  <label className="block text-sm text-text-secondary mb-1.5">
                    <Text tid="contactName" /> <span className="text-accent-cyan">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={inputValue.name}
                    onChange={handleInput}
                    required
                    minLength={2}
                    maxLength={100}
                    className="w-full rounded-lg border border-glass-border bg-white/[0.02] px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-all focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-1.5">
                    <Text tid="contactEmail" /> <span className="text-accent-cyan">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={inputValue.email}
                    onChange={handleInput}
                    required
                    maxLength={200}
                    className="w-full rounded-lg border border-glass-border bg-white/[0.02] px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-all focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-1.5">
                    <Text tid="contactMessage" /> <span className="text-accent-cyan">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={inputValue.message}
                    onChange={handleInput}
                    required
                    minLength={10}
                    maxLength={2000}
                    rows={5}
                    className="w-full rounded-lg border border-glass-border bg-white/[0.02] px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-all resize-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending || !token}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-purple px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-cyan/20 transition-all duration-300 hover:shadow-accent-cyan/40 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {sending ? (
                    <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  ) : (
                    <FaPaperPlane className="text-xs" />
                  )}
                  <Text tid="contactSend" />
                </button>
              </form>

              {/* Status toast */}
              {status !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 flex items-center gap-2 rounded-lg p-3 text-sm ${
                    status === 'success'
                      ? 'bg-accent-emerald/10 text-accent-emerald border border-accent-emerald/20'
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}
                >
                  {status === 'success' ? <FaCheck /> : <FaTimes />}
                  <Text tid={status === 'success' ? 'contactSuccess' : 'contactError'} />
                </motion.div>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
