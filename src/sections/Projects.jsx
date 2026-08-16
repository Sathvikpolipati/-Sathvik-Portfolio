import { useState } from 'react';
import { ExternalLink, GitBranch, X, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealDiv } from '../components/RevealDiv';

const PROJECTS = [
  { title:'Credit Card Approval Prediction', desc:'ML model predicting credit card approval using logistic regression and decision tree classifiers with feature engineering and cross-validation pipelines.', tags:['Python','Scikit-learn','Pandas','ML'], img:'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&auto=format&fit=crop&q=80', gh:'https://github.com/Sathvikpolipati' },
  { title:'Rising Water', desc:'Flood simulation and early-warning alert system monitoring water level data and triggering real-time notifications using predictive modelling and data analysis.', tags:['Python','Data Analysis','Simulation','IoT'], img:'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&auto=format&fit=crop&q=80', gh:'https://github.com/Sathvikpolipati' },
  { title:'Web Vulnerability Scanner', desc:'Automated Python tool detecting SQLi, XSS, and open redirects in web applications with configurable scan profiles and detailed vulnerability reports.', tags:['Python','OWASP','Security','Automation'], img:'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80', gh:'https://github.com/Sathvikpolipati' },
  { title:'Network Traffic Analyser', desc:'Real-time packet capture and analysis tool identifying suspicious traffic, port scans, and intrusion attempts using Python and Scapy.', tags:['Python','Scapy','Networking','Security'], img:'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80', gh:'https://github.com/Sathvikpolipati' },
  { title:'Personal Portfolio Website', desc:'Premium dark-mode portfolio with cursor spotlight, particle network background, glassmorphism cards, command palette (Ctrl+K), framer-motion animations, and Vercel deployment.', tags:['React','Vite','Framer Motion','Vercel'], img:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80', gh:'https://github.com/Sathvikpolipati/SathvikPolipati-Portfolio' },
];

export function Projects() {
  const [modal, setModal] = useState(null);

  return (
    <section className="section" id="projects">
      <div className="container">
        <RevealDiv><div className="sec-label">projects</div></RevealDiv>
        <RevealDiv delay={0.1}><h2 className="sec-title">Things I've Built</h2></RevealDiv>
        <RevealDiv delay={0.2}><p className="sec-desc">Security tools, ML applications and full-stack web projects.</p></RevealDiv>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))', gap:'1.25rem', marginTop:'3rem' }}>
          {PROJECTS.map((p, i) => (
            <RevealDiv key={p.title} delay={0.06 * i}>
              <motion.div className="glass" whileHover={{ y:-6 }} transition={{ duration:0.3 }} style={{ overflow:'hidden', cursor:'pointer' }}>
                <div style={{ height:180, position:'relative', overflow:'hidden' }}>
                  <img src={p.img} alt={p.title} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s' }}
                    onMouseEnter={e=>e.target.style.transform='scale(1.06)'}
                    onMouseLeave={e=>e.target.style.transform=''}/>
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(10,10,18,0.9),rgba(10,10,18,0.2))' }}/>
                  <button onClick={() => setModal(p)} style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', background:'var(--violet)', color:'#fff', border:'none', padding:'0.5rem 1.1rem', borderRadius:8, fontSize:'0.82rem', cursor:'pointer', display:'flex', alignItems:'center', gap:'0.4rem', opacity:0, transition:'opacity 0.3s' }}
                    onMouseEnter={e=>e.currentTarget.style.opacity=1}
                    className="proj-hover-btn">
                    <Maximize2 size={14}/> Preview
                  </button>
                </div>
                <div style={{ padding:'1.25rem 1.5rem' }}>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:'0.35rem', marginBottom:'0.6rem' }}>
                    {p.tags.map(t => <span key={t} className="jtag">{t}</span>)}
                  </div>
                  <div style={{ fontWeight:700, fontSize:'1rem', marginBottom:'0.4rem' }}>{p.title}</div>
                  <p style={{ color:'var(--muted)', fontSize:'0.84rem', lineHeight:1.6, marginBottom:'0.75rem' }}>{p.desc.slice(0,100)}...</p>
                  <div style={{ display:'flex', gap:'0.75rem' }}>
                    <a href={p.gh} target="_blank" rel="noopener" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.73rem', color:'var(--muted)', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:'0.3rem', transition:'color 0.2s' }}
                      onMouseEnter={e=>e.currentTarget.style.color='var(--violet)'}
                      onMouseLeave={e=>e.currentTarget.style.color='var(--muted)'}>
                      <GitBranch size={13}/> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </RevealDiv>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.85)', zIndex:9998, display:'grid', placeItems:'center', padding:'2rem', backdropFilter:'blur(8px)' }}
            onClick={e => { if (e.target === e.currentTarget) setModal(null); }}>
            <motion.div initial={{ scale:0.95, opacity:0 }} animate={{ scale:1, opacity:1 }} exit={{ scale:0.95, opacity:0 }}
              style={{ background:'hsl(240,10%,6%)', border:'1px solid var(--glass-border)', borderRadius:20, maxWidth:640, width:'100%', overflow:'hidden', position:'relative' }}>
              <button onClick={() => setModal(null)} style={{ position:'absolute', top:'1rem', right:'1rem', background:'rgba(0,0,0,0.6)', border:'1px solid var(--glass-border)', color:'var(--fg)', borderRadius:8, padding:'0.4rem 0.7rem', cursor:'pointer', fontSize:'0.9rem', zIndex:10 }}>
                <X size={16}/>
              </button>
              <img src={modal.img} alt={modal.title} style={{ width:'100%', height:260, objectFit:'cover' }}/>
              <div style={{ padding:'2rem' }}>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'0.35rem', marginBottom:'0.75rem' }}>
                  {modal.tags.map(t => <span key={t} className="jtag">{t}</span>)}
                </div>
                <h3 style={{ fontSize:'1.2rem', fontWeight:700, marginBottom:'0.5rem' }}>{modal.title}</h3>
                <p style={{ color:'var(--muted)', fontSize:'0.9rem', lineHeight:1.7, marginBottom:'1.5rem' }}>{modal.desc}</p>
                <a href={modal.gh} target="_blank" rel="noopener" className="btn btn-ghost" style={{ fontSize:'0.82rem' }}><GitBranch size={14}/> View on GitHub</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}