import type { Locale } from "./i18n";

export interface Product {
  id: string;
  name: string;
  content: Record<
    Locale,
    {
      tagline: string;
      description: string;
      category: string;
    }
  >;
  platform: ("iOS" | "Web" | "AI")[];
  featured?: boolean;
  appStoreUrls?: Partial<Record<Locale, string>>;
  websiteUrl?: string;
  githubUrl?: string;
  gradient: string;
  accentColor: string;
  glowColor: string;
  icon: string;
  status: "live" | "beta" | "in-development";
}

export type LocalizedProduct = Omit<Product, "content" | "appStoreUrls"> &
  Product["content"][Locale] & {
    appStoreUrl?: string;
  };

export const products: Product[] = [
  {
    id: "vixa",
    name: "VIXA",
    content: {
      en: {
        tagline: "Dual Camera. One Frame.",
        description:
          "Capture front and rear cameras simultaneously. Built for creators who need both perspectives - reactions, tutorials, and unique visual storytelling in a single take.",
        category: "Camera",
      },
      zh: {
        tagline: "双摄画面，一次完成。",
        description:
          "同时捕捉前后摄像头画面，为需要双视角的创作者而设计：反应视频、教程记录和一次成片的视觉叙事。",
        category: "相机",
      },
    },
    platform: ["iOS"],
    featured: true,
    appStoreUrls: {
      zh: "https://apps.apple.com/cn/app/vixa-%E5%8F%8C%E6%91%84%E7%9B%B8%E6%9C%BA/id6761092933",
      en: "https://apps.apple.com/us/app/vixa-dual-camera/id6761092933",
    },
    gradient: "from-violet-950 via-indigo-950 to-slate-950",
    accentColor: "#818cf8",
    glowColor: "rgba(129, 140, 248, 0.2)",
    icon: "⬛",
    status: "live",
  },
  {
    id: "visiondrive",
    name: "VisionDrive",
    content: {
      en: {
        tagline: "Smart Dashcam for iOS",
        description:
          "Transform your iPhone into a professional dashcam. AI-powered incident detection, cinematic HUD display, and seamless loop recording - inspired by a real ride through Hangzhou.",
        category: "Utility",
      },
      zh: {
        tagline: "iOS 智能行车记录仪",
        description:
          "把 iPhone 变成专业行车记录仪。支持 AI 事件检测、电影感 HUD 展示和无缝循环录制，灵感来自一次真实的杭州骑行。",
        category: "工具",
      },
    },
    platform: ["iOS", "AI"],
    featured: true,
    appStoreUrls: {
      zh: "https://apps.apple.com/cn/app/id6760873310",
      en: "https://apps.apple.com/us/app/visiondrive-dash-cam/id6760873310",
    },
    gradient: "from-slate-950 via-cyan-950 to-slate-950",
    accentColor: "#22d3ee",
    glowColor: "rgba(34, 211, 238, 0.18)",
    icon: "🚗",
    status: "live",
  },
  {
    id: "voicelocal",
    name: "VoiceLocal",
    content: {
      en: {
        tagline: "On-Device Transcription",
        description:
          "Privacy-first voice to text using on-device Whisper with Metal GPU acceleration. No cloud calls, no subscriptions - your words stay on your device.",
        category: "AI",
      },
      zh: {
        tagline: "端侧语音转文字",
        description:
          "隐私优先的语音转文字工具，基于端侧 Whisper 和 Metal GPU 加速。不走云端、无需订阅，你的话只留在你的设备上。",
        category: "AI",
      },
    },
    platform: ["iOS", "AI"],
    appStoreUrls: {
      en: "#",
      zh: "#",
    },
    gradient: "from-blue-950 via-sky-950 to-slate-950",
    accentColor: "#60a5fa",
    glowColor: "rgba(96, 165, 250, 0.18)",
    icon: "🎙️",
    status: "beta",
  },
  {
    id: "app-review-cases",
    name: "App Review Cases",
    content: {
      en: {
        tagline: "Real App Store Review Cases",
        description:
          "A structured library of real Apple App Store review rejection cases. Browse by guideline, learn from real outcomes, and contribute your own experience.",
        category: "Developer Tool",
      },
      zh: {
        tagline: "真实 App Store 审核案例库",
        description:
          "结构化整理真实的 Apple App Store 审核拒审案例。按审核指南浏览，学习真实处理结果，也可以提交自己的经历。",
        category: "开发者工具",
      },
    },
    platform: ["Web"],
    websiteUrl: "https://appreview.yuechuanai.cn/",
    gradient: "from-zinc-950 via-sky-950 to-slate-950",
    accentColor: "#0ea5e9",
    glowColor: "rgba(14, 165, 233, 0.18)",
    icon: "📋",
    status: "live",
  },
  {
    id: "voicecast",
    name: "VoiceCast",
    content: {
      en: {
        tagline: "Voice to Multi-Platform Content",
        description:
          "Speak your ideas and get platform-ready content for WeChat, Xiaohongshu, Douyin, and more. A voice-first AI content engine for modern creators.",
        category: "AI",
      },
      zh: {
        tagline: "用语音生成多平台内容",
        description:
          "说出想法，即可获得适配微信、小红书、抖音等平台的内容草稿。为现代创作者设计的语音优先 AI 内容引擎。",
        category: "AI",
      },
    },
    platform: ["iOS", "AI"],
    gradient: "from-orange-950 via-amber-950 to-slate-950",
    accentColor: "#fb923c",
    glowColor: "rgba(251, 146, 60, 0.18)",
    icon: "🎤",
    status: "in-development",
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export function getLocalizedProducts(locale: Locale): LocalizedProduct[] {
  return products.map(({ content, appStoreUrls, ...product }) => ({
    ...product,
    ...content[locale],
    appStoreUrl: appStoreUrls?.[locale] ?? appStoreUrls?.en,
  }));
}

export function getLocalizedFeaturedProducts(locale: Locale): LocalizedProduct[] {
  return getLocalizedProducts(locale).filter((p) => p.featured);
}
