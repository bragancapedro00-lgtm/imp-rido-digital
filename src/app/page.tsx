import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MetricsBar from "@/components/MetricsBar";
import BenefitsSection from "@/components/BenefitsSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import SocialProofSection from "@/components/SocialProofSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Barra de Navegação Superior */}
      <Navbar />

      {/* Conteúdo Principal */}
      <main className="flex-1">
        {/* 1. Hero Section com Headline, Subheadline, CTA e Mockup */}
        <HeroSection />

        {/* Barra de Métricas de Autoridade */}
        <MetricsBar />

        {/* 2. Seção de Benefícios Exclusivos */}
        <BenefitsSection />

        {/* Qualificação do Público (Para quem é / não é) */}
        <TargetAudienceSection />

        {/* 3. Prova Social e Depoimentos de Membros Reais */}
        <SocialProofSection />

        {/* 4. Perguntas Frequentes (FAQ) com Acordeão Interativo */}
        <FaqSection />

        {/* 5. Seção de Fechamento com Última Chamada para o CTA */}
        <FinalCtaSection />
      </main>

      {/* 6. Rodapé com Informações Legais, Links e Painel de Diagnóstico */}
      <Footer />

      {/* Botão de Ação Flutuante para Dispositivos Móveis e Rolagem */}
      <FloatingCta />
    </div>
  );
}
