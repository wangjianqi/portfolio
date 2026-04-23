import { Product } from "@/lib/products";

const statusConfig = {
  live: { label: "Live", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
  beta: { label: "Beta", color: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
  "in-development": { label: "In Dev", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
};

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const status = statusConfig[product.status];

  return (
    <article
      className="product-card group relative rounded-3xl overflow-hidden border border-white/[0.07] bg-[#111111] hover:border-white/[0.14] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
      style={
        {
          "--glow": product.glowColor,
          animationDelay: `${index * 0.1}s`,
        } as React.CSSProperties
      }
    >
      {/* Top gradient area — mock screenshot */}
      <div
        className={`relative h-52 bg-gradient-to-br ${product.gradient} overflow-hidden`}
      >
        {/* Glow overlay */}
        <div
          className="card-gradient absolute inset-0 opacity-60"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, ${product.glowColor} 0%, transparent 70%)`,
          }}
        />

        {/* Mock UI frame */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Phone frame */}
            <div
              className="w-28 h-48 rounded-[20px] border-2 overflow-hidden shadow-2xl"
              style={{ borderColor: `${product.accentColor}40` }}
            >
              <div
                className="w-full h-full flex flex-col"
                style={{
                  background: `linear-gradient(160deg, ${product.accentColor}15 0%, transparent 100%)`,
                }}
              >
                {/* Status bar mock */}
                <div className="flex justify-between items-center px-3 pt-3 pb-1">
                  <div
                    className="text-[8px] font-medium"
                    style={{ color: product.accentColor, fontFamily: "DM Sans, sans-serif" }}
                  >
                    9:41
                  </div>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 rounded-sm"
                        style={{
                          height: `${6 + i * 2}px`,
                          background: product.accentColor,
                          opacity: 0.7,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* App icon */}
                <div className="flex-1 flex items-center justify-center">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
                    style={{ background: `${product.accentColor}25`, border: `1px solid ${product.accentColor}40` }}
                  >
                    {product.icon}
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="px-3 pb-4 space-y-1.5">
                  {[...Array(2)].map((_, i) => (
                    <div
                      key={i}
                      className="h-1.5 rounded-full"
                      style={{
                        background: `${product.accentColor}30`,
                        width: i === 0 ? "100%" : "60%",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Notch */}
            <div
              className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1.5 rounded-full"
              style={{ background: "#080808" }}
            />
          </div>
        </div>

        {/* Category pill */}
        <div className="absolute top-4 left-4">
          <span
            className="text-[10px] font-medium px-2.5 py-1 rounded-full border"
            style={{
              background: `${product.accentColor}18`,
              borderColor: `${product.accentColor}35`,
              color: product.accentColor,
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            {product.category}
          </span>
        </div>

        {/* Status */}
        <div className="absolute top-4 right-4">
          <span
            className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${status.color}`}
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            {status.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name + tagline */}
        <div className="mb-3">
          <h3
            className="font-syne font-700 text-xl text-white mb-1"
            style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
          >
            {product.name}
          </h3>
          <p
            className="text-sm font-medium"
            style={{ color: product.accentColor, fontFamily: "DM Sans, sans-serif" }}
          >
            {product.tagline}
          </p>
        </div>

        {/* Description */}
        <p
          className="text-sm text-white/50 leading-relaxed mb-5"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          {product.description}
        </p>

        {/* Platform badges */}
        <div className="flex gap-2 mb-5">
          {product.platform.map((p) => (
            <span
              key={p}
              className="text-[10px] text-white/40 border border-white/10 px-2 py-0.5 rounded-full"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              {p}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2">
          {product.appStoreUrl && product.appStoreUrl !== "#" && (
            <a
              href={product.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
          )}
          {product.appStoreUrl === "#" && (
            <button
              className="btn-secondary text-xs cursor-not-allowed opacity-60"
              disabled
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Coming Soon
            </button>
          )}
          {product.websiteUrl && (
            <a
              href={product.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
              Website
            </a>
          )}
          {product.githubUrl && (
            <a
              href={product.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
