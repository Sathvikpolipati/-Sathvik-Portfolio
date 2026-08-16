import { RevealDiv } from '../components/RevealDiv';

const ORBITS = [
  {
    radius: 100,
    duration: 12,
    items: [
      { icon: '🌐', label: 'HTML/CSS', deg: 0 },
      { icon: '🐍', label: 'Python', deg: 120 },
      { icon: '⚡', label: 'JavaScript', deg: 240 },
    ],
  },
  {
    radius: 175,
    duration: 20,
    items: [
      { icon: '⚛️', label: 'React', deg: 0 },
      { icon: '🐉', label: 'Kali Linux', deg: 72 },
      { icon: '🛡️', label: 'Burp Suite', deg: 144 },
      { icon: '🔧', label: 'Nmap', deg: 216 },
      { icon: '📡', label: 'Wireshark', deg: 288 },
    ],
  },
  {
    radius: 255,
    duration: 32,
    items: [
      { icon: '🐙', label: 'Git', deg: 0 },
      { icon: '🔥', label: 'Firebase', deg: 60 },
      { icon: '🟢', label: 'Node.js', deg: 120 },
      { icon: '🐬', label: 'MySQL', deg: 180 },
      { icon: '🎯', label: 'Metasploit', deg: 240 },
      { icon: '📦', label: 'Scapy', deg: 300 },
    ],
  },
];

function OrbitRing({ radius, duration, items, reverse }) {
  const size = radius * 2 + 56;
  return (
    <div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '1px dashed rgba(0, 240, 255, 0.25)',
        borderRadius: '50%',
        boxShadow: '0 0 25px rgba(0, 240, 255, 0.05), inset 0 0 15px rgba(0, 240, 255, 0.03)',
        animation: `${reverse ? 'orbit-ccw' : 'orbit-cw'} ${duration}s linear infinite`,
      }}
    >
      {items.map((item) => {
        const rad = (item.deg * Math.PI) / 180;
        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);
        return (
          <div
            key={item.label}
            title={item.label}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: '#0a0f1a',
                border: '1px solid rgba(0, 240, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                cursor: 'default',
                transition: 'box-shadow 0.3s, transform 0.2s',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 0 12px rgba(0, 240, 255, 0.25)',
                animation: `${reverse ? 'counter-cw2' : 'counter-cw'} ${duration}s linear infinite`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 22px rgba(0, 240, 255, 0.8)';
                e.currentTarget.style.transform = 'scale(1.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 12px rgba(0, 240, 255, 0.25)';
                e.currentTarget.style.transform = 'scale(1)';
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
  return (
    <section className="section" id="orbit">
      <div className="container">
        <RevealDiv><div className="sec-hud-label">technology stack</div></RevealDiv>
        <RevealDiv delay={0.1}><h2 className="sec-hud-title">Soul Reaper's Tech Orbit</h2></RevealDiv>
        <RevealDiv delay={0.2}>
          <p className="sec-hud-desc">
            The core engineering layers and offensive security tools orbiting around the central security core — with continuous 360-degree rotation and always-upright telemetry.
          </p>
        </RevealDiv>

        {/* ── 3 Concentric Orbit Rings (Always Upright) ── */}
        <RevealDiv delay={0.3} style={{ display: 'flex', justifyContent: 'center', marginTop: '3.5rem' }}>
          <div style={{ position: 'relative', width: 580, height: 580, flexShrink: 0 }}>
            {/* Center Kali Linux Security Core */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 86,
                height: 86,
                borderRadius: '50%',
                background: 'radial-gradient(circle, #0d1b2a 0%, #001220 50%, #06080e 100%)',
                border: '2.5px solid #00f0ff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                zIndex: 10,
                animation: 'arc-pulse 3s ease-in-out infinite',
                boxShadow: '0 0 40px rgba(0, 240, 255, 0.8), inset 0 0 20px rgba(0, 240, 255, 0.5)',
              }}
            >
              <span>🐉</span>
              <span
                style={{
                  fontFamily: 'var(--font-hud)',
                  fontSize: '0.55rem',
                  color: '#00f0ff',
                  fontWeight: 900,
                  marginTop: 1,
                  letterSpacing: '0.08em',
                }}
              >
                KALI CORE
              </span>
            </div>

            {/* 3 Concentric Rings */}
            {ORBITS.map((o, i) => (
              <OrbitRing key={i} {...o} reverse={i % 2 === 1} />
            ))}
          </div>
        </RevealDiv>

        {/* Legend Chips */}
        <RevealDiv delay={0.4} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center', marginTop: '2.8rem' }}>
          {ORBITS.flatMap((o) => o.items).map((it) => (
            <span key={it.label} className="hud-tag">
              {it.icon} {it.label}
            </span>
          ))}
        </RevealDiv>
      </div>
    </section>
  );
}
