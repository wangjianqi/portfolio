# Jack Dev — Personal Product Showcase

A minimalist, Apple-style personal portfolio website built with Next.js 15, Tailwind CSS, and deployed on Vercel.

## Features

- **Dark mode by default** — Deep `#080808` background with grain texture overlay
- **Minimalist Apple-style UI** — Syne + DM Sans typography, generous spacing, subtle animations
- **Fully responsive** — Mobile-first grid, adapts to all screen sizes
- **SEO optimized** — Full Open Graph, Twitter Card, and structured metadata
- **Performance optimized** — App Router, static generation, font preloading

## Pages & Sections

- **Hero** — Animated headline with stats row
- **Product Grid** — All apps with status badges and action buttons
- **Featured** — Large format cards for VIXA and VisionDrive
- **About** — Bio, stack, principles, skill bars
- **Footer** — Clean minimal footer

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 3
- **Fonts**: Syne (display) + DM Sans (body)
- **Deployment**: Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

## Customization

Edit `lib/products.ts` to update product info, links, and colors.

```ts
export const products: Product[] = [
  {
    id: "your-app",
    name: "Your App",
    tagline: "Short tagline",
    description: "...",
    appStoreUrl: "https://apps.apple.com/app/idXXXXXXXXXX",
    accentColor: "#4F8EF7",
    // ...
  }
];
```

## License

MIT
