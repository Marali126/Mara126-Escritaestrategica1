import { StrategyItem, SelfTalkOption, TransitionWord, StorySpark } from '../types';

// POE + TREE Strategy (Persuasivo / Opinativo)
export const POW_TREE_STRATEGY: StrategyItem[] = [
  {
    id: 'p_pow',
    letter: 'P',
    title: 'Pense e Planeja',
    description: 'Escolha sobre o que escrever e decida sua opinião principal.',
    checked: false,
    color: '#E86F37', // Orange
    helperPrompt: 'Qual é o tema e qual a sua posição sobre ele?'
  },
  {
    id: 'o_pow',
    letter: 'O',
    title: 'Organiza com T.R.E.E.',
    description: 'Monte suas notas usando a estrutura em árvore antes de escrever.',
    checked: false,
    color: '#0F85A5', // Teal
    helperPrompt: 'Preencha o Tópico (T), as Razões (R), as Explicações (E) e o Encerramento (E) abaixo.'
  },
  {
    id: 'w_pow',
    letter: 'E',
    title: 'Escreva e Expanda',
    description: 'Transforme suas notas em parágrafos completos e adicione detalhes ricos.',
    checked: false,
    color: '#932966', // Violet
    helperPrompt: 'Escreva usando conectivos para unir suas frases e ideias!'
  },
  {
    id: 'tree_t',
    letter: 'T',
    title: 'Tópico e Opinião Central',
    description: 'Diga claramente ao leitor qual é a sua opinião ou ideia principal.',
    checked: false,
    color: '#10B981', // Emerald
    helperPrompt: 'Exemplo: "Acredito firmemente que os jogos educativos deveriam ser usados nas escolas..."'
  },
  {
    id: 'tree_r',
    letter: 'R',
    title: 'Razões e Motivos (Pelo menos 3)',
    description: 'Dê pelo menos 3 razões fortes que apoiam e defendem a sua opinião.',
    checked: false,
    color: '#3B82F6', // Blue
    helperPrompt: 'Razão 1: Melhora o raciocínio; Razão 2: Estimula trabalho em equipe; Razão 3: Torna as aulas motivadoras.'
  },
  {
    id: 'tree_e1',
    letter: 'E',
    title: 'Explicações e Exemplos',
    description: 'Forneça exemplos reais, fatos ou detalhes para cada razão dada.',
    checked: false,
    color: '#8B5CF6', // Purple
    helperPrompt: 'Por que essa razão é verdadeira? Dê um exemplo prático do dia a dia.'
  },
  {
    id: 'tree_e2',
    letter: 'E',
    title: 'Encerramento e Conclusão',
    description: 'Reafirme sua opinião de forma marcante e conclua o texto.',
    checked: false,
    color: '#F59E0B', // Amber
    helperPrompt: 'Exemplo: "Por todos esses motivos, incluir jogos educativos é um passo transformador."'
  }
];

// POE + QOQ-OOCS (Narrativa / História: Quem, Onde, Quando, O que Quer, O que Acontece, Como Resolve, Sentimento)
export const POW_NARRATIVE_STRATEGY: StrategyItem[] = [
  {
    id: 'pow_n_p',
    letter: 'P',
    title: 'Pense e Imagina',
    description: 'Escolha a ideia central da sua história ou faísca inspiradora.',
    checked: false,
    color: '#E86F37',
    helperPrompt: 'Quem será o protagonista e qual é o grande mistério?'
  },
  {
    id: 'pow_n_o',
    letter: 'O',
    title: 'Organiza o Roteiro',
    description: 'Responda às perguntas fundamentais da narrativa.',
    checked: false,
    color: '#0F85A5',
    helperPrompt: 'Responda Quem, Onde, Quando, Qual problema, Ação, Reviravolta e Sentimento final.'
  },
  {
    id: 'pow_n_w',
    letter: 'E',
    title: 'Escreva e Expanda (Dá Vida à História)',
    description: 'Escreva frases expressivas, diálogos e descrições dos sentidos (visão, som, tato, cheiro, gosto).',
    checked: false,
    color: '#932966',
    helperPrompt: 'Descreva os sentidos: o que o leitor VÊ, OUVE, SENTE no tato, CHEIRA ou SABOREIA na cena!'
  },
  {
    id: 'narr_q1',
    letter: 'Q',
    title: 'Quem são os Personagens?',
    description: 'Apresente o protagonista, seus traços e virtudes.',
    checked: false,
    color: '#EC4899',
    helperPrompt: 'Nome, idade, jeito de ser ou habilidade especial.'
  },
  {
    id: 'narr_o1',
    letter: 'O',
    title: 'Onde e Quando se passa?',
    description: 'Situe o leitor no tempo e no espaço usando os sentidos.',
    checked: false,
    color: '#14B8A6',
    helperPrompt: 'Na biblioteca silenciosa às 3h da manhã? Em uma floresta com cheiro de chuva?'
  },
  {
    id: 'narr_q2',
    letter: 'Q',
    title: 'Qual é o Conflito ou Problema?',
    description: 'O evento inesperado que muda tudo.',
    checked: false,
    color: '#EF4444',
    helperPrompt: 'Algo desapareceu? O tempo parou? Um segredo foi descoberto?'
  },
  {
    id: 'narr_o2',
    letter: 'O',
    title: 'O que o Personagem faz?',
    description: 'As ações e tentativas de resolver a situação.',
    checked: false,
    color: '#8B5CF6',
    helperPrompt: 'Ação principal para enfrentar o desafio.'
  },
  {
    id: 'narr_o3',
    letter: 'O',
    title: 'O que acontece depois?',
    description: 'A reviravolta ou momento de maior suspense (Clímax).',
    checked: false,
    color: '#F59E0B',
    helperPrompt: 'Um obstáculo surpresa surge bem no meio do plano!'
  },
  {
    id: 'narr_c',
    letter: 'C',
    title: 'Como o problema se Resolve?',
    description: 'O desfecho inteligente ou corajoso da aventura.',
    checked: false,
    color: '#10B981',
    helperPrompt: 'Como o protagonista usa sua inteligência ou colaboração?'
  },
  {
    id: 'narr_s',
    letter: 'S',
    title: 'Sentimento Final e Aprendizado',
    description: 'Como os personagens se sentem no final e o que aprenderam.',
    checked: false,
    color: '#6366F1',
    helperPrompt: 'Alívio, orgulho, amizade fortalecida?'
  }
];

// M.O.P.A. Strategy (Convenções de Escrita e Ortografia - Adaptação de C.O.P.S. de Graham & Harris para Português)
export const MOPA_CONVENTIONS_STRATEGY: StrategyItem[] = [
  {
    id: 'mopa_m',
    letter: 'M',
    title: 'Maiúsculas (Letras Maiúsculas)',
    description: 'Verifique se todas as frases começam com letra maiúscula e se nomes próprios e títulos estão corretos.',
    checked: false,
    color: '#0F85A5',
    helperPrompt: 'Conferi o início de cada frase e os nomes de pessoas/lugares?'
  },
  {
    id: 'mopa_o',
    letter: 'O',
    title: 'Ortografia (Grafia das Palavras)',
    description: 'Revise palavras difíceis, duvidosas e consulte o dicionário ou o banco de palavras em caso de dúvida.',
    checked: false,
    color: '#10B981',
    helperPrompt: 'Sublinhei ou corrigi as palavras das quais não tinha certeza da grafia?'
  },
  {
    id: 'mopa_p',
    letter: 'P',
    title: 'Pontuação (Pontuação das Frases)',
    description: 'Confira se cada frase tem um ponto final (.), interrogação (?) ou exclamação (!), e se usou vírgulas nas pausas.',
    checked: false,
    color: '#932966',
    helperPrompt: 'Coloquei o sinal de pontuação correto no fim de cada pensamento?'
  },
  {
    id: 'mopa_a',
    letter: 'A',
    title: 'Acentuação & Aparência (Acentos e Organização)',
    description: 'Examine acentos ortográficos, espaçamento das palavras, recuo de parágrafos e legibilidade visual.',
    checked: false,
    color: '#E86F37',
    helperPrompt: 'Meu texto está bem acentuado, limpo, alinhado e fácil de ler?'
  }
];

export const COPS_CONVENTIONS_STRATEGY = MOPA_CONVENTIONS_STRATEGY;

// S.C.A.N. Strategy (Revisão e Clareza de Frases - Graham & Harris)
export const SCAN_REVISION_STRATEGY: StrategyItem[] = [
  {
    id: 'scan_s',
    letter: 'S',
    title: 'Size (Tamanho das Frases)',
    description: 'Leia em voz alta para conferir se as frases não estão curtas demais (incompletas) ou longas demais (cansativas).',
    checked: false,
    color: '#3B82F6',
    helperPrompt: 'Alguma frase precisa ser dividida em duas ou enriquecida?'
  },
  {
    id: 'scan_c',
    letter: 'C',
    title: 'Clarity (Clareza do Significado)',
    description: 'Verifique se o leitor entenderá exatamente o que você quis dizer, sem confusões ou ambiguidades.',
    checked: false,
    color: '#8B5CF6',
    helperPrompt: 'Sua ideia principal ficou cristalina para quem está lendo?'
  },
  {
    id: 'scan_a',
    letter: 'A',
    title: 'Add (Adicionar Conectivos e Detalhes)',
    description: 'Adicione palavras de transição ricas e use os sentidos para descrever e deixar o texto mais expressivo.',
    checked: false,
    color: '#EC4899',
    helperPrompt: 'Inseriu conectivos como "Além disso", "Consequentemente" ou "Por outro lado"?'
  },
  {
    id: 'scan_n',
    letter: 'N',
    title: 'Note (Notar e Corrigir Erros)',
    description: 'Procure por repetições desnecessárias de palavras e erros de concordância verbal ou nominal.',
    checked: false,
    color: '#F59E0B',
    helperPrompt: 'Substituiu palavras repetidas por sinônimos adequados?'
  }
];

// P.A.R.A.F.O. Strategy (Estrutura e Organização de Parágrafos - Adaptação de P.L.E.A.S.E. de Graham & Harris para Português)
export const PARAFO_PARAGRAPH_STRATEGY: StrategyItem[] = [
  {
    id: 'parafo_p',
    letter: 'P',
    title: 'Pense no Foco (Escolha o Tema do Parágrafo)',
    description: 'Escolha o assunto único e central sobre o qual este parágrafo vai tratar.',
    checked: false,
    color: '#14B8A6',
    helperPrompt: 'Qual é o assunto principal deste parágrafo?'
  },
  {
    id: 'parafo_a1',
    letter: 'A',
    title: 'Anote os Detalhes (Liste Ideias e Fatos)',
    description: 'Anote rapidamente 2 a 3 fatos, motivos ou exemplos que explicam e apoiam o assunto.',
    checked: false,
    color: '#0F85A5',
    helperPrompt: 'Quais detalhes apoiam essa ideia central?'
  },
  {
    id: 'parafo_r',
    letter: 'R',
    title: 'Reordene com Lógica (Organize a Sequência)',
    description: 'Organize a melhor sequência lógica para apresentar suas ideias de forma fluida.',
    checked: false,
    color: '#E86F37',
    helperPrompt: 'Qual ideia deve vir primeiro, no meio e por último?'
  },
  {
    id: 'parafo_a2',
    letter: 'A',
    title: 'Ative o Tópico Frasal (Abre com Frase Forte)',
    description: 'Escreva a primeira frase marcante do parágrafo que apresenta o tema diretamente.',
    checked: false,
    color: '#932966',
    helperPrompt: 'Inicie com uma frase clara e atraente.'
  },
  {
    id: 'parafo_f',
    letter: 'F',
    title: 'Fortaleça com Conectivos (Frases de Apoio)',
    description: 'Escreva as frases de explicação ligando as ideias com conectivos de transição.',
    checked: false,
    color: '#10B981',
    helperPrompt: 'Use conectivos de transição para unir e fortalecer os detalhes.'
  },
  {
    id: 'parafo_o',
    letter: 'O',
    title: 'Organize o Encerramento (Frase de Fechamento)',
    description: 'Escreva uma frase de encerramento que conclua a ideia do parágrafo com clareza.',
    checked: false,
    color: '#6366F1',
    helperPrompt: 'Como essa frase fecha a ideia do parágrafo?'
  }
];

export const PLEASE_PARAGRAPH_STRATEGY = PARAFO_PARAGRAPH_STRATEGY;

// Self-Talk Options (Fala Interna Autorregulada)
export const SELF_TALK_OPTIONS: SelfTalkOption[] = [
  // Para Começar
  {
    id: 'st_start_1',
    category: 'start',
    phrase: '🧠 Eu consigo organizar minhas ideias no plano antes de começar a escrever!'
  },
  {
    id: 'st_start_2',
    category: 'start',
    phrase: '🚀 Boas produções começam com um bom mapa de pensamentos.'
  },
  {
    id: 'st_start_3',
    category: 'start',
    phrase: '💡 Tenho opiniões valiosas para compartilhar com o mundo!'
  },

  // Para quando Empacar
  {
    id: 'st_stuck_1',
    category: 'stuck',
    phrase: '⏸️ Sem pânico! Posso olhar meu checklist T.R.E.E. e escolher uma razão.'
  },
  {
    id: 'st_stuck_2',
    category: 'stuck',
    phrase: '🔍 Se a palavra certa não vem, posso usar uma palavra de transição do banco!'
  },
  {
    id: 'st_stuck_3',
    category: 'stuck',
    phrase: '🌊 Escrever é um processo. Rascunhos servem para testar ideias sem medo de errar.'
  },

  // Para Revisar
  {
    id: 'st_editing_1',
    category: 'editing',
    phrase: '📖 Ler meu texto em voz alta me ajuda a ver se tudo faz sentido.'
  },
  {
    id: 'st_editing_2',
    category: 'editing',
    phrase: '✨ Posso enriquecer minhas frases com adjetivos fortes e conectivos de 1 milhão!'
  },

  // Autorreforço
  {
    id: 'st_praise_1',
    category: 'praise',
    phrase: '🏆 Orgulho do meu esforço! Quanto mais pratico a estratégia, mais fácil fica.'
  },
  {
    id: 'st_praise_2',
    category: 'praise',
    phrase: '🌟 Eu controlei minha atenção e segui o plano do início ao fim!'
  }
];

// Banco de Palavras de 1 Milhão de Dólares (Transições e Conectivos)
export const TRANSITION_WORDS: TransitionWord[] = [
  // Introdução
  { word: 'Para começar', category: 'introducao', example: 'Para começar, é importante destacar que...' },
  { word: 'Atualmente', category: 'introducao', example: 'Atualmente, muitas pessoas percebem que...' },
  { word: 'Primeiramente', category: 'introducao', example: 'Primeiramente, devemos analisar o impacto de...' },

  // Adição / Conexão
  { word: 'Além disso', category: 'conexao', example: 'Além disso, os jogos educativos estimulam a criatividade.' },
  { word: 'Somado a isso', category: 'conexao', example: 'Somado a isso, o hábito da leitura expande o vocabulário.' },
  { word: 'Da mesma forma', category: 'conexao', example: 'Da mesma forma, o trabalho em equipe traz resultados superiores.' },
  { word: 'Também', category: 'conexao', example: 'Também vale ressaltar que...' },

  // Contraste / Oposição
  { word: 'Por outro lado', category: 'contraste', example: 'Por outro lado, alguns críticos argumentam que...' },
  { word: 'No entanto', category: 'contraste', example: 'No entanto, os benefícios superam os desafios.' },
  { word: 'Embora', category: 'contraste', example: 'Embora pareça difícil no início, com prática torna-se natural.' },
  { word: 'Apesar de', category: 'contraste', example: 'Apesar de existirem opiniões contrárias...' },

  // Causa e Efeito / Explicação
  { word: 'Consequentemente', category: 'causa', example: 'Consequentemente, os alunos desenvolvem autonomia.' },
  { word: 'Por causa de', category: 'causa', example: 'Por causa de sua capacidade de envolver os estudantes...' },
  { word: 'Devido ao fato de', category: 'causa', example: 'Devido ao fato de ser uma ferramenta dinâmica...' },
  { word: 'Isso explica por que', category: 'causa', example: 'Isso explica por que tantas jovens lideranças surgem hoje.' },

  // Conclusão
  { word: 'Em síntese', category: 'conclusao', example: 'Em síntese, o uso de estratégias fortalece nossa escrita.' },
  { word: 'Por todos esses motivos', category: 'conclusao', example: 'Por todos esses motivos, a proposta deve ser apoiada.' },
  { word: 'Em conclusão', category: 'conclusao', example: 'Em conclusão, planejar antes de escrever garante clareza.' },
  { word: 'Com efeito', category: 'conclusao', example: 'Com efeito, a mudança traz benefícios para toda a comunidade.' }
];

// Story Sparks (Faísca de Histórias) para idades de 9 a 14 anos
export const STORY_SPARKS: StorySpark[] = [
  {
    id: 'spark_1',
    title: 'O Diário que Escrevia Sozinho',
    category: 'misterio',
    ageRange: '9-11',
    starter: 'Durante uma faxina no sótão da escola, Lucas encontrou um diário antigo com capa de veludo verde. Quando ele abriu, uma frase começou a surgir em tinta dourada em tempo real: "Lucas, não abra a porta do laboratório depois do sinal..."',
    characterArchetype: {
      name: 'Lucas, o Curioso Observador',
      description: 'Adora resolver enigmas e sempre carrega uma lupa e um bloco de notas.',
      motive: 'Descobrir quem está escrevendo no diário.',
      fear: 'Ficar preso em um mistério sem solução.'
    },
    plotTwist: 'A mensagem no diário foi escrita por ele mesmo... só que 10 anos no futuro!',
    visualPromptEmoji: '📖🔍✨',
    suggestedGenre: 'narrative',
    keywords: ['mistério', 'diário', 'escola', 'segredo']
  },
  {
    id: 'spark_2',
    title: 'O Simulador de Mundos da Sala 204',
    category: 'scifi',
    ageRange: '12-14',
    starter: 'No laboratório de informática, Sofia descobriu uma pasta oculta chamada "Projeto Ecossistema". Ao dar dois cliques, o monitor emitiu um pulso de luz azul e a sala inteira foi substituída por uma floresta bioluminescente flutuante.',
    characterArchetype: {
      name: 'Sofia, a Programadora Audaz',
      description: 'Lógica, rápida em tomar decisões, amante de ciência e tecnologia.',
      motive: 'Proteger o ecossistema virtual antes que o servidor desligue.',
      fear: 'Apagar acidentalmente o mundo que acabou de descobrir.'
    },
    plotTwist: 'Os animais virtuais começam a se comunicar ativamente enviando códigos em Python!',
    visualPromptEmoji: '💻🌌🌿',
    suggestedGenre: 'narrative',
    keywords: ['ficção científica', 'floresta virtual', 'tecnologia', 'código']
  },
  {
    id: 'spark_3',
    title: 'O Torneio das Mentes Brilhantes',
    category: 'cotidiano',
    ageRange: '9-11',
    starter: 'A diretora anunciou o maior desafio do ano: cada equipe terá 48 horas para inventar algo que resolva um problema real do bairro. O time de Gabriel tem ideias incríveis, mas ninguém consegue entrar em acordo sobre qual escolher.',
    characterArchetype: {
      name: 'Gabriel, o Empático Mediador',
      description: 'Consegue ver o lado bom de cada colega, mas tem dificuldade de impor sua própria voz.',
      motive: 'Unir a equipe para vencer o torneio.',
      fear: 'Decepcionar os amigos ou ver o grupo se separar.'
    },
    plotTwist: 'A melhor invenção surge da combinação acidental das três piores ideias de cada um!',
    visualPromptEmoji: '🏆💡🤖',
    suggestedGenre: 'persuasive',
    keywords: ['trabalho em equipe', 'invenção', 'desafio escolar', 'amizade']
  },
  {
    id: 'spark_4',
    title: 'A Bússola do Tempo Perdido',
    category: 'fantasia',
    ageRange: '12-14',
    starter: 'Ao comprar um relógio quebrado na feira de antiguidades, Maya percebeu que ao girar o ponteiro ao contrário, ela não voltava no tempo... ela desacelerava tudo ao seu redor por exatos 30 segundos.',
    characterArchetype: {
      name: 'Maya, a Estrategista Silenciosa',
      description: 'Percebe detalhes que os outros deixam passar, muito observadora.',
      motive: 'Usar o artefato para evitar acidentes e injustiças.',
      fear: 'Gastar a energia da bússola quando mais precisar dela.'
    },
    plotTwist: 'Existe outra pessoa na cidade que possui um anel que avança o tempo!',
    visualPromptEmoji: '⏳🧭⚡',
    suggestedGenre: 'narrative',
    keywords: ['fantasia', 'tempo', 'segredo', 'artefato mágico']
  },
  {
    id: 'spark_5',
    title: 'A Cidade sem Telas por 7 Dias',
    category: 'cotidiano',
    ageRange: '12-14',
    starter: 'Devido a um pico magnético raro, toda a internet e dispositivos eletrônicos da cidade de Porto Claro ficarão desligados por uma semana inteira. Como a rotina dos adolescentes vai mudar radicalmente?',
    characterArchetype: {
      name: 'Rafa, o Gamer Comunicativo',
      description: 'Habituado a transmitir jogos online, precisa reinventar sua forma de se conectar.',
      motive: 'Criar uma rede de comunicação física usando rádio e cartas escritas.',
      fear: 'O tédio absoluto ou o isolamento social.'
    },
    plotTwist: 'As pessoas descobrem talentos escondidos e jogos de tabuleiro no porão esquecido!',
    visualPromptEmoji: '📻📜🚲',
    suggestedGenre: 'persuasive',
    keywords: ['tecnologia vs vida real', 'desafio', 'comunidade', 'desconexão']
  },
  {
    id: 'spark_6',
    title: 'O Guardião das Palavras Esquece-Tudo',
    category: 'aventura',
    ageRange: '9-11',
    starter: 'Um vilão misterioso chamado "Borrador" começou a roubar palavras importantes dos dicionários. De repente, as pessoas não lembravam mais palavras como "gentileza", "coragem" e "esperança".',
    characterArchetype: {
      name: 'Caio, o Jovem Poeta',
      description: 'Apaixonado por rimas e histórias, guarda um caderno secreto de vocabulário especial.',
      motive: 'Recuperar o significado das palavras roubadas antes que o mundo fique cinza.',
      fear: 'Esquecer a palavra que descreve quem ele ama.'
    },
    plotTwist: 'Cada vez que Caio ensina uma palavra rica para alguém, uma joia de luz surge em seu mapa!',
    visualPromptEmoji: '✍️💎🎨',
    suggestedGenre: 'narrative',
    keywords: ['palavras', 'aventura', 'salvar o mundo', 'linguagem']
  }
];

// Recompensas e Emblemas SRSD
export const SRSD_BADGES = [
  { id: 'badge_planner', title: 'Mestre do Planejamento', emoji: '🗺️', description: 'Completou todas as etapas do POE antes de escrever.' },
  { id: 'badge_tree', title: 'Guardião da Árvore T.R.E.E.', emoji: '🌳', description: 'Inseriu Tópico, 3 Razões, Explicação e Encerramento.' },
  { id: 'badge_vocabulary', title: 'Vocabulário de 1 Milhão', emoji: '💎', description: 'Usou pelo menos 4 palavras de transição ricas no texto.' },
  { id: 'badge_selftalk', title: 'Mente Autorregulada', emoji: '🧠', description: 'Praticou a fala interna positiva para superar um momento de dúvida.' },
  { id: 'badge_author', title: 'Escritor Independente', emoji: '✍️', description: 'Concluiu uma produção completa com revisão e autorreflexão.' }
];
