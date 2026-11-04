import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { StrategyItem } from '../types';
import { SRSD_BADGES } from '../data/srsdTemplates';
import { Award, Trophy, Smile, CheckCircle, Sparkles, HelpCircle } from 'lucide-react';

interface SelfRegulationCardProps {
  strategyItems: StrategyItem[];
  wordCount: number;
  onOpenReflectionModal: () => void;
}

export const SelfRegulationCard: React.FC<SelfRegulationCardProps> = ({
  strategyItems,
  wordCount,
  onOpenReflectionModal
}) => {
  const completedCount = strategyItems.filter(i => i.checked).length;
  const progressPercent = Math.min(100, Math.round((completedCount / (strategyItems.length || 1)) * 100));

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="bg-[#932966] rounded-3xl p-5 shadow-sm text-white flex flex-col justify-between h-full relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -left-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-lg pointer-events-none"></div>

      <div>
        {/* Title */}
        <div className="flex items-center justify-between mb-2">
          <div>
            <h2 className="font-extrabold text-base text-white leading-tight">
              Automonitoramento
            </h2>
            <p className="text-[10px] text-pink-100 font-bold uppercase tracking-wider">
              Metas e Persistência
            </p>
          </div>
          <div className="w-9 h-9 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-lg font-bold shadow-xs">
            🏆
          </div>
        </div>

        {/* Progress Bar */}
        <div className="my-3 space-y-1">
          <div className="flex justify-between text-[11px] font-extrabold text-pink-100">
            <span>PLANO DE ESTRATÉGIA</span>
            <span>{progressPercent}%</span>
          </div>
          <div className="w-full h-3 bg-black/20 rounded-full overflow-hidden p-0.5">
            <div 
              className="h-full bg-white rounded-full transition-all duration-500 shadow-xs"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Badges Earned */}
        <div className="my-2">
          <span className="text-[10px] font-extrabold text-pink-100 uppercase tracking-wider block mb-1.5">
            Conquistas Desbloqueadas:
          </span>
          <div className="flex gap-2">
            {SRSD_BADGES.slice(0, 3).map((badge, idx) => {
              const isUnlocked = progressPercent >= (idx + 1) * 30 || wordCount > 50;
              return (
                <div
                  key={badge.id}
                  className={`w-9 h-9 rounded-2xl border-2 flex items-center justify-center text-base transition-all ${
                    isUnlocked
                      ? 'bg-white/30 border-white text-white shadow-md scale-105'
                      : 'bg-black/20 border-white/20 opacity-40 grayscale'
                  }`}
                  title={`${badge.title}: ${badge.description}`}
                >
                  {badge.emoji}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Action Buttons: Celebration & Reflection */}
      <div className="flex items-center justify-between gap-2 pt-3 border-t border-white/20">
        <button
          onClick={triggerConfetti}
          className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1"
          title="Celebrar progresso!"
        >
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span>Celebrar!</span>
        </button>

        <button
          onClick={onOpenReflectionModal}
          className="px-3.5 py-2 bg-white text-[#932966] hover:bg-pink-50 rounded-xl text-xs font-extrabold uppercase shadow-lg transition-transform active:scale-95"
        >
          Refletir 🧠
        </button>
      </div>
    </div>
  );
};
