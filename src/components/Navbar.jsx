import { useState, useEffect } from 'react';
import { Terminal, Shield, Sun, Moon } from 'lucide-react';

const LINKS = [
  ['home', 'Core'],
  ['journey', 'Journey'],
  ['orbit', 'Tech Orbit'],
  ['radar', 'Radar'],
  ['platforms', 'Platforms'],
  ['projects', 'Projects'],
  ['certifications', 'Certs'],
  ['github', 'Telemetry'],
  ['contact', 'Connect'],
];

export function Navbar({ onCmdOpen, dark, onThemeToggle }) {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handler = () => {
      const secs = document.querySelectorAll('section[id]');
      let cur = 'home';
      secs.forEach(s => {
        if (window.scrollY >= s.offsetTop - 150) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 14,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 100,
      background: 'rgba(6, 8, 14, 0.85)',
      border: '1px solid rgba(0, 240, 255, 0.25)',
      borderRadius: '100px',
      padding: '0.5rem 1.4rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1.2rem',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 0 25px rgba(0, 240, 255, 0.15)',
      maxWidth: 'calc(100vw - 2rem)',
    }}>
      <a href="#home" style={{
        fontFamily: 'var(--font-hud)',
        fontWeight: 900,
        fontSize: '0.95rem',
        color: '#fff',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
      }}>
        <span style={{ color: 'var(--cyan)', textShadow: '0 0 10px var(--cyan)' }}>⚡</span>
        SOUL REAPER<span style={{ color: 'var(--gold)' }}>.</span>SP
      </a>

      {/* Desktop Links */}
      <ul style={{ display: 'flex', gap: '0.2rem', listStyle: 'none', margin: 0, padding: 0, overflow: 'hidden' }}>
        {LINKS.map(([id, label]) => (
          <li key={id}>
            <a
              href={`#${id}`}
              style={{
                color: active === id ? 'var(--cyan)' : 'var(--muted)',
                textDecoration: 'none',
                fontFamily: 'var(--font-hud)',
                fontSize: '0.72rem',
                letterSpacing: '0.05em',
                padding: '0.35rem 0.65rem',
                borderRadius: '100px',
                background: active === id ? 'rgba(0, 240, 255, 0.12)' : 'transparent',
                border: active === id ? '1px solid rgba(0, 240, 255, 0.3)' : '1px solid transparent',
                transition: 'all 0.2s',
                display: 'block',
                whiteSpace: 'nowrap',
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Controls */}
      <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
        <button
          onClick={onThemeToggle}
          style={{
            background: 'rgba(0, 240, 255, 0.08)',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            borderRadius: '50%',
            width: 32,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--gold)',
            cursor: 'pointer',
          }}
        >
          {dark ? <Sun size={15} /> : <Moon size={15} />}
        </button>

        <button
          onClick={onCmdOpen}
          style={{
            background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(255, 183, 3, 0.15))',
            border: '1px solid rgba(0, 240, 255, 0.35)',
            color: 'var(--cyan)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            padding: '0.35rem 0.8rem',
            borderRadius: '100px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            whiteSpace: 'nowrap',
          }}
        >
          <Terminal size={11} /> CTRL K
        </button>
      </div>
    </nav>
  );
}