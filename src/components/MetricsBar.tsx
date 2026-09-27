"use client";

import React from "react";
import { Users, TrendingUp, Award, Zap } from "lucide-react";
import { siteConfig } from "@/lib/config";

const metrics = [
  {
    icon: Users,
    value: siteConfig.membersCount,
    label: "Membros Conectados",
    description: "Empreendedores e especialistas trocando todo dia",
  },
  {
    icon: TrendingUp,
    value: "+R$ 38 Milhões",
    label: "Faturamento Movimentado",
    description: "Volume somado gerado pelos membros da rede",
  },
  {
    icon: Award,
    value: siteConfig.satisfactionRate,
    label: "Índice de Satisfação",
    description: "Consideram o grupo essencial para seus resultados",
  },
  {
    icon: Zap,
    value: "100% Gratuito",
    label: "Acesso por Tempo Limitado",
    description: "Sem pegadinhas, sem taxas escondidas",
  },
];

export default function MetricsBar() {
  return (
    <section className="relative z-10 border-y border-zinc-800/80 bg-zinc-950/60 backdrop-blur-md py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/50 hover:border-emerald-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {item.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-emerald-400 mt-1">
                  {item.label}
                </span>
                <p className="text-[11px] sm:text-xs text-zinc-400 mt-1">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
