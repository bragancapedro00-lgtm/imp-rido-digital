"use client";

import React from "react";
import GroupCtaButton from "./GroupCtaButton";
import { Crown, Users } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/80 transition-all">
      {/* Barra superior de urgência */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900/60 to-zinc-950 border-b border-emerald-500/20 py-1.5 px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>
            <strong>ATENÇÃO:</strong> Vagas gratuitas liberadas para a nova turma de networking. Restam{" "}
            <span className="text-white font-bold bg-emerald-700/60 px-1.5 py-0.5 rounded text-xs">
              {siteConfig.spotsRemaining} vagas
            </span>
          </span>
        </div>
      </div>

      {/* Conteúdo da Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo / Marca */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]">
            <Crown className="w-5 h-5 text-zinc-950" />
          </div>
          <div>
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
              IMPÉRIO <span className="text-emerald-400">DIGITAL</span>
            </span>
            <span className="hidden sm:block text-[10px] tracking-widest text-zinc-400 uppercase font-semibold">
              Comunidade VIP & Estratégia
            </span>
          </div>
        </div>

        {/* Informações rápidas e CTA da Navbar */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden md:flex items-center gap-2 text-xs text-zinc-400">
            <Users className="w-4 h-4 text-emerald-400" />
            <span>{siteConfig.membersCount} membros</span>
          </div>

          <GroupCtaButton
            label="ENTRAR NO GRUPO"
            location="navbar"
            size="sm"
            showSubLabel={false}
          />
        </div>
      </div>
    </header>
  );
}
