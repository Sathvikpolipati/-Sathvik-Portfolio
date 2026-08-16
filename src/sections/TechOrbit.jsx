import { useState } from 'react';
import { RevealDiv } from '../components/RevealDiv';

const ORBITS = [
  {
    tier: 'INNER ORBIT // CODING & WEB',
    radius: 115,
    duration: 16,
    color: '#00f0ff',
    progress: 95,
    items: [
      { name: 'Python', icon: '🐍', spec: 'Primary language for offensive security tools, Scapy scripts & ML pipelines', level: '96%', deg: 0, color: '#00f0ff', category: 'Core Language' },
      { name: 'React.js', icon: '⚛️', spec: 'Interactive reactive UI, modern component frameworks & dynamic state', level: '88%', deg: 60, color: '#00d8ff', category: 'Frontend Architecture' },
      { name: 'Bash Shell', icon: '💻', spec: 'Linux terminal automation, shell scripting & server administration', level: '92%', deg: 120, color: '#00ff88', category: 'System Automation' },
      { name: 'C / C++', icon: '⚙️', spec: 'Low-level memory management, network sockets & exploit development', level: '80%', deg: 180, color: '#0088ff', category: 'Systems Programming' },
      { name: 'HTML5 / CSS3', icon: '🌐', spec: 'Responsive Stark HUD styling, glassmorphism & fluid cyber layouts', level: '90%', deg: 240, color: '#ffd700', category: 'Styling & HUD' },
      { name: 'Node.js', icon: '⚡', spec: 'Backend microservices, REST APIs, asynchronous network I/O', level: '85%', deg: 300, color: '#ffb703', category: 'Backend Architecture' },
    ]
  },
  {
    tier: 'MIDDLE ORBIT // KALI LINUX OFFENSIVE ARSENAL',
    radius: 200,
    duration: 24,
    color: '#e62429',
    progress: 90,
    items: [
      { name: 'Burp Suite Pro', icon: '🛡️', spec: 'OWASP Top 10 web vulnerability analysis, proxy intercept & repeater audits', level: '90%', deg: 0, color: '#ff5500', category: 'Web App Pentesting' },
      { name: 'THC Hydra', icon: '🐲', spec: 'High-speed network login cracker supporting 50+ protocols & brute-forcing', level: '88%', deg: 45, color: '#e62429', category: 'Network Attack' },
      { name: 'Wireshark', icon: '📡', spec: 'Deep packet inspection, pcap network dissection & anomaly telemetry', level: '86%', deg: 90, color: '#0088ff', category: 'Protocol Dissection' },
      { name: 'Nmap / Zenmap', icon: '🔍', spec: 'Network reconnaissance, port discovery & NSE vulnerability scripting', level: '94%', deg: 135, color: '#00ff88', category: 'Reconnaissance' },
      { name: 'Metasploit', icon: '🎯', spec: 'Modular exploitation framework, msfvenom payloads & post-exploitation', level: '84%', deg: 180, color: '#ff3344', category: 'Exploitation Engine' },
      { name: 'SQLmap', icon: '💉', spec: 'Automated database takeover, SQL injection detection & data extraction', level: '88%', deg: 225, color: '#ff007f', category: 'Database Exploitation' },
      { name: 'John the Ripper', icon: '🗝️', spec: 'Password hash cracking, dictionary attacks & custom rule mutation engines', level: '82%', deg: 270, color: '#ffd700', category: 'Cryptanalysis' },
      { name: 'Aircrack-ng', icon: '📶', spec: '802.11 wireless security auditing, WPA/WPA2 handshake capture & cracking', level: '80%', deg: 315, color: '#00f0ff', category: 'Wireless Security' },
    ]
  },
  {
    tier: 'OUTER ORBIT // AI, BOTS, CLOUD & NETWORK DEFENSE',
    radius: 290,
    duration: 36,
    color: '#ffb703',
    progress: 86,
    items: [
      { name: 'Scikit-Learn ML', icon: '🤖', spec: 'Predictive classification pipelines, decision trees & ML data models', level: '85%', deg: 0, color: '#ffd700', category: 'AI & Machine Learning' },
      { name: 'Security Automation Bots', icon: '🤖', spec: 'Autonomous monitoring bots, real-time alert dispatchers & recon crawlers', level: '88%', deg: 45, color: '#00ff88', category: 'Autonomous Bots' },
      { name: 'Scapy Packet Forge', icon: '📦', spec: 'Custom packet manipulation, ARP poisoning, sniffing & network mapping', level: '90%', deg: 90, color: '#00f0ff', category: 'Packet Engineering' },
      { name: 'Firebase Cloud', icon: '🔥', spec: 'Real-time cloud database, Firestore security rules & event functions', level: '84%', deg: 135, color: '#ff9900', category: 'Cloud Infrastructure' },
      { name: 'Git & GitHub CI/CD', icon: '🐙', spec: 'Version control, automated security testing & repository management', level: '92%', deg: 180, color: '#ffffff', category: 'DevOps & CI/CD' },
      { name: 'Docker Containers', icon: '🐳', spec: 'Containerized vulnerable test labs, sandboxed testing & microservices', level: '82%', deg: 225, color: '#0099ff', category: 'Containerization' },
      { name: 'Netcat Utility', icon: '🐱', spec: 'Raw TCP/UDP socket connections, port scanning & reverse shell handlers', level: '90%', deg: 270, color: '#ff3344', category: 'Socket Utilities' },
      { name: 'Gobuster / Dirb', icon: '🔎', spec: 'High-speed web directory, DNS subdomain & vhost brute-force reconnaissance', level: '88%', deg: 315, color: '#c084fc', category: 'Web Recon' },
    ]
  }
];

function OrbitRing({ radius, duration, items, reverse, isPaused, onSelect }) {
  const size = radius * 2 + 52;
  return (
    <div style={{
      position: 'absolute',
      width: size,
      height: size,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: '1.5px dashed rgba(0, 240, 255, 0.25)',
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
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: '#090d19',
                border: `1.5px solid ${item.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.22rem',
                cursor: 'pointer',
                boxShadow: `0 0 14px ${item.color}55`,
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.35)';
                e.currentTarget.style.boxShadow = `0 0 25px ${item.color}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = `0 0 14px ${item.color}55`;
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
            An upgraded 3-tier concentric orbital system revolving around the central Kali Linux security core. Hover any node to freeze rotation and inspect live Stark HUD telemetry.
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

        {/* ── 3-Tier Concentric Orbital Container ── */}
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
              width: 650,
              height: 650,
              maxWidth: '100vw',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* ── Central Kali Linux Security Core ── */}
            <div style={{
              width: 115,
              height: 115,
              borderRadius: '50%',
              background: 'radial-gradient(circle, #0d1b2a 0%, #001220 50%, #06080e 100%)',
              border: '3px solid #00f0ff',
              boxShadow: '0 0 50px rgba(0, 240, 255, 0.9), inset 0 0 25px rgba(0, 240, 255, 0.65)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              animation: 'arc-pulse 2.5s infinite',
              cursor: 'pointer',
            }}>
              <span style={{ fontSize: '2.5rem', filter: 'drop-shadow(0 0 12px #00f0ff)' }}>🐉</span>
              <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.65rem', color: '#00f0ff', fontWeight: 900, letterSpacing: '0.1em', marginTop: 2 }}>
                KALI LINUX
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'var(--gold)', letterSpacing: '0.08em' }}>
                SECURITY CORE
              </span>
            </div>

            {/* ── 3 Concentric Orbital Rings ── */}
            {ORBITS.map((layer, lIdx) => (
              <OrbitRing
                key={layer.tier}
                {...layer}
                reverse={lIdx % 2 === 1}
                isPaused={isPaused}
                onSelect={setActiveItem}
              />
            ))}
          </div>

          {/* ── Live Stark HUD Inspection Card (Reveals Detailed Specifications) ── */}
          <div style={{
            marginTop: '2.5rem',
            width: '100%',
            maxWidth: 600,
            minHeight: 100,
          }}>
            {activeItem ? (
              <div
                className="hud-glass"
                style={{
                  padding: '1.4rem 1.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.4rem',
                  borderColor: activeItem.color,
                  boxShadow: `0 0 30px ${activeItem.color}33, inset 0 0 15px ${activeItem.color}15`,
                  animation: 'fadeUp 0.2s ease',
                }}
              >
                <span style={{ fontSize: '2.8rem', filter: `drop-shadow(0 0 12px ${activeItem.color})` }}>
                  {activeItem.icon}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.4rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <h4 style={{ fontFamily: 'var(--font-hud)', fontSize: '1.2rem', color: '#fff', fontWeight: 800 }}>
                        {activeItem.name}
                      </h4>
                      <span className="hud-tag" style={{ borderColor: activeItem.color, color: activeItem.color }}>
                        {activeItem.category}
                      </span>
                    </div>
                    <span className="hud-tag hud-tag-gold" style={{ fontFamily: 'var(--font-hud)', fontWeight: 700 }}>
                      ⚡ {activeItem.level} MASTERY
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.84rem', color: 'var(--cyan)', marginTop: '0.4rem', lineHeight: 1.5 }}>
                    {activeItem.spec}
                  </p>
                </div>
              </div>
            ) : (
              <div className="hud-glass" style={{ padding: '1.4rem 1.8rem', textAlign: 'center', color: 'var(--muted)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>
                [ HOVER OVER ANY NODE TO FREEZE ROTATION & INSPECT LIVE STARK HUD SPECIFICATIONS ]
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
