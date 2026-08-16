import { useEffect, useState } from 'react';
export function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const handler = () => {
      const p = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setPct(Math.min(p * 100, 100));
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return <div style={{ position:'fixed', top:0, left:0, height:2, background:'linear-gradient(90deg,var(--violet),var(--blue))', zIndex:1000, width:pct+'%', transition:'width 0.1s' }}/>;
}