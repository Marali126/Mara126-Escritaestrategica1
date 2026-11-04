import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Heart, Star, Sparkles, CheckCircle2 } from 'lucide-react';

interface SelfReflectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveReflection: (reflection: { bestPart: string; obstacle: string; nextGoal: string }) => void;
}

export const SelfReflectionModal: React.FC<SelfReflectionModalProps> = ({
  isOpen,
  onClose,
  onSaveReflection
}) => {
  const [bestPart, setBestPart] = useState('');
  const [obstacle, setObstacle] = useState('');
  const [nextGoal, setNextGoal] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveReflection({ bestPart, obstacle, nextGoal });
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-3 md:p-6">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden my-auto flex flex-col animate-in fade-in zoom-in">
        
        <div className="bg-[#932966] p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🧠</span>
            <div>
              <h2 className="text-lg font-black">
                Autorreflexão do Escritor
              </h2>
              <p className="text-xs text-pink-100">
                Pense sobre seu processo de escrita hoje
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-xl bg-white/10 hover:bg-white/20 text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4 text-xs text-slate-800">
          <div>
            <label className="block font-bold text-slate-700 mb-1">
              1. O que mais gostei no meu planejamento ou no meu texto hoje?
            </label>
            <input 
              type="text"
              value={bestPart}
              onChange={(e) => setBestPart(e.target.value)}
              placeholder="Ex: Gostei das palavras de transição que escolhi!"
              className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#932966] focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              2. Qual foi o maior desafio e como minha auto-fala me ajudou?
            </label>
            <input 
              type="text"
              value={obstacle}
              onChange={(e) => setObstacle(e.target.value)}
              placeholder="Ex: Empaquei na razão 3, mas olhei o banco de ideias."
              className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#932966] focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              3. Qual é minha meta para o próximo texto?
            </label>
            <input 
              type="text"
              value={nextGoal}
              onChange={(e) => setNextGoal(e.target.value)}
              placeholder="Ex: Usar 5 conectivos de 1 milhão de dólares."
              className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#932966] focus:outline-none"
            />
          </div>

          <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-[#932966] hover:bg-[#7A1F54] text-white rounded-xl font-bold shadow-md transition-colors"
            >
              Salvar Reflexão ✨
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
