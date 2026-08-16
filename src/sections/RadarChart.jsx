import { useRef, useEffect, useState } from 'react';
import { RevealDiv } from '../components/RevealDiv';

const SKILLS = [
  { label: 'Penetration Testing', value: 85, color: '#00f0ff', category: 'Offensive Security' },
  { label: 'Python & Automation',  value: 90, color: '#ffb703', category: 'Programming' },
  { label: 'Web App Security',    value: 82, color: '#e62429', category: 'OWASP / Pentest' },
  { label: 'AI & Machine Learning', value: 78, color: '#00ff88', category: 'Neural / ML' },
  { label: 'Full-Stack Web Dev',  value: 80, color: '#0088ff', category: 'Architecture' },
  { label: 'Network Security',    value: 75, color: '#c084fc', category: 'Packet Analysis' },
  { label: 'Security Tools',      value: 85, color: '#ff5500', category: 'Kali / Burp / Nmap' },
  { label: 'Git & DevOps',        value: 88, color: '#ffffff', category: 'CI/CD Pipelines' },
];

function Radar({ skills, animated }) {
  const N = skills.length;
  const cx = 200, cy = 200, R = 150;
  const levels = [0.25, 0.5, 0.75, 1];

  function point(angle, r) {
    const rad = (angle - 90) * (Math.PI / 180);
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  const axes = skills.map((_, i) => point((360 / N) * i, R));
  const dataPoints = skills.map((s, i) =>
    point((360 / N) * i, (animated ? s.value : 0) / 100 * R)
  );
  const poly = dataPoints.map(p => `${p.x},${p.y}`).join(' ');

  const [hovered, setHovered] = useState(null);

  return (
    <svg viewBox="0 0 400 400" style={{ width: '100%', maxWidth: 440 }}>
      {/* Grid rings */}
      {levels.map(l => {
        const pts = skills.map((_, i) => point((360 / N) * i, R * l));
        return (
          <polygon
            key={l}
            points={pts.map(p => `${p.x},${p.y}`).join(' ')}
            fill="none"
            stroke="rgba(0, 240, 255, 0.16)"
            strokeWidth="1"
            strokeDasharray={l < 1 ? '4 4' : 'none'}
          />
        );
      })}

      {/* Axis spokes */}
      {axes.map((p, i) => (
        <line
          key={i}
          x1={cx}
          y1={cy}
          x2={p.x}
          y2={p.y}
          stroke="rgba(0, 240, 255, 0.22)"
          strokeWidth="1"
        />
      ))}

      {/* Data polygon with neon gradient glow */}
      <polygon
        points={poly}
        fill="rgba(0, 240, 255, 0.18)"
        stroke="#00f0ff"
        strokeWidth="2.5"
        style={{
          transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.6))',
        }}
      />

      {/* Data points with individual neon colors */}
      {dataPoints.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={hovered === i ? 8 : 5.5}
          fill={skills[i].color}
          stroke="#06080e"
          strokeWidth="1.5"
          style={{
            cursor: 'pointer',
            transition: 'r 0.2s, filter 0.2s',
            filter: `drop-shadow(0 0 6px ${skills[i].color})`,
          }}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        />
      ))}

      {/* Tooltip */}
      {hovered !== null && (
        <g>
          <rect
            x={dataPoints[hovered].x - 65}
            y={dataPoints[hovered].y - 42}
            width={130}
            height={32}
            rx={6}
            fill="#06080e"
            stroke={skills[hovered].color}
            strokeWidth="1.5"
          />
          <text
            x={dataPoints[hovered].x}
            y={dataPoints[hovered].y - 21}
            textAnchor="middle"
            fill="#fff"
            fontSize="11.5"
            fontWeight="bold"
            fontFamily="Orbitron, sans-serif"
          >
            {skills[hovered].value}% &bull; {skills[hovered].label.slice(0, 10)}
          </text>
        </g>
      )}

      {/* Axis labels */}
      {axes.map((p, i) => {
        const labelPt = point((360 / N) * i, R + 26);
        return (
          <text
            key={i}
            x={labelPt.x}
            y={labelPt.y + 4}
            textAnchor="middle"
            fill={skills[i].color}
            fontSize="10"
            fontFamily="JetBrains Mono, monospace"
            fontWeight="600"
          >
            {skills[i].label.split(' ').map((w, wi) => (
              <tspan key={wi} x={labelPt.x} dy={wi === 0 ? 0 : 12}>{w}</tspan>
            ))}
          </text>
        );
      })}

      {/* Center label */}
      <text
        x={cx}
        y={cy + 4}
        textAnchor="middle"
        fill="var(--cyan)"
        fontSize="11"
        fontWeight="800"
        fontFamily="Orbitron, sans-serif"
      >
        SOUL REAPER
      </text>
    </svg>
  );
}

export function RadarChart() {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setAnimated(true);
        obs.disconnect();
      }
    }, { threshold: 0.25 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="radar">
      <div className="container">
        <RevealDiv><div className="sec-hud-label">skill proficiencies</div></RevealDiv>
        <RevealDiv delay={0.1}><h2 className="sec-hud-title">Combat Radar Chart</h2></RevealDiv>
        <RevealDiv delay={0.2}>
          <p className="sec-hud-desc">
            An interactive tactical radar plot mapping engineering and offensive security proficiencies. Hover data points to inspect live parameters.
          </p>
        </RevealDiv>

        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '3.5rem', marginTop: '3.5rem', alignItems: 'center' }}>
          <RevealDiv delay={0.2} style={{ display: 'flex', justifyContent: 'center' }}>
            <Radar skills={SKILLS} animated={animated} />
          </RevealDiv>

          {/* ── Multi-Colored Neon Progress Lines ── */}
          <RevealDiv delay={0.3}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {SKILLS.map(s => (
                <div key={s.label} className="hud-glass" style={{ padding: '0.85rem 1.2rem', borderColor: `${s.color}33` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: s.color, boxShadow: `0 0 8px ${s.color}` }} />
                      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fff' }}>{s.label}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)' }}>({s.category})</span>
                    </div>
                    <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.82rem', fontWeight: 700, color: s.color }}>
                      {s.value}%
                    </span>
                  </div>

                  {/* Colored Progress Line */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.06)', borderRadius: 100, height: 6, overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: animated ? `${s.value}%` : '0%',
                      background: `linear-gradient(90deg, ${s.color}, #00f0ff)`,
                      boxShadow: `0 0 10px ${s.color}`,
                      borderRadius: 100,
                      transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </RevealDiv>
        </div>
      </div>
    </section>
  );
}