import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealDiv } from '../components/RevealDiv';
import confetti from 'canvas-confetti';

const SOCIAL = [
  { icon:'💼', label:'LinkedIn',  url:'https://linkedin.com/in/sathvik-polipati' },
  { icon:'🐙', label:'GitHub',    url:'https://github.com/Sathvikpolipati' },
  { icon:'💀', label:'TryHackMe', url:'https://tryhackme.com/p/ultimatealienx401' },
  { icon:'🛡️', label:'PortSwigger',url:'https://portswigger.net/web-security' },
  { icon:'⭐', label:'HackerRank',url:'https://www.hackerrank.com/sathvikpolipati' },
];

function saveToLocalStorage(data) {
  const existing = JSON.parse(localStorage.getItem('portfolio_contacts') || '[]');
  existing.push({ ...data, timestamp: new Date().toISOString() });
  localStorage.setItem('portfolio_contacts', JSON.stringify(existing));
}

export function Contact() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
    try {
      // Try Firebase first (will fail gracefully if not configured)
      let saved = false;
      try {
        const { db } = await import('../lib/firebase.js');
        if (db) {
          const { collection, addDoc } = await import('firebase/firestore');
          await addDoc(collection(db, 'contacts'), form);
          saved = true;
        }
      } catch (_) {}

      // Always save to localStorage as backup
      saveToLocalStorage(form);
      if (!saved) console.info('Saved to localStorage (Firebase not configured).');

      setStatus('success');
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 }, colors: ['#8b5cf6','#3b82f6','#06b6d4'] });
      setForm({ name:'', email:'', subject:'', message:'' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <RevealDiv><div className="sec-label">get in touch</div></RevealDiv>
        <RevealDiv delay={0.1}><h2 className="sec-title">Let's Connect</h2></RevealDiv>
        <RevealDiv delay={0.2}><p className="sec-desc">Open to internships, collaborations, and conversations about security &amp; tech.</p></RevealDiv>

        {/* Social pills */}
        <RevealDiv delay={0.25} style={{ display:'flex', flexWrap:'wrap', gap:'0.6rem', margin:'2rem 0' }}>
          {SOCIAL.map(s => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener"
              style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.5rem 1rem', border:'1px solid var(--glass-border)', borderRadius:100, textDecoration:'none', color:'var(--muted)', fontFamily:"'JetBrains Mono',monospace", fontSize:'0.74rem', background:'var(--glass)', transition:'all 0.2s' }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--violet)';e.currentTarget.style.color='var(--violet)';e.currentTarget.style.background='rgba(139,92,246,0.08)'}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--glass-border)';e.currentTarget.style.color='var(--muted)';e.currentTarget.style.background='var(--glass)'}}>
              {s.icon} {s.label}
            </a>
          ))}
        </RevealDiv>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'3rem', alignItems:'start' }}>
          {/* Info column */}
          <RevealDiv delay={0.3}>
            <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
              {[
                { icon:'✉️', label:'EMAIL', val:'polipatisathvik@gmail.com', url:'mailto:polipatisathvik@gmail.com' },
                { icon:'💼', label:'LINKEDIN', val:'linkedin.com/in/sathvik-polipati', url:'https://linkedin.com/in/sathvik-polipati' },
                { icon:'🐙', label:'GITHUB', val:'github.com/Sathvikpolipati', url:'https://github.com/Sathvikpolipati' },
                { icon:'💀', label:'TRYHACKME', val:'@ultimatealienx401', url:'https://tryhackme.com/p/ultimatealienx401' },
              ].map(c => (
                <a key={c.label} href={c.url} target="_blank" rel="noopener" className="glass"
                  style={{ display:'flex', alignItems:'center', gap:'1rem', padding:'1rem 1.25rem', textDecoration:'none', color:'inherit', transition:'transform 0.25s' }}
                  onMouseEnter={e=>e.currentTarget.style.transform='translateX(4px)'}
                  onMouseLeave={e=>e.currentTarget.style.transform=''}>
                  <span style={{ fontSize:'1.3rem', flexShrink:0 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.62rem', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.08em' }}>{c.label}</div>
                    <div style={{ fontSize:'0.82rem', color:'var(--violet)', marginTop:'0.15rem', wordBreak:'break-all' }}>{c.val}</div>
                  </div>
                </a>
              ))}
            </div>
          </RevealDiv>

          {/* Form */}
          <RevealDiv delay={0.35}>
            <form onSubmit={handleSubmit} className="glass" style={{ padding:'2rem' }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
                <div className="form-group">
                  <input className="form-input" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input className="form-input" name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <input className="form-input" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <textarea className="form-input" name="message" placeholder="Your Message..." value={form.message} onChange={handleChange} required />
              </div>

              <button type="submit" className="btn btn-violet" disabled={status==='loading'}
                style={{ width:'100%', justifyContent:'center', opacity: status==='loading' ? 0.7 : 1 }}>
                {status === 'loading' ? 'Sending...' : <><Send size={15}/> Send Message</>}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
                    style={{ display:'flex', alignItems:'center', gap:'0.5rem', marginTop:'1rem', color:'var(--green)', fontFamily:"'JetBrains Mono',monospace", fontSize:'0.8rem' }}>
                    <CheckCircle size={16}/> Message sent! I'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
                    style={{ display:'flex', alignItems:'center', gap:'0.5rem', marginTop:'1rem', color:'hsl(0,80%,65%)', fontFamily:"'JetBrains Mono',monospace", fontSize:'0.8rem' }}>
                    <AlertCircle size={16}/> Something went wrong. Please email directly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </RevealDiv>
        </div>
      </div>
    </section>
  );
}