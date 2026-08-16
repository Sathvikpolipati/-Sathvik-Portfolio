import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import './CommandPalette.css';

const CMD_ITEMS = [
  { icon: '🏠', label: 'Home',               action: () => document.getElementById('home')?.scrollIntoView({ behavior:'smooth' }) },
  { icon: '👤', label: 'About',              action: () => document.getElementById('about')?.scrollIntoView({ behavior:'smooth' }) },
  { icon: '🔧', label: 'Skills',             action: () => document.getElementById('skills')?.scrollIntoView({ behavior:'smooth' }) },
  { icon: '📖', label: 'Journey',            action: () => document.getElementById('journey')?.scrollIntoView({ behavior:'smooth' }) },
  { icon: '💻', label: 'Platforms',          action: () => document.getElementById('platforms')?.scrollIntoView({ behavior:'smooth' }) },
  { icon: '🔍', label: 'Projects',           action: () => document.getElementById('projects')?.scrollIntoView({ behavior:'smooth' }) },
  { icon: '🎓', label: 'Certifications',     action: () => document.getElementById('certifications')?.scrollIntoView({ behavior:'smooth' }) },
  { icon: '🐙', label: 'GitHub Activity',    action: () => document.getElementById('github')?.scrollIntoView({ behavior:'smooth' }) },
  { icon: '✉️', label: 'Contact',            action: () => document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' }) },
  { icon: '⬇️', label: 'View Resume',        action: () => window.open('/resume.html','_blank') },
  { icon: '💼', label: 'LinkedIn',           action: () => window.open('https://linkedin.com/in/sathvik-polipati','_blank') },
  { icon: '💀', label: 'TryHackMe',          action: () => window.open('https://tryhackme.com/p/ultimatealienx401','_blank') },
  { icon: '🐙', label: 'GitHub',             action: () => window.open('https://github.com/Sathvikpolipati','_blank') },
  { icon: '✉️', label: 'Send Email',         action: () => window.location.href='mailto:polipatisathvik@gmail.com' },
];

export function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);

  const filtered = CMD_ITEMS.filter(it => it.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => { if (open) { setQuery(''); setActive(0); setTimeout(() => inputRef.current?.focus(), 50); } }, [open]);

  useEffect(() => {
    const handler = e => {
      if (!open) return;
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive(a => Math.min(a + 1, filtered.length - 1)); }
      if (e.key === 'ArrowUp')   { e.preventDefault(); setActive(a => Math.max(a - 1, 0)); }
      if (e.key === 'Enter')     { filtered[active]?.action(); onClose(); }
      if (e.key === 'Escape')    onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, active, filtered, onClose]);

  if (!open) return null;

  return (
    <div className="cmd-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="cmd-box">
        <div className="cmd-input-wrap">
          <Search size={16} color="var(--muted)" />
          <input
            ref={inputRef}
            className="cmd-input"
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={e => { setQuery(e.target.value); setActive(0); }}
          />
          <button onClick={onClose} style={{ background:'none',border:'none',cursor:'pointer',color:'var(--muted)',display:'flex' }}><X size={16}/></button>
        </div>
        <div className="cmd-list">
          {filtered.length === 0 && <div className="cmd-empty">No results found</div>}
          {filtered.map((it, i) => (
            <div
              key={it.label}
              className={`cmd-item${i === active ? ' active' : ''}`}
              onClick={() => { it.action(); onClose(); }}
              onMouseEnter={() => setActive(i)}
            >
              <span className="cmd-item-icon">{it.icon}</span>
              {it.label}
            </div>
          ))}
        </div>
        <div className="cmd-hint">↑ ↓ navigate &nbsp;·&nbsp; Enter to select &nbsp;·&nbsp; Esc to close</div>
      </div>
    </div>
  );
}
