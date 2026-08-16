import { ExternalLink } from 'lucide-react';
import { RevealDiv } from '../components/RevealDiv';

const LEVELS = [0,0,0,1,1,2,3,4];
const COLORS = ['rgba(255,255,255,0.04)','rgba(139,92,246,0.25)','rgba(139,92,246,0.5)','rgba(139,92,246,0.75)','hsl(258,90%,66%)'];

const days = Array.from({ length: 364 }, () => LEVELS[Math.floor(Math.random() * LEVELS.length)]);

export function GitHubActivity() {
  return (
    <section className="section" id="github">
      <div className="container">
        <RevealDiv><div className="sec-label">github activity</div></RevealDiv>
        <RevealDiv delay={0.1}><h2 className="sec-title">GitHub Stats</h2></RevealDiv>
        <RevealDiv delay={0.2}><p className="sec-desc">Open-source contributions and project activity.</p></RevealDiv>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:'1.25rem', marginTop:'3rem' }}>
          {[['🐙','Active','Contributor'],['🔍','5+','Repositories'],['✨','Open','Source'],['📝','1074+','Lines Committed']].map(([icon,val,lbl]) => (
            <RevealDiv key={lbl} className="glass" style={{ padding:'1.75rem', display:'flex', alignItems:'center', gap:'1rem', transition:'transform 0.25s' }}
              onMouseEnter={e=>e.currentTarget.style.transform='translateY(-4px)'}
              onMouseLeave={e=>e.currentTarget.style.transform=''}>
              <div style={{ width:48, height:48, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.4rem', background:'rgba(139,92,246,0.12)', flexShrink:0 }}>{icon}</div>
              <div>
                <span style={{ fontSize:'1.6rem', fontWeight:800, color:'var(--fg)', display:'block' }}>{val}</span>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.7rem', color:'var(--muted)', letterSpacing:'0.06em' }}>{lbl}</div>
              </div>
            </RevealDiv>
          ))}
        </div>

        <RevealDiv delay={0.3} className="glass" style={{ marginTop:'1.5rem', padding:'1.75rem' }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.8rem', color:'var(--muted)', marginBottom:'1rem', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'0.5rem' }}>
            Contribution activity (simulated)
            <a href="https://github.com/Sathvikpolipati" target="_blank" rel="noopener" style={{ color:'var(--violet)', textDecoration:'none', display:'flex', alignItems:'center', gap:'0.3rem', fontSize:'0.75rem' }}>
              View on GitHub <ExternalLink size={12}/>
            </a>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:3 }}>
            {days.map((lvl, i) => (
              <div key={i} title={`${Math.floor(Math.random()*8)} contributions`} style={{ width:12, height:12, borderRadius:3, background:COLORS[lvl], cursor:'pointer', transition:'outline 0.1s' }}/>
            ))}
          </div>
        </RevealDiv>
      </div>
    </section>
  );
}