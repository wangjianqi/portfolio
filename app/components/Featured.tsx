import type { Dictionary, Locale } from "@/lib/i18n";
import { getLocalizedFeaturedProducts } from "@/lib/products";

interface FeaturedProps {
  locale: Locale;
  featuredText: Dictionary["featured"];
  actions: Dictionary["actions"];
}

export default function Featured({
  locale,
  featuredText,
  actions,
}: FeaturedProps) {
  const featuredProducts = getLocalizedFeaturedProducts(locale);

  return (
    <section id="featured" className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(79,142,247,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="section-label mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-[#4F8EF7]" />
            {featuredText.label}
            <span className="w-8 h-px bg-[#4F8EF7]" />
          </div>
          <h2
            className="font-syne font-700 text-4xl md:text-5xl text-white"
            style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
          >
            {featuredText.title}
          </h2>
        </div>

        {/* Featured cards — large format */}
        <div className="space-y-5">
          {featuredProducts.map((product, index) => (
            <article
              key={product.id}
              className="group relative rounded-3xl overflow-hidden border border-white/[0.07] hover:border-white/[0.14] transition-all duration-500"
              style={{ background: "#111111" }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Visual side */}
                <div
                  className={`relative md:w-2/5 h-72 md:h-auto min-h-[280px] bg-gradient-to-br ${product.gradient} overflow-hidden flex-shrink-0`}
                >
                  {/* Glow */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(ellipse at 40% 50%, ${product.glowColor} 0%, transparent 65%)`,
                    }}
                  />

                  {/* Large app icon + floating elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Main icon */}
                      <div
                        className="w-20 h-20 rounded-[28px] flex items-center justify-center text-4xl shadow-2xl animate-float"
                        style={{
                          background: `linear-gradient(135deg, ${product.accentColor}30, ${product.accentColor}10)`,
                          border: `1.5px solid ${product.accentColor}40`,
                          boxShadow: `0 20px 60px ${product.glowColor}`,
                        }}
                      >
                        {product.icon}
                      </div>

                      {/* Orbiting badges */}
                      <div
                        className="absolute -top-3 -right-8 text-[10px] font-medium px-2.5 py-1 rounded-full border"
                        style={{
                          background: `${product.accentColor}20`,
                          borderColor: `${product.accentColor}40`,
                          color: product.accentColor,
                          fontFamily: "DM Sans, sans-serif",
                        }}
                      >
                        {product.platform[0]}
                      </div>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-6 left-6">
                    <span
                      className="text-[10px] font-medium tracking-[0.15em] uppercase"
                      style={{ color: product.accentColor, fontFamily: "DM Sans, sans-serif", opacity: 0.8 }}
                    >
                      {product.category}
                    </span>
                  </div>

                  {/* App ID watermark if VisionDrive */}
                  {product.id === "visiondrive" && (
                    <div className="absolute bottom-6 right-6">
                      <span
                        className="text-[9px] font-mono opacity-30"
                        style={{ color: product.accentColor }}
                      >
                        id6760873310
                      </span>
                    </div>
                  )}
                </div>

                {/* Content side */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    {/* Name */}
                    <h3
                      className="font-syne font-800 text-3xl md:text-4xl text-white mb-2"
                      style={{ fontFamily: "Syne, sans-serif", fontWeight: 800 }}
                    >
                      {product.name}
                    </h3>

                    {/* Tagline */}
                    <p
                      className="text-base font-medium mb-4"
                      style={{ color: product.accentColor, fontFamily: "DM Sans, sans-serif" }}
                    >
                      {product.tagline}
                    </p>

                    {/* Description */}
                    <p
                      className="text-white/50 leading-relaxed mb-8 max-w-md"
                      style={{ fontFamily: "DM Sans, sans-serif" }}
                    >
                      {product.description}
                    </p>
                  </div>

                  {/* Platforms + actions */}
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex gap-2">
                      {product.platform.map((p) => (
                        <span
                          key={p}
                          className="text-xs text-white/40 border border-white/[0.08] px-3 py-1 rounded-full"
                          style={{ fontFamily: "DM Sans, sans-serif" }}
                        >
                          {p}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2 ml-auto">
                      {product.appStoreUrl && product.appStoreUrl !== "#" && (
                        <a
                          href={product.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                          </svg>
                          {actions.download}
                        </a>
                      )}
                      <a
                        href="#products"
                        className="btn-secondary"
                        style={{ color: product.accentColor, borderColor: `${product.accentColor}30`, background: `${product.accentColor}10` }}
                      >
                        {actions.learnMore}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
