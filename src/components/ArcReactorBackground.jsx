import { useEffect, useRef } from 'react';

export function ArcReactorBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    let mouse = { x: -1000, y: -1000 };

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    const COUNT = Math.min(80, Math.floor(window.innerWidth / 20));
    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.6 + 0.8,
        color: Math.random() > 0.3 ? 'rgba(0, 240, 255, ' : 'rgba(255, 183, 3, ',
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Subtle Tech Grid
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.025)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Connecting energy nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse attraction
        const dxM = mouse.x - p.x;
        const dyM = mouse.y - p.y;
        const distM = Math.hypot(dxM, dyM);
        if (distM < 160) {
          p.x += (dxM / distM) * 0.6;
          p.y += (dyM / distM) * 0.6;
        }

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = 0.12 * (1 - dist / 130);
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + '0.7)';
        ctx.shadowColor = 'rgba(0, 240, 255, 0.8)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  );
}