import { ExternalLink } from 'lucide-react';
import { RevealDiv } from '../components/RevealDiv';

const CERTS = [
  { icon:'🔒', badgeLabel:'CYBER SECURITY · INTERNSHIP', badgeBg:'rgba(220,38,38,0.1)', badgeColor:'hsl(0,80%,65%)', badgeBorder:'rgba(220,38,38,0.25)', boxBg:'rgba(239,68,68,0.12)',
    title:'Cyber Security Internship', org:'HM Cyber Academy — "Hack the Future"', certId:'CERT ID: HMCA/2025/7/009',
    desc:'6-week hands-on internship (9 Jun – 20 Jul 2025). Penetration testing, ethical hacking, and real-world security tools. Issued by Mukesh Pyda.',
    tags:[['Pentesting',''],['Ethical Hacking',''],['6 Weeks','']], link:null },
  { icon:'🤖', badgeLabel:'AI & ML · INTERNSHIP', badgeBg:'rgba(59,130,246,0.1)', badgeColor:'var(--blue)', badgeBorder:'rgba(59,130,246,0.25)', boxBg:'rgba(59,130,246,0.12)',
    title:'AI & Machine Learning', org:'SmartBridge · AP State Council · JNTU Anantapur', certId:'CERT ID: VIP-AIML-2026-5057',
    desc:'2-month (120 hrs) Virtual Internship on AI & ML, Aug 2026. Hall ticket: 23KB1A05G8. Organised by SmartBridge & APSCHE.',
    tags:[['AI','blue'],['Machine Learning','blue'],['120 hrs','']], link:null },
  { icon:'🌐', badgeLabel:'NPTEL · SECURITY', badgeBg:'rgba(245,158,11,0.1)', badgeColor:'var(--gold)', badgeBorder:'rgba(245,158,11,0.25)', boxBg:'rgba(245,158,11,0.12)',
    title:'Privacy & Security in Online Social Media', org:'NPTEL · IIT Hyderabad / IIT Madras · Jan–Apr 2025', certId:'Roll: NPTEL25CS79S153600246',
    desc:'12-week NPTEL course. Score: 53% (Assignments: 22.39/25 + Exam: 30.62/75). Funded by MoE, Govt. of India — Skill India. 3–4 credits.',
    tags:[['NPTEL','gold'],['Privacy',''],['Security',''],['Skill India','']], link:null },
  { icon:'💀', badgeLabel:'SECURITY', badgeBg:'rgba(220,38,38,0.1)', badgeColor:'hsl(0,80%,65%)', badgeBorder:'rgba(220,38,38,0.25)', boxBg:'rgba(220,38,38,0.12)',
    title:'TryHackMe Learning Paths', org:'TryHackMe · @ultimatealienx401 · Ongoing', certId:null,
    desc:'Pre-Security, Jr Penetration Tester & Web Fundamentals paths completed with real lab rooms.',
    tags:[['Pentesting',''],['Web Security','']], link:'https://tryhackme.com/p/ultimatealienx401' },
  { icon:'🛡️', badgeLabel:'WEB SECURITY', badgeBg:'rgba(249,115,22,0.1)', badgeColor:'hsl(25,90%,60%)', badgeBorder:'rgba(249,115,22,0.25)', boxBg:'rgba(249,115,22,0.12)',
    title:'PortSwigger Web Security Academy', org:'PortSwigger · Ongoing', certId:null,
    desc:'Hands-on labs: SQLi, XSS, CSRF, SSRF, XXE, auth vulnerabilities & advanced exploits with Burp Suite.',
    tags:[['OWASP',''],['Burp Suite','']], link:'https://portswigger.net/web-security' },
  { icon:'⭐', badgeLabel:'PROGRAMMING', badgeBg:'rgba(22,163,74,0.1)', badgeColor:'var(--green)', badgeBorder:'rgba(22,163,74,0.25)', boxBg:'rgba(22,163,74,0.12)',
    title:'Python 5★ Gold Badge', org:'HackerRank · @sathvikpolipati · Certified', certId:null,
    desc:'Advanced algorithmic challenges covering data structures, OOP, regex, and functional programming.',
    tags:[['Python','green'],['Algorithms',''],['DSA','']], link:'https://www.hackerrank.com/sathvikpolipati' },
];

export function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <RevealDiv><div className="sec-label">certifications & credentials</div></RevealDiv>
        <RevealDiv delay={0.1}><h2 className="sec-title">Verified Credentials</h2></RevealDiv>
        <RevealDiv delay={0.2}><p className="sec-desc">Real certifications from recognised institutions and internship programmes.</p></RevealDiv>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:'1.25rem', marginTop:'3rem' }}>
          {CERTS.map((c, i) => (
            <RevealDiv key={c.title} delay={0.06 * i} className="glass" style={{ padding:'1.75rem', transition:'transform 0.25s' }}
              onMouseEnter={e=>e.currentTarget.style.transform='translateY(-5px)'}
              onMouseLeave={e=>e.currentTarget.style.transform=''}>
              <div style={{ display:'flex', alignItems:'flex-start', gap:'1rem', marginBottom:'1rem' }}>
                <div style={{ width:48, height:48, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.4rem', flexShrink:0, background:c.boxBg }}>{c.icon}</div>
                <div>
                  <div style={{ display:'inline-block', background:c.badgeBg, color:c.badgeColor, border:`1px solid ${c.badgeBorder}`, borderRadius:100, padding:'0.15rem 0.65rem', fontFamily:"'JetBrains Mono',monospace", fontSize:'0.65rem', letterSpacing:'0.08em', marginBottom:'0.5rem' }}>{c.badgeLabel}</div>
                  <div style={{ fontWeight:700, fontSize:'0.95rem', lineHeight:1.3 }}>{c.title}</div>
                </div>
              </div>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.75rem', color:'var(--violet)', marginBottom:'0.5rem' }}>{c.org}</div>
              {c.certId && <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.65rem', color:'var(--green)', background:'rgba(16,185,129,0.08)', border:'1px solid rgba(16,185,129,0.2)', borderRadius:6, padding:'0.2rem 0.5rem', display:'inline-block', marginBottom:'0.5rem' }}>🏆 {c.certId}</div>}
              <p style={{ color:'var(--muted)', fontSize:'0.83rem', lineHeight:1.55, marginBottom:'1rem' }}>{c.desc}</p>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'0.5rem' }}>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'0.3rem' }}>
                  {c.tags.map(([t, cls]) => <span key={t} className={`jtag${cls ? ' jtag-'+cls : ''}`}>{t}</span>)}
                </div>
                {c.link && <a href={c.link} target="_blank" rel="noopener" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.7rem', color:'var(--violet)', textDecoration:'none', display:'flex', alignItems:'center', gap:'0.3rem' }}>View <ExternalLink size={11}/></a>}
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}