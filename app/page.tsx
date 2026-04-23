import About from "./components/About";
import DocumentLanguage from "./components/DocumentLanguage";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import { defaultLocale, dictionaries } from "@/lib/i18n";

export default function HomePage() {
  const dictionary = dictionaries[defaultLocale];

  return (
    <main className="min-h-screen bg-[#080808]">
      <DocumentLanguage locale={defaultLocale} />
      <Navbar locale={defaultLocale} nav={dictionary.nav} />
      <Hero hero={dictionary.hero} />
      <ProductGrid
        locale={defaultLocale}
        productsText={dictionary.products}
        actions={dictionary.actions}
        statusText={dictionary.status}
      />
      <Featured
        locale={defaultLocale}
        featuredText={dictionary.featured}
        actions={dictionary.actions}
      />
      <About about={dictionary.about} />
      <Footer footer={dictionary.footer} nav={dictionary.nav} />
    </main>
  );
}
