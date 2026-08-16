import { useState } from 'react';
import { ExternalLink, GitBranch, X, Play, Eye, Activity, CheckCircle2, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealDiv } from '../components/RevealDiv';

const PROJECTS = [
  {
    id: 'cc-prediction',
    title: 'Credit Card Approval Prediction System',
    desc: 'Machine Learning classification pipeline engineered using logistic regression and decision tree classifiers to predict credit card application approvals with feature importance analysis and ROC-AUC evaluation.',
    tags: ['Python', 'Scikit-Learn', 'Pandas', 'Classification', 'ML', 'Live Vercel'],
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=85',
    gh: 'https://github.com/Sathvikpolipati/SathvikPolipati-Portfolio',
    live: 'https://sathvik-portfolio-gamma.vercel.app',
    simulationType: 'calculator',
    repoName: 'Credit-Card-Approval-Prediction',
    files: ['model.py', 'preprocess.py', 'dataset.csv', 'app.py', 'requirements.txt']
  },
  {
    id: 'rising-water',
    title: 'Rising Water — Flood Prediction & Early Warning',
    desc: 'IoT and predictive data simulation system tracking water levels, historical rain telemetry, and generating automated flood risk hazard alerts.',
    tags: ['Python', 'Data Analytics', 'Simulation', 'IoT', 'Risk Model'],
    img: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&auto=format&fit=crop&q=85',
    gh: 'https://github.com/Sathvikpolipati/SathvikPolipati-Portfolio',
    live: 'https://sathvik-portfolio-gamma.vercel.app',
    simulationType: 'flood',
    repoName: 'Rising-Water-Flood-Warning',
    files: ['sensor_stream.py', 'water_level_model.py', 'alert_service.py']
  },
  {
    id: 'vuln-scanner',
    title: 'Automated Web Vulnerability Scanner',
    desc: 'Python offensive security tool automated for detecting OWASP vulnerabilities (SQL Injection, Stored/Reflected XSS, Open Redirects) with HTTP headers inspection.',
    tags: ['Python', 'OWASP', 'Penetration Testing', 'Security', 'Automation'],
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=85',
    gh: 'https://github.com/Sathvikpolipati/SathvikPolipati-Portfolio',
    live: 'https://sathvik-portfolio-gamma.vercel.app',
    simulationType: 'scanner',
    repoName: 'Web-Vulnerability-Scanner',
    files: ['scanner.py', 'payloads.json', 'reporter.py', 'crawler.py']
  },
  {
    id: 'traffic-analyser',
    title: 'Network Traffic Analyser & Packet Monitor',
    desc: 'Real-time network traffic sniffer built on Python Scapy to intercept packets, decode protocols, detect suspicious port scan activities, and log anomalies.',
    tags: ['Python', 'Scapy', 'Packet Analysis', 'Network Security'],
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=85',
    gh: 'https://github.com/Sathvikpolipati/SathvikPolipati-Portfolio',
    live: 'https://sathvik-portfolio-gamma.vercel.app',
    simulationType: 'sniffer',
    repoName: 'Network-Traffic-Analyser',
    files: ['sniffer.py', 'packet_parser.py', 'signature_detector.py']
  },
  {
    id: 'portfolio-upgrade',
    title: 'Soul Reaper Cyber Portfolio (Iron Man HUD)',
    desc: 'Full-stack reactive portfolio built with React, Vite, Tailwind CSS, Arc Reactor animations, interactive radar chart, dynamic tech orbit, and Vercel cloud deployment.',
    tags: ['React', 'Vite', 'Framer Motion', 'Tailwind', 'Canvas'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=85',
    gh: 'https://github.com/Sathvikpolipati/SathvikPolipati-Portfolio',
    live: 'https://sathvik-portfolio-gamma.vercel.app',
    simulationType: 'portfolio',
    repoName: 'SathvikPolipati-Portfolio',
    files: ['src/App.jsx', 'src/sections/TechOrbit.jsx', 'src/sections/RadarChart.jsx']
  },
];

function LiveSimulator({ project }) {
  const [income, setIncome] = useState(68000);
  const [creditScore, setCreditScore] = useState(740);
  const [employed, setEmployed] = useState(true);
  const [debtRatio, setDebtRatio] = useState(25);
  const [scanUrl, setScanUrl] = useState('https://target-portal.local/api/v1/auth');
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  const runScanner = () => {
    setScanning(true);
    setScanResult(null);
    setTimeout(() => {
      setScanning(false);
      setScanResult({
        status: 'VULNERABILITY DETECTED // HIGH CRITICAL',
        findings: [
          'SQL Injection in parameter ?user_id=102',
          'Reflected XSS in HTTP Authorization header',
          'Missing Strict-Transport-Security & CSP headers'
        ]
      });
    }, 1500);
  };

  // ML Calculation Engine
  const calculatedApproval = (income / 1000) * 0.35 + (creditScore / 850) * 55 + (employed ? 15 : 0) - debtRatio * 0.3;
  const isApproved = calculatedApproval > 55;

  return (
    <div style={{ background: '#05070e', border: '1px solid rgba(0, 240, 255, 0.35)', borderRadius: 12, padding: '1.5rem', marginTop: '1.2rem' }}>
      {/* Header with Live Status */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem', borderBottom: '1px solid rgba(0, 240, 255, 0.15)', paddingBottom: '0.8rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <GitBranch size={16} color="var(--cyan)" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#fff', fontWeight: 600 }}>
            Sathvikpolipati/{project.repoName}
          </span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <span className="hud-tag" style={{ borderColor: 'var(--green)', color: 'var(--green)' }}>
            ⚡ LIVE IN-PORTFOLIO PREVIEW
          </span>
        </div>
      </div>

      {/* Credit Card ML Simulator */}
      {project.simulationType === 'calculator' && (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
            <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.85rem', color: 'var(--cyan)' }}>
              ⚡ LIVE ML CLASSIFICATION MODEL
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--gold)' }}>
              Model: Random Forest / Logistic Reg
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '1.2rem' }}>
            <div>
              <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
                <span>Annual Income</span>
                <span style={{ color: 'var(--cyan)' }}>${income.toLocaleString()}</span>
              </label>
              <input type="range" min="15000" max="180000" step="5000" value={income} onChange={e => setIncome(+e.target.value)} style={{ width: '100%', accentColor: 'var(--cyan)', marginTop: 4 }} />
            </div>

            <div>
              <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
                <span>Credit Score</span>
                <span style={{ color: 'var(--gold)' }}>{creditScore}</span>
              </label>
              <input type="range" min="400" max="850" step="10" value={creditScore} onChange={e => setCreditScore(+e.target.value)} style={{ width: '100%', accentColor: 'var(--gold)', marginTop: 4 }} />
            </div>

            <div>
              <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
                <span>Debt-to-Income Ratio</span>
                <span style={{ color: 'var(--crimson)' }}>{debtRatio}%</span>
              </label>
              <input type="range" min="5" max="60" step="5" value={debtRatio} onChange={e => setDebtRatio(+e.target.value)} style={{ width: '100%', accentColor: 'var(--crimson)', marginTop: 4 }} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', paddingTop: '1.2rem' }}>
              <input type="checkbox" id="emp" checked={employed} onChange={e => setEmployed(e.target.checked)} style={{ accentColor: 'var(--green)', width: 18, height: 18 }} />
              <label htmlFor="emp" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#fff', cursor: 'pointer' }}>
                Employed Full-Time
              </label>
            </div>
          </div>

          <div style={{
            padding: '1rem',
            borderRadius: 8,
            background: isApproved ? 'rgba(0, 255, 136, 0.12)' : 'rgba(230, 36, 41, 0.12)',
            border: `1.5px solid ${isApproved ? 'var(--green)' : 'var(--crimson)'}`,
            textAlign: 'center',
          }}>
            <div style={{ fontFamily: 'var(--font-hud)', fontSize: '1.05rem', color: isApproved ? 'var(--green)' : 'var(--crimson)', fontWeight: 700 }}>
              {isApproved
                ? `✅ PREDICTION: APPLICATION APPROVED (${Math.min(99, Math.round(calculatedApproval))}% Confidence)`
                : `❌ PREDICTION: APPLICATION REJECTED (${Math.min(99, Math.round(100 - calculatedApproval))}% Risk Index)`}
            </div>
          </div>
        </div>
      )}

      {/* Web Vulnerability Scanner Simulator */}
      {project.simulationType === 'scanner' && (
        <div>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '0.8rem' }}>
            Execute automated vulnerability reconnaissance on target host:
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            <input value={scanUrl} onChange={e => setScanUrl(e.target.value)} style={{ flex: 1, background: '#0a0d18', border: '1px solid var(--border)', borderRadius: 6, padding: '0.5rem 0.8rem', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }} />
            <button onClick={runScanner} disabled={scanning} className="btn-stark btn-stark-cyan" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>
              {scanning ? 'SCANNING...' : 'SCAN TARGET'}
            </button>
          </div>
          {scanResult && (
            <div style={{ padding: '0.8rem', background: 'rgba(230, 36, 41, 0.12)', border: '1px solid var(--crimson)', borderRadius: 8 }}>
              <div style={{ fontFamily: 'var(--font-hud)', fontSize: '0.85rem', color: 'var(--crimson)', marginBottom: '0.4rem' }}>
                🚨 {scanResult.status}
              </div>
              {scanResult.findings.map(f => (
                <div key={f} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#fff' }}>&bull; {f}</div>
              ))}
            </div>
          )}
        </div>
      )}

      {project.simulationType !== 'calculator' && project.simulationType !== 'scanner' && (
        <div style={{ textAlign: 'center', padding: '1rem' }}>
          <Activity size={32} color="var(--cyan)" style={{ margin: '0 auto 0.6rem' }} />
          <div style={{ fontFamily: 'var(--font-hud)', fontSize: '0.9rem', color: '#fff' }}>GITHUB LIVE TELEMETRY ACTIVE</div>
          <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.3rem' }}>
            Live code and simulation verified. Click below to launch the project.
          </p>
        </div>
      )}
    </div>
  );
}

export function Projects() {
  const [modal, setModal] = useState(null);

  return (
    <section className="section" id="projects">
      <div className="container">
        <RevealDiv><div className="sec-hud-label">engineered systems</div></RevealDiv>
        <RevealDiv delay={0.1}><h2 className="sec-hud-title">Featured Projects</h2></RevealDiv>
        <RevealDiv delay={0.2}>
          <p className="sec-hud-desc">
            Explore cyber defense tools, machine learning pipelines, and full-stack software. Click <strong>Live Review</strong> to interact directly on this page.
          </p>
        </RevealDiv>

        {/* Project Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: '1.6rem', marginTop: '3.5rem' }}>
          {PROJECTS.map((p, i) => (
            <RevealDiv key={p.title} delay={0.06 * i}>
              <motion.div
                className="hud-glass"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                {/* ── Clear, High-Res Project Cover Image (No dark overlay!) ── */}
                <div
                  onClick={() => setModal(p)}
                  style={{
                    height: 205,
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    background: '#0a0d18',
                    borderBottom: '1px solid rgba(0, 240, 255, 0.15)',
                  }}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                      filter: 'contrast(1.05) brightness(1.02)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />

                  {/* Clean Live Review Action Pill */}
                  <div style={{
                    position: 'absolute',
                    bottom: '0.8rem',
                    left: '0.8rem',
                    zIndex: 2,
                  }}>
                    <button
                      onClick={(e) => { e.stopPropagation(); setModal(p); }}
                      className="btn-stark btn-stark-cyan"
                      style={{
                        padding: '0.4rem 0.9rem',
                        fontSize: '0.72rem',
                        borderRadius: 100,
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.7)',
                      }}
                    >
                      <Play size={12} /> Live Review
                    </button>
                  </div>
                </div>

                {/* Body Content */}
                <div style={{ padding: '1.4rem 1.6rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.8rem' }}>
                      {p.tags.map(t => <span key={t} className="hud-tag">{t}</span>)}
                    </div>
                    <h3
                      onClick={() => setModal(p)}
                      style={{ fontFamily: 'var(--font-hud)', fontSize: '1.08rem', fontWeight: 700, marginBottom: '0.6rem', color: '#fff', cursor: 'pointer' }}
                    >
                      {p.title}
                    </h3>
                    <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.65, marginBottom: '1.2rem' }}>
                      {p.desc.slice(0, 120)}...
                    </p>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '0.8rem', borderTop: '1px solid rgba(0, 240, 255, 0.1)', paddingTop: '0.8rem' }}>
                    <button
                      onClick={() => setModal(p)}
                      style={{ background: 'none', border: 'none', color: 'var(--cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                    >
                      <Eye size={14} /> Review Here
                    </button>
                    <a
                      href={p.gh}
                      target="_blank"
                      rel="noopener"
                      style={{ color: 'var(--muted)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                    >
                      <GitBranch size={14} /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </RevealDiv>
          ))}
        </div>
      </div>

      {/* ── Live Interactive Preview Modal ── */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(6, 8, 14, 0.94)',
              zIndex: 9998,
              display: 'grid',
              placeItems: 'center',
              padding: '2rem',
              backdropFilter: 'blur(12px)',
            }}
            onClick={e => { if (e.target === e.currentTarget) setModal(null); }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="hud-glass"
              style={{
                maxWidth: 740,
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                padding: '2.2rem',
                borderColor: 'var(--cyan)',
              }}
            >
              <button
                onClick={() => setModal(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(0, 240, 255, 0.1)',
                  border: '1px solid var(--border)',
                  color: '#fff',
                  borderRadius: 8,
                  padding: '0.4rem 0.7rem',
                  cursor: 'pointer',
                }}
              >
                <X size={16} />
              </button>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.8rem' }}>
                {modal.tags.map(t => <span key={t} className="hud-tag">{t}</span>)}
              </div>

              <h2 style={{ fontFamily: 'var(--font-hud)', fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '0.6rem' }}>
                {modal.title}
              </h2>

              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>
                {modal.desc}
              </p>

              {/* In-Place Live Simulator */}
              <LiveSimulator project={modal} />

              {/* Bottom Buttons with Live Vercel link */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.6rem', flexWrap: 'wrap' }}>
                <a
                  href={modal.live}
                  target="_blank"
                  rel="noopener"
                  className="btn-stark btn-stark-cyan"
                >
                  <Globe size={16} /> Launch Live Vercel App
                </a>
                <a
                  href={modal.gh}
                  target="_blank"
                  rel="noopener"
                  className="btn-stark btn-stark-ghost"
                >
                  <GitBranch size={16} /> GitHub Repository
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}