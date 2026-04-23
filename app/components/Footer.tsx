export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
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
            Indie Developer · iOS &amp; AI Apps
          </p>
        </div>

        {/* Links */}
        <nav className="flex gap-6" aria-label="Footer navigation">
          {[
            { label: "Products", href: "#products" },
            { label: "Featured", href: "#featured" },
            { label: "About", href: "#about" },
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
          © {year} Paladin. Built with Next.js &amp; Tailwind.
        </p>
      </div>
    </footer>
  );
}
