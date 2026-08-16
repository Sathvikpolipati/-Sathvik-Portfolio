import { RevealDiv } from '../components/RevealDiv';

const ITEMS = [
  {
    dot: 'var(--violet)', year: 'Jun 2025 – Jul 2025', certId: 'HMCA/2025/7/009',
    title: 'Cyber Security Intern', org: 'HM Cyber Academy — "Hack the Future"',
    desc: '6-week intensive internship covering penetration testing, ethical hacking, vulnerability assessment, and hands-on use of Kali Linux, Burp Suite, Nmap, and Metasploit. Issued by Instructor Mukesh Pyda.',
    tags: [['Cyber Security','green'],['Penetration Testing',''],['Ethical Hacking',''],['Burp Suite',''],['Kali Linux','']],
  },
  {
    dot: 'var(--blue)', year: 'August 2026', certId: 'VIP-AIML-2026-5057',
    title: 'AI & Machine Learning Virtual Intern', org: 'SmartBridge · AP State Council of Higher Education · JNTU Anantapur',
    desc: '2-month (120 hours) Virtual Internship on AI & ML. Covered supervised/unsupervised learning, neural networks, model evaluation, and real-world AI project development. Hall ticket: 23KB1A05G8.',
    tags: [['AI & ML','blue'],['Python',''],['Scikit-learn',''],['Neural Networks',''],['120 hrs','']],
  },
  {
    dot: 'var(--cyan)', year: '2022 – Present', certId: '',
    title: 'B.Tech — Computer Science & Engineering', org: 'NBKRIST, Vidyanagar, Andhra Pradesh',
    desc: 'Specialising in Cyber Security and Full-Stack Development. Participating in CTF competitions, hackathons, and security research projects.',
    tags: [['B.Tech CSE',''],['Cyber Security',''],['Full-Stack Dev',''],['CTF','']],
  },
  {
    dot: 'var(--gold)', year: '2020 – 2022', certId: '',
    title: 'Intermediate (MPC) — Class XII', org: 'Sri Chaitanya Junior College, Andhra Pradesh',
    desc: 'Mathematics, Physics, and Chemistry. Strong analytical foundation that led to a passion for technology.',
    tags: [['MPC','']],
  },
];

export function Journey() {
  return (
    <section className="section" id="journey">
      <div className="container">
        <RevealDiv><div className="sec-label">journey & experience</div></RevealDiv>
        <RevealDiv delay={0.1}><h2 className="sec-title">My Path</h2></RevealDiv>
        <RevealDiv delay={0.2}><p className="sec-desc">Education, internships, and milestones that shaped my career.</p></RevealDiv>
        <div style={{ marginTop:'3rem', position:'relative', paddingLeft:'2.5rem' }}>
          <div style={{ position:'absolute', left:8, top:8, bottom:8, width:2, background:'linear-gradient(to bottom,var(--violet),var(--blue),transparent)' }}/>
          {ITEMS.map((item, i) => (
            <RevealDiv key={item.title} delay={0.08 * i} style={{ display:'flex', gap:'2rem', marginBottom:'2rem', position:'relative' }}>
              <div style={{ position:'absolute', left:-2.5*16, top:6, width:16, height:16, borderRadius:'50%', background:item.dot, border:'3px solid var(--bg)', boxShadow:`0 0 0 2px ${item.dot}, 0 0 12px ${item.dot}` }}/>
              <div className="glass" style={{ padding:'1.5rem 2rem', flex:1, transition:'transform 0.25s' }}>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.72rem', color:'var(--violet)', marginBottom:'0.4rem', display:'flex', alignItems:'center', gap:'0.6rem', flexWrap:'wrap' }}>
                  {item.year}
                  {item.certId && <span style={{ fontSize:'0.65rem', color:'var(--muted)', background:'rgba(255,255,255,0.04)', borderRadius:4, padding:'0.1rem 0.4rem' }}>{item.certId}</span>}
                </div>
                <div style={{ fontWeight:700, fontSize:'1.05rem', marginBottom:'0.25rem' }}>{item.title}</div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.8rem', color:'var(--violet)', marginBottom:'0.75rem' }}>{item.org}</div>
                <p style={{ color:'var(--muted)', fontSize:'0.88rem', lineHeight:1.6, marginBottom:'0.75rem' }}>{item.desc}</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'0.35rem' }}>
                  {item.tags.map(([t, cls]) => <span key={t} className={`jtag${cls ? ' jtag-'+cls : ''}`}>{t}</span>)}
                </div>
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}