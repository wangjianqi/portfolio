import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { dictionaries, isLocale, locales } from "@/lib/i18n";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  const metadata = dictionaries[localeParam].metadata;

  return {
    metadataBase: new URL("https://paladindev.app"),
    title: metadata.title,
    description: metadata.description,
    keywords: [
      "indie developer",
      "iOS developer",
      "AI apps",
      "dashcam app",
      "dual camera",
      "Whisper transcription",
      "Swift",
      "Flutter",
    ],
    authors: [{ name: "Paladin" }],
    alternates: {
      languages: {
        en: "/en",
        zh: "/zh",
      },
    },
    openGraph: {
      type: "website",
      locale: metadata.locale,
      url: `https://paladindev.app/${localeParam}`,
      title: metadata.title,
      description: metadata.ogDescription,
      siteName: "Paladin Dev",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: metadata.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.ogDescription,
      images: ["/og-image.png"],
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return children;
}
