import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { ArcReactorBackground } from './components/ArcReactorBackground';
import { CommandPalette } from './components/CommandPalette';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { LearningJourney } from './sections/LearningJourney';
import { Skills } from './sections/Skills';
import { TechOrbit } from './sections/TechOrbit';
import { RadarChart } from './sections/RadarChart';
import { Platforms } from './sections/Platforms';
import { Projects } from './sections/Projects';
import { Certifications } from './sections/Certifications';
import { GitHubActivity } from './sections/GitHubActivity';
import { Contact } from './sections/ContactForm';
import { Footer } from './sections/Footer';
import './index.css';

function ResumeModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(6, 8, 14, 0.9)',
        zIndex: 9999,
        display: 'grid',
        placeItems: 'center',
        backdropFilter: 'blur(12px)',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="hud-glass" style={{ padding: '2.5rem', maxWidth: 520, width: '90%', textAlign: 'center', position: 'relative' }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: '1px solid var(--border)',
            color: 'var(--muted)',
            borderRadius: 8,
            padding: '0.3rem 0.6rem',
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
          }}
        >
          ✕
        </button>
        <div style={{ fontSize: '3rem', marginBottom: '0.8rem' }}>🛡️</div>
        <h3 style={{ fontFamily: 'var(--font-hud)', fontSize: '1.4rem', color: '#fff', marginBottom: '0.6rem' }}>
          STARK DOSSIER // SATHVIK
        </h3>
        <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '2rem' }}>
          Verified technical records, ethical hacking certifications, academic credentials, and project history.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="/resume.html" target="_blank" className="btn-stark btn-stark-cyan" onClick={onClose}>
            Access Dossier (PDF)
          </a>
          <button className="btn-stark btn-stark-ghost" onClick={onClose}>
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [cmdOpen, setCmdOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('light', !dark);
  }, [dark]);

  useEffect(() => {
    const t = setTimeout(() => {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.35 },
        colors: ['#00f0ff', '#ffb703', '#e62429'],
      });
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setCmdOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      <ScrollProgress />
      <ArcReactorBackground />
      <Navbar onCmdOpen={() => setCmdOpen(true)} dark={dark} onThemeToggle={() => setDark((d) => !d)} />
      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />

      <main>
        <Hero onResumeClick={() => setResumeOpen(true)} />
        <div className="divider" />
        <LearningJourney />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <TechOrbit />
        <div className="divider" />
        <RadarChart />
        <div className="divider" />
        <Platforms />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Certifications />
        <div className="divider" />
        <GitHubActivity />
        <div className="divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}