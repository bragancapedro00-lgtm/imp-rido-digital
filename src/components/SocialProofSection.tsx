"use client";

import React from "react";
import { Star, ShieldCheck, Quote, ThumbsUp, Check } from "lucide-react";
import GroupCtaButton from "./GroupCtaButton";

const testimonials = [
  {
    name: "Rodrigo Mendonça",
    role: "Gestor de Tráfego & Coprodutor",
    location: "São Paulo, SP",
    avatar: "RM",
    badge: "Membro há 7 meses",
    rating: 5,
    text: "O que eu aprendi na masterclass fechada que os administradores liberaram aqui no grupo me fez economizar mais de R$ 15 mil em testes errados no Meta Ads. O networking é de altíssimo nível, sem dúvidas um dos melhores investimentos de tempo.",
    highlight: "+R$ 110k faturados em 45 dias",
  },
  {
    name: "Juliana Vasconcelos",
    role: "Especialista em Infoprodutos",
    location: "Belo Horizonte, MG",
    avatar: "JV",
    badge: "Membro há 1 ano",
    rating: 5,
    text: "Eu estava travada com a minha esteira de produtos de ticket baixo. Uma dica de funil de WhatsApp compartilhada no grupo virou a chave do meu negócio. O grupo não tem spam e as pessoas realmente se ajudam.",
    highlight: "Conversão de checkout subiu 34%",
  },
  {
    name: "Felipe Siqueira",
    role: "Proprietário de Agência Digital",
    location: "Curitiba, PR",
    avatar: "FS",
    badge: "Membro há 5 meses",
    rating: 5,
    text: "Fechei três contratos corporativos com outros membros que precisavam de serviços da minha agência. Só isso já pagaria qualquer mensalidade cara, mas o grupo é gratuito. Parabéns pela iniciativa!",
    highlight: "3 novos clientes de alto ticket",
  },
  {
    name: "Beatriz Nogueira",
    role: "Copywriter & Estrategista",
    location: "Florianópolis, SC",
    avatar: "BN",
    badge: "Membro há 9 meses",
    rating: 5,
    text: "Os prompts e frameworks de IA que o pessoal solta nos arquivos do grupo são absurdos. O tempo de entrega dos meus projetos caiu pela metade e a qualidade das copies ficou impecável.",
    highlight: "Produtividade multiplicada por 3x",
  },
];

export default function SocialProofSection() {
  return (
    <section id="depoimentos" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-3">
            <ThumbsUp className="w-3.5 h-3.5" />
            Prova Social & Resultados
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            O Que os Membros Dizem Sobre a{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Experiência no Grupo
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Mais de 4.800 pessoas já fazem parte desta comunidade. Veja alguns relatos espontâneos:
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-zinc-900/70 border border-zinc-800 p-6 sm:p-8 backdrop-blur-md hover:border-emerald-500/40 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header do Depoimento */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-green-800 text-white font-bold flex items-center justify-center text-sm shadow-md border border-emerald-500/30">
                      {t.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base flex items-center gap-1.5">
                        {t.name}
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      </h4>
                      <p className="text-xs text-zinc-400">
                        {t.role} • {t.location}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
                    {t.badge}
                  </span>
                </div>

                {/* Estrelas */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Texto do Depoimento */}
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed italic relative mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Destaque de Resultado */}
              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <Check className="w-4 h-4" />
                  {t.highlight}
                </span>
                <Quote className="w-5 h-5 text-zinc-700" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Rápido pós-depoimentos */}
        <div className="text-center">
          <GroupCtaButton
            label="QUERO FAZER PARTE DO GRUPO"
            subLabel="Garanta sua vaga gratuita na comunidade oficial"
            location="testimonials_bottom"
            size="md"
            variant="primary"
            showSubLabel={true}
          />
        </div>
      </div>
    </section>
  );
}
