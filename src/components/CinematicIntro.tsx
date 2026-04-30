"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SEEN_KEY = "dp-intro-seen";

export default function CinematicIntro() {
  const videoRef = useRef<HTMLVideoElement>(null);
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
        pointerEvents: opacity < 0.05 ? "none" : "all",
      }}
    >
      {/* Kling AI intro video */}
      <video
        ref={videoRef}
        src="/videos/hero-loop.mp4"
        autoPlay
        muted
        playsInline
        onEnded={finish}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-[#080c18]/45" />

      {/* Logo centered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/images/logo.png"
          alt="Drain Pain Plumbing"
          width={360}
          height={108}
          className="w-[55vw] max-w-[360px] drop-shadow-2xl"
          priority
        />
      </div>

      {/* Skip */}
      <button
        onClick={finish}
        className="absolute bottom-8 right-8 z-10 text-xs tracking-[0.25em] uppercase transition-opacity hover:opacity-60"
        style={{ color: "rgba(255,255,255,0.25)" }}
        aria-label="Skip intro"
      >
        skip →
      </button>
    </div>
  );
}
