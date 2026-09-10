import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import { ThemeProvider } from "@/components/theme-provider";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";
import StructuredData from "@/components/structured-data";
import { siteConfig, siteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  preload: false,
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: "%s | Aryan Patel",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: `${siteConfig.name} — Portfolio`,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: `${siteConfig.name} — Portfolio`,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: "en_US",
    // og:image is generated automatically by app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.shortDescription,
    // twitter:image is generated automatically by app/twitter-image.tsx
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    telephone: false,
  },
  verification: {
    // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION to your Search Console token.
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ActiveSectionContextProvider>
            {/* Ambient background (GPU-cheap: no filter blur) */}
            <div
              className="pointer-events-none fixed inset-0 -z-10 bg-grid-pattern bg-[size:44px_44px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[36rem] [background:radial-gradient(50%_60%_at_50%_-10%,hsl(var(--primary)/0.14),transparent_70%)]"
              aria-hidden
            />

            <ScrollProgress />
            <Header />
            <main>{children}</main>
            <Footer />

            <Toaster position="top-right" />
            <SpeedInsights />
            <Analytics />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
