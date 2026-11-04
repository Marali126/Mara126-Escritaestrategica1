export type WritingGenre = 'persuasive' | 'narrative' | 'opinion';

export type SRSDStage = 
  | 'stage1_background' // Desenvolver Conhecimento Prévio
  | 'stage2_discuss'    // Discutir a Estratégia
  | 'stage3_model'      // Modelar a Estratégia
  | 'stage4_memorize'   // Memorizar a Estratégia
  | 'stage5_support'    // Apoiar a Estratégia (Acompanhada)
  | 'stage6_independent'; // Desempenho Independente

export interface StrategyItem {
  id: string;
  letter: string;
  title: string;
  description: string;
  checked: boolean;
  color: string;
  helperPrompt?: string;
  value?: string; // Text added by student in planning phase
}

export interface SelfTalkOption {
  id: string;
  category: 'start' | 'stuck' | 'editing' | 'praise';
  phrase: string;
}

export interface TransitionWord {
  word: string;
  category: 'introducao' | 'conexao' | 'contraste' | 'causa' | 'conclusao';
  example: string;
}

export interface StorySpark {
  id: string;
  title: string;
  category: 'misterio' | 'scifi' | 'fantasia' | 'cotidiano' | 'aventura' | 'superpoderes';
  ageRange: '9-11' | '12-14' | 'todos';
  starter: string;
  characterArchetype: {
    name: string;
    description: string;
    motive: string;
    fear: string;
  };
  plotTwist: string;
  visualPromptUrl?: string;
  visualPromptEmoji: string;
  suggestedGenre: WritingGenre;
  keywords: string[];
}

export interface ImageInspiration {
  id: string;
  url: string;
  caption: string;
  type: 'upload' | 'preset' | 'draw';
}

export interface StudentProfile {
  name: string;
  age: number;
  currentStage: SRSDStage;
  avatarEmoji: string;
  xpPoints: number;
  level: number;
  badges: string[];
}

export interface WritingDraft {
  id: string;
  title: string;
  genre: WritingGenre;
  promptText: string;
  content: string;
  targetWordCount: number;
  selfTalkSelected: string;
  strategyItems: StrategyItem[];
  images: ImageInspiration[];
  goals: {
    minReasons: number;
    useTransitions: boolean;
    checkSpelling: boolean;
    includeSelfTalk: boolean;
  };
  createdAt: string;
  updatedAt: string;
}
