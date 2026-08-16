import { useState } from 'react';
import { RevealDiv } from '../components/RevealDiv';

const ORBITS = [
  {
    tier: 'CORE ARCHITECTURE',
    radius: 110,
    duration: 14,
    color: '#00f0ff',
    progress: 92,
    items: [
      { name: 'Python', icon: '🐍', spec: 'Offensive scripts, Scapy, ML pipelines', level: '95%', deg: 0, color: '#00f0ff' },
      { name: 'JavaScript', icon: '⚡', spec: 'Interactive UI, DOM manipulation, APIs', level: '88%', deg: 90, color: '#ffd700' },
      { name: 'C / C++', icon: '⚙️', spec: 'Memory management, low-level architecture', level: '78%', deg: 180, color: '#0088ff' },
      { name: 'HTML5 / CSS3', icon: '🌐', spec: 'Cyber HUD design, modern responsive UI', level: '90%', deg: 270, color: '#ff3344' },
    ]
  },
  {
    tier: 'OFFENSIVE CYBER SECURITY',
    radius: 190,
    duration: 22,
    color: '#e62429',
    progress: 88,
    items: [
      { name: 'Burp Suite', icon: '🛡️', spec: 'OWASP Top 10 vulnerabilities & proxy labs', level: '86%', deg: 0, color: '#ff5500' },
      { name: 'Kali Linux', icon: '🐉', spec: 'Primary OS for ethical hacking & pentesting', level: '92%', deg: 72, color: '#00f0ff' },
      { name: 'Nmap', icon: '🔍', spec: 'Network reconnaissance, NSE scripting', level: '88%', deg: 144, color: '#00ff88' },
      { name: 'Metasploit', icon: '🎯', spec: 'Payload crafting & exploitation framework', level: '80%', deg: 216, color: '#ff3344' },
      { name: 'Wireshark', icon: '📡', spec: 'Protocol dissection & packet analysis', level: '84%', deg: 288, color: '#0088ff' },
    ]
  },
  {
    tier: 'CLOUD, ML & DEV TOOLS',
    radius: 270,
    duration: 32,
    color: '#ffb703',
    progress: 84,
    items: [
      { name: 'React.js', icon: '⚛️', spec: 'Component frameworks & dynamic state', level: '85%', deg: 0, color: '#00d8ff' },
      { name: 'Scikit-Learn', icon: '🤖', spec: 'Machine learning algorithms & classifiers', level: '80%', deg: 60, color: '#ffd700' },
      { name: 'Firebase', icon: '🔥', spec: 'Cloud Firestore & real-time sync', level: '82%', deg: 120, color: '#ff9900' },
      { name: 'MySQL', icon: '🐬', spec: 'Relational data queries & injection tests', level: '80%', deg: 180, color: '#00758f' },
      { name: 'Git & GitHub', icon: '🐙', spec: 'Version control, automated CI/CD', level: '90%', deg: 240, color: '#ffffff' },
      { name: 'Scapy', icon: '📦', spec: 'Packet manipulation & network scanning', level: '86%', deg: 300, color: '#00ff88' },
    ]
  }
];

function OrbitRing({ radius, duration, items, reverse, isPaused, onSelect }) {
  const size = radius * 2 + 56;
  return (
    <div style={{
      position: 'absolute',
      width: size,
      height: size,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: '1.5px dashed rgba(0, 240, 255, 0.22)',
      borderRadius: '50%',
      boxShadow: '0 0 25px rgba(0, 240, 255, 0.05), inset 0 0 15px rgba(0, 240, 255, 0.03)',
      animation: `${reverse ? 'spin-ccw' : 'spin-cw'} ${duration}s linear infinite`,
      animationPlayState: isPaused ? 'paused' : 'running',
    }}>
      {items.map(item => {
        const rad = (item.deg * Math.PI) / 180;
        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);
        return (
          <div
            key={item.name}
            title={item.name}
            onMouseEnter={() => onSelect(item)}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              animation: `${reverse ? 'spin-cw' : 'spin-ccw'} ${duration}s linear infinite`,
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: '#0a0f1a',
                border: `1.5px solid ${item.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                cursor: 'pointer',
                boxShadow: `0 0 12px ${item.color}55`,
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.25)';
                e.currentTarget.style.boxShadow = `0 0 22px ${item.color}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = `0 0 12px ${item.color}55`;
              }}
            >
              {item.icon}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function TechOrbit() {
  const [activeItem, setActiveItem] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="section" id="orbit" style={{ overflow: 'hidden' }}>
      <div className="container">
        <RevealDiv><div className="sec-hud-label">holographic telemetry</div></RevealDiv>
        <RevealDiv delay={0.1}><h2 className="sec-hud-title">Soul Reaper Tech Orbit</h2></RevealDiv>
        <RevealDiv delay={0.2}>
          <p className="sec-hud-desc">
            A dynamic orbital telemetry display powered by the Kali Linux security core. Hover any node to inspect operational parameters.
          </p>
        </RevealDiv>

        {/* ── Interactive Progress Line Meter ── */}
        <RevealDiv delay={0.3} style={{ marginTop: '2rem' }}>
          <div className="hud-glass" style={{ padding: '1.2rem 1.8rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {ORBITS.map((layer) => (
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

        {/* ── Orbit Canvas Container with Connected Circular Lines ── */}
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
              width: 105,
              height: 105,
              borderRadius: '50%',
              background: 'radial-gradient(circle, #0d1b2a 0%, #001220 60%, #06080e 100%)',
              border: '3px solid #00f0ff',
              boxShadow: '0 0 35px rgba(0, 240, 255, 0.8), inset 0 0 20px rgba(0, 240, 255, 0.6)',
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

            {/* ── Concentric Connected Circular Orbit Rings ── */}
            {ORBITS.map((o, i) => (
              <OrbitRing
                key={o.tier}
                {...o}
                reverse={i % 2 === 1}
                isPaused={isPaused}
                onSelect={setActiveItem}
              />
            ))}
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