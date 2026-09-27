"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "O acesso ao grupo é realmente 100% gratuito?",
    answer:
      "Sim, 100% gratuito! Não solicitamos nenhum dado de cartão de crédito nem cobrança futura para fazer parte desta turma. O objetivo do grupo é reunir pessoas qualificadas para fortalecer o ecossistema e gerar oportunidades conjuntas.",
  },
  {
    question: "O que acontece logo após eu clicar em 'ENTRAR NO GRUPO'?",
    answer:
      "Ao clicar no botão, você será redirecionado diretamente para o aplicativo do WhatsApp oficial da comunidade Império Digital. Basta confirmar a entrada para ter acesso imediato à sala de discussões e aos arquivos fixados.",
  },
  {
    question: "O grupo é no WhatsApp ou em outra ferramenta?",
    answer:
      "Atualmente mantemos a sala principal no WhatsApp devido à agilidade na leitura e envio de alertas em tempo real. Além disso, disponibilizamos links na descrição do grupo com pastas no Google Drive e Notion com todos os materiais bônus.",
  },
  {
    question: "E se o grupo ficar com muito spam ou notificações fora de hora?",
    answer:
      "Possuímos moderação ativa 24/7 com regras rigorosas. Mensagens de autopromoção sem autorização, links suspeitos ou correntes são deletados de imediato e o usuário é banido. O foco é 100% em negócios, estratégias e valor.",
  },
  {
    question: "Por que as vagas são limitadas se o grupo é online?",
    answer:
      "Grupos de WhatsApp possuem um limite técnico máximo de participantes por sala. Para manter a moderação impecável e o networking com alto valor percebido, limitamos a quantidade de novos acessos por lote.",
  },
  {
    question: "Sou iniciante no mercado digital, esse grupo é para mim?",
    answer:
      "Sim! Embora as discussões envolvam estratégias avançadas, o ambiente é acolhedor e didático. Ver na prática o que os membros experientes estão aplicando é o caminho mais rápido para acelerar seu próprio aprendizado sem cometer erros caros.",
  },
  {
    question: "Posso sair a qualquer momento se eu não quiser mais participar?",
    answer:
      "Com certeza! Você tem total liberdade. Se a qualquer momento sentir que o grupo não faz mais sentido para a sua fase atual, basta sair com um único clique nas configurações do grupo.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-zinc-950/80 border-t border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header do FAQ */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Tira-Dúvidas
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Tire suas principais dúvidas sobre o funcionamento do grupo e garanta seu acesso com tranquilidade.
          </p>
        </div>

        {/* Lista de Acordeões */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 overflow-hidden transition-all duration-200 hover:border-emerald-500/30"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-zinc-800/80 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-emerald-500/20 text-emerald-400" : "text-zinc-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-zinc-300 text-sm sm:text-base leading-relaxed border-t border-zinc-800/50 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
