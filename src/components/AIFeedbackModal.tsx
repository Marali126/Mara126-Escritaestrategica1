import React, { useState } from 'react';
import { WritingDraft } from '../types';
import { TRANSITION_WORDS } from '../data/srsdTemplates';
import { Sparkles, CheckCircle2, AlertCircle, X, Lightbulb, Heart } from 'lucide-react';

interface AIFeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  draft: WritingDraft;
}

export const AIFeedbackModal: React.FC<AIFeedbackModalProps> = ({
  isOpen,
  onClose,
  draft
}) => {
  if (!isOpen) return null;

  const content = draft.content.trim();
  const wordCount = content ? content.split(/\s+/).length : 0;

  // Analysis checks
  const hasTitle = draft.title.trim().length > 0;
  const foundTransitions = TRANSITION_WORDS.filter(w => content.toLowerCase().includes(w.word.toLowerCase()));
  const checkedStrategyCount = draft.strategyItems.filter(i => i.checked).length;
  const totalStrategyCount = draft.strategyItems.length;

  // Generate constructive feedback points
  const feedbackPoints: { type: 'success' | 'tip'; text: string }[] = [];

  if (hasTitle) {
    feedbackPoints.push({ type: 'success', text: 'Você definiu um título claro para sua criação!' });
  } else {
    feedbackPoints.push({ type: 'tip', text: 'Que tal adicionar um título atraente para despertar a curiosidade do leitor?' });
  }

  if (checkedStrategyCount >= 3) {
    feedbackPoints.push({ type: 'success', text: `Excelente uso do plano SRSD! Você concluiu ${checkedStrategyCount} de ${totalStrategyCount} etapas do planejamento.` });
  } else {
    feedbackPoints.push({ type: 'tip', text: 'Lembre-se da regra P.O.E.: Preencher suas notas de planejamento antes de escrever garante que nenhuma ideia importante fique de fora.' });
  }

  if (foundTransitions.length >= 2) {
    feedbackPoints.push({ type: 'success', text: `Incrível! Detectamos ${foundTransitions.length} conectivos de 1 milhão de dólares (${foundTransitions.map(t => t.word).join(', ')}). Isso dá fluidez ao seu texto!` });
  } else {
    feedbackPoints.push({ type: 'tip', text: 'Experimente incluir palavras como "Além disso", "Por outro lado" ou "Consequentemente" do nosso banco de palavras.' });
  }

  if (wordCount > 40) {
    feedbackPoints.push({ type: 'success', text: `Seu rascunho já tem ${wordCount} palavras. Você está desenvolvendo bem as explicações!` });
  } else {
    feedbackPoints.push({ type: 'tip', text: 'Para deixar suas razões mais fortes, adicione exemplos do dia a dia ou detalhes dos sentidos.' });
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-3 md:p-6">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden my-auto flex flex-col animate-in fade-in zoom-in">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0F85A5] to-[#932966] p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/20 rounded-2xl text-xl">
              ✨
            </div>
            <div>
              <h2 className="text-lg font-black">
                Análise do Mediador SRSD
              </h2>
              <p className="text-xs text-teal-100 font-medium">
                Feedback Encorajador e Orientado a Estratégias
              </p>
            </div>
          </div>

          <button onClick={onClose} className="p-1 rounded-xl bg-white/10 hover:bg-white/20 text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          <div className="p-3 bg-teal-50 rounded-2xl border border-teal-200 text-xs text-teal-900 leading-relaxed font-medium">
            👋 Olá! Analisei seu rascunho com base nas diretrizes do método Graham & Harris. Aqui estão seus pontos fortes e sugestões para brilhar ainda mais:
          </div>

          <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
            {feedbackPoints.map((item, idx) => (
              <div 
                key={idx}
                className={`p-3 rounded-2xl border text-xs flex items-start gap-2.5 ${
                  item.type === 'success'
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-amber-50 border-amber-200 text-amber-900'
                }`}
              >
                {item.type === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <Lightbulb className="w-4 h-4 text-[#E86F37] shrink-0 mt-0.5" />
                )}
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Self-Talk Encouragement */}
          <div className="p-3 bg-pink-50 rounded-2xl border border-pink-200 text-xs text-pink-900 flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#932966] shrink-0" />
            <span className="italic">"Pequenos ajustes fazem grandes escritores. Continue aplicando seu plano!"</span>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#0F85A5] hover:bg-[#0B6C87] text-white rounded-xl text-xs font-bold"
          >
            Continuar Escrevendo
          </button>
        </div>

      </div>
    </div>
  );
};
