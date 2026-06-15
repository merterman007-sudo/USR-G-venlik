import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SiteEffects } from "@/components/layout/site-effects";
import { JsonLd } from "@/components/sections/json-ld";
import { localBusinessSchema } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://usrozelguvenlik.com"),
  title: {
    default: "USR Özel Güvenlik | Profesyonel Güvenlik ve Personel Çözümleri",
    template: "%s | USR Özel Güvenlik",
  },
  description: "Türkiye genelinde özel güvenlik, temizlik, organizasyon personeli ve kurumsal personel temini hizmetleri.",
  applicationName: "USR Özel Güvenlik",
  authors: [{ name: "USR Özel Güvenlik" }],
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>
        <JsonLd data={localBusinessSchema()} />
        <Header />
        {children}
        <Footer />
        <SiteEffects />
      </body>
    </html>
  );
}
