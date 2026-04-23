"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "4+", label: "Apps Shipped" },
  { value: "iOS", label: "Native" },
  { value: "AI", label: "Powered" },
  { value: "2024", label: "Active" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>(".hero-item");
    items.forEach((item, i) => {
      item.style.animationDelay = `${i * 0.12}s`;
      item.style.animationFillMode = "both";
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Ambient glow */}
      <div className="hero-glow" aria-hidden="true" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div
        ref={containerRef}
        className="relative max-w-6xl mx-auto px-6 py-24 md:py-32"
      >
        {/* Label */}
        <div
          className="hero-item animate-fade-up section-label mb-8 inline-flex items-center gap-3"
          style={{ opacity: 0 }}
        >
          <span className="w-6 h-px bg-[#4F8EF7]" />
          Indie Developer
          <span className="w-6 h-px bg-[#4F8EF7]" />
        </div>

        {/* Headline */}
        <h1
          className="hero-item animate-fade-up font-syne font-800 text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8"
          style={{
            opacity: 0,
            fontFamily: "Syne, sans-serif",
            fontWeight: 800,
          }}
        >
          Building
          <br />
          <span className="gradient-text">Practical AI</span>
          <br />
          &amp; Utility Apps
        </h1>

        {/* Sub */}
        <p
          className="hero-item animate-fade-up max-w-md text-white/50 text-lg leading-relaxed mb-12"
          style={{ opacity: 0, fontFamily: "DM Sans, sans-serif" }}
        >
          Shipping iOS and AI-powered tools that solve real problems — built
          with Swift, on-device intelligence, and obsessive attention to detail.
        </p>

        {/* CTAs */}
        <div
          className="hero-item animate-fade-up flex flex-wrap gap-3 mb-20"
          style={{ opacity: 0 }}
        >
          <a href="#products" className="btn-primary">
            View Products
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#about" className="btn-secondary">
            About Me
          </a>
        </div>

        {/* Stats */}
        <div
          className="hero-item animate-fade-up grid grid-cols-2 md:grid-cols-4 gap-px border border-white/[0.06] rounded-2xl overflow-hidden"
          style={{ opacity: 0 }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/[0.02] hover:bg-white/[0.04] transition-colors px-6 py-5"
            >
              <div
                className="font-syne font-700 text-2xl text-white mb-1"
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
              >
                {stat.value}
              </div>
              <div className="section-label text-[10px]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-slow">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/20" />
        <span className="section-label text-[10px]">Scroll</span>
      </div>
    </section>
  );
}
