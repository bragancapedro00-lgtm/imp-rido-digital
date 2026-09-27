"use client";

import React from "react";
import GroupCtaButton from "./GroupCtaButton";
import { 
  Sparkles, 
  Star, 
  CheckCircle2, 
  TrendingUp, 
  Bell, 
  ShieldCheck, 
  Lock,
  Zap,
  MessageSquare
} from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24">
      {/* Background Glows & Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[750px] h-[350px] bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-[-10%] w-[350px] h-[350px] bg-green-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      
      {/* Grid Pattern sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge Exclusiva com Urgência */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-6 shadow-[0_0_20px_rgba(16,185,129,0.15)] animate-pulse">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>ACESSO VIP EXCLUSIVO • 100% GRATUITO HOJE</span>
        </div>

        {/* Headline Persuasiva de Alto Impacto */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
          O Grupo Onde Estratégias Reais e{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-500 bg-clip-text text-transparent underline decoration-emerald-500/30 decoration-wavy">
            Oportunidades Diárias
          </span>{" "}
          Acontecem Antes de Chegar ao Mercado.
        </h1>

        {/* Subheadline Persuasiva */}
        <p className="text-base sm:text-xl text-zinc-300 font-normal max-w-3xl mx-auto leading-relaxed mb-8">
          Junte-se a mais de <strong className="text-white font-bold">{siteConfig.membersCount} empreendedores e profissionais</strong> que 
          recebem alertas em primeira mão, networking de alto nível, análises práticas e estratégias validadas toda semana — diretamente no seu celular.
        </p>

        {/* Chamada para Ação (CTA Principal) */}
        <div className="flex flex-col items-center justify-center gap-4 mb-10">
          <GroupCtaButton
            label="ENTRAR NO GRUPO VIP AGORA"
            subLabel="Acesso Imediato • 100% Gratuito • Vagas Limitadas"
            location="hero_main"
            size="lg"
            variant="primary"
            showSubLabel={true}
          />

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Acesso sem custo
            </span>
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-emerald-400" /> Ambiente moderado e seguro
            </span>
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-emerald-400" /> Conteúdo direto ao ponto
            </span>
          </div>
        </div>

        {/* Prova Social Rápida no Hero (Avatares + Avaliações) */}
        <div className="pt-2 pb-6 border-y border-zinc-800/60 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center -space-x-2.5">
            <div className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center text-xs font-bold text-white shadow-md">
              RM
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-xs font-bold text-white shadow-md">
              AL
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-gradient-to-tr from-amber-600 to-orange-400 flex items-center justify-center text-xs font-bold text-white shadow-md">
              TF
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-xs font-bold text-white shadow-md">
              CM
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-emerald-400 shadow-md">
              +4.8k
            </div>
          </div>

          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1 mb-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
              <span className="text-white font-bold text-sm ml-1">4.9 / 5.0</span>
            </div>
            <p className="text-xs text-zinc-400">
              Avaliado como o grupo mais valioso por <span className="text-zinc-200 font-semibold">+1.240 membros</span>
            </p>
          </div>
        </div>

        {/* Mockup Interativo e Visual do Grupo ao Vivo */}
        <div className="mt-12 relative max-w-3xl mx-auto text-left">
          {/* Brilho de fundo no card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-green-500/30 to-emerald-600/20 rounded-3xl blur-xl opacity-70" />

          <div className="relative rounded-2xl bg-zinc-900/90 border border-emerald-500/30 backdrop-blur-xl p-4 sm:p-6 shadow-2xl overflow-hidden">
            {/* Header da simulação do Grupo */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-500 to-green-700 flex items-center justify-center text-white font-black text-sm shadow-[0_0_12px_rgba(16,185,129,0.5)]">
                  👑
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-white text-sm sm:text-base">
                      Império Digital • Mastermind & Estratégias
                    </h3>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      OFICIAL
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                    {siteConfig.membersCount} participantes • 382 online agora
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 bg-zinc-800/80 px-3 py-1.5 rounded-lg border border-zinc-700/50 text-xs text-zinc-300">
                <Bell className="w-3.5 h-3.5 text-emerald-400" />
                <span>Notificações Ativas</span>
              </div>
            </div>

            {/* Mensagens simuladas do grupo mostrando valor absurdo */}
            <div className="space-y-3 text-xs sm:text-sm">
              {/* Mensagem 1 - Adm */}
              <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-xl p-3 sm:p-3.5">
                <div className="flex items-center justify-between text-xs text-emerald-400 font-semibold mb-1">
                  <span className="flex items-center gap-1">
                    👑 Adm • Império Digital
                  </span>
                  <span className="text-zinc-500 text-[10px]">Hoje, 09:14</span>
                </div>
                <p className="text-zinc-200">
                  🔥 <strong>[DOCUMENTO LIBERADO]</strong>: Subimos agora na pasta do grupo o mapa mental completo da nova esteira de funil que gerou R$ 68.000 no último mês sem equipe complexa. Disponível para download gratuito na descrição!
                </p>
              </div>

              {/* Mensagem 2 - Membro case */}
              <div className="bg-zinc-800/60 border border-zinc-700/40 rounded-xl p-3 sm:p-3.5">
                <div className="flex items-center justify-between text-xs text-zinc-300 font-semibold mb-1">
                  <span className="text-blue-400">Lucas M. • Gestor de Tráfego</span>
                  <span className="text-zinc-500 text-[10px]">Hoje, 10:28</span>
                </div>
                <p className="text-zinc-300">
                  Galera, apliquei o ajuste de criativo que foi compartilhado aqui na terça. O CPA caiu de R$ 42 para R$ 14,80! Esse grupo entrega mais conteúdo prático que cursos de 2 mil reais. Muito obrigado! 🚀📈
                </p>
              </div>

              {/* Mensagem 3 - Membro networking */}
              <div className="bg-zinc-800/60 border border-zinc-700/40 rounded-xl p-3 sm:p-3.5">
                <div className="flex items-center justify-between text-xs text-zinc-300 font-semibold mb-1">
                  <span className="text-amber-400">Camila Fontes • E-commerce & Infoprodutos</span>
                  <span className="text-zinc-500 text-[10px]">Hoje, 11:45</span>
                </div>
                <p className="text-zinc-300">
                  Fechei uma parceria excelente ontem com outro membro daqui. O nível dos profissionais desse grupo é surreal. Vale ouro estar aqui dentro!
                </p>
              </div>
            </div>

            {/* Rodapé da simulação */}
            <div className="mt-4 pt-3 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                Novos insights e oportunidades compartilhados diariamente
              </span>

              <a
                href="#beneficios"
                className="text-emerald-400 hover:text-emerald-300 font-medium underline flex items-center gap-1"
              >
                Ver tudo o que você recebe gratuitamente →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
