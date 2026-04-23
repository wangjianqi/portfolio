import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Featured from "./components/Featured";
import About from "./components/About";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <Navbar />
      <Hero />
      <ProductGrid />
      <Featured />
      <About />
      <Footer />
    </main>
  );
}
