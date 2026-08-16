import { Mail, GitBranch, Link } from 'lucide-react';
import { RevealDiv } from '../components/RevealDiv';

const SOCIAL = [
  { icon:'💼', label:'LinkedIn',  url:'https://linkedin.com/in/sathvik-polipati' },
  { icon:'🐙', label:'GitHub',    url:'https://github.com/Sathvikpolipati' },
  { icon:'💀', label:'TryHackMe', url:'https://tryhackme.com/p/ultimatealienx401' },
  { icon:'🛡️', label:'PortSwigger',url:'https://portswigger.net/web-security' },
  { icon:'⭐', label:'HackerRank',url:'https://www.hackerrank.com/sathvikpolipati' },
];

const CARDS = [
  { icon:'✉️', label:'EMAIL', val:'polipatisathvik@gmail.com', url:'mailto:polipatisathvik@gmail.com' },
  { icon:'💼', label:'LINKEDIN', val:'linkedin.com/in/sathvik-polipati', url:'https://linkedin.com/in/sathvik-polipati' },
  { icon:'🐙', label:'GITHUB', val:'github.com/Sathvikpolipati', url:'https://github.com/Sathvikpolipati' },
  { icon:'💀', label:'TRYHACKME', val:'@ultimatealienx401', url:'https://tryhackme.com/p/ultimatealienx401' },
];

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div style={{ maxWidth:780, margin:'0 auto', textAlign:'center' }}>
          <RevealDiv><div className="sec-label" style={{ justifyContent:'center' }}>get in touch</div></RevealDiv>
          <RevealDiv delay={0.1}><h2 className="sec-title">Let's Connect</h2></RevealDiv>
          <RevealDiv delay={0.2}><p className="sec-desc" style={{ margin:'0 auto' }}>Open to internships, collaborations, and conversations about security &amp; tech.</p></RevealDiv>

          <RevealDiv delay={0.3} style={{ display:'flex', justifyContent:'center', gap:'0.75rem', flexWrap:'wrap', margin:'2rem 0' }}>
            {SOCIAL.map(s => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener" style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.55rem 1.1rem', border:'1px solid var(--glass-border)', borderRadius:100, textDecoration:'none', color:'var(--muted)', fontFamily:"'JetBrains Mono',monospace", fontSize:'0.75rem', background:'var(--glass)', transition:'all 0.2s' }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--violet)';e.currentTarget.style.color='var(--violet)';e.currentTarget.style.background='rgba(139,92,246,0.08)'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--glass-border)';e.currentTarget.style.color='var(--muted)';e.currentTarget.style.background='var(--glass)'}}>
                {s.icon} {s.label}
              </a>
            ))}
          </RevealDiv>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginTop:'1rem' }}>
            {CARDS.map(c => (
              <RevealDiv key={c.label} delay={0.1}>
                <a href={c.url} target="_blank" rel="noopener" className="glass" style={{ display:'flex', flexDirection:'column', alignItems:'flex-start', gap:'0.5rem', padding:'1.75rem', textDecoration:'none', color:'inherit', transition:'transform 0.25s' }}
                  onMouseEnter={e=>e.currentTarget.style.transform='translateY(-3px)'}
                  onMouseLeave={e=>e.currentTarget.style.transform=''}>
                  <span style={{ fontSize:'1.4rem' }}>{c.icon}</span>
                  <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.68rem', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.08em' }}>{c.label}</span>
                  <span style={{ fontSize:'0.85rem', color:'var(--violet)', wordBreak:'break-all' }}>{c.val}</span>
                </a>
              </RevealDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}