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
  title: "Império Digital • Grupo VIP Exclusivo de Estratégias & Networking",
  description:
    "Junte-se a mais de 4.800 empreendedores e profissionais. Alertas em primeira mão, networking de alto nível, análises práticas e estratégias validadas. Acesso 100% gratuito por tempo limitado.",
  keywords: [
    "grupo vip",
    "networking digital",
    "estratégias de tráfego",
    "marketing digital",
    "comunidade empreendedores",
    "whatsapp vip",
    "negócios digitais",
  ],
  authors: [{ name: "Império Digital" }],
  creator: "Império Digital",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://imperiodigital.com",
    title: "Império Digital • Grupo VIP Exclusivo",
    description:
      "Acesso gratuito ao grupo exclusivo de estratégias de alto faturamento e networking. Restam poucas vagas!",
    siteName: "Império Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Império Digital • Grupo VIP Exclusivo",
    description: "Acesso gratuito ao grupo fechado de estratégias digitais e networking de alto nível.",
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
