import { useRef, useEffect, useState } from 'react';
import { RevealDiv } from '../components/RevealDiv';

const SKILLS = [
  { label: 'Penetration Testing', value: 85 },
  { label: 'Python',              value: 90 },
  { label: 'Web Security',        value: 82 },
  { label: 'AI / ML',             value: 78 },
  { label: 'Web Development',     value: 80 },
  { label: 'Networking',          value: 75 },
  { label: 'Security Tools',      value: 78 },
  { label: 'Git & DevOps',        value: 85 },
];

function Radar({ skills, animated }) {
  const N = skills.length;
  const cx = 200, cy = 200, R = 160;
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
    <svg viewBox="0 0 400 400" style={{ width:'100%', maxWidth:420 }}>
      {/* Grid rings */}
      {levels.map(l => {
        const pts = skills.map((_, i) => point((360 / N) * i, R * l));
        return (
          <polygon key={l} points={pts.map(p => `${p.x},${p.y}`).join(' ')}
            fill="none" stroke="rgba(139,92,246,0.15)" strokeWidth="1" />
        );
      })}

      {/* Axis spokes */}
      {axes.map((p, i) => (
        <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="rgba(139,92,246,0.2)" strokeWidth="1" />
      ))}

      {/* Data polygon */}
      <polygon points={poly}
        fill="rgba(139,92,246,0.15)"
        stroke="hsl(258,90%,66%)"
        strokeWidth="2"
        style={{ transition: 'all 1.2s ease', filter:'drop-shadow(0 0 6px rgba(139,92,246,0.5))' }}
      />

      {/* Data points */}
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={hovered === i ? 7 : 5}
          fill="hsl(258,90%,66%)"
          style={{ cursor:'pointer', transition:'r 0.2s', filter:'drop-shadow(0 0 4px rgba(139,92,246,0.8))' }}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        />
      ))}

      {/* Tooltip */}
      {hovered !== null && (
        <g>
          <rect x={dataPoints[hovered].x - 60} y={dataPoints[hovered].y - 36} width={120} height={28} rx={6}
            fill="hsl(240,10%,8%)" stroke="rgba(139,92,246,0.4)" strokeWidth="1" />
          <text x={dataPoints[hovered].x} y={dataPoints[hovered].y - 17} textAnchor="middle"
            fill="hsl(258,90%,80%)" fontSize="11" fontFamily="JetBrains Mono,monospace">
            {skills[hovered].value}%
          </text>
        </g>
      )}

      {/* Axis labels */}
      {axes.map((p, i) => {
        const labelPt = point((360 / N) * i, R + 26);
        return (
          <text key={i} x={labelPt.x} y={labelPt.y + 4} textAnchor="middle"
            fill="var(--muted)" fontSize="10.5" fontFamily="JetBrains Mono,monospace">
            {skills[i].label.split(' ').map((w, wi) => (
              <tspan key={wi} x={labelPt.x} dy={wi === 0 ? 0 : 13}>{w}</tspan>
            ))}
          </text>
        );
      })}

      {/* Center label */}
      <text x={cx} y={cy + 5} textAnchor="middle" fill="var(--muted)" fontSize="10" fontFamily="JetBrains Mono,monospace">Skills</text>
    </svg>
  );
}

export function RadarChart() {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setAnimated(true); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="radar">
      <div className="container">
        <RevealDiv><div className="sec-label">skill proficiencies</div></RevealDiv>
        <RevealDiv delay={0.1}><h2 className="sec-title">Radar Chart</h2></RevealDiv>
        <RevealDiv delay={0.2}><p className="sec-desc">An interactive radar mapping my technical competencies. Hover the data points to see exact scores.</p></RevealDiv>

        <div ref={ref} style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'3rem', marginTop:'3rem', alignItems:'center' }}>
          <RevealDiv delay={0.2}>
            <Radar skills={SKILLS} animated={animated} />
          </RevealDiv>

          <RevealDiv delay={0.3}>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
              {SKILLS.map(s => (
                <div key={s.label}>
                  <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'0.3rem' }}>
                    <span style={{ fontSize:'0.85rem', fontWeight:500 }}>{s.label}</span>
                    <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.72rem', color:'var(--violet)' }}>{s.value}%</span>
                  </div>
                  <div style={{ background:'rgba(255,255,255,0.06)', borderRadius:100, height:5, overflow:'hidden' }}>
                    <div style={{
                      height:'100%',
                      width: animated ? s.value + '%' : '0%',
                      background:'linear-gradient(90deg,var(--violet),var(--cyan))',
                      borderRadius:100,
                      transition:'width 1.2s ease',
                    }}/>
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