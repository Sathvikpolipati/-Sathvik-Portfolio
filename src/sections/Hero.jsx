import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal, Download, ExternalLink } from 'lucide-react';

const ROLES = [
  'SOUL REAPER // OFFENSIVE SECURITY ENGINEER',
  'ETHICAL HACKER & PENETRATION TESTER',
  'FULL-STACK SYSTEM ARCHITECT',
  'AI & MACHINE LEARNING PRACTITIONER',
  'CTF CHALLENGER // @ULTIMATEALIENX401'
];

function useTyping(words) {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const cur = words[idx];
    const speed = deleting ? 30 : 70;
    const timer = setTimeout(() => {
      if (!deleting) {
        setText(cur.slice(0, text.length + 1));
        if (text === cur) { setTimeout(() => setDeleting(true), 2200); return; }
      } else {
        setText(cur.slice(0, text.length - 1));
        if (text === '') { setDeleting(false); setIdx(i => (i + 1) % words.length); return; }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, idx, words]);

  return text;
}

export function Hero({ onResumeClick }) {
  const role = useTyping(ROLES);

  return (
    <section
      id="home"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '7.5rem 2rem 4.5rem',
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
      }}
    >
      {/* ── Top Centered Arc Reactor DP ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ marginBottom: '2.2rem', position: 'relative', display: 'inline-block' }}
      >
        {/* Outer Rotating HUD Segment Ring 1 */}
        <div style={{
          position: 'absolute',
          inset: -20,
          borderRadius: '50%',
          border: '2px dashed rgba(0, 240, 255, 0.4)',
          animation: 'spin-cw 18s linear infinite',
          pointerEvents: 'none',
        }}/>

        {/* Outer Rotating HUD Ring 2 (Gold accent) */}
        <div style={{
          position: 'absolute',
          inset: -12,
          borderRadius: '50%',
          border: '1px dotted rgba(255, 183, 3, 0.6)',
          animation: 'spin-ccw 12s linear infinite',
          pointerEvents: 'none',
        }}/>

        {/* Arc Reactor Core Glow Ring */}
        <div style={{
          position: 'absolute',
          inset: -4,
          borderRadius: '50%',
          background: 'conic-gradient(from 0deg, #00f0ff, #ffb703, #e62429, #00f0ff)',
          animation: 'spin-cw 4s linear infinite',
          zIndex: 0,
        }}/>

        {/* Core Profile DP Frame */}
        <div style={{
          width: 160,
          height: 160,
          borderRadius: '50%',
          padding: 4,
          background: '#06080e',
          position: 'relative',
          zIndex: 2,
          boxShadow: '0 0 35px rgba(0, 240, 255, 0.7), inset 0 0 25px rgba(0, 240, 255, 0.5)',
          animation: 'arc-pulse 3s ease-in-out infinite',
        }}>
          <img
            src="/profile.jpg"
            alt="Sathvik Polipati (Soul Reaper)"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              borderRadius: '50%',
              display: 'block',
            }}
          />
        </div>

        {/* Status Indicator */}
        <div style={{
          position: 'absolute',
          bottom: 4,
          right: 4,
          width: 24,
          height: 24,
          background: 'var(--cyan)',
          border: '3px solid #06080e',
          borderRadius: '50%',
          zIndex: 3,
          boxShadow: '0 0 12px var(--cyan)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '10px',
        }}>
          ⚡
        </div>
      </motion.div>

      {/* ── Main Text & Protocol Badge ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        {/* Protocol Badge with Soul Reaper Handle */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          background: 'rgba(0, 240, 255, 0.08)',
          border: '1px solid rgba(0, 240, 255, 0.3)',
          borderRadius: '100px',
          padding: '0.35rem 1.2rem',
          fontFamily: 'var(--font-hud)',
          fontSize: '0.72rem',
          color: 'var(--cyan)',
          letterSpacing: '0.12em',
          marginBottom: '1.2rem',
          boxShadow: '0 0 15px rgba(0, 240, 255, 0.2)',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--cyan)', boxShadow: '0 0 8px var(--cyan)', display: 'inline-block' }} />
          SOUL REAPER PROTOCOL // SATHVIK POLIPATI &bull; @soulreaper
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: 'var(--font-hud)',
          fontSize: 'clamp(2.6rem, 7.5vw, 5.2rem)',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          lineHeight: 1,
          marginBottom: '0.4em',
          textTransform: 'uppercase',
        }}>
          <span style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #00f0ff 60%, #ffb703 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 30px rgba(0, 240, 255, 0.35))',
          }}>
            Sathvik Polipati
          </span>
        </h1>

        {/* Role Typewriter */}
        <div style={{
          fontFamily: 'var(--font-hud)',
          fontSize: 'clamp(0.95rem, 2.4vw, 1.4rem)',
          color: 'var(--gold)',
          letterSpacing: '0.08em',
          minHeight: '2em',
          marginBottom: '1.4rem',
        }}>
          {role}
          <span style={{ display: 'inline-block', width: 3, height: '1em', background: 'var(--cyan)', marginLeft: 4, verticalAlign: 'middle', animation: 'blink 1s infinite' }} />
        </div>

        {/* Summary Description */}
        <p style={{
          color: 'var(--muted)',
          fontSize: '1.05rem',
          lineHeight: 1.75,
          maxWidth: 580,
          margin: '0 auto 2.2rem',
          fontFamily: 'var(--font-main)',
        }}>
          Operating under handle <strong style={{ color: 'var(--cyan)' }}>@soulreaper</strong>. Computer Science Engineer specialising in <strong style={{ color: '#fff' }}>Offensive Cyber Security</strong>,{' '}
          <strong style={{ color: '#fff' }}>Full-Stack Web Architecture</strong>, and <strong style={{ color: '#fff' }}>AI/Machine Learning</strong>.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '0.9rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn-stark btn-stark-cyan">
            <Terminal size={16} /> Explore Projects
          </a>
          <button className="btn-stark btn-stark-ghost" onClick={onResumeClick}>
            <Download size={16} /> Access Resume
          </button>
          <a href="https://linkedin.com/in/sathvik-polipati" target="_blank" rel="noopener" className="btn-stark btn-stark-ghost">
            <ExternalLink size={16} /> Soul Reaper Network
          </a>
        </div>

        {/* Telemetry Stats Bar */}
        <div style={{
          display: 'flex',
          gap: '2.5rem',
          justifyContent: 'center',
          marginTop: '3.5rem',
          flexWrap: 'wrap',
          borderTop: '1px solid rgba(0, 240, 255, 0.12)',
          paddingTop: '2rem',
        }}>
          {[
            ['3', 'INTERNSHIPS COMPLETED', 'var(--cyan)'],
            ['120 HRS', 'AI & ML TRAINING', 'var(--gold)'],
            ['5★ GOLD', 'HACKERRANK PYTHON', 'var(--green)'],
            ['6+', 'ACCREDITED CERTS', '#ffffff']
          ].map(([val, lbl, color]) => (
            <div key={lbl} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-hud)', fontSize: '1.7rem', fontWeight: 800, color: color, textShadow: `0 0 15px ${color}66` }}>
                {val}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em', marginTop: '0.3rem' }}>
                {lbl}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}