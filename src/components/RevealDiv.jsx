import { useRef, useEffect } from 'react';

export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; } },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export function RevealDiv({ children, delay = 0, style = {}, ...props }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      style={{ opacity: 0, transform: 'translateY(30px)', transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
