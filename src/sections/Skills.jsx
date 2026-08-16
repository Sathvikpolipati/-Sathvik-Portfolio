import { useRef, useEffect } from 'react';
import { RevealDiv } from '../components/RevealDiv';

const SKILLS = [
  { icon:'🔒', name:'Penetration Testing', sub:'Ethical Hacking', pct:85, cls:'si-sec', bg:'rgba(239,68,68,0.15)' },
  { icon:'🐍', name:'Python',              sub:'5★ HackerRank',   pct:90, cls:'si-py',  bg:'rgba(59,130,246,0.15)' },
  { icon:'🛡️', name:'Web App Security',   sub:'OWASP / Burp Suite', pct:82, cls:'si-web', bg:'rgba(34,211,238,0.15)' },
  { icon:'🤖', name:'AI / Machine Learning', sub:'Scikit-learn / NumPy', pct:78, cls:'si-ml', bg:'rgba(245,158,11,0.15)' },
  { icon:'💻', name:'Web Development',    sub:'HTML/CSS/JS/React', pct:80, cls:'si-dev', bg:'rgba(34,211,238,0.12)' },
  { icon:'📡', name:'Network Security',   sub:'Nmap / Wireshark',  pct:75, cls:'si-net', bg:'rgba(16,185,129,0.15)' },
  { icon:'🔧', name:'Security Tools',     sub:'Kali Linux / MSF',  pct:78, cls:'si-tool',bg:'rgba(139,92,246,0.15)' },
  { icon:'🐙', name:'Git & GitHub',       sub:'Version Control',   pct:85, cls:'si-git', bg:'rgba(148,163,184,0.12)' },
];

function SkillBar({ pct }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTimeout(() => { el.style.width = pct + '%'; }, 200); obs.disconnect(); } }, { threshold:0.3 });
    obs.observe(el.parentElement);
    return () => obs.disconnect();
  }, [pct]);
  return <div ref={ref} style={{ height:'100%', width:'0%', borderRadius:100, background:'linear-gradient(90deg,var(--violet),var(--cyan))', transition:'width 1.2s ease' }}/>;
}

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <RevealDiv><div className="sec-label">technical skills</div></RevealDiv>
        <RevealDiv delay={0.1}><h2 className="sec-title">My Toolkit</h2></RevealDiv>
        <RevealDiv delay={0.2}><p className="sec-desc">Technologies and tools I use to build and break things.</p></RevealDiv>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(210px,1fr))', gap:'1rem', marginTop:'3rem' }}>
          {SKILLS.map((s, i) => (
            <RevealDiv key={s.name} delay={0.05 * (i % 4)} className="glass" style={{ padding:'1.5rem' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'1rem' }}>
                <div style={{ width:40, height:40, borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem', flexShrink:0, background:s.bg }}>{s.icon}</div>
                <div>
                  <div style={{ fontWeight:600, fontSize:'0.9rem' }}>{s.name}</div>
                  <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.68rem', color:'var(--muted)' }}>{s.sub}</div>
                </div>
              </div>
              <div style={{ background:'rgba(255,255,255,0.06)', borderRadius:100, height:4, overflow:'hidden' }}>
                <SkillBar pct={s.pct}/>
              </div>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.68rem', color:'var(--muted)', marginTop:'0.35rem', textAlign:'right' }}>{s.pct}%</div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}