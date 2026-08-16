import { RevealDiv } from '../components/RevealDiv';

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <RevealDiv><div className="sec-label">about me</div></RevealDiv>
        <RevealDiv delay={0.1}><h2 className="sec-title">Who I Am</h2></RevealDiv>

        <div style={{ maxWidth: 760, marginTop: '2.5rem' }}>
          <RevealDiv delay={0.15}>
            <p style={{ color:'var(--muted)', marginBottom:'1.1rem', lineHeight:1.8, fontSize:'1rem' }}>
              I'm <strong style={{ color:'var(--fg)' }}>Sathvik Polipati</strong>, a Computer Science Engineering student at{' '}
              <strong style={{ color:'var(--fg)' }}>NBKRIST</strong> (Nandamuri Basavatarakam Krishna Ranganadha Institute of Science &amp; Technology),
              Vidyanagar, Andhra Pradesh.
            </p>
            <p style={{ color:'var(--muted)', marginBottom:'1.1rem', lineHeight:1.8, fontSize:'1rem' }}>
              I combine two powerful domains: <strong style={{ color:'var(--fg)' }}>Cyber Security</strong> &amp;{' '}
              <strong style={{ color:'var(--fg)' }}>Full-Stack Development</strong>. Completed internships in Cyber Security at{' '}
              <em style={{ color:'var(--violet)' }}>HM Cyber Academy</em> and in AI/ML through{' '}
              <em style={{ color:'var(--violet)' }}>SmartBridge &amp; AP State Council of Higher Education</em>.
            </p>
            <p style={{ color:'var(--muted)', lineHeight:1.8, fontSize:'1rem' }}>
              I actively practice on <strong style={{ color:'var(--fg)' }}>TryHackMe</strong> (as @ultimatealienx401), solve web security labs on{' '}
              <strong style={{ color:'var(--fg)' }}>PortSwigger</strong>, and hold an NPTEL certification in Privacy &amp; Security.
              I believe in understanding how things break — to build things that don't.
            </p>

            <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem', marginTop:'2rem' }}>
              {['🔒 Ethical Hacking','🌐 Web Dev','🛡️ Network Security','🐍 Python','🔍 Penetration Testing','🏴 CTF Player','🤖 AI / ML','📊 Data Analysis'].map(t => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>

            <div style={{ display:'flex', gap:'2.5rem', marginTop:'2.5rem', flexWrap:'wrap' }}>
              {[['3','Internships Completed'],['120hrs','AI/ML Training'],['2+','Years of Learning'],['6+','Certifications']].map(([val, lbl]) => (
                <div key={lbl}>
                  <div style={{ fontSize:'1.8rem', fontWeight:800, color:'var(--violet)', lineHeight:1 }}>{val}</div>
                  <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.7rem', color:'var(--muted)', marginTop:'0.3rem' }}>{lbl}</div>
                </div>
              ))}
            </div>
          </RevealDiv>
        </div>
      </div>
    </section>
  );
}