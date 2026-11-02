'use client';
import { useEffect, useRef } from 'react';

type P = { x: number; y: number; vx: number; vy: number; r: number; a: number; ph: number };

/** Cendres et flocons qui tombent en continu. */
export default function Ash() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current;
    const cx = cv?.getContext('2d');
    if (!cv || !cx || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let w = 0, h = 0, raf = 0;
    const ps: P[] = [];
    const size = () => { w = cv.width = innerWidth; h = cv.height = innerHeight; };
    size();
    addEventListener('resize', size);
    const loop = () => {
      cx.clearRect(0, 0, w, h);
      if (ps.length < 110 && Math.random() < 0.6) ps.push({ x: Math.random() * w, y: -8, vx: -0.1 + Math.random() * 0.5, vy: 0.3 + Math.random() * 0.8, r: 0.6 + Math.random() * 1.7, a: 0.15 + Math.random() * 0.4, ph: Math.random() * 6 });
      for (let i = ps.length - 1; i >= 0; i--) {
        const p = ps[i];
        p.ph += 0.02; p.x += p.vx + Math.sin(p.ph) * 0.3; p.y += p.vy;
        if (p.y > h + 8) { ps.splice(i, 1); continue; }
        cx.fillStyle = `rgba(222,228,236,${p.a})`;
        cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, Math.PI * 2); cx.fill();
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', size); };
  }, []);
  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-[4]" />;
}
