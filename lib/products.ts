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
    id: "clearcut",
    name: "ClearCut",
    content: {
      en: {
        tagline: "Remove Image Background Instantly",
        description:
          "AI-powered background removal that runs entirely in your browser. No uploads, no accounts, and your images never leave your device.",
        category: "Image Tool",
      },
      zh: {
        tagline: "浏览器内一键移除图片背景",
        description:
          "完全在浏览器本地运行的 AI 图片背景移除工具。无需上传、无需账号，图片不会离开你的设备。",
        category: "图片工具",
      },
    },
    platform: ["Web", "AI"],
    websiteUrl: "https://wangjianqi.github.io/clearcut/",
    gradient: "from-zinc-950 via-fuchsia-950 to-slate-950",
    accentColor: "#e879f9",
    glowColor: "rgba(232, 121, 249, 0.18)",
    icon: "✂️",
    status: "live",
  },
  {
    id: "ai-mind-reader",
    name: "AI读心术",
    content: {
      en: {
        tagline: "A Playful AI Mind Reading Game",
        description:
          "A lightweight web experience built around a playful AI mind reading interaction. Designed as a fast, shareable browser-based entertainment product.",
        category: "AI Game",
      },
      zh: {
        tagline: "一个好玩的 AI 读心小游戏",
        description:
          "围绕 AI 读心互动设计的轻量级 Web 体验，适合作为快速打开、轻松分享的浏览器娱乐产品。",
        category: "AI 游戏",
      },
    },
    platform: ["Web", "AI"],
    websiteUrl: "https://mind.yuechuanai.cn/",
    gradient: "from-slate-950 via-purple-950 to-zinc-950",
    accentColor: "#a78bfa",
    glowColor: "rgba(167, 139, 250, 0.18)",
    icon: "🔮",
    status: "live",
  },
  {
    id: "startrail-personality",
    name: "星轨人格测试",
    content: {
      en: {
        tagline: "Discover Your Startrail Type",
        description:
          "An original personality quiz with 16 playful types, 24 everyday questions, and a quick result flow for casual self-reflection and sharing.",
        category: "Personality Test",
      },
      zh: {
        tagline: "发现你的星轨类型",
        description:
          "16 种原创人格类型，24 道生活化问题，约 3 分钟完成。一个面向娱乐、自我观察和分享的人格测试产品。",
        category: "人格测试",
      },
    },
    platform: ["Web"],
    websiteUrl: "https://sbti.yuechuanai.cn/",
    gradient: "from-slate-950 via-amber-950 to-violet-950",
    accentColor: "#f59e0b",
    glowColor: "rgba(245, 158, 11, 0.18)",
    icon: "✨",
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
  {
    id: "appiconlab",
    name: "AppIconLab",
    content: {
      en: {
        tagline: "Beautiful App Icons in Seconds",
        description:
          "Generate iOS and Android app icons from letters, images, or AI prompts. 50 built-in templates, fully private browser-based editing, export 1024×1024 PNGs instantly.",
        category: "Developer Tool",
      },
      zh: {
        tagline: "数秒生成精美应用图标",
        description:
          "从文字、图片或 AI 提示词生成 iOS 和 Android 应用图标。50 款内置模板，完全私密的浏览器端编辑，即时导出 1024×1024 PNG。",
        category: "开发者工具",
      },
    },
    platform: ["Web", "AI"],
    websiteUrl: "https://appiconlab.pages.dev",
    gradient: "from-indigo-950 via-violet-950 to-slate-950",
    accentColor: "#8b5cf6",
    glowColor: "rgba(139, 92, 246, 0.18)",
    icon: "🎨",
    status: "live",
  },
  {
    id: "app-store-screenshot-designer",
    name: "App Store Screenshot Designer",
    content: {
      en: {
        tagline: "Design App Store Screenshots in Browser",
        description:
          "Upload screenshots, pick a template, edit text and layouts, then export App Store-ready images. 5 built-in templates, Fabric.js Canvas editor, export PNG + ZIP in all required sizes.",
        category: "Developer Tool",
      },
      zh: {
        tagline: "浏览器内设计 App Store 截图",
        description:
          "上传截图、选择模板、编辑文字和布局，然后导出 App Store 标准尺寸图片。5 款内置模板，Fabric.js 画布编辑器，导出 PNG + ZIP 所有必需尺寸。",
        category: "开发者工具",
      },
    },
    platform: ["Web"],
    websiteUrl: "https://app-store-screenshot-designer.pages.dev",
    gradient: "from-rose-950 via-pink-950 to-slate-950",
    accentColor: "#f472b6",
    glowColor: "rgba(244, 114, 182, 0.18)",
    icon: "📱",
    status: "live",
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
