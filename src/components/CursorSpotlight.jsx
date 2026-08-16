import { useEffect, useRef } from 'react';

export function CursorSpotlight() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const move = e => {
      el.style.left = e.clientX + 'px';
      el.style.top  = e.clientY + 'px';
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div ref={ref} style={{
      position: 'fixed',
      pointerEvents: 'none',
      zIndex: 1,
      width: 600,
      height: 600,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
      transform: 'translate(-50%,-50%)',
      transition: 'opacity 0.3s',
    }} />
  );
}
