import { useState } from 'react';
import { Send, CheckCircle, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealDiv } from '../components/RevealDiv';
import confetti from 'canvas-confetti';

const CHANNELS = [
  { icon: '✉️', label: 'DIRECT EMAIL', val: 'polipatisathvik@gmail.com', url: 'mailto:polipatisathvik@gmail.com?subject=WANT%20to%20Connect!&body=Hi%20Sathvik%2C%0A%0AThank%20you%20for%20reaching%20out%20%E2%80%94%20it%27s%20great%20to%20connect%20with%20you!%0A%0AI%27d%20love%20to%20learn%20more%20about%20what%20you%27re%20working%20on%20and%20see%20where%20our%20paths%20might%20align.%20Feel%20free%20to%20share%20a%20bit%20about%20yourself%2C%20or%20let%20me%20know%20a%20good%20time%20for%20a%20quick%20call%2Fchat.%0A%0ALooking%20forward%20to%20staying%20in%20touch.%0A%0ABest%20regards%2C' },
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

    // Save contact record locally
    const contacts = JSON.parse(localStorage.getItem('soulreaper_contacts') || '[]');
    contacts.push({
      email,
      timestamp: new Date().toISOString(),
      subject: 'WANT to Connect!',
      recipient: 'polipatisathvik@gmail.com'
    });
    localStorage.setItem('soulreaper_contacts', JSON.stringify(contacts));

    // Construct pre-formatted email dispatch to polipatisathvik@gmail.com
    const subject = encodeURIComponent('WANT to Connect!');
    const body = encodeURIComponent(
`Hi Sathvik,

Thank you for reaching out — it's great to connect with you!

Sender Email: ${email}

I'd love to learn more about what you're working on and see where our paths might align. Feel free to share a bit about yourself, or let me know a good time for a quick call/chat.

Looking forward to staying in touch.

Best regards,`
    );

    // Trigger email client dispatch to polipatisathvik@gmail.com
    const mailtoUrl = `mailto:polipatisathvik@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_blank');

    setStatus('success');
    confetti({
      particleCount: 110,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#ffb703', '#e62429']
    });
    setEmail('');
    setTimeout(() => setStatus('idle'), 4000);
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
          {/* Direct Transmission Dispatch Box (Interface Preserved) */}
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
                      <CheckCircle size={16} /> Transmission dispatched to polipatisathvik@gmail.com!
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
