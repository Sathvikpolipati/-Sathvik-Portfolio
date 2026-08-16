import { useState } from 'react';
import { RevealDiv } from '../components/RevealDiv';

const ORBITS = [
  {
    tier: 'CORE CODING & WEB STACK',
    radius: 110,
    duration: 16,
    color: '#00f0ff',
    progress: 95,
    items: [
      { name: 'Python', icon: '🐍', spec: 'Primary language for offensive tools, Scapy & ML pipelines', level: '96%', deg: 0, color: '#00f0ff' },
      { name: 'JavaScript / React', icon: '⚛️', spec: 'Interactive reactive UI, frontend frameworks & DOM', level: '88%', deg: 60, color: '#00d8ff' },
      { name: 'Bash / Linux Shell', icon: '💻', spec: 'Terminal automation, shell scripting & server admin', level: '92%', deg: 120, color: '#00ff88' },
      { name: 'C / C++', icon: '⚙️', spec: 'Low-level memory management, sockets & exploits', level: '80%', deg: 180, color: '#0088ff' },
      { name: 'HTML5 / Modern CSS', icon: '🌐', spec: 'Responsive HUD styling, glassmorphism & layouts', level: '90%', deg: 240, color: '#ffd700' },
      { name: 'Node.js APIs', icon: '⚡', spec: 'Backend microservices, REST endpoints & WebSocket', level: '85%', deg: 300, color: '#ffb703' },
    ]
  },
  {
    tier: 'KALI LINUX OFFENSIVE ARSENAL',
    radius: 195,
    duration: 24,
    color: '#e62429',
    progress: 90,
    items: [
      { name: 'Burp Suite Pro', icon: '🛡️', spec: 'Web vulnerability proxy, repeater & intruder labs', level: '90%', deg: 0, color: '#ff5500' },
      { name: 'THC Hydra', icon: '🐲', spec: 'High-speed network login cracker & protocol audits', level: '88%', deg: 45, color: '#e62429' },
      { name: 'Wireshark', icon: '📡', spec: 'Deep packet inspection, pcap analysis & telemetry', level: '86%', deg: 90, color: '#0088ff' },
      { name: 'Nmap / Zenmap', icon: '🔍', spec: 'Network discovery, port auditing & NSE vulnerability scripts', level: '94%', deg: 135, color: '#00ff88' },
      { name: 'Metasploit Framework', icon: '🎯', spec: 'Payload generation (msfvenom), post-exploitation & handlers', level: '84%', deg: 180, color: '#ff3344' },
      { name: 'SQLmap', icon: '💉', spec: 'Automated SQL injection & database takeover testing', level: '88%', deg: 225, color: '#ff007f' },
      { name: 'John the Ripper', icon: '🗝️', spec: 'Hash cracking, dictionary & rule-based password audits', level: '82%', deg: 270, color: '#ffd700' },
      { name: 'Aircrack-ng', icon: '📶', spec: '802.11 wireless security auditing & handshake capture', level: '80%', deg: 315, color: '#00f0ff' },
    ]
  },
  {
    tier: 'AI, BOTS, CLOUD & NETWORK DEFENSE',
    radius: 285,
    duration: 36,
    color: '#ffb703',
    progress: 86,
    items: [
      { name: 'Scikit-Learn ML', icon: '🤖', spec: 'Predictive classifiers, feature engineering & neural models', level: '85%', deg: 0, color: '#ffd700' },
      { name: 'Security Automation Bots', icon: '🤖', spec: 'Automated recon bots, webhook monitors & scanners', level: '88%', deg: 45, color: '#00ff88' },
      { name: 'Scapy Packet Forge', icon: '📦', spec: 'Custom packet forging, ARP poisoning & sniffers', level: '90%', deg: 90, color: '#00f0ff' },
      { name: 'Firebase Cloud', icon: '🔥', spec: 'Real-time database, cloud functions & auth security', level: '84%', deg: 135, color: '#ff9900' },
      { name: 'Git & GitHub CI/CD', icon: '🐙', spec: 'Version control, actions & automated security workflows', level: '92%', deg: 180, color: '#ffffff' },
      { name: 'Docker Containers', icon: '🐳', spec: 'Isolated vulnerable lab environments & microservices', level: '82%', deg: 225, color: '#0099ff' },
      { name: 'Netcat (Swiss Army Knife)', icon: '🐱', spec: 'Raw TCP/UDP socket listeners & reverse shells', level: '90%', deg: 270, color: '#ff3344' },
      { name: 'Gobuster / Dirb', icon: '🔎', spec: 'High-speed directory & DNS subdomain brute-forcing', level: '88%', deg: 315, color: '#c084fc' },
    ]
  }
];

function OrbitRing({ radius, duration, items, reverse, isPaused, onSelect }) {
  const size = radius * 2 + 54;
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
      boxShadow: '0 0 30px rgba(0, 240, 255, 0.06), inset 0 0 20px rgba(0, 240, 255, 0.04)',
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
                width: 42,
                height: 42,
                borderRadius: '50%',
                background: '#090d19',
                border: `1.5px solid ${item.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                cursor: 'pointer',
                boxShadow: `0 0 12px ${item.color}55`,
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.35)';
                e.currentTarget.style.boxShadow = `0 0 25px ${item.color}`;
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
            A planetary orbital system revolving around the central Kali Linux security sun. Hover any revolving tool or coding framework to inspect live telemetry.
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

        {/* ── Orbit Planetary Container ── */}
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
              width: 640,
              height: 640,
              maxWidth: '100vw',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* ── Central Kali Linux Sun / Core ── */}
            <div style={{
              width: 110,
              height: 110,
              borderRadius: '50%',
              background: 'radial-gradient(circle, #00f0ff 0%, #0066cc 50%, #06080e 100%)',
              border: '3px solid #ffffff',
              boxShadow: '0 0 50px rgba(0, 240, 255, 0.9), inset 0 0 25px rgba(255, 255, 255, 0.7)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              animation: 'arc-pulse 2.5s infinite',
              cursor: 'pointer',
            }}>
              <span style={{ fontSize: '2.4rem', filter: 'drop-shadow(0 0 10px #ffffff)' }}>🐉</span>
              <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.62rem', color: '#ffffff', fontWeight: 900, letterSpacing: '0.08em', marginTop: 1 }}>
                KALI SUN
              </span>
            </div>

            {/* ── 3 Concentric Planetary Revolving Orbit Rings ── */}
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
            maxWidth: 580,
            minHeight: 90,
          }}>
            {activeItem ? (
              <div className="hud-glass" style={{ padding: '1.2rem 1.8rem', display: 'flex', alignItems: 'center', gap: '1.4rem', borderColor: activeItem.color }}>
                <span style={{ fontSize: '2.6rem', filter: `drop-shadow(0 0 10px ${activeItem.color})` }}>{activeItem.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h4 style={{ fontFamily: 'var(--font-hud)', fontSize: '1.15rem', color: '#fff' }}>{activeItem.name}</h4>
                    <span className="hud-tag" style={{ borderColor: activeItem.color, color: activeItem.color }}>{activeItem.level} Mastery</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--cyan)', marginTop: '0.3rem' }}>
                    {activeItem.spec}
                  </p>
                </div>
              </div>
            ) : (
              <div className="hud-glass" style={{ padding: '1.2rem 1.8rem', textAlign: 'center', color: 'var(--muted)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                [ HOVER OVER ANY PLANETARY NODE TO INSPECT LIVE TELEMETRY ]
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}