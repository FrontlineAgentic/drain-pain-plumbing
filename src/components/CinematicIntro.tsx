"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function CinematicIntro() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showLogo, setShowLogo] = useState(false);
  const [fading, setFading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("dp-intro-seen")) {
      setDone(true);
      return;
    }
    sessionStorage.setItem("dp-intro-seen", "1");
  }, []);

  function skip() {
    setFading(true);
    setTimeout(() => setDone(true), 700);
  }

  useEffect(() => {
    if (done) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", onResize);

    interface Drop {
      x: number; y: number;
      vx: number; vy: number;
      r: number; alpha: number;
      color: string; life: number;
    }

    const drops: Drop[] = [];
    const TOTAL = 5800;
    const START = performance.now();
    let raf: number;
    let burstFired = false;
    let logoShown = false;

    function addDrip() {
      const cx = W / 2;
      drops.push({
        x: cx + (Math.random() - 0.5) * 40,
        y: H * 0.15,
        vx: (Math.random() - 0.5) * 2,
        vy: 2 + Math.random() * 4,
        r: 3 + Math.random() * 5,
        alpha: 1,
        color: Math.random() > 0.1 ? "147,197,253" : "186,230,253",
        life: 1,
      });
    }

    function burst() {
      const cx = W / 2;
      const cy = H * 0.46;
      for (let i = 0; i < 260; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 3 + Math.random() * 16;
        const isOrange = Math.random() < 0.14;
        drops.push({
          x: cx + (Math.random() - 0.5) * 24,
          y: cy + (Math.random() - 0.5) * 24,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 5,
          r: 2 + Math.random() * 6,
          alpha: 1,
          color: isOrange ? "232,101,26" : "147,197,253",
          life: 1,
        });
      }
    }

    function draw(now: number) {
      const elapsed = now - START;
      const t = Math.min(elapsed / TOTAL, 1);

      ctx.fillStyle = `rgba(10,22,40,${elapsed < 100 ? 1 : 0.3})`;
      ctx.fillRect(0, 0, W, H);

      // Phase 1 — drip
      if (elapsed < 2000 && Math.random() < 0.45) addDrip();

      // Phase 2 — burst
      if (elapsed > 2000 && !burstFired) {
        burstFired = true;
        burst();
      }

      // Burst radial glow
      if (elapsed > 2000 && elapsed < 3400) {
        const gp = Math.min((elapsed - 2000) / 700, 1);
        const g = ctx.createRadialGradient(W / 2, H * 0.46, 0, W / 2, H * 0.46, W * 0.65);
        g.addColorStop(0, `rgba(147,197,253,${0.10 * gp})`);
        g.addColorStop(0.6, `rgba(10,22,40,0)`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      }

      // Phase 3 — logo
      if (elapsed > 3200 && !logoShown) {
        logoShown = true;
        setShowLogo(true);
      }

      // Update drops
      for (let i = drops.length - 1; i >= 0; i--) {
        const p = drops[i];
        p.vy += 0.28;
        p.vx *= 0.985;
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.007;

        if (p.y > H * 0.88) { p.vy *= -0.3; p.y = H * 0.88; }
        if (p.life <= 0 || p.y > H + 30 || p.x < -30 || p.x > W + 30) {
          drops.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.life * p.alpha})`;
        ctx.fill();
      }

      if (t < 1) {
        raf = requestAnimationFrame(draw);
      } else {
        setFading(true);
        setTimeout(() => setDone(true), 900);
      }
    }

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [done]);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-hidden flex items-center justify-center"
      style={{
        background: "#0A1628",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.9s ease",
        pointerEvents: fading ? "none" : "all",
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div
        className="relative z-10 flex flex-col items-center gap-5 text-center"
        style={{
          opacity: showLogo ? 1 : 0,
          transform: showLogo ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <Image
          src="/images/logo.png"
          alt="Drain Pain Plumbing"
          width={280}
          height={84}
          className="w-64 md:w-72 h-auto drop-shadow-2xl"
          priority
        />
        <p
          className="text-white/60 text-xs tracking-[0.35em] uppercase"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Take the Pain Out of Your Drain
        </p>
      </div>

      <button
        onClick={skip}
        className="absolute bottom-8 right-8 z-10 text-xs tracking-[0.25em] uppercase transition-opacity hover:opacity-60"
        style={{ color: "rgba(255,255,255,0.22)" }}
        aria-label="Skip intro"
      >
        skip →
      </button>
    </div>
  );
}
