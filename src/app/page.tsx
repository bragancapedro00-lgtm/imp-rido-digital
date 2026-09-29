"use client";

import React, { useState } from "react";
import { 
  ShoppingBag, 
  Flame, 
  Home, 
  Zap, 
  Dumbbell, 
  Shirt, 
  ShieldCheck, 
  BellOff, 
  Users, 
  ArrowRight, 
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Tag
} from "lucide-react";
import { siteConfig, appendUtmToUrl } from "@/lib/config";
import { trackLead } from "@/lib/pixel";
import { useUtmContext } from "@/components/UtmTracker";

export default function MobileOnePage() {
  const { utms } = useUtmContext();
  const [isClicked, setIsClicked] = useState(false);

  const finalInviteUrl = appendUtmToUrl(
    siteConfig.groupInviteUrl, 
    utms as Record<string, string>
  );

  const handleCtaClick = () => {
    trackLead({
      button_location: "mobile_onepage_main",
      cta_text: "ACESSE O GRUPO AGORA",
      ...utms,
    });
    setIsClicked(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-between p-4 sm:p-6 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Background Glows para atmosfera premium */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[360px] h-[300px] bg-gradient-to-b from-orange-500/20 via-amber-500/15 to-transparent blur-[100px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[340px] h-[250px] bg-emerald-500/15 blur-[100px] pointer-events-none -z-10" />

      {/* Container Mobile Centralizado (formato app / tela de celular) */}
      <div className="w-full max-w-md mx-auto flex flex-col my-auto py-2">
        
        {/* 1. Header Compacto & Badges Oficiais */}
        <div className="flex flex-col items-center text-center mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-300 text-xs font-bold mb-3 shadow-[0_0_15px_rgba(249,115,22,0.15)] animate-pulse">
            <Flame className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
            <span>GRUPO VIP • 100% GRATUITO</span>
          </div>

          <div className="flex items-center justify-center gap-2 mb-1">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-500 via-amber-500 to-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.4)] text-white">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-white">
              ACHADINHOS <span className="text-amber-400">VIP</span>
            </h1>
          </div>

          {/* Badges de Lojas Oficiais */}
          <div className="flex items-center gap-2 text-[11px] font-semibold text-zinc-400">
            <span className="px-2 py-0.5 rounded-md bg-orange-500/15 text-orange-400 border border-orange-500/30">
              Shopee Oficial
            </span>
            <span>•</span>
            <span className="px-2 py-0.5 rounded-md bg-yellow-500/15 text-yellow-300 border border-yellow-500/30">
              Mercado Livre
            </span>
          </div>
        </div>

        {/* 2. Headline & Proposta de Valor */}
        <div className="text-center mb-4">
          <h2 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
            As Melhores Promoções e Cupons no Seu{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent underline decoration-emerald-500/40">
              WhatsApp
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-sm mx-auto">
            Receba alertas diários de bugs de preço, cupons exclusivos e descontos de até 80% antes que esgotem:
          </p>
        </div>

        {/* 3. Grid Visual das 4 Categorias (O que o usuário recebe) */}
        <div className="grid grid-cols-2 gap-2.5 mb-5 text-left">
          {/* Card 1: Casa */}
          <div className="p-3 rounded-2xl bg-zinc-900/90 border border-amber-500/30 shadow-md">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Home className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white">Itens de Casa</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-snug">
              Potes herméticos, organizadores e utilidades.
            </p>
          </div>

          {/* Card 2: Eletrodomésticos */}
          <div className="p-3 rounded-2xl bg-zinc-900/90 border border-yellow-500/30 shadow-md">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-lg bg-yellow-500/20 text-yellow-300 flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white">Eletrodomésticos</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-snug">
              Air Fryer, robô aspirador e cafeteiras.
            </p>
          </div>

          {/* Card 3: Área Fitness */}
          <div className="p-3 rounded-2xl bg-zinc-900/90 border border-emerald-500/30 shadow-md">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Dumbbell className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white">Área Fitness</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-snug">
              Roupas de treino, garrafas e elásticos.
            </p>
          </div>

          {/* Card 4: Roupas & Moda */}
          <div className="p-3 rounded-2xl bg-zinc-900/90 border border-pink-500/30 shadow-md">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center">
                <Shirt className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white">Roupas & Moda</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-snug">
              Looks e peças com preço de atacado.
            </p>
          </div>
        </div>

        {/* 4. Mini Alerta Realista de Oferta (Gatilho de Desejo Instantâneo) */}
        <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-amber-950/30 border border-emerald-500/30 mb-5 text-left flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
            <Tag className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-400">Exemplo de Oferta no Grupo:</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded font-bold">
                HOJE
              </span>
            </div>
            <p className="text-xs text-zinc-200 mt-0.5 font-medium">
              🔥 <strong>Air Fryer 4L</strong> De <span className="line-through text-zinc-500">R$ 389</span> por <strong>R$ 139,90</strong> + Frete Grátis com cupom liberado!
            </p>
          </div>
        </div>

        {/* 5. O Botão Principal (CTA Gigante, Focado no Mobile) */}
        <div className="flex flex-col items-center w-full mb-5">
          <a
            href={finalInviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            id="mobile-main-cta"
            className="w-full relative flex items-center justify-center gap-3 py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 text-white font-extrabold text-lg sm:text-xl uppercase tracking-wider text-center shadow-[0_0_35px_rgba(16,185,129,0.5)] active:scale-95 transition-all duration-200 cursor-pointer border-t border-emerald-300/40 overflow-hidden"
          >
            {/* Efeito Shimmer */}
            <span className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl pointer-events-none">
              <span className="absolute -left-[100%] top-0 h-full w-[120%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] animate-shimmer" />
            </span>

            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 fill-current" />
            </span>

            <span>ACESSE O GRUPO AGORA</span>

            <ArrowRight className="w-5 h-5" />
          </a>

          <span className="text-xs text-emerald-400 font-semibold mt-2.5 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            Entrada 100% Gratuita • Redirecionamento Direto
          </span>
        </div>

        {/* 6. Benefícios em 3 Pontos Rápidos (Sem Objeções) */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-zinc-800/80 text-center text-[11px] text-zinc-300">
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-4 h-4 text-emerald-400 mb-1" />
            <span className="font-semibold text-white">Links Seguros</span>
            <span className="text-zinc-500 text-[10px]">Lojas Oficiais</span>
          </div>

          <div className="flex flex-col items-center">
            <BellOff className="w-4 h-4 text-amber-400 mb-1" />
            <span className="font-semibold text-white">Zero Spam</span>
            <span className="text-zinc-500 text-[10px]">Grupo Silencioso</span>
          </div>

          <div className="flex flex-col items-center">
            <Users className="w-4 h-4 text-emerald-400 mb-1" />
            <span className="font-semibold text-white">+12.800 Membros</span>
            <span className="text-zinc-500 text-[10px]">Economizando</span>
          </div>
        </div>

        {/* 7. Rodapé Minimalista Legal */}
        <div className="mt-4 text-center text-[10px] text-zinc-500">
          <p>© {new Date().getFullYear()} Achadinhos VIP. Canal independente de curadoria de ofertas Shopee & Mercado Livre.</p>
        </div>

      </div>
    </div>
  );
}
