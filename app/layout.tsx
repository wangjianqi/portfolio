import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://paladindev.app"),
  title: "Paladin — Indie Developer · iOS & AI Apps",
  description:
    "Indie developer building practical iOS and AI-powered apps. Products include VisionDrive dashcam, VIXA dual camera, VoiceLocal on-device transcription, and more.",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://paladindev.app",
    title: "Paladin — Indie Developer · iOS & AI Apps",
    description:
      "Building practical AI & utility apps for iOS. Minimalist design, offline-first architecture.",
    siteName: "Paladin Dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paladin — Indie Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paladin — Indie Developer · iOS & AI Apps",
    description:
      "Building practical AI & utility apps for iOS. Minimalist design, offline-first architecture.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#080808] text-white antialiased">{children}</body>
    </html>
  );
}
