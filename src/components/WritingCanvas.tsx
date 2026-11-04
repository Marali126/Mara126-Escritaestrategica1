import React, { useState, useRef } from 'react';
import { WritingGenre } from '../types';
import { TRANSITION_WORDS } from '../data/srsdTemplates';
import { Bold, Italic, Underline, List, Sparkles, Highlighter, Type, FileCheck, RefreshCw } from 'lucide-react';

interface WritingCanvasProps {
  title: string;
  onTitleChange: (title: string) => void;
  content: string;
  onContentChange: (content: string) => void;
  genre: WritingGenre;
  promptText: string;
  onOpenFeedback: () => void;
}

export const WritingCanvas: React.FC<WritingCanvasProps> = ({
  title,
  onTitleChange,
  content,
  onContentChange,
  genre,
  promptText,
  onOpenFeedback
}) => {
  const [selectedHighlightColor, setSelectedHighlightColor] = useState<string>('#10B981'); // Emerald for Topic
  const [bodyFontSize, setBodyFontSize] = useState<'sm' | 'base' | 'lg' | 'xl' | '2xl'>('lg');
  const [titleFontSize, setTitleFontSize] = useState<'sm' | 'base' | 'lg' | 'xl' | '2xl'>('lg');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const fontSizeClasses = {
    sm: 'text-sm leading-relaxed',
    base: 'text-base leading-relaxed',
    lg: 'text-lg leading-relaxed',
    xl: 'text-xl leading-relaxed',
    '2xl': 'text-2xl leading-relaxed'
  };

  const titleFontSizeClasses = {
    sm: 'text-base md:text-lg',
    base: 'text-lg md:text-xl',
    lg: 'text-xl md:text-2xl',
    xl: 'text-2xl md:text-3xl',
    '2xl': 'text-3xl md:text-4xl'
  };

  const fontSizeLabels = {
    sm: 'Pequena',
    base: 'Média',
    lg: 'Grande',
    xl: 'Muito Grande',
    '2xl': 'Gigante'
  };

  const fontSizesOrder: ('sm' | 'base' | 'lg' | 'xl' | '2xl')[] = ['sm', 'base', 'lg', 'xl', '2xl'];

  const handleDecreaseBodyFont = () => {
    const currentIndex = fontSizesOrder.indexOf(bodyFontSize);
    if (currentIndex > 0) setBodyFontSize(fontSizesOrder[currentIndex - 1]);
  };

  const handleIncreaseBodyFont = () => {
    const currentIndex = fontSizesOrder.indexOf(bodyFontSize);
    if (currentIndex < fontSizesOrder.length - 1) setBodyFontSize(fontSizesOrder[currentIndex + 1]);
  };

  const handleDecreaseTitleFont = () => {
    const currentIndex = fontSizesOrder.indexOf(titleFontSize);
    if (currentIndex > 0) setTitleFontSize(fontSizesOrder[currentIndex - 1]);
  };

  const handleIncreaseTitleFont = () => {
    const currentIndex = fontSizesOrder.indexOf(titleFontSize);
    if (currentIndex < fontSizesOrder.length - 1) setTitleFontSize(fontSizesOrder[currentIndex + 1]);
  };

  // Statistics calculations
  const cleanText = content.trim();
  const wordCount = cleanText ? cleanText.split(/\s+/).length : 0;
  const sentenceCount = cleanText ? (cleanText.match(/[.!?]+/g) || []).length : 0;

  // Transition Words Count in student text
  const foundTransitions = TRANSITION_WORDS.filter(w => 
    content.toLowerCase().includes(w.word.toLowerCase())
  );

  // Insert formatting into textarea
  const applyFormat = (prefix: string, suffix: string = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end) || 'texto';
    const newContent = content.substring(0, start) + prefix + selectedText + suffix + content.substring(end);
    
    onContentChange(newContent);
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, end + prefix.length);
    }, 50);
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-slate-200 relative flex flex-col h-full overflow-hidden">
      
      {/* Top macOS Style Window Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <span className="text-xs font-black text-slate-400 tracking-wider uppercase">
            {genre === 'narrative' ? 'Rascunho: História Narrativa' : 'Rascunho: Texto Opinativo (POE + TREE)'}
          </span>
        </div>

        {/* Stats Chips */}
        <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500">
          <span className="bg-slate-100 px-2.5 py-1 rounded-xl border border-slate-200">
            {wordCount} palavras
          </span>
          <span className="bg-slate-100 px-2.5 py-1 rounded-xl border border-slate-200">
            {sentenceCount} frases
          </span>
          <span className="bg-teal-50 text-[#0F85A5] px-2.5 py-1 rounded-xl border border-teal-200 font-extrabold">
            {foundTransitions.length} conectivos 💎
          </span>
        </div>
      </div>

      {/* Story Spark / Prompt Helper Bar */}
      {promptText && (
        <div className="bg-amber-50 p-3 rounded-2xl border border-amber-200 mb-4 shrink-0 flex items-start justify-between gap-3">
          <div className="text-xs text-amber-900 font-serif leading-relaxed">
            <strong className="text-[#E86F37] uppercase text-[10px] block font-sans font-extrabold mb-0.5">
              💡 Tema / Ponto de Partida Escolhido:
            </strong>
            "{promptText}"
          </div>
        </div>
      )}

      {/* Formatting Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-2 bg-slate-50 rounded-2xl border border-slate-200 mb-4 shrink-0">
        <div className="flex items-center gap-1">
          <button
            onClick={() => applyFormat('**', '**')}
            className="p-2 hover:bg-white rounded-xl text-slate-700 hover:text-slate-900 transition-colors font-bold text-xs"
            title="Negrito (**texto**)"
          >
            <Bold className="w-4 h-4" />
          </button>
          <button
            onClick={() => applyFormat('*', '*')}
            className="p-2 hover:bg-white rounded-xl text-slate-700 hover:text-slate-900 transition-colors"
            title="Itálico (*texto*)"
          >
            <Italic className="w-4 h-4" />
          </button>
          <button
            onClick={() => applyFormat('<u>', '</u>')}
            className="p-2 hover:bg-white rounded-xl text-slate-700 hover:text-slate-900 transition-colors"
            title="Sublinhado"
          >
            <Underline className="w-4 h-4" />
          </button>
          <div className="h-4 w-[1px] bg-slate-300 mx-1"></div>
          <button
            onClick={() => applyFormat('\n• ')}
            className="p-2 hover:bg-white rounded-xl text-slate-700 hover:text-slate-900 transition-colors"
            title="Lista com marcadores"
          >
            <List className="w-4 h-4" />
          </button>

          <div className="h-4 w-[1px] bg-slate-300 mx-1"></div>

          {/* Title Font Size Adjuster Control */}
          <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-xl border border-slate-200 shadow-2xs">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-tight">Título:</span>
            <button
              onClick={handleDecreaseTitleFont}
              disabled={titleFontSize === 'sm'}
              className="px-1.5 py-0.5 rounded-lg text-xs font-black text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed"
              title="Diminuir tamanho do título (T-)"
            >
              T-
            </button>
            <span className="text-[10px] font-extrabold text-[#932966] min-w-[50px] text-center select-none">
              {fontSizeLabels[titleFontSize]}
            </span>
            <button
              onClick={handleIncreaseTitleFont}
              disabled={titleFontSize === '2xl'}
              className="px-1.5 py-0.5 rounded-lg text-xs font-black text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed"
              title="Aumentar tamanho do título (T+)"
            >
              T+
            </button>
          </div>

          {/* Body Font Size Adjuster Control */}
          <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-xl border border-slate-200 shadow-2xs">
            <Type className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-tight">Texto:</span>
            <button
              onClick={handleDecreaseBodyFont}
              disabled={bodyFontSize === 'sm'}
              className="px-1.5 py-0.5 rounded-lg text-xs font-black text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed"
              title="Diminuir tamanho do texto (A-)"
            >
              A-
            </button>
            <span className="text-[10px] font-extrabold text-[#0F85A5] min-w-[50px] text-center select-none">
              {fontSizeLabels[bodyFontSize]}
            </span>
            <button
              onClick={handleIncreaseBodyFont}
              disabled={bodyFontSize === '2xl'}
              className="px-1.5 py-0.5 rounded-lg text-xs font-black text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed"
              title="Aumentar tamanho do texto (A+)"
            >
              A+
            </button>
          </div>
        </div>

        {/* AI SRSD Feedback Button */}
        <button
          onClick={onOpenFeedback}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0F85A5] hover:bg-[#0B6C87] text-white rounded-xl text-xs font-bold shadow-sm transition-all"
        >
          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          <span>Análise do Mediador SRSD</span>
        </button>
      </div>

      {/* Title Input */}
      <div className="mb-3 shrink-0">
        <input
          type="text"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          placeholder="Digite o Título da sua Produção aqui..."
          className={`w-full font-serif font-black text-slate-800 border-b-2 border-slate-200 pb-2 focus:outline-none focus:border-[#0F85A5] placeholder-slate-300 transition-all ${titleFontSizeClasses[titleFontSize]}`}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-h-[260px] flex flex-col">
        <textarea
          ref={textareaRef}
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          placeholder="Comece a escrever sua história ou texto de opinião aqui... Lembre-se de seguir o seu plano e usar conectivos de transição para unir suas frases!"
          className={`w-full flex-1 p-3 text-slate-700 font-serif focus:outline-none resize-none placeholder-slate-300 transition-all ${fontSizeClasses[bodyFontSize]}`}
        />
      </div>

      {/* Transition Words Found Bar */}
      {foundTransitions.length > 0 && (
        <div className="pt-2 border-t border-slate-100 flex items-center gap-2 shrink-0">
          <span className="text-[10px] font-extrabold text-[#0F85A5] uppercase tracking-wider">
            Conectivos detectados no seu texto:
          </span>
          <div className="flex flex-wrap gap-1">
            {foundTransitions.map((t) => (
              <span key={t.word} className="text-[10px] font-bold bg-teal-50 text-[#0F85A5] border border-teal-200 px-2 py-0.5 rounded-md">
                {t.word}
              </span>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
