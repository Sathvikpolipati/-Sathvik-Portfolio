import { useState } from 'react';
import { RevealDiv } from '../components/RevealDiv';
import { Shield, Terminal, Cpu, Database, Globe, Wrench, Layers } from 'lucide-react';

const TECH_LAYERS = [
  {
    tier: 'CORE LAYER // ARC REACTOR',
    radius: 110,
    speed: 16,
    items: [
      { name: 'Python', icon: '🐍', spec: 'Core Automation, ML, Scapy Scripts', badge: 'Expert' },
      { name: 'JavaScript', icon: '⚡', spec: 'Interactive UI & Node Services', badge: 'Advanced' },
      { name: 'C / C++', icon: '⚙️', spec: 'Low-Level System Internals', badge: 'Proficient' },
      { name: 'HTML5 / CSS3', icon: '🌐', spec: 'Responsive HUD Design', badge: 'Mastery' },
    ]
  },
  {
    tier: 'OFFENSIVE SECURITY & TESTING',
    radius: 190,
    speed: 24,
    items: [
      { name: 'Burp Suite', icon: '🛡️', spec: 'OWASP Web Vulnerability Testing', badge: 'Offensive' },
      { name: 'Kali Linux', icon: '🐉', spec: 'Penetration Testing Environment', badge: 'OS' },
      { name: 'Nmap', icon: '🔍', spec: 'Port Scanning & Reconnaissance', badge: 'Network' },
      { name: 'Metasploit', icon: '🎯', spec: 'Exploitation Framework', badge: 'Exploit' },
      { name: 'Wireshark', icon: '📡', spec: 'Packet Analysis & Telemetry', badge: 'Protocol' },
    ]
  },
  {
    tier: 'CLOUD, ML & ARCHITECTURE',
    radius: 275,
    speed: 36,
    items: [
      { name: 'React.js', icon: '⚛️', spec: 'Reactive Component Frameworks', badge: 'Frontend' },
      { name: 'Scikit-Learn', icon: '🤖', spec: 'ML Algorithms & Data Modeling', badge: 'AI/ML' },
      { name: 'Firebase', icon: '🔥', spec: 'Realtime Cloud Databases', badge: 'Backend' },
      { name: 'MongoDB', icon: '🍃', spec: 'NoSQL Document Store', badge: 'Database' },
      { name: 'MySQL', icon: '🐬', spec: 'Relational Database Management', badge: 'RDBMS' },
      { name: 'Git & GitHub', icon: '🐙', spec: 'Version Control & CI/CD Pipelines', badge: 'DevOps' },
      { name: 'Scapy', icon: '📦', spec: 'Custom Packet Generation', badge: 'Security' },
    ]
  }
];

export function TechOrbit() {
  const [activeItem, setActiveItem] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="section" id="orbit" style={{ overflow: 'hidden' }}>
      <div className="container">
        <RevealDiv><div className="sec-hud-label">holographic telemetry</div></RevealDiv>
        <RevealDiv delay={0.1}><h2 className="sec-hud-title">Arc Reactor Tech Orbit</h2></RevealDiv>
        <RevealDiv delay={0.2}>
          <p className="sec-hud-desc">
            A dynamic orbital telemetry display mapping engineering competencies around the core reactor. Hover any node to inspect operational parameters.
          </p>
        </RevealDiv>

        {/* Orbit Canvas Container */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '3.5rem',
          position: 'relative',
        }}>
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              position: 'relative',
              width: 600,
              height: 600,
              maxWidth: '100vw',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* ── Central Arc Reactor Core ── */}
            <div style={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              background: 'radial-gradient(circle, #00f0ff 0%, #0088ff 50%, #06080e 100%)',
              border: '3px solid #ffffff',
              boxShadow: '0 0 40px #00f0ff, inset 0 0 20px #ffffff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              animation: 'arc-pulse 2.5s infinite',
              cursor: 'pointer',
            }}>
              <span style={{ fontSize: '1.8rem' }}>⚡</span>
              <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.6rem', color: '#fff', fontWeight: 800 }}>MARK 85</span>
            </div>

            {/* ── Concentric Orbit Rings ── */}
            {TECH_LAYERS.map((layer, lIdx) => {
              const size = layer.radius * 2;
              const reverse = lIdx % 2 === 1;
              return (
                <div
                  key={layer.tier}
                  style={{
                    position: 'absolute',
                    width: size,
                    height: size,
                    borderRadius: '50%',
                    border: `1px solid rgba(0, 240, 255, ${0.18 - lIdx * 0.03})`,
                    boxShadow: `0 0 20px rgba(0, 240, 255, 0.05)`,
                    animation: `${reverse ? 'spin-ccw' : 'spin-cw'} ${layer.speed}s linear infinite`,
                    animationPlayState: isPaused ? 'paused' : 'running',
                  }}
                >
                  {/* Orbit Nodes */}
                  {layer.items.map((it, iIdx) => {
                    const angle = (iIdx / layer.items.length) * 2 * Math.PI;
                    const x = layer.radius + layer.radius * Math.cos(angle) - 22;
                    const y = layer.radius + layer.radius * Math.sin(angle) - 22;

                    return (
                      <div
                        key={it.name}
                        onMouseEnter={() => setActiveItem(it)}
                        style={{
                          position: 'absolute',
                          left: x,
                          top: y,
                          width: 44,
                          height: 44,
                          borderRadius: '50%',
                          background: '#0a0f1a',
                          border: '1.5px solid rgba(0, 240, 255, 0.4)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.2rem',
                          cursor: 'pointer',
                          boxShadow: '0 0 12px rgba(0, 240, 255, 0.3)',
                          animation: `${reverse ? 'spin-cw' : 'spin-ccw'} ${layer.speed}s linear infinite`,
                          animationPlayState: isPaused ? 'paused' : 'running',
                          transition: 'transform 0.2s, border-color 0.2s',
                        }}
                      >
                        {it.icon}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {/* ── Active Inspection HUD Card ── */}
          <div style={{
            marginTop: '2rem',
            width: '100%',
            maxWidth: 500,
            minHeight: 90,
          }}>
            {activeItem ? (
              <div className="hud-glass" style={{ padding: '1.2rem 1.8rem', display: 'flex', alignItems: 'center', gap: '1.2rem', borderColor: 'var(--cyan)' }}>
                <span style={{ fontSize: '2.4rem' }}>{activeItem.icon}</span>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <h4 style={{ fontFamily: 'var(--font-hud)', fontSize: '1.1rem', color: '#fff' }}>{activeItem.name}</h4>
                    <span className="hud-tag hud-tag-gold">{activeItem.badge}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--cyan)', marginTop: '0.2rem' }}>
                    {activeItem.spec}
                  </p>
                </div>
              </div>
            ) : (
              <div className="hud-glass" style={{ padding: '1.2rem 1.8rem', textAlign: 'center', color: 'var(--muted)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                [ HOVER OVER ANY NODE IN THE ORBIT TO REVEAL SYSTEM SPECIFICATIONS ]
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}