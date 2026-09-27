"use client";

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

export default function TargetAudienceSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-zinc-950/70 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-3">
            Qualificação de Membros
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Para quem é o Grupo VIP Império Digital?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3">
            Prezamos pela qualidade das discussões. Veja se o seu perfil se encaixa na nossa comunidade:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card: Para Quem É */}
          <div className="rounded-3xl bg-emerald-950/20 border-2 border-emerald-500/40 p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Este grupo é PARA você que:
              </h3>
            </div>

            <ul className="space-y-4 text-sm sm:text-base text-zinc-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Trabalha com o mercado digital</strong> (tráfego pago, infoprodutos, e-commerce, afiliados profissionais ou serviços).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Quer destravar ou acelerar resultados</strong> através de estratégias validadas e testadas na prática.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Valoriza networking genuíno</strong> e compreende que parcerias certas cortam anos de tentativas e erros.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Busca se manter atualizado</strong> com Inteligência Artificial, mudanças de algoritmo e novas ferramentas.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Está disposto a somar</strong>, interagir de forma respeitosa e absorver conhecimento de alto nível.
                </span>
              </li>
            </ul>
          </div>

          {/* Card: Para Quem NÃO É */}
          <div className="rounded-3xl bg-red-950/15 border-2 border-red-500/30 p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Este grupo NÃO é para quem:
              </h3>
            </div>

            <ul className="space-y-4 text-sm sm:text-base text-zinc-400">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>
                  Busca fórmulas mágicas de &quot;ganhar dinheiro fácil dormindo&quot; sem trabalhar e aplicar.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>
                  Tem a intenção de entrar para enviar spam, esquemas duvidosos ou autopromoção desautorizada no privado.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>
                  É apenas um curioso sem nenhuma intenção de colocar o conhecimento em prática.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>
                  Não respeita os outros membros e a moderação do ambiente.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>
                  Acredita que já sabe tudo e não tem abertura para novas estratégias e aprendizados.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
