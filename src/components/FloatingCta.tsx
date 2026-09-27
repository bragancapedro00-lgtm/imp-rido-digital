"use client";

import React, { useEffect, useState } from "react";
import GroupCtaButton from "./GroupCtaButton";
import { siteConfig } from "@/lib/config";
import { Users } from "lucide-react";

export default function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe quando o usuário rolar mais de 450px
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4 bg-zinc-950/95 backdrop-blur-lg border-t border-emerald-500/30 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom duration-300">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
        <div className="hidden sm:flex flex-col">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            Vagas Abertas • 100% Gratuito
          </span>
          <span className="text-sm font-extrabold text-white flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-emerald-400" />
            Junte-se a {siteConfig.membersCount} empreendedores
          </span>
        </div>

        <div className="w-full sm:w-auto">
          <GroupCtaButton
            label="ENTRAR NO GRUPO"
            subLabel="Acesso Imediato no WhatsApp"
            location="floating_bar"
            size="md"
            variant="primary"
            className="w-full sm:w-auto"
            showSubLabel={false}
          />
        </div>
      </div>
    </div>
  );
}
