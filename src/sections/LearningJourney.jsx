import { RevealDiv } from '../components/RevealDiv';
import { ShieldCheck, Cpu, Code2, Award, Compass, Zap } from 'lucide-react';

const MILESTONES = [
  {
    phase: 'PHASE 01 // FOUNDATIONS',
    title: 'Code & Architecture Genesis',
    desc: 'Initiated Computer Science & Engineering at NBKRIST. Built an uncompromising foundation in Python, data structures, algorithms, and full-stack software architecture.',
    icon: Code2,
    badge: 'Core Programming',
    color: 'var(--cyan)'
  },
  {
    phase: 'PHASE 02 // OFFENSIVE SECURITY',
    title: 'Cyber Security & Ethical Hacking',
    desc: 'Completed an intensive 6-week internship at HM Cyber Academy (CERT ID: HMCA/2025/7/009). Mastered penetration testing methodologies, vulnerability assessments, and hands-on exploitation with Burp Suite and Kali Linux.',
    icon: ShieldCheck,
    badge: 'HM Cyber Academy',
    color: 'var(--crimson)'
  },
  {
    phase: 'PHASE 03 // INTELLIGENCE & ML',
    title: 'AI & Machine Learning Systems',
    desc: 'Executed a 120-hour (2-month) Virtual Internship with SmartBridge and the Andhra Pradesh State Council of Higher Education (CERT ID: VIP-AIML-2026-5057). Built machine learning pipelines and neural models.',
    icon: Cpu,
    badge: 'SmartBridge & APSCHE',
    color: 'var(--gold)'
  },
  {
    phase: 'PHASE 04 // REAL-WORLD TESTING',
    title: 'CTF Mastery & Social Privacy Security',
    desc: 'NPTEL certified in Privacy and Security in Online Social Media (IIT Hyderabad/Madras). Active CTF challenger on TryHackMe (@ultimatealienx401) and PortSwigger Web Security Academy labs.',
    icon: Zap,
    badge: 'NPTEL & CTF Labs',
    color: 'var(--cyan)'
  }
];

export function LearningJourney() {
  return (
    <section className="section" id="journey">
      <div className="container">
        <RevealDiv><div className="sec-hud-label">tactical progression</div></RevealDiv>
        <RevealDiv delay={0.1}><h2 className="sec-hud-title">My Learning Journey</h2></RevealDiv>
        <RevealDiv delay={0.2}>
          <p className="sec-hud-desc">
            A chronological breakdown of how I transformed curiosity into structured engineering expertise — bridging offensive cyber security with scalable machine learning.
          </p>
        </RevealDiv>

        {/* Narrative Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginTop: '3.5rem' }}>
          {MILESTONES.map((m, i) => {
            const Icon = m.icon;
            return (
              <RevealDiv key={m.title} delay={0.1 * i} className="hud-glass" style={{ padding: '2rem 1.8rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: m.color, letterSpacing: '0.1em' }}>
                      {m.phase}
                    </span>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(0, 240, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: m.color }}>
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-hud)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.8rem', color: '#fff' }}>
                    {m.title}
                  </h3>

                  <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.4rem' }}>
                    {m.desc}
                  </p>
                </div>

                <div>
                  <span className="hud-tag" style={{ borderColor: m.color, color: m.color }}>
                    ⚡ {m.badge}
                  </span>
                </div>
              </RevealDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
}