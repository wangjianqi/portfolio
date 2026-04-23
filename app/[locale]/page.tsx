import { notFound } from "next/navigation";
import About from "../components/About";
import DocumentLanguage from "../components/DocumentLanguage";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import { dictionaries, isLocale, locales } from "@/lib/i18n";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam;
  const dictionary = dictionaries[locale];

  return (
    <main className="min-h-screen bg-[#080808]">
      <DocumentLanguage locale={locale} />
      <Navbar locale={locale} nav={dictionary.nav} />
      <Hero hero={dictionary.hero} />
      <ProductGrid
        locale={locale}
        productsText={dictionary.products}
        actions={dictionary.actions}
        statusText={dictionary.status}
      />
      <Featured
        locale={locale}
        featuredText={dictionary.featured}
        actions={dictionary.actions}
      />
      <About about={dictionary.about} />
      <Footer footer={dictionary.footer} nav={dictionary.nav} />
    </main>
  );
}
