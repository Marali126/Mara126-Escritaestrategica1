import React from 'react';
import { MARA_DAHER_LOGO_SVG } from '../data/defaultLogo';
import { X, BookOpen, CheckCircle, Brain, HeartHandshake, Target, ShieldCheck } from 'lucide-react';

interface MediatorGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MediatorGuideModal: React.FC<MediatorGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-3 md:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-auto flex flex-col max-h-[90vh] animate-in fade-in zoom-in">
        
        {/* Header */}
        <div className="bg-[#0F85A5] p-5 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white font-bold text-lg">
              📘
            </div>
            <div>
              <h2 className="text-xl font-black">
                Guia do Mediador (Fonoaudiologia & Linguagem)
              </h2>
              <p className="text-xs text-teal-100 font-medium">
                Metodologia SRSD (Graham & Karen Harris) • Intervenção em Linguagem e Escrita (9-14 anos)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-2xl bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800 text-sm">
          
          {/* Intro Box */}
          <div className="p-4 bg-teal-50 rounded-2xl border border-teal-200 text-xs text-teal-900 leading-relaxed">
            <strong>O que é o Método SRSD (Self-Regulated Strategy Development)?</strong><br />
            Desenvolvido por Steve Graham e Karen Harris, o SRSD é a abordagem clínica e terapêutica com maior evidência científica no mundo para o desenvolvimento de escrita reflexiva e estruturada em crianças e adolescentes com ou sem dificuldades de aprendizagem (como TDAH, Dislexia ou Transtorno do Desenvolvimento da Linguagem - TDL).
          </div>

          {/* 6 Stages of SRSD */}
          <div>
            <h3 className="font-extrabold text-base text-slate-900 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-[#E86F37]" />
              <span>As 6 Etapas de Implementação Clínica / Escolar:</span>
            </h3>

            <div className="space-y-3">
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="font-black text-[#0F85A5] text-xs uppercase block mb-0.5">
                  1. Desenvolver Conhecimento Prévio (Preskills)
                </span>
                <p className="text-xs text-slate-600">
                  Avaliar o vocabulário, noções de opinião vs fato e compreensão dos elementos de uma história ou argumento.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="font-black text-[#0F85A5] text-xs uppercase block mb-0.5">
                  2. Discutir a Estratégia (Discuss It)
                </span>
                <p className="text-xs text-slate-600">
                  Apresentar os mnemônicos P.O.E. + T.R.E.E., P.O.E. + Roteiro ou M.O.P.A. para Convenções. Discutir como o planejamento reduz a ansiedade da "página em branco".
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="font-black text-[#0F85A5] text-xs uppercase block mb-0.5">
                  3. Modelar a Estratégia (Model It)
                </span>
                <p className="text-xs text-slate-600">
                  O mediador (fonoaudiólogo/professor) escreve um texto em voz alta demonstrando a fala interna positiva ("Nossa, empaquei na razão 2... O que posso olhar no meu mapa? Ah, o banco de conectivos!").
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="font-black text-[#0F85A5] text-xs uppercase block mb-0.5">
                  4. Memorizar a Estratégia (Memorize It)
                </span>
                <p className="text-xs text-slate-600">
                  A criança memoriza os significados das letras do P.O.E. (Pense, Organize, Escreva), T.R.E.E. e M.O.P.A. até conseguir explicar com suas próprias palavras.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="font-black text-[#0F85A5] text-xs uppercase block mb-0.5">
                  5. Apoiar a Estratégia (Support It / Guided Practice)
                </span>
                <p className="text-xs text-slate-600">
                  Prática acompanhada com andaimes visuais (cards, banco de palavras, suporte para imagens). O apoio é reduzido gradualmente.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="font-black text-[#0F85A5] text-xs uppercase block mb-0.5">
                  6. Desempenho Independente (Independent Performance)
                </span>
                <p className="text-xs text-slate-600">
                  O aluno aplica a estratégia de forma autônoma, criando seus próprios mapas e autorregulando o tempo e a atenção.
                </p>
              </div>
            </div>
          </div>

          {/* Graham & Harris SRSD Conventions & Mechanics Strategies */}
          <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200 space-y-3">
            <h4 className="font-black text-[#932966] uppercase text-xs flex items-center gap-2">
              <span>✍️ Estratégias SRSD de Steve Graham & Karen Harris para Convenções de Escrita, Edição e Revisão:</span>
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              Graham e Harris desenvolveram mnemônicos autorregulados específicos para mecânica, ortografia, pontuação e revisão de texto. A aplicação dispõe dessas estratégias integradas no checklist:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
              <div className="p-3 bg-white rounded-xl border border-purple-100 shadow-2xs">
                <strong className="text-[#0F85A5] font-black block mb-1">🔍 M.O.P.A. (Convenções & Ortografia)</strong>
                <ul className="text-slate-600 text-[11px] space-y-0.5">
                  <li><strong>M</strong>aiúsculas (Início de frases, títulos e nomes)</li>
                  <li><strong>O</strong>rtografia (Grafia correta das palavras)</li>
                  <li><strong>P</strong>ontuação (Pontuação de frases e vírgulas)</li>
                  <li><strong>A</strong>centuação & Aparência (Acentos, margens e legibilidade)</li>
                </ul>
              </div>

              <div className="p-3 bg-white rounded-xl border border-purple-100 shadow-2xs">
                <strong className="text-[#932966] font-black block mb-1">✨ S.C.A.N. (Revisão & Clareza de Frases)</strong>
                <ul className="text-slate-600 text-[11px] space-y-0.5">
                  <li><strong>S</strong>ize (Tamanho e ritmo das frases)</li>
                  <li><strong>C</strong>larity (Clareza da ideia para o leitor)</li>
                  <li><strong>A</strong>dd (Adicionar conectivos e detalhes ricos)</li>
                  <li><strong>N</strong>ote (Notar e corrigir repetições e erros)</li>
                </ul>
              </div>

              <div className="p-3 bg-white rounded-xl border border-purple-100 shadow-2xs">
                <strong className="text-[#E86F37] font-black block mb-1">📑 P.A.R.A.F.O. (Estrutura de Parágrafos - P.L.E.A.S.E.)</strong>
                <ul className="text-slate-600 text-[11px] space-y-0.5">
                  <li><strong>P</strong>ense no Foco (Tema único do parágrafo)</li>
                  <li><strong>A</strong>note os Detalhes (Fatos, motivos e exemplos)</li>
                  <li><strong>R</strong>eordene com Lógica (Início, meio e fim)</li>
                  <li><strong>A</strong>tive o Tópico Frasal (Abre com frase marcante)</li>
                  <li><strong>F</strong>ortaleça com Conectivos (Frases de apoio)</li>
                  <li><strong>O</strong>rganize o Encerramento (Conclusão do parágrafo)</li>
                </ul>
              </div>

              <div className="p-3 bg-white rounded-xl border border-purple-100 shadow-2xs">
                <strong className="text-emerald-700 font-black block mb-1">🌳 P.O.W. + T.R.E.E. / W.W.W. (Gêneros)</strong>
                <ul className="text-slate-600 text-[11px] space-y-0.5">
                  <li><strong>P.O.E.</strong> (Pense, Organize, Escreva)</li>
                  <li><strong>T.R.E.E.</strong> (Tópico, Razões, Explicações, Encerramento)</li>
                  <li><strong>W.W.W.</strong> (Quem, Onde, Quando, O que Quer, O que Acontece)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Clinical Tips */}
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-950 space-y-2">
            <h4 className="font-black text-[#E86F37] uppercase text-xs">
              💡 Dicas Clínicas de Fonoaudiologia, Linguagem e Aprendizagem (9-14 anos):
            </h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Valorize o processo de planejamento mais do que a ortografia perfeita na primeira versão.</li>
              <li>Incentive o uso do Banco de Palavras de 1 Milhão para expandir a complexidade sintática e a coesão textual.</li>
              <li>Utilize as Faíscas de Histórias para crianças com resistência à escrita ou bloqueio criativo.</li>
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-100 p-4 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#0F85A5] hover:bg-[#0B6C87] text-white rounded-xl text-xs font-bold"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};
