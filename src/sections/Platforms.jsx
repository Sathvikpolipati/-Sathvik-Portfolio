import { ExternalLink } from 'lucide-react';
import { RevealDiv } from '../components/RevealDiv';

const PLATFORMS = [
  { icon:'💀', name:'TryHackMe', handle:'@ultimatealienx401', url:'https://tryhackme.com/p/ultimatealienx401', val:'Active', lbl:'Status', badge:'Ethical Hacking', badgeBg:'rgba(220,38,38,0.12)', badgeColor:'hsl(0,80%,65%)', badgeBorder:'rgba(220,38,38,0.25)' },
  { icon:'⭐', name:'HackerRank', handle:'@sathvikpolipati', url:'https://www.hackerrank.com/sathvikpolipati', val:'5★ Gold', lbl:'Python Badge', badge:'Coding Challenges', badgeBg:'rgba(22,163,74,0.12)', badgeColor:'var(--green)', badgeBorder:'rgba(22,163,74,0.25)' },
  { icon:'🛡️', name:'PortSwigger', handle:'Web Security Academy', url:'https://portswigger.net/web-security', val:'Labs', lbl:'Ongoing', badge:'Web App Security', badgeBg:'rgba(249,115,22,0.12)', badgeColor:'hsl(25,90%,60%)', badgeBorder:'rgba(249,115,22,0.25)' },
  { icon:'🐙', name:'GitHub', handle:'@Sathvikpolipati', url:'https://github.com/Sathvikpolipati', val:'Active', lbl:'Open Source', badge:'Code Repository', badgeBg:'rgba(255,255,255,0.06)', badgeColor:'var(--muted)', badgeBorder:'rgba(255,255,255,0.12)' },
  { icon:'💼', name:'LinkedIn', handle:'sathvik-polipati', url:'https://linkedin.com/in/sathvik-polipati', val:'Open', lbl:'To Hire', badge:'Professional Network', badgeBg:'rgba(59,130,246,0.12)', badgeColor:'var(--blue)', badgeBorder:'rgba(59,130,246,0.25)' },
];

export function Platforms() {
  return (
    <section className="section" id="platforms">
      <div className="container">
        <RevealDiv><div className="sec-label">coding & security platforms</div></RevealDiv>
        <RevealDiv delay={0.1}><h2 className="sec-title">Platform Dashboard</h2></RevealDiv>
        <RevealDiv delay={0.2}><p className="sec-desc">Where I practice, compete and grow every day.</p></RevealDiv>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(230px,1fr))', gap:'1.25rem', marginTop:'3rem' }}>
          {PLATFORMS.map((p, i) => (
            <RevealDiv key={p.name} delay={0.06 * i}>
              <a href={p.url} target="_blank" rel="noopener" className="glass" style={{ display:'block', padding:'1.75rem', textDecoration:'none', color:'inherit', transition:'transform 0.25s' }}
                onMouseEnter={e => e.currentTarget.style.transform='translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform=''}>
                <div style={{ fontSize:'2.5rem', display:'block', marginBottom:'0.75rem' }}>{p.icon}</div>
                <div style={{ fontSize:'2rem', fontWeight:800, display:'block', marginBottom:'0.25rem', color: p.val==='Open'?'var(--blue)':p.val.includes('★')?'var(--green)':'var(--fg)' }}>{p.val}</div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.72rem', color:'var(--muted)', letterSpacing:'0.06em', textTransform:'uppercase' }}>{p.name}</div>
                <div style={{ fontSize:'0.8rem', color:'var(--muted)', margin:'0.4rem 0 0.75rem' }}>{p.handle} · {p.lbl}</div>
                <div style={{ display:'inline-flex', alignItems:'center', gap:'0.4rem', background:p.badgeBg, border:`1px solid ${p.badgeBorder}`, color:p.badgeColor, borderRadius:100, padding:'0.2rem 0.65rem', fontFamily:"'JetBrains Mono',monospace", fontSize:'0.68rem' }}>
                  {p.badge} <ExternalLink size={10}/>
                </div>
              </a>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}