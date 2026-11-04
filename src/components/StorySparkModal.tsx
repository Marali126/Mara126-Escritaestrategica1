import React, { useState } from 'react';
import { STORY_SPARKS } from '../data/srsdTemplates';
import { StorySpark, WritingGenre } from '../types';
import { Sparkles, Dices, Users, Zap, Image as ImageIcon, X, ArrowRight, Check } from 'lucide-react';

interface StorySparkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSpark: (spark: StorySpark) => void;
}

export const StorySparkModal: React.FC<StorySparkModalProps> = ({
  isOpen,
  onClose,
  onSelectSpark
}) => {
  const [selectedAge, setSelectedAge] = useState<'todos' | '9-11' | '12-14'>('todos');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeSpark, setActiveSpark] = useState<StorySpark>(STORY_SPARKS[0]);

  if (!isOpen) return null;

  const categories = [
    { id: 'todos', label: 'Todas as Faíscas' },
    { id: 'misterio', label: '🔍 Mistério' },
    { id: 'scifi', label: '💻 Ficção Científica' },
    { id: 'cotidiano', label: '🏫 Vida Escolar & Amizade' },
    { id: 'fantasia', label: '🧭 Fantasia & Tempo' },
    { id: 'aventura', label: '✍️ Aventura & Linguagem' }
  ];

  const filteredSparks = STORY_SPARKS.filter(spark => {
    const matchAge = selectedAge === 'todos' || spark.ageRange === selectedAge || spark.ageRange === 'todos';
    const matchCat = selectedCategory === 'todos' || spark.category === selectedCategory;
    return matchAge && matchCat;
  });

  const rollRandomSpark = () => {
    const pool = filteredSparks.length > 0 ? filteredSparks : STORY_SPARKS;
    const randomIndex = Math.floor(Math.random() * pool.length);
    setActiveSpark(pool[randomIndex]);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-3 md:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden my-auto flex flex-col max-h-[90vh] animate-in fade-in zoom-in">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0F85A5] via-[#0B6C87] to-[#B15982] p-5 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl text-2xl">
              ⚡
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black tracking-tight">
                Faísca de Histórias (Story Spark)
              </h2>
              <p className="text-xs font-semibold text-teal-100">
                Iniciadores de Histórias, Arquétipos & Desafios • Idades 9 a 14 Anos (Método SRSD)
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

        {/* Filters Bar */}
        <div className="bg-slate-50 p-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          {/* Age Toggle */}
          <div className="flex items-center gap-2 bg-white p-1 rounded-2xl border border-slate-200 text-xs font-bold">
            <span className="text-slate-500 pl-2">Faixa Etária:</span>
            <button
              onClick={() => setSelectedAge('todos')}
              className={`px-3 py-1 rounded-xl ${selectedAge === 'todos' ? 'bg-[#0F85A5] text-white' : 'text-slate-600'}`}
            >
              Todas
            </button>
            <button
              onClick={() => setSelectedAge('9-11')}
              className={`px-3 py-1 rounded-xl ${selectedAge === '9-11' ? 'bg-[#0F85A5] text-white' : 'text-slate-600'}`}
            >
              9-11 anos
            </button>
            <button
              onClick={() => setSelectedAge('12-14')}
              className={`px-3 py-1 rounded-xl ${selectedAge === '12-14' ? 'bg-[#0F85A5] text-white' : 'text-slate-600'}`}
            >
              12-14 anos
            </button>
          </div>

          {/* Random Roll Button */}
          <button
            onClick={rollRandomSpark}
            className="flex items-center gap-2 px-4 py-2 bg-[#E86F37] hover:bg-[#D45D27] text-white rounded-2xl text-xs font-extrabold shadow-md transition-transform active:scale-95"
          >
            <Dices className="w-4 h-4" />
            <span>Sorteador Mágico!</span>
          </button>
        </div>

        {/* Main Content Body */}
        <div className="flex-1 overflow-y-auto p-5 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Spark Cards List */}
          <div className="lg:col-span-5 space-y-3 max-h-[480px] overflow-y-auto pr-2">
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider block">
              Selecione uma Ideia:
            </span>

            {filteredSparks.map((spark) => {
              const isSelected = activeSpark.id === spark.id;
              return (
                <div
                  key={spark.id}
                  onClick={() => setActiveSpark(spark)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-amber-50 border-[#E86F37] shadow-md ring-2 ring-[#E86F37]/20'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="text-2xl">{spark.visualPromptEmoji}</span>
                    <span className="text-[10px] font-extrabold bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full uppercase">
                      {spark.ageRange} anos
                    </span>
                  </div>
                  <h3 className="font-extrabold text-sm text-slate-900 mb-1">
                    {spark.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {spark.starter}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Spark Detailed View */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-5 border border-slate-200 flex flex-col justify-between space-y-4">
            <div>
              {/* Spark Badge Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{activeSpark.visualPromptEmoji}</span>
                <span className="text-xs font-bold px-3 py-1 bg-[#0F85A5] text-white rounded-full uppercase tracking-wider">
                  Gênero: {activeSpark.suggestedGenre === 'narrative' ? 'Narrativa / História' : 'Argumentativo / Opinativo'}
                </span>
              </div>

              <h2 className="text-xl font-black text-slate-900 mb-2">
                {activeSpark.title}
              </h2>

              {/* Starter Paragraph Box */}
              <div className="bg-white p-4 rounded-2xl border-l-4 border-[#0F85A5] border-y border-r border-slate-200 shadow-xs mb-4">
                <span className="text-[10px] font-extrabold text-[#0F85A5] uppercase tracking-wider block mb-1">
                  🎬 Ponto de Partida da História:
                </span>
                <p className="text-xs text-slate-800 leading-relaxed font-serif italic">
                  "{activeSpark.starter}"
                </p>
              </div>

              {/* Character Archetype */}
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs mb-3 space-y-1">
                <div className="flex items-center gap-2 text-xs font-black text-slate-800">
                  <Users className="w-4 h-4 text-[#B15982]" />
                  <span>Arquétipo do Personagem: {activeSpark.characterArchetype.name}</span>
                </div>
                <p className="text-xs text-slate-600">
                  {activeSpark.characterArchetype.description}
                </p>
                <div className="grid grid-cols-2 gap-2 pt-2 text-[11px]">
                  <div className="bg-pink-50 p-2 rounded-xl border border-pink-100 text-pink-900">
                    <strong>Motivação:</strong> {activeSpark.characterArchetype.motive}
                  </div>
                  <div className="bg-purple-50 p-2 rounded-xl border border-purple-100 text-purple-900">
                    <strong>Desafio/Medo:</strong> {activeSpark.characterArchetype.fear}
                  </div>
                </div>
              </div>

              {/* Plot Twist */}
              <div className="bg-amber-50 p-3 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                <Zap className="w-4 h-4 text-[#E86F37] shrink-0 mt-0.5" />
                <div>
                  <strong>Reviravolta Secreta (Clímax):</strong> {activeSpark.plotTwist}
                </div>
              </div>
            </div>

            {/* Bottom Transfer Button */}
            <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">
                Inspiração pronta para o checklist SRSD
              </span>
              <button
                onClick={() => {
                  onSelectSpark(activeSpark);
                  onClose();
                }}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#0F85A5] hover:bg-[#0B6C87] text-white rounded-2xl text-xs font-black uppercase tracking-wider shadow-lg transition-transform active:scale-95"
              >
                <span>Usar Esta Faísca</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
