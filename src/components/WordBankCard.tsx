import React, { useState } from 'react';
import { TRANSITION_WORDS } from '../data/srsdContent';
import { Sparkles, PlusCircle, Check } from 'lucide-react';

interface WordBankCardProps {
  onInsertWord: (word: string) => void;
}

export const WordBankCard: React.FC<WordBankCardProps> = ({ onInsertWord }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [lastInserted, setLastInserted] = useState<string | null>(null);

  const currentCategory = TRANSITION_WORDS[selectedCategoryIndex];

  const handleWordClick = (word: string) => {
    onInsertWord(word);
    setLastInserted(word);
    setTimeout(() => setLastInserted(null), 1500);
  };

  return (
    <div className="bg-[#0A8CA0] rounded-3xl p-5 shadow-sm text-white flex flex-col justify-between h-full relative overflow-hidden">
      {/* Background Accent Gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-white/20 rounded-xl">
              <Sparkles className="w-4 h-4 text-amber-300 fill-amber-300" />
            </div>
            <div>
              <h2 className="font-extrabold text-base leading-tight">
                Palavras de Mil Milhões
              </h2>
              <p className="text-[10px] text-teal-100 uppercase tracking-widest font-bold">
                Conectivos e Transições
              </p>
            </div>
          </div>
        </div>

        {/* Category Selector Pills */}
        <div className="flex flex-wrap gap-1 mb-3">
          {TRANSITION_WORDS.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategoryIndex(idx)}
              className={`text-[10px] font-bold px-2.5 py-1 rounded-full transition-all ${
                selectedCategoryIndex === idx
                  ? 'bg-white text-[#0A8CA0] shadow-xs'
                  : 'bg-white/15 text-teal-50 hover:bg-white/25'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Word Chips */}
        <div className="flex flex-wrap gap-2 max-h-[120px] overflow-y-auto pr-1">
          {currentCategory.words.map((word, idx) => {
            const isJustInserted = lastInserted === word;
            return (
              <button
                key={idx}
                onClick={() => handleWordClick(word)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all transform active:scale-95 shadow-2xs ${
                  isJustInserted
                    ? 'bg-amber-300 text-teal-950 scale-105'
                    : 'bg-white/20 hover:bg-white hover:text-[#0A8CA0] text-white'
                }`}
                title="Clique para inserir na sua produção"
              >
                {isJustInserted ? (
                  <Check className="w-3.5 h-3.5 text-teal-900" />
                ) : (
                  <PlusCircle className="w-3.5 h-3.5 opacity-70" />
                )}
                <span>{word}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer Helper Note */}
      <div className="mt-3 pt-2 border-t border-white/20 text-[10px] text-teal-100 italic">
        💡 Clique em qualquer conector para adicioná-lo direto no seu texto!
      </div>
    </div>
  );
};
