"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/config";
import { useUtmContext } from "./UtmTracker";
import { isPixelConfigured, getMetaPixelId } from "@/lib/pixel";
import { Crown, Shield, Activity, ChevronRight, CheckCircle2, AlertTriangle } from "lucide-react";

export default function Footer() {
  const { utms, hasUtms } = useUtmContext();
  const [showDiagnostics, setShowDiagnostics] = useState(false);
  const pixelId = getMetaPixelId();
  const pixelActive = isPixelConfigured();

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-900 text-zinc-400 text-xs sm:text-sm py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo e Descrição */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center text-zinc-950 font-black">
                <Crown className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                IMPÉRIO <span className="text-emerald-400">DIGITAL</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-md leading-relaxed">
              Comunidade fechada focada em estratégias de crescimento, tráfego, vendas, networking qualificado e oportunidades reais para quem joga no alto nível do mercado digital.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400/80">
              <Shield className="w-3.5 h-3.5" />
              <span>Ambiente exclusivo, seguro e moderado.</span>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-emerald-400 transition-colors">
                  Benefícios do Grupo
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-emerald-400 transition-colors">
                  Depoimentos de Membros
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Perguntas Frequentes (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Rastreamento e Diagnóstico */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Status do Rastreamento
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${pixelActive ? "bg-emerald-400" : "bg-amber-400"}`} />
                <span className="text-zinc-300">
                  Meta Pixel: {pixelActive ? `Ativo (${pixelId.slice(0, 4)}***)` : "Configurar .env"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${hasUtms ? "bg-emerald-400" : "bg-zinc-500"}`} />
                <span className="text-zinc-300">
                  UTMs: {hasUtms ? `${Object.keys(utms).length} capturados` : "Aguardando tráfego"}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setShowDiagnostics(!showDiagnostics)}
                className="mt-2 text-[11px] text-emerald-400 hover:text-emerald-300 underline flex items-center gap-1 cursor-pointer"
              >
                <Activity className="w-3 h-3" />
                {showDiagnostics ? "Ocultar painel de rastreamento" : "Ver detalhes técnicos UTM & Pixel"}
              </button>
            </div>
          </div>
        </div>

        {/* Painel de Diagnóstico Expansível para Validação */}
        {showDiagnostics && (
          <div className="mb-10 p-5 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs animate-in fade-in duration-200">
            <h5 className="font-bold text-white mb-3 flex items-center gap-2 text-sm">
              <Activity className="w-4 h-4 text-emerald-400" />
              Painel de Validação em Tempo Real (Meta Pixel & UTMs)
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1.5">
                <span className="text-zinc-400 font-bold block">Meta Pixel Configurado:</span>
                {pixelActive ? (
                  <p className="text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    ID Ativo: <code className="bg-zinc-900 px-1 py-0.5 rounded text-white">{pixelId}</code>
                  </p>
                ) : (
                  <p className="text-amber-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    ID não informado em NEXT_PUBLIC_META_PIXEL_ID (Modo Simulação)
                  </p>
                )}
                <span className="text-[11px] text-zinc-500 block">
                  Eventos monitorados: <code>PageView</code> (ao abrir a página) e <code>Lead</code> (ao clicar em qualquer botão do grupo).
                </span>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1.5">
                <span className="text-zinc-400 font-bold block">Parâmetros UTM Capturados:</span>
                {hasUtms ? (
                  <pre className="text-emerald-300 bg-zinc-900 p-2 rounded text-[11px] overflow-x-auto">
                    {JSON.stringify(utms, null, 2)}
                  </pre>
                ) : (
                  <p className="text-zinc-400 text-xs">
                    Nenhum parâmetro UTM presente na URL atual. Experimente testar acessando com:
                    <br />
                    <code className="text-emerald-400 text-[10px] break-all">
                      ?utm_source=meta&utm_medium=cpc&utm_campaign=vip&utm_content=anuncio1
                    </code>
                  </p>
                )}
              </div>
            </div>
            <p className="text-[11px] text-zinc-500 mt-3">
              🔗 Link de destino do Grupo: <code className="text-zinc-300">{siteConfig.groupInviteUrl}</code>
            </p>
          </div>
        )}

        {/* Linha Divisória */}
        <div className="pt-8 border-t border-zinc-900/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Império Digital. Todos os direitos reservados.
          </p>

          <p className="text-center md:text-right max-w-xl text-[11px] text-zinc-400 leading-normal">
            Aviso Legal: Este site não é afiliado, associado ou patrocinado pelo WhatsApp LLC, Facebook ou Meta Platforms, Inc. WhatsApp é uma marca registrada de WhatsApp LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
