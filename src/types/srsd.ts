export type StrategyType = 'TREE' | 'WWW' | 'STOP_DARE';

export interface StrategyStep {
  id: string;
  letter: string;
  name: string;
  description: string;
  tip: string;
  color: string;
  completed: boolean;
  detectedInText?: boolean;
}

export interface WritingPrompt {
  id: string;
  title: string;
  category: 'Opinião / Persuasivo' | 'Narrativa / História' | 'Expositivo / Informativo';
  ageGroup: '9-11 anos' | '12-14 anos';
  description: string;
  type: StrategyType;
  defaultImages: string[];
  suggestedWords: string[];
}

export interface SelfTalkPhrase {
  id: string;
  phase: 'Antes de Escrever' | 'Durante a Escrita' | 'Quando Encalhar' | 'Ao Finalizar';
  phrase: string;
  category: 'confianca' | 'foco' | 'resiliencia';
}

export interface ImageInspiration {
  id: string;
  url: string;
  title: string;
  source: 'upload' | 'default' | 'ai';
}

export interface WritingGoal {
  minWords: number;
  reasonsCount: number;
  useTransitions: number;
  checkedSelfTalk: boolean;
}

export interface EvaluationResult {
  score: number;
  topicSentenceFound: boolean;
  reasonsCountFound: number;
  transitionsCountFound: number;
  conclusionFound: boolean;
  positiveFeedback: string;
  encouragement: string;
  suggestions: string[];
}
