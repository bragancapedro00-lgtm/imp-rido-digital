import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";
import UtmProvider from "@/components/UtmTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Achadinhos VIP • Promoções Shopee & Mercado Livre no WhatsApp",
  description:
    "Acesse o grupo agora e receba as melhores promoções de achadinhos da Shopee e Mercado Livre: itens de casa, eletrodomésticos, área fitness e roupas. 100% gratuito!",
  keywords: [
    "achadinhos shopee",
    "promocoes mercado livre",
    "achadinhos whatsapp",
    "descontos e cupons",
    "itens de casa barato",
    "eletrodomésticos em promoção",
    "roupas fitness shopee",
    "moda barata mercado livre",
    "grupo vip de ofertas",
  ],
  authors: [{ name: "Achadinhos VIP" }],
  creator: "Achadinhos VIP",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://imperiodigital.com",
    title: "Achadinhos VIP • Shopee & Mercado Livre",
    description:
      "Acesse o grupo agora e receba os melhores achadinhos e cupons da Shopee e Mercado Livre. Itens de casa, eletro, fitness e roupas!",
    siteName: "Achadinhos VIP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Achadinhos VIP • Shopee & Mercado Livre",
    description: "Promoções, bugs de preço e cupons da Shopee e Mercado Livre no WhatsApp!",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased dark`}
    >
      <head>
        <MetaPixel />
      </head>
      <body className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-200">
        <UtmProvider>
          {children}
        </UtmProvider>
      </body>
    </html>
  );
}
