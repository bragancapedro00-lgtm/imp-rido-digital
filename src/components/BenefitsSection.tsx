"use client";

import React from "react";
import GroupCtaButton from "./GroupCtaButton";
import { 
  Compass, 
  Flame, 
  Layers, 
  ShieldAlert, 
  Users2, 
  Cpu, 
  Check, 
  ArrowUpRight 
} from "lucide-react";

const benefits = [
  {
    icon: Flame,
    title: "Estratégias Reais & Bastidores Sem Filtro",
    description:
      "Aprenda com quem está no campo de batalha executando tráfego, vendas, automações e lançamentos todos os dias. Sem enrolação teórica, apenas o que gera lucro.",
    tag: "Prática Real",
    gradient: "from-orange-500/20 to-amber-500/10",
    border: "group-hover:border-orange-500/40",
    iconColor: "text-orange-400",
  },
  {
    icon: Users2,
    title: "Networking com Quem Fatura Alto",
    description:
      "Conecte-se com empresários, gestores de tráfego, estrategistas e criadores. As melhores parcerias e sociedades nascem em salas e grupos com pessoas alinhadas.",
    tag: "Conexões Fortes",
    gradient: "from-emerald-500/20 to-green-500/10",
    border: "group-hover:border-emerald-500/40",
    iconColor: "text-emerald-400",
  },
  {
    icon: Cpu,
    title: "Automações & Inteligência Artificial Aplicada",
    description:
      "Descubra como os maiores players estão usando IA para produzir 10x mais rápido, cortar custos operacionais e escalar atendimentos sem aumentar a equipe.",
    tag: "Tecnologia & IA",
    gradient: "from-blue-500/20 to-cyan-500/10",
    border: "group-hover:border-blue-500/40",
    iconColor: "text-blue-400",
  },
  {
    icon: Layers,
    title: "Materiais, Planilhas & Prompts Gratuitos",
    description:
      "Acesso imediato à pasta de arquivos compartilhados: planilhas de métricas, modelos de copy, checklists de campanha e prompts prontos para copiar e colar.",
    tag: "Recursos Prontos",
    gradient: "from-purple-500/20 to-pink-500/10",
    border: "group-hover:border-purple-500/40",
    iconColor: "text-purple-400",
  },
  {
    icon: Compass,
    title: "Alertas de Mudanças de Algoritmo & Tendências",
    description:
      "Quando uma plataforma altera regras (Meta Ads, Google, TikTok, IA), o grupo é o primeiro lugar a debater soluções antes que suas campanhas caiam.",
    tag: "Antecipação",
    gradient: "from-cyan-500/20 to-emerald-500/10",
    border: "group-hover:border-cyan-500/40",
    iconColor: "text-cyan-400",
  },
  {
    icon: ShieldAlert,
    title: "Ambiente Limpo, Filtrado & Zero Spam",
    description:
      "Nossa moderação atua com rigor absoluto. Aqui você não encontra pessoas vendendo cursos invasivos ou links suspeitos. Apenas conteúdo de altíssimo nível.",
    tag: "Foco Total",
    gradient: "from-emerald-500/20 to-teal-500/10",
    border: "group-hover:border-emerald-500/40",
    iconColor: "text-teal-400",
  },
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-4">
            Benefícios Inclusos
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            O Que Você Leva de Imediato ao{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Entrar no Grupo
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Esqueça grupos mortos ou cheios de propaganda. Criamos uma comunidade desenhada especificamente para gerar valor prático para quem leva o digital a sério.
          </p>
        </div>

        {/* Grid de Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`group relative rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:bg-zinc-900/90 ${item.border}`}
              >
                {/* Efeito Glow Interno */}
                <div
                  className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                />

                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center ${item.iconColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-zinc-800/90 text-zinc-300 border border-zinc-700/50">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5 flex items-center justify-between group-hover:text-emerald-300 transition-colors">
                  {item.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bloco de Chamada Intermediária */}
        <div className="relative rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-emerald-500/30 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Tudo isso disponível a um clique de distância no seu celular.
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base mb-8">
              Você não precisa pagar mensalidade nem passar cartão. O acesso à turma de membros continua 100% livre enquanto houver vagas.
            </p>
            <GroupCtaButton
              label="ENTRAR NO GRUPO AGORA"
              subLabel="Acesso Instantâneo • Sem Mensalidade"
              location="benefits_cta"
              size="lg"
              variant="primary"
              showSubLabel={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
