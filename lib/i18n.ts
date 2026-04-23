export const locales = ["en", "zh"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale;

  const languages = header
    .split(",")
    .map((part) => {
      const [tag, quality = "q=1"] = part.trim().split(";");
      const q = Number(quality.replace("q=", ""));
      return { tag: tag.toLowerCase(), q: Number.isFinite(q) ? q : 1 };
    })
    .sort((a, b) => b.q - a.q);

  const preferred = languages.find(({ tag }) =>
    locales.some((locale) => tag === locale || tag.startsWith(`${locale}-`)),
  );

  return preferred?.tag.startsWith("zh") ? "zh" : defaultLocale;
}

export const dictionaries = {
  en: {
    metadata: {
      title: "Paladin - Indie Developer · iOS & AI Apps",
      description:
        "Indie developer building practical iOS and AI-powered apps. Products include VisionDrive dashcam, VIXA dual camera, VoiceLocal on-device transcription, and more.",
      ogDescription:
        "Building practical AI & utility apps for iOS. Minimalist design, offline-first architecture.",
      imageAlt: "Paladin - Indie Developer",
      locale: "en_US",
    },
    nav: {
      products: "Products",
      featured: "Featured",
      about: "About",
      appStore: "App Store",
      languageLabel: "中文",
      languageAriaLabel: "Switch to Chinese",
    },
    hero: {
      label: "Indie Developer",
      titleTop: "Building",
      titleHighlight: "Practical AI",
      titleBottom: "& Utility Apps",
      description:
        "Shipping iOS and AI-powered tools that solve real problems - built with Swift, on-device intelligence, and obsessive attention to detail.",
      primaryCta: "View Products",
      secondaryCta: "About Me",
      scroll: "Scroll",
      stats: [
        { value: "4+", label: "Apps Shipped" },
        { value: "iOS", label: "Native" },
        { value: "AI", label: "Powered" },
        { value: "2024", label: "Active" },
      ],
    },
    products: {
      label: "All Products",
      title: "What I've Built",
      description: "Each product solves a problem I personally encountered.",
    },
    featured: {
      label: "Featured",
      title: "Flagship Products",
    },
    about: {
      label: "About",
      titleTop: "Indie Developer.",
      titleBottom: "Builder. Cyclist.",
      paragraphs: [
        "I build iOS and AI-powered apps that solve real, personally experienced problems. My stack spans Swift, Flutter, on-device ML, and backend services - but the philosophy stays constant: ship something useful, keep it minimal.",
        "The VisionDrive dashcam app started on a cycling route through Hangzhou. I needed something that didn't exist, so I built it. That's the pattern I keep returning to.",
        "I also write about AI and technology in Chinese for a developer audience - long-form, technically honest, without the hype.",
      ],
      stackLabel: "Stack Proficiency",
      skillsAriaLabel: "Skills",
      principles: [
        {
          icon: "◈",
          title: "Solve your own problems",
          desc: "Every app I ship solves something I personally experienced. No solution in search of a problem.",
        },
        {
          icon: "◉",
          title: "Restraint as design",
          desc: "Less surface, deeper utility. I cut features until something essential remains.",
        },
        {
          icon: "◌",
          title: "Offline-first",
          desc: "Privacy and speed aren't trade-offs. On-device intelligence should be the default.",
        },
      ],
    },
    footer: {
      tagline: "Indie Developer · iOS & AI Apps",
      copyright: "Built with Next.js & Tailwind.",
      navigationLabel: "Footer navigation",
      wechatQrAlt: "WeChat Official Account QR Code",
      wechatQrLabel: "Follow on WeChat",
    },
    actions: {
      download: "Download",
      learnMore: "Learn More",
      comingSoon: "Coming Soon",
      website: "Website",
      github: "GitHub",
      appStore: "App Store",
    },
    status: {
      live: "Live",
      beta: "Beta",
      "in-development": "In Dev",
    },
  },
  zh: {
    metadata: {
      title: "Paladin - 独立开发者 · iOS 与 AI 应用",
      description:
        "独立开发者，构建实用的 iOS 与 AI 应用。作品包括 VisionDrive 行车记录仪、VIXA 双摄相机、VoiceLocal 端侧转录等。",
      ogDescription:
        "构建实用的 AI 与效率工具，专注 iOS、极简设计和离线优先架构。",
      imageAlt: "Paladin - 独立开发者",
      locale: "zh_CN",
    },
    nav: {
      products: "产品",
      featured: "精选",
      about: "关于",
      appStore: "App Store",
      languageLabel: "EN",
      languageAriaLabel: "Switch to English",
    },
    hero: {
      label: "独立开发者",
      titleTop: "构建",
      titleHighlight: "实用 AI",
      titleBottom: "与工具应用",
      description:
        "持续发布解决真实问题的 iOS 与 AI 工具，基于 Swift、端侧智能和对细节的长期打磨。",
      primaryCta: "查看产品",
      secondaryCta: "关于我",
      scroll: "向下",
      stats: [
        { value: "4+", label: "已发布应用" },
        { value: "iOS", label: "原生开发" },
        { value: "AI", label: "智能能力" },
        { value: "2024", label: "持续活跃" },
      ],
    },
    products: {
      label: "全部产品",
      title: "我做过的产品",
      description: "每一个产品都来自我亲自遇到过的问题。",
    },
    featured: {
      label: "精选",
      title: "旗舰产品",
    },
    about: {
      label: "关于",
      titleTop: "独立开发者。",
      titleBottom: "产品构建者。骑行者。",
      paragraphs: [
        "我构建解决真实问题的 iOS 与 AI 应用。技术栈覆盖 Swift、Flutter、端侧机器学习和后端服务，但核心原则始终不变：发布有用的东西，并保持克制。",
        "VisionDrive 行车记录仪应用源于一次杭州骑行。我需要一个当时不存在的工具，于是把它做了出来。这也是我反复回到的创作方式。",
        "我也面向开发者读者写中文 AI 与技术内容，偏长文、重技术判断，不追热点噪音。",
      ],
      stackLabel: "技术熟练度",
      skillsAriaLabel: "技能",
      principles: [
        {
          icon: "◈",
          title: "先解决自己的问题",
          desc: "我发布的每个应用都来自亲自经历过的场景，而不是为了寻找问题而做方案。",
        },
        {
          icon: "◉",
          title: "克制也是设计",
          desc: "更少的表层功能，更深的实用价值。不断删减，直到留下真正必要的东西。",
        },
        {
          icon: "◌",
          title: "离线优先",
          desc: "隐私和速度不应该互相牺牲。端侧智能应该成为默认选择。",
        },
      ],
    },
    footer: {
      tagline: "独立开发者 · iOS 与 AI 应用",
      copyright: "使用 Next.js 与 Tailwind 构建。",
      navigationLabel: "页脚导航",
      wechatQrAlt: "微信公众号二维码",
      wechatQrLabel: "关注公众号",
    },
    actions: {
      download: "下载",
      learnMore: "了解更多",
      comingSoon: "即将推出",
      website: "网站",
      github: "GitHub",
      appStore: "App Store",
    },
    status: {
      live: "已上线",
      beta: "测试版",
      "in-development": "开发中",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
