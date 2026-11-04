import React, { useState, useEffect } from 'react';
import { 
  WritingGenre, 
  SRSDStage, 
  StudentProfile, 
  WritingDraft, 
  StrategyItem, 
  ImageInspiration,
  StorySpark
} from './types';
import { 
  POW_TREE_STRATEGY, 
  POW_NARRATIVE_STRATEGY, 
  COPS_CONVENTIONS_STRATEGY,
  SCAN_REVISION_STRATEGY,
  PLEASE_PARAGRAPH_STRATEGY,
  SELF_TALK_OPTIONS 
} from './data/srsdTemplates';

import { Header } from './components/Header';
import { SRSDStrategyCard, ActiveStrategyKey } from './components/SRSDStrategyCard';
import { WordBankCard } from './components/WordBankCard';
import { VisualBrainstormCard } from './components/VisualBrainstormCard';
import { SelfRegulationCard } from './components/SelfRegulationCard';
import { WritingCanvas } from './components/WritingCanvas';
import { StorySparkModal } from './components/StorySparkModal';
import { MediatorGuideModal } from './components/MediatorGuideModal';
import { SelfReflectionModal } from './components/SelfReflectionModal';
import { PrintExportModal } from './components/PrintExportModal';
import { AIFeedbackModal } from './components/AIFeedbackModal';

export default function App() {
  // Custom Logo State (localStorage key or default null)
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(() => {
    return localStorage.getItem('srsd_custom_logo');
  });

  // Student Profile
  const [student, setStudent] = useState<StudentProfile>({
    name: 'Alexandre',
    age: 11,
    currentStage: 'stage6_independent',
    avatarEmoji: '✍️',
    xpPoints: 180,
    level: 3,
    badges: ['badge_planner', 'badge_vocabulary']
  });

  // Genre state ('persuasive' or 'narrative')
  const [genre, setGenre] = useState<WritingGenre>('persuasive');

  // Active Strategy Key ('tree' | 'narrative' | 'cops' | 'scan' | 'please')
  const [activeStrategyKey, setActiveStrategyKey] = useState<ActiveStrategyKey>('tree');

  // Draft state
  const [draft, setDraft] = useState<WritingDraft>({
    id: 'draft_1',
    title: 'Por Que Jogos Educativos Devem Estar nas Escolas',
    genre: 'persuasive',
    promptText: 'Acredito firmemente que incluir jogos educativos melhora o aprendizado nas escolas.',
    content: 'Muitas pessoas pensam que videogames são apenas para diversão, mas eles podem nos ajudar a aprender muitas coisas importantes. Primeiramente, jogos educativos estimulam o raciocínio rápido e a resolução de problemas em grupo. Além disso, quando jogamos em equipe, aprendemos a colaborar com os colegas. Consequentemente, as aulas tornam-se mais dinâmicas e motivadoras. Por todos esses motivos, incluir jogos educativos é um passo transformador para a nossa escola.',
    targetWordCount: 100,
    selfTalkSelected: SELF_TALK_OPTIONS[0].phrase,
    strategyItems: POW_TREE_STRATEGY.map(item => ({ ...item, checked: true })),
    images: [
      {
        id: 'img_1',
        url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80',
        caption: 'Videogames e Aprendizado',
        type: 'preset'
      }
    ],
    goals: {
      minReasons: 3,
      useTransitions: true,
      checkSpelling: true,
      includeSelfTalk: true
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });

  // Modals Visibility State
  const [isStorySparkOpen, setIsStorySparkOpen] = useState(false);
  const [isMediatorGuideOpen, setIsMediatorGuideOpen] = useState(false);
  const [isSelfReflectionOpen, setIsSelfReflectionOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isAIFeedbackOpen, setIsAIFeedbackOpen] = useState(false);

  // Handle Logo Upload or Reset
  const handleLogoUpload = (url: string | null) => {
    setCustomLogoUrl(url);
    if (url) {
      localStorage.setItem('srsd_custom_logo', url);
    } else {
      localStorage.removeItem('srsd_custom_logo');
    }
  };

  // Handle Strategy Selection (tree, narrative, cops, scan, please)
  const handleStrategyKeyChange = (key: ActiveStrategyKey) => {
    setActiveStrategyKey(key);
    let newItems: StrategyItem[] = [];
    if (key === 'tree') {
      newItems = POW_TREE_STRATEGY;
      setGenre('persuasive');
    } else if (key === 'narrative') {
      newItems = POW_NARRATIVE_STRATEGY;
      setGenre('narrative');
    } else if (key === 'cops') {
      newItems = COPS_CONVENTIONS_STRATEGY;
    } else if (key === 'scan') {
      newItems = SCAN_REVISION_STRATEGY;
    } else if (key === 'please') {
      newItems = PLEASE_PARAGRAPH_STRATEGY;
    }

    setDraft(prev => ({
      ...prev,
      strategyItems: newItems.map(item => ({ ...item }))
    }));
  };

  // Switch Strategy when Genre changes
  const handleGenreChange = (newGenre: WritingGenre) => {
    setGenre(newGenre);
    const key: ActiveStrategyKey = newGenre === 'narrative' ? 'narrative' : 'tree';
    handleStrategyKeyChange(key);
  };

  // Toggle Strategy Item Checkbox
  const handleToggleStrategyItem = (id: string) => {
    setDraft(prev => ({
      ...prev,
      strategyItems: prev.strategyItems.map(item => 
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    }));
  };

  // Update Strategy Item Planning Note
  const handleUpdateItemNote = (id: string, note: string) => {
    setDraft(prev => ({
      ...prev,
      strategyItems: prev.strategyItems.map(item =>
        item.id === id ? { ...item, value: note } : item
      )
    }));
  };

  // Select Self-Talk Phrase
  const handleSelectSelfTalk = (phrase: string) => {
    setDraft(prev => ({ ...prev, selfTalkSelected: phrase }));
  };

  // Insert Transition Word into Writing Canvas
  const handleInsertTransitionWord = (word: string) => {
    setDraft(prev => ({
      ...prev,
      content: prev.content ? `${prev.content} ${word} ` : `${word} `
    }));
  };

  // Add Image Inspiration
  const handleAddImage = (image: ImageInspiration) => {
    setDraft(prev => ({
      ...prev,
      images: [...prev.images, image]
    }));
  };

  // Remove Image Inspiration
  const handleRemoveImage = (id: string) => {
    setDraft(prev => ({
      ...prev,
      images: prev.images.filter(img => img.id !== id)
    }));
  };

  // Apply Selected Story Spark
  const handleSelectSpark = (spark: StorySpark) => {
    handleGenreChange(spark.suggestedGenre);
    setDraft(prev => ({
      ...prev,
      title: spark.title,
      promptText: spark.starter,
      content: spark.starter
    }));
  };

  // Save Self Reflection
  const handleSaveReflection = (reflection: { bestPart: string; obstacle: string; nextGoal: string }) => {
    setStudent(prev => ({
      ...prev,
      xpPoints: prev.xpPoints + 50
    }));
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] text-slate-800 font-sans p-3 md:p-6 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
        
        {/* Header with Logo Upload, SRSD Stage & Controls */}
        <Header 
          customLogoUrl={customLogoUrl}
          onLogoUpload={handleLogoUpload}
          student={student}
          onUpdateStage={(stage: SRSDStage) => setStudent(prev => ({ ...prev, currentStage: stage }))}
          onOpenMediatorGuide={() => setIsMediatorGuideOpen(true)}
          onOpenExport={() => setIsExportOpen(true)}
          onOpenStorySpark={() => setIsStorySparkOpen(true)}
          onUpdateStudentProfile={(profile) => setStudent(prev => ({ ...prev, ...profile }))}
        />

        {/* Main Bento Grid Layout */}
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5 mb-6">
          
          {/* Left Bento Column: Strategy Checklist & Self-Talk (col-span-3) */}
          <section className="lg:col-span-3 h-full min-h-[500px]">
            <SRSDStrategyCard 
              genre={genre}
              activeStrategyKey={activeStrategyKey}
              onStrategyKeyChange={handleStrategyKeyChange}
              strategyItems={draft.strategyItems}
              onToggleItem={handleToggleStrategyItem}
              onUpdateItemNote={handleUpdateItemNote}
              selectedSelfTalk={draft.selfTalkSelected}
              onSelectSelfTalk={handleSelectSelfTalk}
            />
          </section>

          {/* Middle Bento Column: Main Writing Canvas (col-span-6) */}
          <section className="lg:col-span-6 h-full min-h-[520px]">
            <WritingCanvas 
              title={draft.title}
              onTitleChange={(title) => setDraft(prev => ({ ...prev, title }))}
              content={draft.content}
              onContentChange={(content) => setDraft(prev => ({ ...prev, content }))}
              genre={genre}
              promptText={draft.promptText}
              onOpenFeedback={() => setIsAIFeedbackOpen(true)}
            />
          </section>

          {/* Right Bento Column: Inspiration, Vocabulary & Self-Regulation (col-span-3) */}
          <section className="lg:col-span-3 flex flex-col gap-4 h-full">
            
            {/* Visual Brainstorm Card */}
            <div className="flex-1 min-h-[190px]">
              <VisualBrainstormCard 
                images={draft.images}
                onAddImage={handleAddImage}
                onRemoveImage={handleRemoveImage}
                onOpenStorySpark={() => setIsStorySparkOpen(true)}
              />
            </div>

            {/* Vocabulary / Word Bank Card */}
            <div className="flex-1 min-h-[210px]">
              <WordBankCard 
                onInsertWord={handleInsertTransitionWord}
              />
            </div>

            {/* Self-Regulation & Level Meter Card */}
            <div className="flex-1 min-h-[190px]">
              <SelfRegulationCard 
                strategyItems={draft.strategyItems}
                wordCount={draft.content.trim().split(/\s+/).filter(Boolean).length}
                onOpenReflectionModal={() => setIsSelfReflectionOpen(true)}
              />
            </div>

          </section>

        </main>

        {/* Footer */}
        <footer className="text-center text-xs text-slate-500 font-medium py-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Escrita Estratégica SRSD © Mara Daher - Fonoaudiologia, Linguagem & Aprendizagem</span>
          <span className="text-[11px] text-slate-400">Baseado nas pesquisas de Steve Graham & Karen Harris</span>
        </footer>

      </div>

      {/* MODALS */}
      <StorySparkModal 
        isOpen={isStorySparkOpen}
        onClose={() => setIsStorySparkOpen(false)}
        onSelectSpark={handleSelectSpark}
      />

      <MediatorGuideModal 
        isOpen={isMediatorGuideOpen}
        onClose={() => setIsMediatorGuideOpen(false)}
      />

      <SelfReflectionModal 
        isOpen={isSelfReflectionOpen}
        onClose={() => setIsSelfReflectionOpen(false)}
        onSaveReflection={handleSaveReflection}
      />

      <PrintExportModal 
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        draft={draft}
        student={student}
        customLogoUrl={customLogoUrl}
      />

      <AIFeedbackModal 
        isOpen={isAIFeedbackOpen}
        onClose={() => setIsAIFeedbackOpen(false)}
        draft={draft}
      />

    </div>
  );
}
