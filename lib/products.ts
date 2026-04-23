export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  platform: ("iOS" | "Web" | "AI")[];
  featured?: boolean;
  appStoreUrl?: string;
  websiteUrl?: string;
  githubUrl?: string;
  gradient: string;
  accentColor: string;
  glowColor: string;
  icon: string;
  status: "live" | "beta" | "in-development";
}

export const products: Product[] = [
  {
    id: "vixa",
    name: "VIXA",
    tagline: "Dual Camera. One Frame.",
    description:
      "Capture front and rear cameras simultaneously. Built for creators who need both perspectives — reactions, tutorials, and unique visual storytelling in a single take.",
    category: "Camera",
    platform: ["iOS"],
    featured: true,
    appStoreUrl: "https://apps.apple.com/app/vixa-dual-camera/id6761092933",
    gradient: "from-violet-950 via-indigo-950 to-slate-950",
    accentColor: "#818cf8",
    glowColor: "rgba(129, 140, 248, 0.2)",
    icon: "⬛",
    status: "live",
  },
  {
    id: "visiondrive",
    name: "VisionDrive",
    tagline: "Smart Dashcam for iOS",
    description:
      "Transform your iPhone into a professional dashcam. AI-powered incident detection, cinematic HUD display, and seamless loop recording — inspired by a real ride through Hangzhou.",
    category: "Utility",
    platform: ["iOS", "AI"],
    featured: true,
    appStoreUrl: "https://apps.apple.com/app/visiondrive-dash-cam/id6760873310",
    gradient: "from-slate-950 via-cyan-950 to-slate-950",
    accentColor: "#22d3ee",
    glowColor: "rgba(34, 211, 238, 0.18)",
    icon: "🚗",
    status: "live",
  },
  {
    id: "voicelocal",
    name: "VoiceLocal",
    tagline: "On-Device Transcription",
    description:
      "Privacy-first voice to text using on-device Whisper with Metal GPU acceleration. No cloud calls, no subscriptions — your words stay on your device.",
    category: "AI",
    platform: ["iOS", "AI"],
    appStoreUrl: "#",
    gradient: "from-blue-950 via-sky-950 to-slate-950",
    accentColor: "#60a5fa",
    glowColor: "rgba(96, 165, 250, 0.18)",
    icon: "🎙️",
    status: "beta",
  },
  {
    id: "voicecast",
    name: "VoiceCast",
    tagline: "Voice → Multi-Platform Content",
    description:
      "Speak your ideas and get platform-ready content for WeChat, Xiaohongshu, Douyin, and more. A voice-first AI content engine for modern creators.",
    category: "AI",
    platform: ["iOS", "AI"],
    gradient: "from-orange-950 via-amber-950 to-slate-950",
    accentColor: "#fb923c",
    glowColor: "rgba(251, 146, 60, 0.18)",
    icon: "🎤",
    status: "in-development",
  },
];

export const featuredProducts = products.filter((p) => p.featured);
