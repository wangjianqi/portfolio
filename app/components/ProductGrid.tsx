import type { Dictionary, Locale } from "@/lib/i18n";
import { getLocalizedProducts } from "@/lib/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  locale: Locale;
  productsText: Dictionary["products"];
  actions: Dictionary["actions"];
  statusText: Dictionary["status"];
}

export default function ProductGrid({
  locale,
  productsText,
  actions,
  statusText,
}: ProductGridProps) {
  const products = getLocalizedProducts(locale);

  return (
    <section id="products" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="section-label mb-4">{productsText.label}</div>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2
              className="font-syne font-700 text-4xl md:text-5xl text-white"
              style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
            >
              {productsText.title}
            </h2>
            <p
              className="text-white/40 text-sm max-w-xs"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              {productsText.description}
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              actions={actions}
              statusText={statusText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
