import React, { useState } from 'react';
import { StrategyItem, WritingGenre } from '../types';
import { SELF_TALK_OPTIONS } from '../data/srsdTemplates';
import { CheckSquare, Square, ChevronDown, ChevronUp, MessageSquare, Target, Sparkles, CheckCircle2 } from 'lucide-react';

export type ActiveStrategyKey = 'tree' | 'narrative' | 'cops' | 'scan' | 'please';

interface SRSDStrategyCardProps {
  genre: WritingGenre;
  activeStrategyKey: ActiveStrategyKey;
  onStrategyKeyChange: (key: ActiveStrategyKey) => void;
  strategyItems: StrategyItem[];
  onToggleItem: (id: string) => void;
  onUpdateItemNote: (id: string, note: string) => void;
  selectedSelfTalk: string;
  onSelectSelfTalk: (phrase: string) => void;
}

export const SRSDStrategyCard: React.FC<SRSDStrategyCardProps> = ({
  genre,
  activeStrategyKey,
  onStrategyKeyChange,
  strategyItems,
  onToggleItem,
  onUpdateItemNote,
  selectedSelfTalk,
  onSelectSelfTalk
}) => {
  const [activeTab, setActiveTab] = useState<'checklist' | 'selftalk'>('checklist');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const completedCount = strategyItems.filter(i => i.checked).length;
  const progressPercent = Math.round((completedCount / (strategyItems.length || 1)) * 100);

  const strategyDescriptions: Record<ActiveStrategyKey, { name: string; formula: string; detail: string; badgeColor: string }> = {
    tree: {
      name: 'POE + TREE',
      formula: 'Gênero Opinativo / Persuasivo',
      detail: 'Pense a ideia • Organize em árvore (Tópico, Razões, Explicação, Encerramento) • Escreva!',
      badgeColor: '#0F85A5'
    },
    narrative: {
      name: 'POE + Roteiro',
      formula: 'Gênero Narrativo / História',
      detail: 'Pense o mistério • Organize (Quem, Onde, Quando, Problema, Ação, Desfecho) • Escreva!',
      badgeColor: '#932966'
    },
    cops: {
      name: 'M.O.P.A.',
      formula: 'Convenções de Escrita & Ortografia',
      detail: 'Maiúsculas • Ortografia (Grafia) • Pontuação • Acentuação & Aparência',
      badgeColor: '#0F85A5'
    },
    scan: {
      name: 'S.C.A.N.',
      formula: 'Revisão & Clareza de Frases',
      detail: 'Size (Tamanho das frases) • Clarity (Clareza) • Add (Conectivos/Detalhes) • Note (Notar erros)',
      badgeColor: '#E86F37'
    },
    please: {
      name: 'P.A.R.A.F.O.',
      formula: 'Construção e Organização de Parágrafos',
      detail: 'Pense o tema • Anote detalhes • Reordene • Ative o Tópico Frasal • Fortaleça com Conectivos • Organize o Fim',
      badgeColor: '#10B981'
    }
  };

  const currentStrategyInfo = strategyDescriptions[activeStrategyKey] || strategyDescriptions.tree;

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200 flex flex-col h-full">
      {/* Header with Mnemonic Badge & Selector */}
      <div className="flex flex-col gap-3 mb-3 pb-3 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-orange-100 rounded-xl text-[#E86F37]">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-extrabold text-base text-slate-800 leading-snug">Estratégias SRSD (Graham & Harris)</h2>
              <p className="text-[11px] text-slate-500 font-medium">Guia Autorregulado de Planejamento e Edição</p>
            </div>
          </div>
        </div>

        {/* Strategy Switcher Pills */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            <span>Selecione a Estratégia:</span>
          </div>

          {/* Group 1: Genres */}
          <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-2xl border border-slate-200">
            <button
              onClick={() => onStrategyKeyChange('tree')}
              className={`px-2.5 py-1 text-xs font-bold rounded-xl transition-all ${
                activeStrategyKey === 'tree'
                  ? 'bg-[#0F85A5] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
              title="Estratégia para Texto Opinativo / Persuasivo"
            >
              🌳 POE + TREE
            </button>

            <button
              onClick={() => onStrategyKeyChange('narrative')}
              className={`px-2.5 py-1 text-xs font-bold rounded-xl transition-all ${
                activeStrategyKey === 'narrative'
                  ? 'bg-[#932966] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
              title="Estratégia para Narrativa / História"
            >
              📖 POE + Roteiro
            </button>

            <button
              onClick={() => onStrategyKeyChange('cops')}
              className={`px-2.5 py-1 text-xs font-bold rounded-xl transition-all ${
                activeStrategyKey === 'cops'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
              title="Convenções de Escrita e Ortografia (M.O.P.A.)"
            >
              🔍 M.O.P.A.
            </button>

            <button
              onClick={() => onStrategyKeyChange('scan')}
              className={`px-2.5 py-1 text-xs font-bold rounded-xl transition-all ${
                activeStrategyKey === 'scan'
                  ? 'bg-[#E86F37] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
              title="Revisão e Clareza de Frases (S.C.A.N.)"
            >
              ✨ S.C.A.N.
            </button>

            <button
              onClick={() => onStrategyKeyChange('please')}
              className={`px-2.5 py-1 text-xs font-bold rounded-xl transition-all ${
                activeStrategyKey === 'please'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
              title="Estrutura e Organização de Parágrafos (P.A.R.A.F.O.)"
            >
              📑 P.A.R.A.F.O.
            </button>
          </div>
        </div>
      </div>

      {/* Tabs: Checklist | Fala Interna */}
      <div className="flex gap-2 mb-3 bg-slate-50 p-1 rounded-xl border border-slate-200 text-xs font-bold">
        <button
          onClick={() => setActiveTab('checklist')}
          className={`flex-1 py-1.5 rounded-lg text-center transition-colors ${
            activeTab === 'checklist' ? 'bg-white text-slate-800 shadow-xs' : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          Checklist ({completedCount}/{strategyItems.length})
        </button>
        <button
          onClick={() => setActiveTab('selftalk')}
          className={`flex-1 py-1.5 rounded-lg text-center transition-colors ${
            activeTab === 'selftalk' ? 'bg-white text-[#E86F37] shadow-xs' : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          Fala Interna 🧠
        </button>
      </div>

      {/* TAB CONTENT 1: CHECKLIST */}
      {activeTab === 'checklist' && (
        <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 max-h-[420px]">
          {/* Active Strategy Concept banner */}
          <div className="p-3 bg-slate-50 border-l-4 rounded-r-xl text-xs text-slate-700" style={{ borderColor: currentStrategyInfo.badgeColor }}>
            <span className="font-extrabold block uppercase tracking-wider mb-0.5" style={{ color: currentStrategyInfo.badgeColor }}>
              {currentStrategyInfo.name} — {currentStrategyInfo.formula}
            </span>
            <p className="font-medium text-[11px] leading-relaxed text-slate-600">
              {currentStrategyInfo.detail}
            </p>
          </div>

          {/* List of Strategy Steps */}
          {strategyItems.map((item) => {
            const isExpanded = expandedItem === item.id;
            return (
              <div 
                key={item.id} 
                className={`rounded-2xl border transition-all ${
                  item.checked ? 'bg-emerald-50/60 border-emerald-200' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="p-2.5 flex items-start gap-2.5">
                  {/* Letter badge */}
                  <div 
                    className="w-7 h-7 rounded-xl text-white flex items-center justify-center font-black text-xs shrink-0 shadow-xs"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.letter}
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1 min-w-0 cursor-pointer" onClick={() => setExpandedItem(isExpanded ? null : item.id)}>
                    <div className="flex items-center justify-between">
                      <h4 className={`text-xs font-bold truncate ${item.checked ? 'text-emerald-900 line-through' : 'text-slate-800'}`}>
                        {item.title}
                      </h4>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-slate-400" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-400" />}
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                      {item.description}
                    </p>
                  </div>

                  {/* Checkbox button */}
                  <button
                    onClick={() => onToggleItem(item.id)}
                    className="p-1 text-slate-400 hover:text-emerald-600 transition-colors shrink-0"
                    title={item.checked ? 'Marcar como não concluído' : 'Marcar como concluído'}
                  >
                    {item.checked ? (
                      <CheckSquare className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-300" />
                    )}
                  </button>
                </div>

                {/* Expanded Note Input Area */}
                {isExpanded && (
                  <div className="px-3 pb-3 pt-1 border-t border-slate-200/60 mt-1">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Minha anotação de planejamento / verificação:
                    </label>
                    <textarea
                      value={item.value || ''}
                      onChange={(e) => onUpdateItemNote(item.id, e.target.value)}
                      placeholder={item.helperPrompt || 'Anote suas ideias aqui antes de rascunhar...'}
                      rows={2}
                      className="w-full text-xs p-2 bg-white rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0F85A5] focus:outline-none text-slate-800"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* TAB CONTENT 2: SELF-TALK */}
      {activeTab === 'selftalk' && (
        <div className="flex-1 overflow-y-auto space-y-3 pr-1 max-h-[420px]">
          <div className="p-3 bg-amber-50 border-l-4 border-[#E86F37] rounded-r-xl">
            <span className="text-xs font-extrabold text-[#E86F37] uppercase block mb-1">
              O Poder do Pensamento Ativo 🧠
            </span>
            <p className="text-xs text-slate-700 leading-relaxed">
              O método SRSD ensina que grandes escritores usam frases encorajadoras quando estão começando, revisando ou empacando. Escolha sua frase para hoje:
            </p>
          </div>

          <div className="space-y-2">
            {SELF_TALK_OPTIONS.map((st) => {
              const isSelected = selectedSelfTalk === st.phrase;
              return (
                <div
                  key={st.id}
                  onClick={() => onSelectSelfTalk(st.phrase)}
                  className={`p-3 rounded-2xl border text-xs font-medium cursor-pointer transition-all flex items-start gap-2.5 ${
                    isSelected 
                      ? 'bg-amber-100/80 border-[#E86F37] text-slate-900 shadow-sm font-bold' 
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <span className="text-base leading-none">💬</span>
                  <span className="flex-1">{st.phrase}</span>
                  {isSelected && <Sparkles className="w-4 h-4 text-[#E86F37] shrink-0 mt-0.5" />}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Bottom Self-Talk Active Footer Banner */}
      <div className="mt-auto pt-3 border-t border-slate-100">
        <div className="p-3 bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-center">
          <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1 flex items-center justify-center gap-1">
            <MessageSquare className="w-3 h-3 text-[#E86F37]" />
            <span>Fala Interna Ativa</span>
          </p>
          <p className="text-xs italic text-slate-700 font-medium">
            "{selectedSelfTalk || 'Eu consigo organizar minhas ideias no plano antes de escrever!'}"
          </p>
        </div>
      </div>
    </div>
  );
};

