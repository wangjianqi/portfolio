"use client";

import type { Dictionary } from "@/lib/i18n";
import Image from "next/image";
import { useState } from "react";

interface FooterProps {
  footer: Dictionary["footer"];
  nav: Dictionary["nav"];
}

export default function Footer({ footer, nav }: FooterProps) {
  const year = new Date().getFullYear();
  const [showQrCode, setShowQrCode] = useState(false);

  return (
    <footer className="relative border-t border-white/[0.06] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo & QR Code Row */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <div>
              <div
                className="font-syne font-700 text-lg text-white mb-1"
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
              >
                paladin<span className="text-[#4F8EF7]">.</span>dev
              </div>
              <p
                className="text-xs text-white/30"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {footer.tagline}
              </p>
            </div>

            {/* Divider */}
            <div className="h-10 w-px bg-white/10 hidden sm:block" />

            {/* WeChat QR Code with Hover */}
            <div 
              className="relative flex items-center gap-3"
              onMouseEnter={() => setShowQrCode(true)}
              onMouseLeave={() => setShowQrCode(false)}
            >
              <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white/5 border border-white/10 cursor-pointer hover:border-white/30 transition-colors">
                <Image
                  src="/images/wechat-qr.png"
                  alt={footer.wechatQrAlt || "WeChat Official Account QR Code"}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <p
                className="text-xs text-white/40"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {footer.wechatQrLabel || "关注公众号"}
              </p>

              {/* Large QR Code Popup */}
              {showQrCode && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50">
                  <div className="relative bg-white rounded-xl p-3 shadow-2xl border border-white/20">
                    <div className="relative w-40 h-40">
                      <Image
                        src="/images/wechat-qr.png"
                        alt={footer.wechatQrAlt || "WeChat Official Account QR Code"}
                        fill
                        className="object-contain"
                      />
                    </div>
                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                      <div className="w-3 h-3 bg-white rotate-45 border-r border-b border-white/20" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Links */}
          <nav className="flex gap-6" aria-label={footer.navigationLabel}>
            {[
              { label: nav.products, href: "#products" },
              { label: nav.featured, href: "#featured" },
              { label: nav.about, href: "#about" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-white/30 hover:text-white/60 transition-colors"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p
            className="text-xs text-white/20"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            © {year} Paladin. {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
