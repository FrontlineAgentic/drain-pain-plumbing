"use client";

import { useEffect, useRef, useState } from "react";

const SEEN_KEY = "dp-intro-seen";

type Phase = "logo-in" | "drip" | "burst" | "settle" | "logo-out" | "done";

export default function CinematicIntro() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<Phase>("logo-in");
  const [overlayOpacity, setOverlayOpacity] = useState(1);

  useEffect(() => {
    if (sessionStorage.getItem(SEEN_KEY)) {
      setPhase("done");
    } else {
      sessionStorage.setItem(SEEN_KEY, "1");
    }
  }, []);

  function skip() {
    setOverlayOpacity(0);
    setTimeout(() => setPhase("done"), 800);
  }

  useEffect(() => {
    if (phase === "done") return;

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

    // ── Load logo ──────────────────────────────────────────────
    const logo = new window.Image();
    logo.src = "/images/logo.png";

    interface Drop {
      x: number; y: number;
      vx: number; vy: number;
      r: number; life: number;
      color: string;
    }

    const drops: Drop[] = [];
    let burstFired = false;
    let raf: number;
    const START = performance.now();
    const TOTAL = 7200; // ms

    // Timeline (ms):
    // 0-800   logo fades in (phase: logo-in)
    // 800-2400 drips fall (phase: drip)
    // 2400    pipe burst  (phase: burst)
    // 2400-4800 water settles (phase: settle)
    // 4800    logo brightens + tagline (phase: logo-out)
    // 7200    fade overlay to 0 → done

    function schedulePhases() {
      setTimeout(() => setPhase("drip"),     800);
      setTimeout(() => setPhase("burst"),    2400);
      setTimeout(() => setPhase("settle"),   2500);
      setTimeout(() => setPhase("logo-out"), 4800);
    }

    logo.onload = () => {
      schedulePhases();
      draw(performance.now());
    };

    // fallback if logo fails
    logo.onerror = () => {
      schedulePhases();
      draw(performance.now());
    };

    function addDrip() {
      const logoW = Math.min(W * 0.45, 340);
      const logoH = logoW * 0.3;
      const logoX = (W - logoW) / 2;
      const logoY = H / 2 - logoH / 2;

      drops.push({
        x: logoX + Math.random() * logoW,
        y: logoY + logoH + Math.random() * 10,
        vx: (Math.random() - 0.5) * 1.2,
        vy: 1.5 + Math.random() * 3,
        r: 3 + Math.random() * 4,
        life: 1,
        color: Math.random() > 0.1 ? "147,197,253" : "186,230,253",
      });
    }

    function burst() {
      const cx = W / 2;
      const cy = H / 2 + 20;
      for (let i = 0; i < 320; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 18;
        const isOrange = Math.random() < 0.12;
        drops.push({
          x: cx + (Math.random() - 0.5) * 60,
          y: cy + (Math.random() - 0.5) * 30,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 6,
          r: 1.5 + Math.random() * 6,
          life: 1,
          color: isOrange ? "232,101,26" : "147,197,253",
        });
      }
    }

    function drawLogo(alpha: number, glowing = false) {
      if (!logo.complete || logo.naturalWidth === 0) return;
      const logoW = Math.min(W * 0.45, 340);
      const logoH = logoW * (logo.naturalHeight / logo.naturalWidth);
      const logoX = (W - logoW) / 2;
      const logoY = H / 2 - logoH / 2;

      if (glowing) {
        const g = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, logoW * 0.9);
        g.addColorStop(0, `rgba(232,101,26,${0.18 * alpha})`);
        g.addColorStop(0.5, `rgba(10,22,40,0)`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      }

      ctx.globalAlpha = alpha;
      ctx.drawImage(logo, logoX, logoY, logoW, logoH);
      ctx.globalAlpha = 1;
    }

    function draw(now: number) {
      const elapsed = now - START;
      const t = Math.min(elapsed / TOTAL, 1);

      // Background — trails fade faster during burst for drama
      const trailAlpha = elapsed > 2400 && elapsed < 3200 ? 0.18 : 0.28;
      ctx.fillStyle = `rgba(10,22,40,${trailAlpha})`;
      ctx.fillRect(0, 0, W, H);

      // ── Logo in (0-800ms) ───────────────────────────────────
      if (elapsed < 2400) {
        const logoAlpha = Math.min(elapsed / 800, 1);
        drawLogo(logoAlpha);
      }

      // ── Drips (800-2400ms) ──────────────────────────────────
      if (elapsed > 800 && elapsed < 2400 && Math.random() < 0.55) {
        addDrip();
      }

      // ── Burst (2400ms) ──────────────────────────────────────
      if (elapsed > 2400 && !burstFired) {
        burstFired = true;
        burst();
      }

      // Burst shockwave ring
      if (elapsed > 2400 && elapsed < 3000) {
        const bp = (elapsed - 2400) / 600;
        const radius = bp * W * 0.7;
        ctx.beginPath();
        ctx.arc(W / 2, H / 2, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(147,197,253,${(1 - bp) * 0.4})`;
        ctx.lineWidth = 3;
        ctx.stroke();
      }

      // Burst radial glow
      if (elapsed > 2400 && elapsed < 4000) {
        const gp = Math.min((elapsed - 2400) / 800, 1) * (1 - Math.max((elapsed - 3200) / 800, 0));
        const g = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, W * 0.7);
        g.addColorStop(0, `rgba(147,197,253,${0.12 * gp})`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      }

      // ── Settle drops ────────────────────────────────────────
      for (let i = drops.length - 1; i >= 0; i--) {
        const p = drops[i];
        p.vy += 0.3;
        p.vx *= 0.98;
        p.x += p.vx;
        p.y += p.vy;
        p.life -= elapsed > 2400 ? 0.009 : 0.005;

        if (p.y > H * 0.9) { p.vy *= -0.28; p.y = H * 0.9; }
        if (p.life <= 0 || p.y > H + 40 || p.x < -40 || p.x > W + 40) {
          drops.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.life})`;
        ctx.fill();
      }

      // ── Logo returns (4800ms+) ──────────────────────────────
      if (elapsed > 4800) {
        const logoAlpha = Math.min((elapsed - 4800) / 800, 1);
        drawLogo(logoAlpha, true);

        // Tagline
        const textAlpha = Math.min((elapsed - 5400) / 600, 1);
        if (textAlpha > 0) {
          const logoW = Math.min(W * 0.45, 340);
          const logoH = logoW * (logo.naturalHeight / logo.naturalWidth);
          const logoY = H / 2 - logoH / 2;
          ctx.globalAlpha = textAlpha;
          ctx.fillStyle = "rgba(255,255,255,0.55)";
          ctx.font = `${Math.max(11, W * 0.012)}px 'DM Sans', sans-serif`;
          ctx.letterSpacing = "0.3em";
          ctx.textAlign = "center";
          ctx.fillText("TAKE THE PAIN OUT OF YOUR DRAIN", W / 2, logoY + logoH + 36);
          ctx.globalAlpha = 1;
          ctx.letterSpacing = "0";
        }
      }

      // ── Fade out overlay (6200-7200ms) ──────────────────────
      if (elapsed > 6200) {
        const fadeProgress = Math.min((elapsed - 6200) / 1000, 1);
        setOverlayOpacity(1 - fadeProgress);
      }

      if (t < 1) {
        raf = requestAnimationFrame(draw);
      } else {
        setPhase("done");
      }
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [phase === "done"]);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-hidden"
      style={{
        opacity: overlayOpacity,
        transition: overlayOpacity === 0 ? "opacity 0.8s ease" : "none",
        background: "#0A1628",
        pointerEvents: overlayOpacity < 0.05 ? "none" : "all",
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

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
