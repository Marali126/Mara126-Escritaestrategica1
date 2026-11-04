import { StrategyStep, WritingPrompt, SelfTalkPhrase, ImageInspiration } from '../types/srsd';

export const POW_STEPS = [
  {
    id: 'pow-p',
    letter: 'P',
    name: 'Pense e Planeja',
    description: 'Quem é meu leitor? Qual a minha opinião e objetivo principal ao escrever?',
    tip: 'Pense em quem vai ler e qual mensagem principal você quer passar.',
    color: '#E87A36'
  },
  {
    id: 'pow-o',
    letter: 'O',
    name: 'Organize as Ideias',
    description: 'Use a estrutura (TREE ou Roteiro) para anotar os pontos principais antes de escrever.',
    tip: 'Preencha suas notas antes de começar a rascunhar.',
    color: '#0A8CA0'
  },
  {
    id: 'pow-w',
    letter: 'E',
    name: 'Escreva e Expanda',
    description: 'Escreva seu rascunho com calma, usando suas anotações, conectivos fortes e os sentidos para descrever com detalhes.',
    tip: 'Lembre-se de verificar o checklist e usar a fala interna encorajadora!',
    color: '#C15886'
  }
];

export const TREE_STEPS: StrategyStep[] = [
  {
    id: 'tree-t',
    letter: 'T',
    name: 'Tópico e Opinião Central',
    description: 'Apresente o assunto e declare sua opinião principal com clareza.',
    tip: 'Exemplo: "Na minha opinião, os jogos educativos estimulam a cooperação..."',
    color: '#E87A36',
    completed: false
  },
  {
    id: 'tree-r',
    letter: 'R',
    name: 'Razões e Motivos (Pelo menos 3)',
    description: 'Apresente pelo menos três motivos sólidos que defendem o seu ponto de vista.',
    tip: 'Exemplo: "Em primeiro lugar, o foco aumenta. Em segundo lugar, desenvolve empatia..."',
    color: '#0A8CA0',
    completed: false
  },
  {
    id: 'tree-e1',
    letter: 'E',
    name: 'Explicações e Exemplos',
    description: 'Dê detalhes, fatos ou exemplos do dia a dia para explicar cada razão.',
    tip: 'Exemplo: "Por exemplo, ao resolver desafios em dupla, os alunos aprendem a ouvir o colega..."',
    color: '#8B5CF6',
    completed: false
  },
  {
    id: 'tree-e2',
    letter: 'E',
    name: 'Encerramento e Conclusão',
    description: 'Reafirme sua opinião de forma marcante e conclua o pensamento com uma reflexão.',
    tip: 'Exemplo: "Diante de tudo isso, essa prática transforma a experiência de aprender..."',
    color: '#C15886',
    completed: false
  }
];

export const WWW_STEPS: StrategyStep[] = [
  {
    id: 'www-w1',
    letter: 'Q',
    name: 'Quem são os Personagens?',
    description: 'Quem é o protagonista e quais são suas características principais?',
    tip: 'Descreva como eles são e como se comportam.',
    color: '#E87A36',
    completed: false
  },
  {
    id: 'www-w2',
    letter: 'O',
    name: 'Onde e Quando?',
    description: 'Onde se passa a história? Descreva o cenário com os 5 sentidos (visão, som, tato, cheiro, gosto).',
    tip: 'Sons, cheiros, iluminação e clima ajudam o leitor a se sentir dentro da história!',
    color: '#0A8CA0',
    completed: false
  },
  {
    id: 'www-w3',
    letter: 'Q',
    name: 'Quando acontece?',
    description: 'Em qual momento a narrativa ocorre? (Era uma vez, no futuro, numa tarde ensolarada...)',
    tip: 'Situe o tempo para dar ritmo à aventura.',
    color: '#10B981',
    completed: false
  },
  {
    id: 'www-what1',
    letter: 'O',
    name: 'O que o Personagem quer?',
    description: 'Qual é o grande objetivo ou desejo do personagem principal?',
    tip: 'O que ele está buscando alcançar?',
    color: '#8B5CF6',
    completed: false
  },
  {
    id: 'www-what2',
    letter: 'P',
    name: 'Qual o Problema?',
    description: 'Que desafio ou obstáculo inesperado surge no caminho?',
    tip: 'Crie um mistério ou obstáculo para prender a atenção do leitor!',
    color: '#EC4899',
    completed: false
  },
  {
    id: 'www-how1',
    letter: 'C',
    name: 'Como Resolveu?',
    description: 'Como o personagem enfrenta o problema e qual a ideia usada para superar?',
    tip: 'Mostre a inteligência, coragem ou trabalho em equipe.',
    color: '#F59E0B',
    completed: false
  },
  {
    id: 'www-how2',
    letter: 'S',
    name: 'Sentimento e Desfecho',
    description: 'Como a história é finalizada e como os personagens se sentem no fim?',
    tip: 'Mostre o aprendizado ou o alívio dos personagens.',
    color: '#C15886',
    completed: false
  }
];

export const TRANSITION_WORDS = [
  { category: 'Iniciar a Opinião', words: ['Na minha opinião', 'A meu ver', 'Acredito firmemente que', 'Em primeiro lugar'] },
  { category: 'Adicionar Razões', words: ['Além disso', 'Outro motivo relevante é', 'Do mesmo modo', 'Somado a isso', 'Ademais'] },
  { category: 'Dar Exemplos', words: ['Por exemplo', 'Como demonstra', 'Um fato que comprova é', 'Isto é verificado em'] },
  { category: 'Contrastar Ideias', words: ['Por outro lado', 'No entanto', 'Embora alguns digam', 'Apesar disso', 'Em contrapartida'] },
  { category: 'Concluir o Texto', words: ['Em conclusão', 'Portanto', 'Diante de tudo isso', 'Por fim', 'Em resumo'] }
];

export const SELF_TALK_PHRASES: SelfTalkPhrase[] = [
  {
    id: 'st-1',
    phase: 'Antes de Escrever',
    phrase: 'Eu tenho boas ideias! Se eu seguir meu plano POE, meu texto vai ficar excelente.',
    category: 'confianca'
  },
  {
    id: 'st-2',
    phase: 'Durante a Escrita',
    phrase: 'Sem pressa! Uma frase de cada vez. Deixa o texto fluir.',
    category: 'foco'
  },
  {
    id: 'st-3',
    phase: 'Quando Encalhar',
    phrase: 'O rascunho não precisa ser perfeito de primeira. Erros fazem parte do aprendizado!',
    category: 'resiliencia'
  },
  {
    id: 'st-4',
    phase: 'Quando Encalhar',
    phrase: 'Deixa eu olhar meu plano TREE: qual é a minha próxima razão com exemplo?',
    category: 'foco'
  },
  {
    id: 'st-5',
    phase: 'Ao Finalizar',
    phrase: 'Eu me dediquei e construí um texto estruturado! Hora de revisar com orgulho.',
    category: 'confianca'
  }
];

export const DEFAULT_PROMPTS: WritingPrompt[] = [
  {
    id: 'prompt-1',
    title: 'Celulares na Escola: Liberdade ou Distração?',
    category: 'Opinião / Persuasivo',
    ageGroup: '12-14 anos',
    description: 'Escreva um texto argumentativo defendendo sua opinião sobre o uso de smartphones durante o horário de aula ou no recreio.',
    type: 'TREE',
    defaultImages: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80'
    ],
    suggestedWords: ['produtividade', 'foco', 'tecnologia', 'convivência', 'responsabilidade']
  },
  {
    id: 'prompt-2',
    title: 'A Porta Secreta no Sótão da Escola',
    category: 'Narrativa / História',
    ageGroup: '9-11 anos',
    description: 'Durante um dia chuvoso, dois amigos encontram uma porta de madeira antiga atrás de um armário esquecido na biblioteca.',
    type: 'WWW',
    defaultImages: [
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80'
    ],
    suggestedWords: ['misterioso', 'brilho dourado', 'eco', 'mapa antigo', 'coragem']
  },
  {
    id: 'prompt-3',
    title: 'Os Jovens Devem Ter Tarefas de Casa Remuneradas?',
    category: 'Opinião / Persuasivo',
    ageGroup: '9-11 anos',
    description: 'Alguns pais dão mesada quando os filhos ajudam na arrumação da casa. Isso é correto ou a ajuda deve ser voluntária?',
    type: 'TREE',
    defaultImages: [
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=80'
    ],
    suggestedWords: ['trabalho em equipe', 'responsabilidade', 'incentivo', 'colaboração', 'autonomia']
  },
  {
    id: 'prompt-4',
    title: 'O Robô que Aprendeu a Sentir Emoções',
    category: 'Narrativa / História',
    ageGroup: '12-14 anos',
    description: 'Em 2080, um pequeno robô de laboratório chamado X-7 começa a demonstrar curiosidade e empatia ao ver um pássaro ferido na janela.',
    type: 'WWW',
    defaultImages: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80'
    ],
    suggestedWords: ['circuitos', 'curiosidade', 'amizade', 'descoberta', 'futuro']
  }
];

export const INITIAL_INSPIRATION_IMAGES: ImageInspiration[] = [
  {
    id: 'img-1',
    url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80',
    title: 'Escrita e Criatividade',
    source: 'default'
  },
  {
    id: 'img-2',
    url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80',
    title: 'Estudos e Ideias',
    source: 'default'
  },
  {
    id: 'img-3',
    url: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&auto=format&fit=crop&q=80',
    title: 'Mundo de Histórias',
    source: 'default'
  }
];
