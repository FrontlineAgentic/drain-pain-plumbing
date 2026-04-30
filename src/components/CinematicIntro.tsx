"use client";

import { useEffect, useState } from "react";

const SEEN_KEY = "dp-intro-seen";

export default function CinematicIntro() {
  const [done, setDone] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (sessionStorage.getItem(SEEN_KEY)) {
      setDone(true);
    } else {
      sessionStorage.setItem(SEEN_KEY, "1");
    }
  }, []);

  function finish() {
    setOpacity(0);
    setTimeout(() => setDone(true), 800);
  }

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-hidden bg-[#080c18]"
      style={{
        opacity,
        transition: opacity === 0 ? "opacity 0.8s ease" : "none",
        pointerEvents: opacity < 0.05 ? "none" : "auto",
      }}
    >
      {/* Kling AI intro video fullscreen — preload for quality */}
      <video
        src="/videos/hero-loop.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={finish}
        onError={() => finish()}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Skip button */}
      <button
        onClick={finish}
        className="absolute bottom-8 right-8 z-10 text-xs tracking-[0.25em] uppercase transition-opacity hover:opacity-60 font-medium"
        style={{ color: "rgba(255,255,255,0.4)" }}
        aria-label="Skip intro"
      >
        skip →
      </button>
    </div>
  );
}
