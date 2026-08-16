import { useState, useEffect } from 'react';
import { RevealDiv } from '../components/RevealDiv';

const ATOM_RINGS = [
  {
    name: 'RING 01 // CODING & WEB NUCLEUS',
    tilt: 'rotateX(72deg) rotateY(0deg)',
    duration: 14,
    color: '#00f0ff',
    radius: 200,
    items: [
      { name: 'Python', icon: '🐍', spec: 'Primary language for offensive tools, Scapy scripts & ML pipelines', level: '96%', color: '#00f0ff', category: 'Core Language' },
      { name: 'React.js', icon: '⚛️', spec: 'Interactive reactive UI, modern component frameworks & DOM state', level: '88%', color: '#00d8ff', category: 'Frontend Architecture' },
      { name: 'Bash Shell', icon: '💻', spec: 'Linux terminal automation, shell scripting & server administration', level: '92%', color: '#00ff88', category: 'System Automation' },
      { name: 'C / C++', icon: '⚙️', spec: 'Low-level memory management, network sockets & exploit development', level: '80%', color: '#0088ff', category: 'Systems Programming' },
      { name: 'HTML5 / CSS3', icon: '🌐', spec: 'Responsive Stark HUD styling, glassmorphism & fluid cyber layouts', level: '90%', color: '#ffd700', category: 'Styling & HUD' },
      { name: 'Node.js', icon: '⚡', spec: 'Backend microservices, REST APIs, asynchronous network I/O', level: '85%', color: '#ffb703', category: 'Backend Architecture' },
    ]
  },
  {
    name: 'RING 02 // KALI OFFENSIVE ARSENAL',
    tilt: 'rotateX(72deg) rotateY(60deg)',
    duration: 20,
    color: '#e62429',
    radius: 230,
    items: [
      { name: 'Burp Suite Pro', icon: '🛡️', spec: 'OWASP Top 10 web vulnerability analysis, proxy intercept & repeater audits', level: '90%', color: '#ff5500', category: 'Web App Pentesting' },
      { name: 'THC Hydra', icon: '🐲', spec: 'High-speed network login cracker supporting 50+ protocols & brute-forcing', level: '88%', color: '#e62429', category: 'Network Attack' },
      { name: 'Wireshark', icon: '📡', spec: 'Deep packet inspection, pcap network dissection & anomaly telemetry', level: '86%', color: '#0088ff', category: 'Protocol Dissection' },
      { name: 'Nmap / Zenmap', icon: '🔍', spec: 'Network reconnaissance, port discovery & NSE vulnerability scripting', level: '94%', color: '#00ff88', category: 'Reconnaissance' },
      { name: 'Metasploit', icon: '🎯', spec: 'Modular exploitation framework, msfvenom payloads & post-exploitation', level: '84%', color: '#ff3344', category: 'Exploitation Engine' },
      { name: 'SQLmap', icon: '💉', spec: 'Automated database takeover, SQL injection detection & data extraction', level: '88%', color: '#ff007f', category: 'Database Exploitation' },
      { name: 'John the Ripper', icon: '🗝️', spec: 'Password hash cracking, dictionary attacks & custom rule mutation engines', level: '82%', color: '#ffd700', category: 'Cryptanalysis' },
      { name: 'Aircrack-ng', icon: '📶', spec: '802.11 wireless security auditing, WPA/WPA2 handshake capture & cracking', level: '80%', color: '#00f0ff', category: 'Wireless Security' },
    ]
  },
  {
    name: 'RING 03 // AI, BOTS & CLOUD DEFENSE',
    tilt: 'rotateX(72deg) rotateY(-60deg)',
    duration: 28,
    color: '#ffb703',
    radius: 260,
    items: [
      { name: 'Scikit-Learn ML', icon: '🤖', spec: 'Predictive classification pipelines, decision trees & ML data models', level: '85%', color: '#ffd700', category: 'AI & Machine Learning' },
      { name: 'Security Automation Bots', icon: '🤖', spec: 'Autonomous monitoring bots, real-time alert dispatchers & recon crawlers', level: '88%', color: '#00ff88', category: 'Autonomous Bots' },
      { name: 'Scapy Packet Forge', icon: '📦', spec: 'Custom packet manipulation, ARP poisoning, sniffing & network mapping', level: '90%', color: '#00f0ff', category: 'Packet Engineering' },
      { name: 'Firebase Cloud', icon: '🔥', spec: 'Real-time cloud database, Firestore security rules & event functions', level: '84%', color: '#ff9900', category: 'Cloud Infrastructure' },
      { name: 'Git & GitHub CI/CD', icon: '🐙', spec: 'Version control, automated security testing & repository management', level: '92%', color: '#ffffff', category: 'DevOps & CI/CD' },
      { name: 'Docker Containers', icon: '🐳', spec: 'Containerized vulnerable test labs, sandboxed testing & microservices', level: '82%', color: '#0099ff', category: 'Containerization' },
      { name: 'Netcat Utility', icon: '🐱', spec: 'Raw TCP/UDP socket connections, port scanning & reverse shell handlers', level: '90%', color: '#ff3344', category: 'Socket Utilities' },
      { name: 'Gobuster / Dirb', icon: '🔎', spec: 'High-speed web directory, DNS subdomain & vhost brute-force reconnaissance', level: '88%', color: '#c084fc', category: 'Web Recon' },
    ]
  }
];

export function TechOrbit() {
  const [activeItem, setActiveItem] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="section" id="orbit" style={{ overflow: 'hidden' }}>
      <div className="container">
        <RevealDiv><div className="sec-hud-label">3D atomic telemetry</div></RevealDiv>
        <RevealDiv delay={0.1}><h2 className="sec-hud-title">Soul Reaper 3D Atomic Orbit</h2></RevealDiv>
        <RevealDiv delay={0.2}>
          <p className="sec-hud-desc">
            A real-time 3D atomic orbital model with multi-axis planetary electron shells revolving around the Kali Linux nucleus. Hover any revolving node to freeze 3D rotation and inspect live parameters.
          </p>
        </RevealDiv>

        {/* ── 3D Atomic Stage Container ── */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '3rem',
          position: 'relative',
        }}>
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              position: 'relative',
              width: 650,
              height: 600,
              maxWidth: '100vw',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              perspective: 1200,
              perspectiveOrigin: '50% 50%',
            }}
          >
            {/* ── Central 3D Kali Linux Nucleus Core ── */}
            <div style={{
              position: 'absolute',
              width: 120,
              height: 120,
              borderRadius: '50%',
              background: 'radial-gradient(circle, #00f0ff 0%, #004488 60%, #06080e 100%)',
              border: '3px solid #ffffff',
              boxShadow: '0 0 50px rgba(0, 240, 255, 0.95), inset 0 0 25px rgba(255, 255, 255, 0.7)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 50,
              animation: 'arc-pulse 2.5s infinite',
              cursor: 'pointer',
            }}>
              <span style={{ fontSize: '2.5rem', filter: 'drop-shadow(0 0 10px #ffffff)' }}>🐉</span>
              <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.65rem', color: '#ffffff', fontWeight: 900, letterSpacing: '0.1em', marginTop: 1 }}>
                KALI CORE
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'var(--gold)', letterSpacing: '0.08em' }}>
                NUCLEUS
              </span>
            </div>

            {/* ── 3 Multi-Axis 3D Atomic Tilted Rings ── */}
            {ATOM_RINGS.map((ring, rIdx) => {
              const size = ring.radius * 2;
              return (
                <div
                  key={ring.name}
                  style={{
                    position: 'absolute',
                    width: size,
                    height: size,
                    transformStyle: 'preserve-3d',
                    transform: ring.tilt,
                    pointerEvents: 'none',
                  }}
                >
                  {/* Orbit Track Outline */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '50%',
                      border: `2px dashed ${ring.color}55`,
                      boxShadow: `0 0 25px ${ring.color}22, inset 0 0 15px ${ring.color}11`,
                      animation: `spin-cw ${ring.duration}s linear infinite`,
                      animationPlayState: isPaused ? 'paused' : 'running',
                      pointerEvents: 'auto',
                    }}
                  >
                    {/* Revolving Electrons / Tools */}
                    {ring.items.map((it, iIdx) => {
                      const angle = (iIdx / ring.items.length) * 2 * Math.PI;
                      const x = ring.radius + ring.radius * Math.cos(angle) - 22;
                      const y = ring.radius + ring.radius * Math.sin(angle) - 22;

                      return (
                        <div
                          key={it.name}
                          onMouseEnter={(e) => {
                            e.stopPropagation();
                            setActiveItem(it);
                          }}
                          style={{
                            position: 'absolute',
                            left: x,
                            top: y,
                            width: 44,
                            height: 44,
                            borderRadius: '50%',
                            background: '#090d19',
                            border: `2px solid ${it.color}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.25rem',
                            cursor: 'pointer',
                            boxShadow: `0 0 16px ${it.color}88`,
                            animation: `spin-ccw ${ring.duration}s linear infinite`,
                            animationPlayState: isPaused ? 'paused' : 'running',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.transform = 'scale(1.4)';
                            e.currentTarget.style.boxShadow = `0 0 28px ${it.color}`;
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = `0 0 16px ${it.color}88`;
                          }}
                        >
                          {it.icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Live Stark HUD Inspection Card ── */}
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
                [ HOVER OVER ANY 3D ELECTRON NODE TO FREEZE ROTATION & INSPECT PARAMETERS ]
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
