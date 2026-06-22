export type TipoRequisito = "funcional" | "nao-funcional"

export type Requisito = {
  texto: string
  correto: boolean
  // Tipo do requisito (definido apenas para os corretos): funcional ou não-funcional
  tipo?: TipoRequisito
  // Justificativa exibida no feedback
  explicacao: string
}

export type Software = {
  id: string
  nome: string
  emoji: string
  descricao: string
  requisitos: Requisito[]
}

/**
 * Cada software possui 15 requisitos em "balões":
 * - 5 corretos (requisitos que REALMENTE pertencem àquele sistema), cada um
 *   classificado como funcional (FR) ou não-funcional (RNF)
 * - 10 distratores (requisitos plausíveis, mas que pertencem a outros sistemas)
 *
 * Objetivo pedagógico: o aluno deve ANALISAR o sistema sorteado e IDENTIFICAR
 * quais requisitos são adequados a ele e de que tipo são.
 */
export const SOFTWARES: Software[] = [
  {
    id: "delivery",
    nome: "Aplicativo de Delivery de Comida",
    emoji: "🍔",
    descricao:
      "Um app onde o usuário pesquisa restaurantes, monta um pedido, paga e acompanha a entrega em tempo real.",
    requisitos: [
      { texto: "Permitir adicionar itens ao carrinho de compras", correto: true, tipo: "funcional", explicacao: "Requisito funcional essencial: montar o pedido antes de finalizar." },
      { texto: "Rastrear a localização do entregador em tempo real", correto: true, tipo: "funcional", explicacao: "Requisito funcional típico de delivery: acompanhar a entrega no mapa." },
      { texto: "Calcular a taxa de entrega por distância", correto: true, tipo: "funcional", explicacao: "Requisito funcional: o valor do frete depende da distância até o cliente." },
      { texto: "Exibir o cardápio de cada restaurante", correto: true, tipo: "funcional", explicacao: "Requisito funcional: o usuário precisa ver os pratos disponíveis." },
      { texto: "Carregar a lista de restaurantes em até 2 segundos", correto: true, tipo: "nao-funcional", explicacao: "Requisito NÃO funcional de desempenho: tempo de resposta." },
      { texto: "Permitir transferências bancárias via PIX entre contas", correto: false, explicacao: "Pertence a um banco digital, não a um app de delivery." },
      { texto: "Reproduzir músicas em alta qualidade offline", correto: false, explicacao: "É requisito de um app de streaming de música." },
      { texto: "Emitir carteirinha digital de aluno", correto: false, explicacao: "Pertence a um sistema acadêmico, não a delivery." },
      { texto: "Controlar empréstimos e devoluções de livros", correto: false, explicacao: "É requisito de um sistema de biblioteca." },
      { texto: "Gerar receita médica eletrônica", correto: false, explicacao: "Pertence a um sistema de agendamento médico." },
      { texto: "Permitir agendar consultas com especialistas", correto: false, explicacao: "É requisito de um sistema de saúde." },
      { texto: "Emitir certificado de conclusão de curso", correto: false, explicacao: "Pertence a uma plataforma de cursos online." },
      { texto: "Controlar séries e repetições de exercícios", correto: false, explicacao: "É requisito de um app de academia/fitness." },
      { texto: "Fazer chamadas de vídeo em grupo", correto: false, explicacao: "Pertence a um app de mensagens, não a delivery." },
      { texto: "Calcular rotas de carona compartilhada", correto: false, explicacao: "É requisito de um app de transporte/carona." },
    ],
  },
  {
    id: "banco",
    nome: "Aplicativo de Banco Digital",
    emoji: "🏦",
    descricao:
      "Um app onde o usuário consulta saldo, faz transferências, paga contas e gerencia cartões com segurança.",
    requisitos: [
      { texto: "Realizar transferências via PIX entre contas", correto: true, tipo: "funcional", explicacao: "Requisito funcional central de um banco digital." },
      { texto: "Exibir o saldo e o extrato da conta", correto: true, tipo: "funcional", explicacao: "Requisito funcional: consultar movimentações financeiras." },
      { texto: "Pagar boletos por leitura de código de barras", correto: true, tipo: "funcional", explicacao: "Requisito funcional comum em apps bancários." },
      { texto: "Criptografar todos os dados financeiros do usuário", correto: true, tipo: "nao-funcional", explicacao: "Requisito NÃO funcional de segurança, obrigatório em bancos." },
      { texto: "Autenticar o usuário com biometria", correto: true, tipo: "nao-funcional", explicacao: "Requisito NÃO funcional de segurança: proteger o acesso à conta." },
      { texto: "Rastrear a entrega de comida em tempo real", correto: false, explicacao: "Pertence a um app de delivery." },
      { texto: "Montar playlists personalizadas de música", correto: false, explicacao: "É requisito de um app de streaming de música." },
      { texto: "Reservar livros disponíveis no acervo", correto: false, explicacao: "Pertence a um sistema de biblioteca." },
      { texto: "Registrar a frequência cardíaca durante o treino", correto: false, explicacao: "É requisito de um app de fitness." },
      { texto: "Avaliar a corrida e o motorista ao final da viagem", correto: false, explicacao: "Pertence a um app de transporte/carona." },
      { texto: "Exibir aulas em vídeo divididas por módulos", correto: false, explicacao: "É requisito de uma plataforma EAD." },
      { texto: "Enviar mensagens com confirmação de leitura", correto: false, explicacao: "Pertence a um app de mensagens." },
      { texto: "Calcular o frete de produtos por CEP", correto: false, explicacao: "É requisito de uma loja virtual." },
      { texto: "Agendar horário com um médico cardiologista", correto: false, explicacao: "Pertence a um sistema de agendamento médico." },
      { texto: "Recomendar pratos com base em pedidos anteriores", correto: false, explicacao: "É requisito de um app de delivery." },
    ],
  },
  {
    id: "biblioteca",
    nome: "Sistema de Biblioteca",
    emoji: "📚",
    descricao:
      "Um sistema para gerenciar o acervo, controlar empréstimos de livros e administrar usuários da biblioteca.",
    requisitos: [
      { texto: "Controlar empréstimos e devoluções de livros", correto: true, tipo: "funcional", explicacao: "Requisito funcional central de uma biblioteca." },
      { texto: "Permitir reservar livros disponíveis no acervo", correto: true, tipo: "funcional", explicacao: "Requisito funcional: garantir um exemplar ao usuário." },
      { texto: "Calcular multas por atraso na devolução", correto: true, tipo: "funcional", explicacao: "Requisito funcional comum em bibliotecas." },
      { texto: "Pesquisar livros por título, autor ou ISBN", correto: true, tipo: "funcional", explicacao: "Requisito funcional de busca no catálogo." },
      { texto: "Manter o sistema disponível 99% do horário de funcionamento", correto: true, tipo: "nao-funcional", explicacao: "Requisito NÃO funcional de disponibilidade/confiabilidade." },
      { texto: "Processar pagamentos via cartão de crédito de pedidos", correto: false, explicacao: "Pertence a uma loja virtual." },
      { texto: "Rastrear a localização do entregador no mapa", correto: false, explicacao: "É requisito de um app de delivery." },
      { texto: "Reproduzir podcasts e músicas offline", correto: false, explicacao: "Pertence a um app de streaming." },
      { texto: "Emitir receitas médicas eletrônicas", correto: false, explicacao: "É requisito de um sistema médico." },
      { texto: "Compartilhar localização em tempo real no chat", correto: false, explicacao: "Pertence a um app de mensagens." },
      { texto: "Registrar o peso levantado em cada exercício", correto: false, explicacao: "É requisito de um app de fitness." },
      { texto: "Estimar o preço da corrida antes de confirmar", correto: false, explicacao: "Pertence a um app de transporte/carona." },
      { texto: "Gerar nota fiscal eletrônica da compra", correto: false, explicacao: "É requisito de uma loja virtual." },
      { texto: "Liberar o próximo módulo após concluir uma prova", correto: false, explicacao: "Pertence a uma plataforma EAD." },
      { texto: "Transferir dinheiro entre contas via PIX", correto: false, explicacao: "É requisito de um banco digital." },
    ],
  },
  {
    id: "streaming",
    nome: "Aplicativo de Streaming de Música",
    emoji: "🎵",
    descricao:
      "Um app onde o usuário ouve músicas, cria playlists, baixa faixas para ouvir offline e recebe recomendações.",
    requisitos: [
      { texto: "Reproduzir músicas em streaming contínuo", correto: true, tipo: "funcional", explicacao: "Requisito funcional central de um app de música." },
      { texto: "Criar e editar playlists personalizadas", correto: true, tipo: "funcional", explicacao: "Requisito funcional: organizar as músicas favoritas." },
      { texto: "Baixar faixas para ouvir offline", correto: true, tipo: "funcional", explicacao: "Requisito funcional importante para uso sem internet." },
      { texto: "Recomendar músicas com base no histórico", correto: true, tipo: "funcional", explicacao: "Requisito funcional: personalização por preferências." },
      { texto: "Garantir baixa latência ao iniciar a reprodução", correto: true, tipo: "nao-funcional", explicacao: "Requisito NÃO funcional de desempenho." },
      { texto: "Controlar empréstimo e devolução de exemplares", correto: false, explicacao: "Pertence a um sistema de biblioteca." },
      { texto: "Calcular a taxa de entrega de um pedido", correto: false, explicacao: "É requisito de um app de delivery." },
      { texto: "Agendar consultas médicas online", correto: false, explicacao: "Pertence a um sistema de saúde." },
      { texto: "Pagar boletos por código de barras", correto: false, explicacao: "É requisito de um banco digital." },
      { texto: "Rastrear o motorista da carona no mapa", correto: false, explicacao: "Pertence a um app de transporte." },
      { texto: "Emitir certificado ao concluir um curso", correto: false, explicacao: "É requisito de uma plataforma EAD." },
      { texto: "Registrar séries e repetições de um treino", correto: false, explicacao: "Pertence a um app de fitness." },
      { texto: "Calcular o frete de um produto por CEP", correto: false, explicacao: "É requisito de uma loja virtual." },
      { texto: "Enviar mensagens com confirmação de leitura", correto: false, explicacao: "Pertence a um app de mensagens." },
      { texto: "Exibir o cardápio de restaurantes próximos", correto: false, explicacao: "É requisito de um app de delivery." },
    ],
  },
  {
    id: "transporte",
    nome: "Aplicativo de Transporte / Carona",
    emoji: "🚗",
    descricao:
      "Um app onde o passageiro solicita uma viagem, acompanha o motorista no mapa, paga e avalia a corrida.",
    requisitos: [
      { texto: "Estimar o preço da corrida antes de confirmar", correto: true, tipo: "funcional", explicacao: "Requisito funcional: transparência de valor ao passageiro." },
      { texto: "Rastrear o motorista no mapa em tempo real", correto: true, tipo: "funcional", explicacao: "Requisito funcional central de um app de transporte." },
      { texto: "Avaliar o motorista e a viagem ao final", correto: true, tipo: "funcional", explicacao: "Requisito funcional para qualidade do serviço." },
      { texto: "Conectar o passageiro ao motorista mais próximo", correto: true, tipo: "funcional", explicacao: "Requisito funcional de pareamento (matching)." },
      { texto: "Atualizar a posição no mapa sem travamentos", correto: true, tipo: "nao-funcional", explicacao: "Requisito NÃO funcional de desempenho/usabilidade." },
      { texto: "Controlar empréstimo de livros do acervo", correto: false, explicacao: "Pertence a um sistema de biblioteca." },
      { texto: "Criar playlists de músicas favoritas", correto: false, explicacao: "É requisito de um app de streaming." },
      { texto: "Emitir receita médica eletrônica", correto: false, explicacao: "Pertence a um sistema médico." },
      { texto: "Exibir aulas em vídeo por módulos", correto: false, explicacao: "É requisito de uma plataforma EAD." },
      { texto: "Pagar boletos por código de barras", correto: false, explicacao: "Pertence a um banco digital." },
      { texto: "Registrar a frequência cardíaca no treino", correto: false, explicacao: "É requisito de um app de fitness." },
      { texto: "Exibir o cardápio de um restaurante", correto: false, explicacao: "Pertence a um app de delivery." },
      { texto: "Gerar nota fiscal eletrônica da compra", correto: false, explicacao: "É requisito de uma loja virtual." },
      { texto: "Enviar figurinhas e emojis em conversas", correto: false, explicacao: "Pertence a um app de mensagens." },
      { texto: "Calcular multa por atraso na devolução", correto: false, explicacao: "É requisito de uma biblioteca." },
    ],
  },
  {
    id: "ecommerce",
    nome: "Loja Virtual (E-commerce)",
    emoji: "🛒",
    descricao:
      "Uma loja online onde o usuário navega por produtos, adiciona ao carrinho, calcula frete e finaliza a compra.",
    requisitos: [
      { texto: "Calcular o frete de produtos pelo CEP", correto: true, tipo: "funcional", explicacao: "Requisito funcional: definir o custo de envio." },
      { texto: "Processar pagamentos por cartão de crédito", correto: true, tipo: "funcional", explicacao: "Requisito funcional para finalizar a compra." },
      { texto: "Gerar nota fiscal eletrônica do pedido", correto: true, tipo: "funcional", explicacao: "Requisito funcional/legal de venda online." },
      { texto: "Controlar o estoque disponível de cada produto", correto: true, tipo: "funcional", explicacao: "Requisito funcional: evitar vender item indisponível." },
      { texto: "Suportar 10 mil acessos simultâneos sem cair", correto: true, tipo: "nao-funcional", explicacao: "Requisito NÃO funcional de escalabilidade/desempenho." },
      { texto: "Rastrear o entregador de comida no mapa", correto: false, explicacao: "Pertence a um app de delivery." },
      { texto: "Reproduzir músicas offline", correto: false, explicacao: "É requisito de um app de streaming." },
      { texto: "Reservar livros do acervo", correto: false, explicacao: "Pertence a um sistema de biblioteca." },
      { texto: "Agendar consulta com um médico", correto: false, explicacao: "É requisito de um sistema médico." },
      { texto: "Estimar o preço de uma corrida", correto: false, explicacao: "Pertence a um app de transporte." },
      { texto: "Emitir certificado de curso concluído", correto: false, explicacao: "É requisito de uma plataforma EAD." },
      { texto: "Contar calorias gastas no treino", correto: false, explicacao: "Pertence a um app de fitness." },
      { texto: "Enviar mensagens com confirmação de leitura", correto: false, explicacao: "É requisito de um app de mensagens." },
      { texto: "Fazer transferências via PIX", correto: false, explicacao: "Pertence a um banco digital." },
      { texto: "Calcular a melhor rota até um endereço", correto: false, explicacao: "É requisito de um app de transporte." },
    ],
  },
  {
    id: "fitness",
    nome: "Aplicativo de Academia / Fitness",
    emoji: "💪",
    descricao:
      "Um app onde o usuário monta treinos, registra exercícios, acompanha a evolução física e conta calorias.",
    requisitos: [
      { texto: "Registrar séries, repetições e carga dos exercícios", correto: true, tipo: "funcional", explicacao: "Requisito funcional central de um app de treino." },
      { texto: "Montar planos de treino personalizados", correto: true, tipo: "funcional", explicacao: "Requisito funcional de personalização." },
      { texto: "Acompanhar a evolução de peso e medidas", correto: true, tipo: "funcional", explicacao: "Requisito funcional de progresso." },
      { texto: "Calcular calorias gastas em cada atividade", correto: true, tipo: "funcional", explicacao: "Requisito funcional comum em apps fitness." },
      { texto: "Funcionar mesmo sem conexão com a internet", correto: true, tipo: "nao-funcional", explicacao: "Requisito NÃO funcional de disponibilidade (uso offline)." },
      { texto: "Rastrear o entregador de comida", correto: false, explicacao: "Pertence a um app de delivery." },
      { texto: "Controlar empréstimos de livros", correto: false, explicacao: "É requisito de uma biblioteca." },
      { texto: "Pagar boletos por código de barras", correto: false, explicacao: "Pertence a um banco digital." },
      { texto: "Reproduzir filmes e séries em alta definição", correto: false, explicacao: "Não pertence a um app de fitness." },
      { texto: "Estimar o valor de uma corrida", correto: false, explicacao: "É requisito de um app de transporte." },
      { texto: "Emitir nota fiscal de uma compra", correto: false, explicacao: "Pertence a uma loja virtual." },
      { texto: "Agendar consulta médica online", correto: false, explicacao: "É requisito de um sistema de saúde." },
      { texto: "Enviar mensagens em grupo", correto: false, explicacao: "Pertence a um app de mensagens." },
      { texto: "Exibir aulas gravadas por módulos", correto: false, explicacao: "É requisito de uma plataforma EAD." },
      { texto: "Calcular a taxa de entrega de um pedido", correto: false, explicacao: "Pertence a um app de delivery." },
    ],
  },
  {
    id: "medico",
    nome: "Sistema de Agendamento Médico",
    emoji: "🩺",
    descricao:
      "Um sistema onde o paciente agenda consultas, recebe lembretes, acessa o histórico e recebe receitas digitais.",
    requisitos: [
      { texto: "Agendar consultas com médicos por especialidade", correto: true, tipo: "funcional", explicacao: "Requisito funcional central do sistema médico." },
      { texto: "Enviar lembretes automáticos da consulta", correto: true, tipo: "funcional", explicacao: "Requisito funcional para reduzir faltas." },
      { texto: "Emitir receitas médicas eletrônicas", correto: true, tipo: "funcional", explicacao: "Requisito funcional do atendimento." },
      { texto: "Acessar o histórico de atendimentos do paciente", correto: true, tipo: "funcional", explicacao: "Requisito funcional de prontuário." },
      { texto: "Garantir o sigilo dos dados de saúde do paciente", correto: true, tipo: "nao-funcional", explicacao: "Requisito NÃO funcional de privacidade/segurança (LGPD)." },
      { texto: "Rastrear o entregador no mapa", correto: false, explicacao: "Pertence a um app de delivery." },
      { texto: "Calcular o frete por CEP", correto: false, explicacao: "É requisito de uma loja virtual." },
      { texto: "Reproduzir músicas offline", correto: false, explicacao: "Pertence a um app de streaming." },
      { texto: "Controlar empréstimo de livros", correto: false, explicacao: "É requisito de uma biblioteca." },
      { texto: "Registrar carga e repetições de treino", correto: false, explicacao: "Pertence a um app de fitness." },
      { texto: "Estimar o preço de uma corrida", correto: false, explicacao: "É requisito de um app de transporte." },
      { texto: "Emitir certificado de conclusão de curso", correto: false, explicacao: "Pertence a uma plataforma EAD." },
      { texto: "Enviar figurinhas em conversas", correto: false, explicacao: "É requisito de um app de mensagens." },
      { texto: "Transferir dinheiro via PIX", correto: false, explicacao: "Pertence a um banco digital." },
      { texto: "Recomendar pratos por histórico de pedidos", correto: false, explicacao: "É requisito de um app de delivery." },
    ],
  },
  {
    id: "mensagens",
    nome: "Aplicativo de Mensagens",
    emoji: "💬",
    descricao:
      "Um app onde o usuário troca mensagens, faz chamadas, envia mídia e cria grupos de conversa.",
    requisitos: [
      { texto: "Enviar mensagens de texto em tempo real", correto: true, tipo: "funcional", explicacao: "Requisito funcional central de um mensageiro." },
      { texto: "Exibir confirmação de entrega e leitura", correto: true, tipo: "funcional", explicacao: "Requisito funcional de status da mensagem." },
      { texto: "Fazer chamadas de voz e vídeo", correto: true, tipo: "funcional", explicacao: "Requisito funcional comum em apps de mensagem." },
      { texto: "Criar grupos de conversa", correto: true, tipo: "funcional", explicacao: "Requisito funcional de comunicação coletiva." },
      { texto: "Criptografar as mensagens de ponta a ponta", correto: true, tipo: "nao-funcional", explicacao: "Requisito NÃO funcional de segurança/privacidade." },
      { texto: "Calcular a taxa de entrega de um pedido", correto: false, explicacao: "Pertence a um app de delivery." },
      { texto: "Reservar livros no acervo", correto: false, explicacao: "É requisito de uma biblioteca." },
      { texto: "Reproduzir músicas offline", correto: false, explicacao: "Pertence a um app de streaming." },
      { texto: "Agendar consultas médicas", correto: false, explicacao: "É requisito de um sistema médico." },
      { texto: "Estimar o preço de uma corrida", correto: false, explicacao: "Pertence a um app de transporte." },
      { texto: "Calcular o frete por CEP", correto: false, explicacao: "É requisito de uma loja virtual." },
      { texto: "Registrar repetições de um exercício", correto: false, explicacao: "Pertence a um app de fitness." },
      { texto: "Emitir certificado de curso", correto: false, explicacao: "É requisito de uma plataforma EAD." },
      { texto: "Pagar boletos por código de barras", correto: false, explicacao: "Pertence a um banco digital." },
      { texto: "Controlar o estoque de produtos", correto: false, explicacao: "É requisito de uma loja virtual." },
    ],
  },
  {
    id: "ead",
    nome: "Plataforma de Cursos Online (EAD)",
    emoji: "🎓",
    descricao:
      "Uma plataforma onde o aluno assiste a aulas em vídeo, faz atividades, acompanha o progresso e recebe certificado.",
    requisitos: [
      { texto: "Exibir aulas em vídeo organizadas por módulos", correto: true, tipo: "funcional", explicacao: "Requisito funcional central de uma plataforma EAD." },
      { texto: "Aplicar provas e corrigir automaticamente", correto: true, tipo: "funcional", explicacao: "Requisito funcional de avaliação." },
      { texto: "Acompanhar o progresso do aluno no curso", correto: true, tipo: "funcional", explicacao: "Requisito funcional de acompanhamento." },
      { texto: "Emitir certificado ao concluir o curso", correto: true, tipo: "funcional", explicacao: "Requisito funcional de certificação." },
      { texto: "Reproduzir os vídeos sem travar em conexões lentas", correto: true, tipo: "nao-funcional", explicacao: "Requisito NÃO funcional de desempenho/usabilidade." },
      { texto: "Rastrear o entregador de comida no mapa", correto: false, explicacao: "Pertence a um app de delivery." },
      { texto: "Calcular multas por atraso na devolução", correto: false, explicacao: "É requisito de uma biblioteca." },
      { texto: "Reproduzir playlists de música offline", correto: false, explicacao: "Pertence a um app de streaming." },
      { texto: "Estimar o preço de uma corrida", correto: false, explicacao: "É requisito de um app de transporte." },
      { texto: "Pagar boletos por código de barras", correto: false, explicacao: "Pertence a um banco digital." },
      { texto: "Registrar a carga levantada em um treino", correto: false, explicacao: "É requisito de um app de fitness." },
      { texto: "Agendar consulta com um cardiologista", correto: false, explicacao: "Pertence a um sistema médico." },
      { texto: "Calcular o frete de um produto por CEP", correto: false, explicacao: "É requisito de uma loja virtual." },
      { texto: "Enviar mensagens com confirmação de leitura", correto: false, explicacao: "Pertence a um app de mensagens." },
      { texto: "Exibir o cardápio de restaurantes próximos", correto: false, explicacao: "É requisito de um app de delivery." },
    ],
  },
]
