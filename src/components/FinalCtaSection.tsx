"use client";

import React from "react";
import GroupCtaButton from "./GroupCtaButton";
import { siteConfig } from "@/lib/config";
import { Sparkles, ShieldCheck, Clock, Users } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-zinc-950 via-emerald-950/20 to-zinc-950 border-t border-zinc-800/80">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="relative rounded-3xl bg-zinc-900/80 border border-emerald-500/40 p-8 sm:p-14 backdrop-blur-xl shadow-[0_0_50px_rgba(16,185,129,0.15)] overflow-hidden">
          {/* Tag de Urgência */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-bold mb-6">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>ÚLTIMAS VAGAS DISPONÍVEIS NESTE LOTE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            Pronto para se conectar com quem{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-500 bg-clip-text text-transparent">
              joga o jogo no alto nível?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Não fique de fora das discussões e dos materiais que estão transformando os resultados dos membros. Clique abaixo e entre agora no grupo oficial.
          </p>

          <div className="flex flex-col items-center justify-center gap-4">
            <GroupCtaButton
              label="ENTRAR NO GRUPO VIP AGORA"
              subLabel="Acesso 100% Gratuito • Redirecionamento Direto"
              location="final_section"
              size="lg"
              variant="primary"
              showSubLabel={true}
            />

            <div className="flex items-center gap-6 mt-4 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-emerald-400" />
                {siteConfig.membersCount} empreendedores
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Acesso seguro e verificado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
