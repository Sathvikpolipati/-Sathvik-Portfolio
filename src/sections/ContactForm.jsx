import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Mail, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealDiv } from '../components/RevealDiv';
import confetti from 'canvas-confetti';

const CHANNELS = [
  { icon: '✉️', label: 'DIRECT EMAIL', val: 'polipatisathvik@gmail.com', url: 'mailto:polipatisathvik@gmail.com' },
  { icon: '💼', label: 'LINKEDIN NETWORK', val: 'linkedin.com/in/sathvik-polipati', url: 'https://linkedin.com/in/sathvik-polipati' },
  { icon: '💀', label: 'TRYHACKME HANDLE', val: '@ultimatealienx401 (Soul Reaper)', url: 'https://tryhackme.com/p/ultimatealienx401' },
  { icon: '🐙', label: 'GITHUB ARMORY', val: 'github.com/Sathvikpolipati', url: 'https://github.com/Sathvikpolipati' },
];

export function Contact() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    setTimeout(() => {
      // Save contact email to local storage
      const contacts = JSON.parse(localStorage.getItem('soulreaper_contacts') || '[]');
      contacts.push({ email, timestamp: new Date().toISOString() });
      localStorage.setItem('soulreaper_contacts', JSON.stringify(contacts));

      setStatus('success');
      confetti({ particleCount: 110, spread: 80, origin: { y: 0.6 }, colors: ['#00f0ff', '#ffb703', '#e62429'] });
      setEmail('');
      setTimeout(() => setStatus('idle'), 4000);
    }, 700);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <RevealDiv><div className="sec-hud-label">transmission relay</div></RevealDiv>
        <RevealDiv delay={0.1}><h2 className="sec-hud-title">Let's Connect</h2></RevealDiv>
        <RevealDiv delay={0.2}>
          <p className="sec-hud-desc">
            Open for cyber security engineering roles, internships, ethical hacking collaborations, and tech opportunities.
          </p>
        </RevealDiv>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginTop: '3.5rem', alignItems: 'start' }}>
          {/* Direct Transmission Dispatch Box */}
          <RevealDiv delay={0.3}>
            <div className="hud-glass" style={{ padding: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-hud)', fontSize: '1.1rem', color: '#fff', marginBottom: '0.6rem' }}>
                ⚡ Quick Transmission Dispatch
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.4rem' }}>
                Enter your email address below to instantly initiate connection with <strong>Sathvik Polipati (@soulreaper)</strong>.
              </p>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.2rem' }}>
                  <input
                    type="email"
                    placeholder="Enter your official email address..."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      background: '#070a12',
                      border: '1px solid var(--border)',
                      borderRadius: 8,
                      padding: '0.9rem 1.1rem',
                      color: '#fff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-stark btn-stark-cyan"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Send size={15} /> {status === 'loading' ? 'DISPATCHING...' : 'INITIATE CONNECTION'}
                </button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', color: 'var(--green)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}
                    >
                      <CheckCircle size={16} /> Transmission logged! I will reach out promptly.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </RevealDiv>

          {/* Direct Access Channels */}
          <RevealDiv delay={0.4}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {CHANNELS.map(c => (
                <a
                  key={c.label}
                  href={c.url}
                  target="_blank"
                  rel="noopener"
                  className="hud-glass"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.2rem',
                    padding: '1.1rem 1.4rem',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <span style={{ fontSize: '1.6rem' }}>{c.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--font-hud)', fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.08em' }}>
                      {c.label}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--cyan)', marginTop: '0.2rem' }}>
                      {c.val}
                    </div>
                  </div>
                  <ExternalLink size={14} color="var(--muted)" />
                </a>
              ))}
            </div>
          </RevealDiv>
        </div>
      </div>
    </section>
  );
}