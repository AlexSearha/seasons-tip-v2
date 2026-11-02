'use client';
import { useEffect, useRef } from 'react';

type Branch = { p: [number, number][]; w: number; s0: number; len: number; st: number };

const rng = (seed: number) => () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };

/** La nature reprend ses droits : des lianes grimpent le long des bords, au rythme du défilement. */
export default function Vines() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current;
    const cx = cv?.getContext('2d');
    if (!cv || !cx) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0, H = 0, maxL = 0, cur = 0, tgt = 0, raf = 0;
    let br: Branch[] = [];

    const grow = (x: number, y: number, a: number, len: number, w: number, s0: number, d: number, r: () => number) => {
      const pts: [number, number][] = [[x, y]];
      const st = 5;
      let L = 0, wob = 0;
      while (L < len) {
        wob += (r() - 0.5) * 0.2; wob *= 0.9; a += wob;
        x += Math.cos(a) * st; y += Math.sin(a) * st; L += st;
        pts.push([x, y]);
        if (d < 2 && L > 30 && r() < 0.05) grow(x, y, a + (r() < 0.5 ? -1 : 1) * (0.5 + r() * 0.7), len * (0.22 + r() * 0.25), w * 0.58, s0 + L, d + 1, r);
      }
      br.push({ p: pts, w, s0, len: L, st });
    };

    const draw = () => {
      cx.clearRect(0, 0, W, H);
      const lg = (0.04 + 0.96 * cur) * maxL;
      for (const b of br) {
        const vis = Math.min(b.len, (lg - b.s0) * 1.5);
        if (vis <= 0) continue;
        const n = Math.min(b.p.length - 1, Math.floor(vis / b.st));
        if (n < 1) continue;
        cx.lineCap = 'round'; cx.lineJoin = 'round';
        for (const [lw, col] of [[b.w + 2.4, 'rgba(3,6,4,.8)'], [b.w, 'rgba(122,148,90,.92)']] as const) {
          cx.lineWidth = lw; cx.strokeStyle = col; cx.beginPath(); cx.moveTo(b.p[0][0], b.p[0][1]);
          for (let i = 1; i <= n; i++) cx.lineTo(b.p[i][0], b.p[i][1]);
          cx.stroke();
        }
        cx.fillStyle = 'rgba(104,132,74,.9)'; cx.strokeStyle = 'rgba(3,6,4,.7)'; cx.lineWidth = 1;
        for (let i = 4; i <= n; i += 4) {
          const q = b.p[i], pr = b.p[i - 1];
          const ang = Math.atan2(q[1] - pr[1], q[0] - pr[0]) + (i % 8 ? 1 : -1) * 1.1;
          const s = (3 + ((i * 7) % 5)) * (b.w > 2 ? 1.25 : 1);
          cx.beginPath(); cx.ellipse(q[0], q[1], s * 1.7, s * 0.8, ang, 0, Math.PI * 2); cx.fill(); cx.stroke();
        }
      }
    };

    const build = () => {
      W = cv.width = innerWidth; H = cv.height = innerHeight; br = [];
      const r = rng(11);
      const xs = W < 700 ? [0.02, 0.98] : [0.012, 0.05, 0.095, 0.905, 0.95, 0.988];
      maxL = H * 1.25;
      for (const f of xs) {
        const left = f < 0.5;
        grow(f * W, H + 8, -Math.PI / 2 + (left ? 0.12 : -0.12) + (r() - 0.5) * 0.25, H * (0.75 + r() * 0.5), 3.2, 0, 0, r);
      }
      draw();
    };
    const progress = () => {
      const m = document.documentElement.scrollHeight - innerHeight;
      tgt = m > 0 ? Math.min(1, Math.max(0, scrollY / m)) : 0;
      if (reduce) { cur = tgt; draw(); }
    };
    const onResize = () => { build(); progress(); };
    const lerp = () => {
      if (!reduce && Math.abs(tgt - cur) > 0.0004) { cur += (tgt - cur) * 0.07; draw(); }
      raf = requestAnimationFrame(lerp);
    };
    build(); progress(); lerp();
    addEventListener('scroll', progress, { passive: true });
    addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); removeEventListener('scroll', progress); removeEventListener('resize', onResize); };
  }, []);
  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-[6]" />;
}
