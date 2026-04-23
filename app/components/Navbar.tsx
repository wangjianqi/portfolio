"use client";

import { useEffect, useState } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";

interface NavbarProps {
  locale: Locale;
  nav: Dictionary["nav"];
}

export default function Navbar({ locale, nav }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const nextLocale = locale === "en" ? "zh" : "en";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "nav-blur bg-[#080808]/70 border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-syne font-700 text-lg tracking-tight text-white hover:text-white/80 transition-colors"
          style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
        >
          paladin<span className="text-[#4F8EF7]">.</span>dev
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: nav.products, href: "#products" },
            { label: nav.featured, href: "#featured" },
            { label: nav.about, href: "#about" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-hover text-sm text-white/50 hover:text-white transition-colors duration-200"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <a
            href={`/${nextLocale}`}
            aria-label={nav.languageAriaLabel}
            className="btn-secondary text-xs"
          >
            {nav.languageLabel}
          </a>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            {nav.appStore}
          </a>
        </div>
      </nav>
    </header>
  );
}
