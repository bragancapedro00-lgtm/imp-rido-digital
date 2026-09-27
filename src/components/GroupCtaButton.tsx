"use client";

import React, { useState } from "react";
import { siteConfig, appendUtmToUrl } from "@/lib/config";
import { trackLead } from "@/lib/pixel";
import { useUtmContext } from "./UtmTracker";
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

interface GroupCtaButtonProps {
  label?: string;
  subLabel?: string;
  location?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "gold";
  className?: string;
  showIcon?: boolean;
  showSubLabel?: boolean;
}

export default function GroupCtaButton({
  label = "ENTRAR NO GRUPO",
  subLabel = "Acesso Imediato • 100% Gratuito",
  location = "hero",
  size = "lg",
  variant = "primary",
  className = "",
  showIcon = true,
  showSubLabel = false,
}: GroupCtaButtonProps) {
  const { utms } = useUtmContext();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 1. Rastreia o evento Lead no Meta Pixel com os parâmetros UTM
    trackLead({
      button_location: location,
      cta_text: label,
      ...utms,
    });

    setIsRedirecting(true);

    // O link padrão segue normalmente pelo href dinâmico,
    // mas se necessário pequeno atraso para garantir o envio:
    setTimeout(() => {
      setIsRedirecting(false);
    }, 1500);
  };

  const finalUrl = appendUtmToUrl(siteConfig.groupInviteUrl, utms as Record<string, string>);

  // Estilos de acordo com tamanho
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm font-semibold",
    md: "px-7 py-3.5 text-base font-bold",
    lg: "px-8 py-4 sm:py-5 text-lg sm:text-xl font-extrabold",
  }[size];

  // Variantes de cores e brilho
  const variantClasses = {
    primary:
      "bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 text-white shadow-[0_0_30px_rgba(16,185,129,0.45)] hover:shadow-[0_0_50px_rgba(16,185,129,0.7)] border-t border-emerald-300/40 hover:from-emerald-400 hover:to-emerald-500",
    secondary:
      "bg-zinc-900 text-white border border-emerald-500/40 hover:border-emerald-400 hover:bg-zinc-800 shadow-[0_0_20px_rgba(16,185,129,0.15)]",
    gold:
      "bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 text-zinc-950 font-black shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.65)] border-t border-amber-200/50 hover:from-amber-300 hover:to-amber-400",
  }[variant];

  return (
    <div className={`inline-flex flex-col items-center group/cta ${className}`}>
      <a
        href={finalUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        id={`cta-${location}`}
        className={`relative w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl transition-all duration-300 transform active:scale-95 group-hover/cta:-translate-y-0.5 cursor-pointer uppercase tracking-wider text-center ${sizeClasses} ${variantClasses}`}
      >
        {/* Efeito de brilho animado que passa pelo botão */}
        <span className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl pointer-events-none">
          <span className="absolute -left-[100%] top-0 h-full w-[120%] bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-25deg] transition-all duration-1000 group-hover/cta:left-[100%] animate-shimmer" />
        </span>

        {showIcon && (
          <span className="relative flex items-center justify-center p-1 rounded-full bg-white/20">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
          </span>
        )}

        <span className="relative flex items-center gap-2 drop-shadow-sm">
          {label}
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/cta:translate-x-1.5" />
        </span>
      </a>

      {showSubLabel && subLabel && (
        <div className="flex items-center gap-1.5 mt-2.5 text-xs sm:text-sm text-zinc-400 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{subLabel}</span>
        </div>
      )}
    </div>
  );
}
