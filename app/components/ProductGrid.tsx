import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section id="products" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="section-label mb-4">All Products</div>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2
              className="font-syne font-700 text-4xl md:text-5xl text-white"
              style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
            >
              What I&apos;ve Built
            </h2>
            <p
              className="text-white/40 text-sm max-w-xs"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Each product solves a problem I personally encountered.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
