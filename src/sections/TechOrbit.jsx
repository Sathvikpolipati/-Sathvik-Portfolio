import { useState } from 'react';
import { RevealDiv } from '../components/RevealDiv';
import { Shield, Terminal, Cpu, Globe, Wrench, Layers, Zap } from 'lucide-react';

const TECH_LAYERS = [
  {
    tier: 'CORE ARCHITECTURE',
    radius: 115,
    speed: 18,
    color: 'var(--cyan)',
    progress: 92,
    items: [
      { name: 'Python', icon: '🐍', spec: 'Offensive scripts, Scapy, ML pipelines', level: '95%', color: '#00f0ff' },
      { name: 'JavaScript', icon: '⚡', spec: 'Interactive UI, DOM manipulation, APIs', level: '85%', color: '#ffd700' },
      { name: 'C / C++', icon: '⚙️', spec: 'Memory management, low-level architecture', level: '78%', color: '#0088ff' },
      { name: 'HTML5 / CSS3', icon: '🌐', spec: 'Cyber HUD design, modern responsive UI', level: '90%', color: '#ff3344' },
    ]
  },
  {
    tier: 'OFFENSIVE CYBER SECURITY',
    radius: 195,
    speed: 26,
    color: 'var(--crimson)',
    progress: 88,
    items: [
      { name: 'Burp Suite', icon: '🛡️', spec: 'OWASP Top 10 vulnerabilities & proxy labs', level: '86%', color: '#ff5500' },
      { name: 'Kali Linux', icon: '🐉', spec: 'Primary OS for ethical hacking & pentesting', level: '92%', color: '#00f0ff' },
      { name: 'Nmap', icon: '🔍', spec: 'Network reconnaissance, NSE scripting', level: '88%', color: '#00ff88' },
      { name: 'Metasploit', icon: '🎯', spec: 'Payload crafting & exploitation framework', level: '80%', color: '#ff3344' },
      { name: 'Wireshark', icon: '📡', spec: 'Protocol dissection & packet analysis', level: '84%', color: '#0088ff' },
    ]
  },
  {
    tier: 'CLOUD, ML & DEV TOOLS',
    radius: 280,
    speed: 38,
    color: 'var(--gold)',
    progress: 84,
    items: [
      { name: 'React.js', icon: '⚛️', spec: 'Component frameworks & dynamic state', level: '85%', color: '#00d8ff' },
      { name: 'Scikit-Learn', icon: '🤖', spec: 'Machine learning algorithms & classifiers', level: '80%', color: '#ffd700' },
      { name: 'Firebase', icon: '🔥', spec: 'Cloud Firestore & real-time sync', level: '82%', color: '#ff9900' },
      { name: 'MySQL', icon: '🐬', spec: 'Relational data queries & injection tests', level: '80%', color: '#00758f' },
      { name: 'Git & GitHub', icon: '🐙', spec: 'Version control, automated CI/CD', level: '90%', color: '#ffffff' },
      { name: 'Scapy', icon: '📦', spec: 'Packet manipulation & network scanning', level: '86%', color: '#00ff88' },
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
            A dynamic orbital telemetry display powered by the Kali Linux security core. Hover any node to inspect operational parameters.
          </p>
        </RevealDiv>

        {/* ── Interactive Progress Line Meter ── */}
        <RevealDiv delay={0.3} style={{ marginTop: '2rem' }}>
          <div className="hud-glass" style={{ padding: '1.2rem 1.8rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {TECH_LAYERS.map((layer) => (
              <div key={layer.tier}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}>
                  <span style={{ color: layer.color, letterSpacing: '0.05em' }}>{layer.tier}</span>
                  <span style={{ color: '#fff', fontWeight: 700 }}>{layer.progress}%</span>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.06)', borderRadius: 100, height: 6, overflow: 'hidden', position: 'relative' }}>
                  <div style={{
                    height: '100%',
                    width: `${layer.progress}%`,
                    background: `linear-gradient(90deg, ${layer.color}, #00f0ff)`,
                    boxShadow: `0 0 12px ${layer.color}`,
                    borderRadius: 100,
                    transition: 'width 1.5s ease',
                  }}/>
                </div>
              </div>
            ))}
          </div>
        </RevealDiv>

        {/* ── Orbit Canvas Container ── */}
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
              width: 620,
              height: 620,
              maxWidth: '100vw',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* ── Central Kali Linux Security Core ── */}
            <div style={{
              width: 110,
              height: 110,
              borderRadius: '50%',
              background: 'radial-gradient(circle, #0d1b2a 0%, #001220 60%, #06080e 100%)',
              border: '3px solid #00f0ff',
              boxShadow: '0 0 40px rgba(0, 240, 255, 0.8), inset 0 0 25px rgba(0, 240, 255, 0.6)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              animation: 'arc-pulse 2.5s infinite',
              cursor: 'pointer',
            }}>
              <span style={{ fontSize: '2.2rem', filter: 'drop-shadow(0 0 8px #00f0ff)' }}>🐉</span>
              <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.62rem', color: '#00f0ff', fontWeight: 800, letterSpacing: '0.08em', marginTop: 2 }}>
                KALI LINUX
              </span>
            </div>

            {/* ── Concentric Orbit Rings with Progress Glow ── */}
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
                    border: `1.5px dashed ${layer.color}44`,
                    boxShadow: `0 0 25px ${layer.color}15, inset 0 0 20px ${layer.color}08`,
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
                          border: `1.5px solid ${it.color}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.25rem',
                          cursor: 'pointer',
                          boxShadow: `0 0 14px ${it.color}66`,
                          animation: `${reverse ? 'spin-cw' : 'spin-ccw'} ${layer.speed}s linear infinite`,
                          animationPlayState: isPaused ? 'paused' : 'running',
                          transition: 'transform 0.2s, box-shadow 0.2s',
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
            marginTop: '2.5rem',
            width: '100%',
            maxWidth: 550,
            minHeight: 90,
          }}>
            {activeItem ? (
              <div className="hud-glass" style={{ padding: '1.2rem 1.8rem', display: 'flex', alignItems: 'center', gap: '1.4rem', borderColor: activeItem.color }}>
                <span style={{ fontSize: '2.5rem', filter: `drop-shadow(0 0 8px ${activeItem.color})` }}>{activeItem.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h4 style={{ fontFamily: 'var(--font-hud)', fontSize: '1.15rem', color: '#fff' }}>{activeItem.name}</h4>
                    <span className="hud-tag" style={{ borderColor: activeItem.color, color: activeItem.color }}>{activeItem.level} Proficiency</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--cyan)', marginTop: '0.3rem' }}>
                    {activeItem.spec}
                  </p>
                </div>
              </div>
            ) : (
              <div className="hud-glass" style={{ padding: '1.2rem 1.8rem', textAlign: 'center', color: 'var(--muted)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                [ HOVER OVER ANY ORBIT NODE TO INSPECT LIVE PARAMETERS ]
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}