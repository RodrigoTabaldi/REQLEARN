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
      { texto: "Permitir adicionar itens ao carrinho de compras", correto: true, tipo: "funcional", explicacao: "Está correto porque montar um pedido é o ponto de partida de qualquer compra em um app de delivery: o usuário precisa conseguir escolher pratos e acumulá-los antes de finalizar. Sem essa função, não haveria como o cliente comunicar ao restaurante o que deseja comprar." },
      { texto: "Rastrear a localização do entregador em tempo real", correto: true, tipo: "funcional", explicacao: "Está correto porque acompanhar o entregador no mapa é uma das expectativas centrais de quem usa um app de delivery — o cliente quer saber quando a comida vai chegar. É justamente essa visibilidade que diferencia um delivery moderno de um simples pedido por telefone." },
      { texto: "Calcular a taxa de entrega por distância", correto: true, tipo: "funcional", explicacao: "Está correto porque o valor do frete em um delivery normalmente varia conforme o quão longe o cliente está do restaurante. Sem esse cálculo, o app não teria como cobrar de forma justa nem informar o custo total do pedido antes da confirmação." },
      { texto: "Exibir o cardápio de cada restaurante", correto: true, tipo: "funcional", explicacao: "Está correto porque o cliente só consegue montar um pedido se souber o que está disponível: pratos, preços e descrições. Sem exibir o cardápio, o app perderia sua função mais básica, que é conectar o cliente às opções de comida do restaurante." },
      { texto: "Carregar a lista de restaurantes em até 2 segundos", correto: true, tipo: "nao-funcional", explicacao: "Está correto porque, embora não crie uma função nova, define quão rápido a função de listar restaurantes precisa responder. Em apps de delivery, demora no carregamento frustra o usuário e pode fazer ele desistir do pedido — por isso desempenho é uma exigência tão relevante quanto qualquer função." },
      { texto: "Permitir transferências bancárias via PIX entre contas", correto: false, explicacao: "Está incorreto porque transferir dinheiro entre contas é uma operação financeira que pertence a um banco digital, não a um app de delivery. O delivery processa o pagamento do próprio pedido, mas não tem motivo para virar um meio de movimentar dinheiro entre terceiros." },
      { texto: "Reproduzir músicas em alta qualidade offline", correto: false, explicacao: "Está incorreto porque reproduzir música é uma função de entretenimento típica de apps de streaming, sem nenhuma relação com o objetivo de pedir comida. Mesmo sendo uma frase bem escrita, ela não tem motivo para existir dentro de um app de delivery." },
      { texto: "Emitir carteirinha digital de aluno", correto: false, explicacao: "Está incorreto porque uma carteirinha de aluno serve para comprovar vínculo com uma instituição de ensino, algo que não tem nenhuma relação com pesquisar restaurantes, montar pedidos ou acompanhar entregas." },
      { texto: "Controlar empréstimos e devoluções de livros", correto: false, explicacao: "Está incorreto porque empréstimo de livros é uma operação de controle de acervo físico, própria de bibliotecas. Não há nenhuma ligação entre gerenciar exemplares de livros e processar pedidos de comida." },
      { texto: "Gerar receita médica eletrônica", correto: false, explicacao: "Está incorreto porque emitir uma receita exige validação clínica e assinatura de um profissional de saúde, algo que só faz sentido em um sistema médico. Um app de delivery não tem nenhuma relação com prescrição de medicamentos." },
      { texto: "Permitir agendar consultas com especialistas", correto: false, explicacao: "Está incorreto porque agendar consulta conecta um paciente a um profissional de saúde, um objetivo completamente diferente do de conectar um cliente a um restaurante para pedir comida." },
      { texto: "Emitir certificado de conclusão de curso", correto: false, explicacao: "Está incorreto porque certificado de conclusão comprova que um aluno terminou um curso, algo do domínio de plataformas EAD. Em um delivery, o que se 'conclui' é a entrega do pedido, não um curso." },
      { texto: "Controlar séries e repetições de exercícios", correto: false, explicacao: "Está incorreto porque registrar séries e repetições é uma função de acompanhamento de treino físico, própria de apps de academia/fitness, sem nenhuma relação com pedir e receber comida." },
      { texto: "Fazer chamadas de vídeo em grupo", correto: false, explicacao: "Está incorreto porque chamada de vídeo em grupo é uma funcionalidade de comunicação social, própria de apps de mensagens. O delivery pode até ter um chat simples com o entregador, mas não tem motivo para oferecer chamadas em grupo." },
      { texto: "Calcular rotas de carona compartilhada", correto: false, explicacao: "Está incorreto porque calcular rota de carona serve para transportar pessoas, função de apps como Uber ou 99. No delivery o que se transporta é um pedido de comida, não um passageiro — são lógicas de negócio diferentes." },
    ],
  },
  {
    id: "banco",
    nome: "Aplicativo de Banco Digital",
    emoji: "🏦",
    descricao:
      "Um app onde o usuário consulta saldo, faz transferências, paga contas e gerencia cartões com segurança.",
    requisitos: [
      { texto: "Realizar transferências via PIX entre contas", correto: true, tipo: "funcional", explicacao: "Está correto porque mover dinheiro entre contas via PIX é a própria razão de existir de um banco digital. Sem essa função, o app não cumpriria o papel mais básico esperado de uma instituição financeira." },
      { texto: "Exibir o saldo e o extrato da conta", correto: true, tipo: "funcional", explicacao: "Está correto porque o usuário precisa saber quanto dinheiro tem e quais movimentações ocorreram para tomar decisões financeiras. Sem essa consulta, o banco digital perderia sua função de transparência sobre a conta do cliente." },
      { texto: "Pagar boletos por leitura de código de barras", correto: true, tipo: "funcional", explicacao: "Está correto porque pagar contas é uma das tarefas mais comuns que um cliente espera resolver dentro de um app bancário, e ler o código de barras agiliza esse processo sem precisar digitar números longos." },
      { texto: "Criptografar todos os dados financeiros do usuário", correto: true, tipo: "nao-funcional", explicacao: "Está correto porque dados financeiros são extremamente sensíveis, e um banco digital precisa garantir que essas informações estejam protegidas em qualquer operação. Essa exigência de segurança vale para todo o sistema, não para uma função isolada." },
      { texto: "Autenticar o usuário com biometria", correto: true, tipo: "nao-funcional", explicacao: "Está correto porque o acesso a uma conta bancária precisa de uma proteção forte contra acessos indevidos, e a biometria (digital ou facial) é um mecanismo de segurança comum para isso. O foco aqui é a proteção do acesso, não uma função de negócio em si." },
      { texto: "Rastrear a entrega de comida em tempo real", correto: false, explicacao: "Está incorreto porque rastrear entrega é uma função de logística própria de apps de delivery. Um banco digital lida com dinheiro e contas, não com o transporte físico de produtos." },
      { texto: "Montar playlists personalizadas de música", correto: false, explicacao: "Está incorreto porque organizar playlists é uma função de entretenimento de apps de streaming musical, sem nenhuma relação com a gestão financeira que é o foco de um banco digital." },
      { texto: "Reservar livros disponíveis no acervo", correto: false, explicacao: "Está incorreto porque reservar livro é uma operação de controle de acervo físico, própria de bibliotecas, e não tem nenhuma ligação com movimentar dinheiro em um banco digital." },
      { texto: "Registrar a frequência cardíaca durante o treino", correto: false, explicacao: "Está incorreto porque monitorar dados biométricos do treino é função de um app de fitness, sem nenhuma utilidade dentro de um app cujo foco é exibir saldo e fazer transferências." },
      { texto: "Avaliar a corrida e o motorista ao final da viagem", correto: false, explicacao: "Está incorreto porque avaliar a corrida serve para medir a qualidade de um serviço de transporte, algo que não tem relação com as funções de um banco digital." },
      { texto: "Exibir aulas em vídeo divididas por módulos", correto: false, explicacao: "Está incorreto porque organizar conteúdo educacional em módulos é função de uma plataforma EAD, sem nenhuma relação com o propósito financeiro de um banco digital." },
      { texto: "Enviar mensagens com confirmação de leitura", correto: false, explicacao: "Está incorreto porque confirmação de leitura é uma função social típica de apps de mensagens. Um banco digital pode ter chat de suporte, mas não tem motivo para implementar esse recurso de conversa social." },
      { texto: "Calcular o frete de produtos por CEP", correto: false, explicacao: "Está incorreto porque calcular frete serve para definir o custo de envio de produtos físicos, função de uma loja virtual, sem relação com operações bancárias." },
      { texto: "Agendar horário com um médico cardiologista", correto: false, explicacao: "Está incorreto porque agendar consulta médica conecta um paciente a um profissional de saúde, um objetivo da área médica que não tem nenhuma relação com a gestão financeira de um banco digital." },
      { texto: "Recomendar pratos com base em pedidos anteriores", correto: false, explicacao: "Está incorreto porque recomendar pratos é uma função de personalização de um app de delivery, sem nenhuma relação com a movimentação financeira que é o foco de um banco digital." },
    ],
  },
  {
    id: "biblioteca",
    nome: "Sistema de Biblioteca",
    emoji: "📚",
    descricao:
      "Um sistema para gerenciar o acervo, controlar empréstimos de livros e administrar usuários da biblioteca.",
    requisitos: [
      { texto: "Controlar empréstimos e devoluções de livros", correto: true, tipo: "funcional", explicacao: "Está correto porque registrar quando um livro saiu e quando voltou ao acervo é o motivo central de existir de um sistema de biblioteca. Sem esse controle, não haveria nenhuma gestão sobre os exemplares disponíveis." },
      { texto: "Permitir reservar livros disponíveis no acervo", correto: true, tipo: "funcional", explicacao: "Está correto porque reservar garante que o usuário tenha prioridade sobre um exemplar antes que outra pessoa o retire, complementando naturalmente o controle de empréstimos de uma biblioteca." },
      { texto: "Calcular multas por atraso na devolução", correto: true, tipo: "funcional", explicacao: "Está correto porque comparar a data prevista de devolução com a data real e gerar uma multa em caso de atraso é uma regra de negócio comum e necessária para incentivar a devolução pontual dos livros." },
      { texto: "Pesquisar livros por título, autor ou ISBN", correto: true, tipo: "funcional", explicacao: "Está correto porque o usuário precisa de uma forma de localizar itens no catálogo da biblioteca, e buscar por título, autor ou ISBN são os critérios mais práticos para isso." },
      { texto: "Manter o sistema disponível 99% do horário de funcionamento", correto: true, tipo: "nao-funcional", explicacao: "Está correto porque, mesmo não criando uma função nova, garante que as funções já existentes (pesquisar, reservar, etc.) estejam acessíveis na grande maioria do tempo. Isso é importante porque uma biblioteca depende do sistema estar no ar durante seu funcionamento." },
      { texto: "Processar pagamentos via cartão de crédito de pedidos", correto: false, explicacao: "Está incorreto porque processar pagamento de pedidos é uma função de venda de produtos, própria de uma loja virtual, e não tem relação com o empréstimo de livros de uma biblioteca." },
      { texto: "Rastrear a localização do entregador no mapa", correto: false, explicacao: "Está incorreto porque rastrear entregador é uma função de logística de um app de delivery. Uma biblioteca trabalha com retirada e devolução presencial, não com entrega rastreada por GPS." },
      { texto: "Reproduzir podcasts e músicas offline", correto: false, explicacao: "Está incorreto porque reproduzir mídia offline é uma função de entretenimento de apps de streaming, sem nenhuma relação com o controle de acervo físico de uma biblioteca." },
      { texto: "Emitir receitas médicas eletrônicas", correto: false, explicacao: "Está incorreto porque emitir receita exige validações próprias da área da saúde, função de um sistema médico, sem nenhuma relação com gestão de livros." },
      { texto: "Compartilhar localização em tempo real no chat", correto: false, explicacao: "Está incorreto porque compartilhar localização em conversa é uma função de comunicação social de apps de mensagens, sem motivo para existir em um sistema cujo foco é o controle do acervo." },
      { texto: "Registrar o peso levantado em cada exercício", correto: false, explicacao: "Está incorreto porque registrar carga de treino é função de um app de fitness, sem nenhuma relação com o controle de empréstimos e devoluções de uma biblioteca." },
      { texto: "Estimar o preço da corrida antes de confirmar", correto: false, explicacao: "Está incorreto porque estimar tarifa de viagem é função de um app de transporte/carona, sem nenhuma aplicação dentro de um sistema de gestão de livros." },
      { texto: "Gerar nota fiscal eletrônica da compra", correto: false, explicacao: "Está incorreto porque emitir nota fiscal é uma função ligada à venda de produtos, própria de uma loja virtual. Uma biblioteca empresta itens do acervo, processo diferente de uma compra." },
      { texto: "Liberar o próximo módulo após concluir uma prova", correto: false, explicacao: "Está incorreto porque liberar módulos com base em avaliações é uma função de progressão de conteúdo educacional, própria de uma plataforma EAD, sem relação com empréstimo de livros." },
      { texto: "Transferir dinheiro entre contas via PIX", correto: false, explicacao: "Está incorreto porque transferir dinheiro entre contas é uma operação financeira de um banco digital. Uma biblioteca pode cobrar multas, mas não tem motivo para virar um meio de transferência bancária entre terceiros." },
    ],
  },
  {
    id: "streaming",
    nome: "Aplicativo de Streaming de Música",
    emoji: "🎵",
    descricao:
      "Um app onde o usuário ouve músicas, cria playlists, baixa faixas para ouvir offline e recebe recomendações.",
    requisitos: [
      { texto: "Reproduzir músicas em streaming contínuo", correto: true, tipo: "funcional", explicacao: "Está correto porque transmitir o áudio das músicas sem interrupções é a razão de existir de um app de streaming musical. Sem essa função, simplesmente não haveria streaming de música algum." },
      { texto: "Criar e editar playlists personalizadas", correto: true, tipo: "funcional", explicacao: "Está correto porque organizar músicas favoritas em listas é uma das formas mais naturais do usuário personalizar sua experiência de escuta dentro do app." },
      { texto: "Baixar faixas para ouvir offline", correto: true, tipo: "funcional", explicacao: "Está correto porque permitir ouvir música sem internet atende a uma necessidade real do usuário (viagens, áreas sem sinal), sendo um diferencial importante em apps de streaming." },
      { texto: "Recomendar músicas com base no histórico", correto: true, tipo: "funcional", explicacao: "Está correto porque sugerir novas faixas a partir do que o usuário já ouviu ajuda a manter o engajamento e é uma função central de personalização em apps de música." },
      { texto: "Garantir baixa latência ao iniciar a reprodução", correto: true, tipo: "nao-funcional", explicacao: "Está correto porque, embora a função de reproduzir música já exista, esse requisito garante que ela aconteça quase instantaneamente ao apertar 'play'. Demora nesse momento frustraria a experiência do usuário." },
      { texto: "Controlar empréstimo e devolução de exemplares", correto: false, explicacao: "Está incorreto porque controlar empréstimos é uma função de gestão de acervo físico, própria de bibliotecas. Um app de streaming trabalha com conteúdo digital sob licença, não com exemplares físicos." },
      { texto: "Calcular a taxa de entrega de um pedido", correto: false, explicacao: "Está incorreto porque calcular frete é função de um app de delivery. Não existe entrega física em um app de música — todo o conteúdo é consumido digitalmente." },
      { texto: "Agendar consultas médicas online", correto: false, explicacao: "Está incorreto porque agendar consulta conecta paciente a médico, função de um sistema de saúde, sem nenhuma relação com reproduzir ou organizar músicas." },
      { texto: "Pagar boletos por código de barras", correto: false, explicacao: "Está incorreto porque pagar boletos de terceiros é função de um banco digital. O app de streaming cobra apenas sua própria assinatura, não atua como meio de pagamento geral." },
      { texto: "Rastrear o motorista da carona no mapa", correto: false, explicacao: "Está incorreto porque rastrear motorista é função de um app de transporte, sem nenhuma relação com reproduzir música." },
      { texto: "Emitir certificado ao concluir um curso", correto: false, explicacao: "Está incorreto porque emitir certificado comprova a conclusão de um curso, função de uma plataforma EAD. Um app de música não tem trilha de aprendizado nem avaliação de conteúdo educacional." },
      { texto: "Registrar séries e repetições de um treino", correto: false, explicacao: "Está incorreto porque registrar séries de treino é função de um app de fitness. Mesmo que o usuário ouça música durante o exercício, o app de streaming não acompanha o treino em si." },
      { texto: "Calcular o frete de um produto por CEP", correto: false, explicacao: "Está incorreto porque calcular frete envolve o envio de produtos físicos, função de uma loja virtual. Um app de música não tem frete, pois o conteúdo é entregue digitalmente." },
      { texto: "Enviar mensagens com confirmação de leitura", correto: false, explicacao: "Está incorreto porque confirmação de leitura é uma função de comunicação social de apps de mensagens, sem relação com a reprodução de músicas." },
      { texto: "Exibir o cardápio de restaurantes próximos", correto: false, explicacao: "Está incorreto porque exibir cardápio é função de um app de delivery, sem nenhuma relação com o catálogo de músicas de um app de streaming." },
    ],
  },
  {
    id: "transporte",
    nome: "Aplicativo de Transporte / Carona",
    emoji: "🚗",
    descricao:
      "Um app onde o passageiro solicita uma viagem, acompanha o motorista no mapa, paga e avalia a corrida.",
    requisitos: [
      { texto: "Estimar o preço da corrida antes de confirmar", correto: true, tipo: "funcional", explicacao: "Está correto porque o passageiro precisa saber quanto vai pagar antes de confirmar a viagem, garantindo transparência e permitindo que ele decida se aceita o valor estimado." },
      { texto: "Rastrear o motorista no mapa em tempo real", correto: true, tipo: "funcional", explicacao: "Está correto porque acompanhar a posição do motorista até o embarque é a função que define esse tipo de app — sem ela, o passageiro não saberia quando o veículo vai chegar." },
      { texto: "Avaliar o motorista e a viagem ao final", correto: true, tipo: "funcional", explicacao: "Está correto porque dar uma nota à experiência da corrida ajuda a manter a qualidade do serviço, permitindo identificar bons e maus motoristas dentro do sistema." },
      { texto: "Conectar o passageiro ao motorista mais próximo", correto: true, tipo: "funcional", explicacao: "Está correto porque identificar o motorista disponível mais próximo e direcionar a solicitação a ele é o processo de pareamento que viabiliza toda a lógica de funcionamento do app." },
      { texto: "Atualizar a posição no mapa sem travamentos", correto: true, tipo: "nao-funcional", explicacao: "Está correto porque, mesmo a função de rastrear o motorista já existindo, esse requisito garante que essa atualização aconteça de forma fluida, sem travar a tela do passageiro." },
      { texto: "Controlar empréstimo de livros do acervo", correto: false, explicacao: "Está incorreto porque controlar empréstimo de livros é função de uma biblioteca, sem nenhuma relação com transportar passageiros de um ponto a outro." },
      { texto: "Criar playlists de músicas favoritas", correto: false, explicacao: "Está incorreto porque organizar playlists é função de um app de streaming de música. Mesmo que o motorista toque música durante a viagem, isso não é responsabilidade do app de transporte." },
      { texto: "Emitir receita médica eletrônica", correto: false, explicacao: "Está incorreto porque emitir receita exige validação clínica de um profissional de saúde, função de um sistema médico, sem relação com conectar passageiros a motoristas." },
      { texto: "Exibir aulas em vídeo por módulos", correto: false, explicacao: "Está incorreto porque organizar aulas em módulos é função de uma plataforma EAD, sem nenhum propósito dentro de um app de transporte." },
      { texto: "Pagar boletos por código de barras", correto: false, explicacao: "Está incorreto porque pagar boletos de terceiros é função de um banco digital. O app de transporte processa apenas o pagamento da própria corrida, não atua como meio de pagamento geral." },
      { texto: "Registrar a frequência cardíaca no treino", correto: false, explicacao: "Está incorreto porque monitorar batimentos cardíacos durante o treino é função de um app de fitness, sem nenhuma relação com administrar corridas de carro." },
      { texto: "Exibir o cardápio de um restaurante", correto: false, explicacao: "Está incorreto porque exibir cardápio é função de um app de delivery, que conecta o cliente a pratos disponíveis, diferente de conectar passageiro a motorista." },
      { texto: "Gerar nota fiscal eletrônica da compra", correto: false, explicacao: "Está incorreto porque emitir nota fiscal de compra de produto é função de uma loja virtual. O app de transporte emite recibo da corrida, conceito diferente." },
      { texto: "Enviar figurinhas e emojis em conversas", correto: false, explicacao: "Está incorreto porque enviar figurinhas é uma função de entretenimento de apps de mensagens. O chat entre passageiro e motorista, quando existe, é simples e funcional, sem esse tipo de recurso." },
      { texto: "Calcular multa por atraso na devolução", correto: false, explicacao: "Está incorreto porque multa por atraso na devolução é função de controle de prazos de uma biblioteca. Não existe 'devolução' no contexto de transporte de passageiros." },
    ],
  },
  {
    id: "ecommerce",
    nome: "Loja Virtual (E-commerce)",
    emoji: "🛒",
    descricao:
      "Uma loja online onde o usuário navega por produtos, adiciona ao carrinho, calcula frete e finaliza a compra.",
    requisitos: [
      { texto: "Calcular o frete de produtos pelo CEP", correto: true, tipo: "funcional", explicacao: "Está correto porque o cliente precisa saber o custo de envio antes de finalizar a compra, e esse valor normalmente depende da distância e do volume dos produtos enviados ao CEP informado." },
      { texto: "Processar pagamentos por cartão de crédito", correto: true, tipo: "funcional", explicacao: "Está correto porque validar os dados do cartão e confirmar a transação é a ação que efetivamente converte um carrinho de compras em uma venda concluída." },
      { texto: "Gerar nota fiscal eletrônica do pedido", correto: true, tipo: "funcional", explicacao: "Está correto porque toda venda online precisa de um documento fiscal válido, e emitir esse comprovante automaticamente após a compra é uma obrigação legal das lojas virtuais." },
      { texto: "Controlar o estoque disponível de cada produto", correto: true, tipo: "funcional", explicacao: "Está correto porque a loja precisa saber quanto de cada item ainda está disponível para evitar vender produtos esgotados, atualizando essa quantidade conforme vendas e reposições." },
      { texto: "Suportar 10 mil acessos simultâneos sem cair", correto: true, tipo: "nao-funcional", explicacao: "Está correto porque, mesmo não criando uma função nova, garante que o sistema continue funcionando estável mesmo com muitos usuários acessando ao mesmo tempo, algo crítico em datas de alta demanda como promoções." },
      { texto: "Rastrear o entregador de comida no mapa", correto: false, explicacao: "Está incorreto porque rastrear entregador de comida é específico de um app de delivery. Embora uma loja virtual também tenha entregas, esse rastreamento detalhado remete a outro domínio." },
      { texto: "Reproduzir músicas offline", correto: false, explicacao: "Está incorreto porque reproduzir música é função de entretenimento de um app de streaming, sem nenhuma relação com comprar produtos em uma loja virtual." },
      { texto: "Reservar livros do acervo", correto: false, explicacao: "Está incorreto porque reservar do acervo é um conceito de biblioteca (item emprestado, não comprado), diferente da lógica de compra de produtos de uma loja virtual." },
      { texto: "Agendar consulta com um médico", correto: false, explicacao: "Está incorreto porque agendar consulta conecta paciente a médico, função de um sistema de saúde, sem relação com comprar produtos online." },
      { texto: "Estimar o preço de uma corrida", correto: false, explicacao: "Está incorreto porque estimar preço de corrida é função de um app de transporte de pessoas, diferente da venda de produtos de uma loja virtual." },
      { texto: "Emitir certificado de curso concluído", correto: false, explicacao: "Está incorreto porque emitir certificado é função de uma plataforma EAD. Uma loja virtual não tem trilha educacional, então certificação não faz sentido nesse domínio." },
      { texto: "Contar calorias gastas no treino", correto: false, explicacao: "Está incorreto porque contar calorias é função de monitoramento de um app de fitness, sem relação com finalizar a compra de um produto." },
      { texto: "Enviar mensagens com confirmação de leitura", correto: false, explicacao: "Está incorreto porque confirmação de leitura é característica de apps de conversa social. Uma loja pode ter chat de atendimento, mas esse recurso específico não é sua função central." },
      { texto: "Fazer transferências via PIX", correto: false, explicacao: "Está incorreto porque transferir dinheiro entre contas é função de um banco digital. A loja aceita PIX como pagamento do pedido, mas não atua como meio de transferência entre terceiros." },
      { texto: "Calcular a melhor rota até um endereço", correto: false, explicacao: "Está incorreto porque calcular rota de navegação é função de um app de transporte. A loja virtual calcula o frete (custo), não a rota do veículo de entrega." },
    ],
  },
  {
    id: "fitness",
    nome: "Aplicativo de Academia / Fitness",
    emoji: "💪",
    descricao:
      "Um app onde o usuário monta treinos, registra exercícios, acompanha a evolução física e conta calorias.",
    requisitos: [
      { texto: "Registrar séries, repetições e carga dos exercícios", correto: true, tipo: "funcional", explicacao: "Está correto porque anotar quantas séries e repetições foram feitas, e com qual peso, é a função que dá sentido ao app — sem ela, não haveria controle algum do treino realizado." },
      { texto: "Montar planos de treino personalizados", correto: true, tipo: "funcional", explicacao: "Está correto porque gerar uma sequência de exercícios adaptada ao objetivo do usuário (hipertrofia, perda de peso, etc.) é uma forma central de personalização esperada em um app de fitness." },
      { texto: "Acompanhar a evolução de peso e medidas", correto: true, tipo: "funcional", explicacao: "Está correto porque registrar peso e medidas ao longo do tempo, e exibir essa evolução, é o que permite ao usuário visualizar seu progresso físico de forma concreta." },
      { texto: "Calcular calorias gastas em cada atividade", correto: true, tipo: "funcional", explicacao: "Está correto porque estimar o gasto calórico com base no tipo de exercício, duração e intensidade ajuda o usuário a entender o impacto real do seu treino." },
      { texto: "Funcionar mesmo sem conexão com a internet", correto: true, tipo: "nao-funcional", explicacao: "Está correto porque, mesmo não criando uma função nova, garante que o registro do treino continue acessível mesmo sem internet, algo comum dentro de academias com sinal fraco." },
      { texto: "Rastrear o entregador de comida", correto: false, explicacao: "Está incorreto porque rastrear entregador é função de um app de delivery, sem nenhuma relação com monitorar o progresso de um treino físico." },
      { texto: "Controlar empréstimos de livros", correto: false, explicacao: "Está incorreto porque controlar empréstimos é função de uma biblioteca, sem nenhuma conexão com o acompanhamento de exercícios." },
      { texto: "Pagar boletos por código de barras", correto: false, explicacao: "Está incorreto porque pagar boletos de terceiros é função de um banco digital. O app de fitness pode cobrar mensalidade, mas não atua como meio de pagamento geral." },
      { texto: "Reproduzir filmes e séries em alta definição", correto: false, explicacao: "Está incorreto porque reproduzir filmes e séries é função de um serviço de streaming de vídeo, voltado a entretenimento, diferente de conteúdo de exercícios." },
      { texto: "Estimar o valor de uma corrida", correto: false, explicacao: "Está incorreto porque estimar valor de corrida é função de um app de transporte, sem relação com acompanhar o treino físico de um usuário." },
      { texto: "Emitir nota fiscal de uma compra", correto: false, explicacao: "Está incorreto porque emitir nota fiscal é função de uma loja virtual, sem nenhuma aplicação dentro do controle de treinos e exercícios." },
      { texto: "Agendar consulta médica online", correto: false, explicacao: "Está incorreto porque agendar consulta conecta paciente a médico, função de um sistema de saúde, diferente de registrar exercícios físicos." },
      { texto: "Enviar mensagens em grupo", correto: false, explicacao: "Está incorreto porque enviar mensagens em grupo é função de um app de mensagens. Apps de fitness podem ter comunidades, mas esse recurso não é sua função central." },
      { texto: "Exibir aulas gravadas por módulos", correto: false, explicacao: "Está incorreto porque organizar conteúdo em módulos sequenciais é função de uma plataforma EAD, diferente da estrutura de um app de treino." },
      { texto: "Calcular a taxa de entrega de um pedido", correto: false, explicacao: "Está incorreto porque calcular taxa de entrega é função de um app de delivery, sem nenhuma ligação com o controle de treinos físicos." },
    ],
  },
  {
    id: "medico",
    nome: "Sistema de Agendamento Médico",
    emoji: "🩺",
    descricao:
      "Um sistema onde o paciente agenda consultas, recebe lembretes, acessa o histórico e recebe receitas digitais.",
    requisitos: [
      { texto: "Agendar consultas com médicos por especialidade", correto: true, tipo: "funcional", explicacao: "Está correto porque permitir que o paciente escolha uma especialidade e reserve um horário é a função que justifica a existência do sistema — sem ela, não haveria agendamento algum." },
      { texto: "Enviar lembretes automáticos da consulta", correto: true, tipo: "funcional", explicacao: "Está correto porque notificar o paciente conforme a consulta se aproxima ajuda a reduzir faltas, sendo uma função automatizada útil tanto para o paciente quanto para a clínica." },
      { texto: "Emitir receitas médicas eletrônicas", correto: true, tipo: "funcional", explicacao: "Está correto porque gerar a receita a partir dos dados inseridos pelo médico durante o atendimento viabiliza a prescrição de medicamentos sem depender de papel físico." },
      { texto: "Acessar o histórico de atendimentos do paciente", correto: true, tipo: "funcional", explicacao: "Está correto porque reunir e exibir os atendimentos anteriores forma um prontuário digital, essencial para que o médico entenda o contexto de saúde do paciente." },
      { texto: "Garantir o sigilo dos dados de saúde do paciente", correto: true, tipo: "nao-funcional", explicacao: "Está correto porque dados de saúde são extremamente sensíveis e protegidos por lei (LGPD no Brasil), exigindo que essa proteção esteja presente em todas as funcionalidades do sistema, não em uma tela isolada." },
      { texto: "Rastrear o entregador no mapa", correto: false, explicacao: "Está incorreto porque rastrear entregador é função de um app de delivery, sem nenhuma relação com agendar consultas médicas." },
      { texto: "Calcular o frete por CEP", correto: false, explicacao: "Está incorreto porque calcular frete é função de uma loja virtual, sem nenhuma aplicação dentro de um sistema de agendamento de consultas." },
      { texto: "Reproduzir músicas offline", correto: false, explicacao: "Está incorreto porque reproduzir música é função de entretenimento de um app de streaming, sem relação com o agendamento de atendimentos médicos." },
      { texto: "Controlar empréstimo de livros", correto: false, explicacao: "Está incorreto porque controlar empréstimo de livros é função de uma biblioteca, um domínio completamente distinto do de agendamento médico." },
      { texto: "Registrar carga e repetições de treino", correto: false, explicacao: "Está incorreto porque registrar séries de treino é função de um app de fitness, diferente de agendar uma consulta com um profissional de saúde." },
      { texto: "Estimar o preço de uma corrida", correto: false, explicacao: "Está incorreto porque estimar preço de corrida é função de um app de transporte, sem nenhuma ligação com agendar uma consulta médica." },
      { texto: "Emitir certificado de conclusão de curso", correto: false, explicacao: "Está incorreto porque emitir certificado é função de uma plataforma EAD. Um sistema médico não tem propósito educacional formal, então esse requisito não se aplica." },
      { texto: "Enviar figurinhas em conversas", correto: false, explicacao: "Está incorreto porque enviar figurinhas é função de entretenimento de apps de mensagens, sem relação com um sistema voltado a atendimento de saúde." },
      { texto: "Transferir dinheiro via PIX", correto: false, explicacao: "Está incorreto porque transferir dinheiro entre contas é função de um banco digital. O paciente pode pagar a consulta, mas o sistema não atua como meio de transferência bancária geral." },
      { texto: "Recomendar pratos por histórico de pedidos", correto: false, explicacao: "Está incorreto porque recomendar pratos é função de personalização de um app de delivery, sem nenhuma relação com agendar atendimentos médicos." },
    ],
  },
  {
    id: "mensagens",
    nome: "Aplicativo de Mensagens",
    emoji: "💬",
    descricao:
      "Um app onde o usuário troca mensagens, faz chamadas, envia mídia e cria grupos de conversa.",
    requisitos: [
      { texto: "Enviar mensagens de texto em tempo real", correto: true, tipo: "funcional", explicacao: "Está correto porque transmitir uma mensagem do remetente até o destinatário de forma instantânea é a função básica que define qualquer aplicativo de mensagens." },
      { texto: "Exibir confirmação de entrega e leitura", correto: true, tipo: "funcional", explicacao: "Está correto porque mostrar ao remetente se a mensagem foi entregue e lida dá um retorno importante sobre o status da comunicação, algo muito valorizado em apps de chat." },
      { texto: "Fazer chamadas de voz e vídeo", correto: true, tipo: "funcional", explicacao: "Está correto porque estabelecer conexões de áudio e vídeo em tempo real entre usuários é uma funcionalidade esperada em qualquer app de comunicação moderno." },
      { texto: "Criar grupos de conversa", correto: true, tipo: "funcional", explicacao: "Está correto porque reunir múltiplos contatos em uma conversa coletiva permite comunicação em grupo, um uso muito comum em apps de mensagens." },
      { texto: "Criptografar as mensagens de ponta a ponta", correto: true, tipo: "nao-funcional", explicacao: "Está correto porque, mesmo a função de enviar mensagem já existindo, esse requisito garante que o conteúdo só possa ser lido pelo remetente e pelo destinatário, protegendo a privacidade da conversa." },
      { texto: "Calcular a taxa de entrega de um pedido", correto: false, explicacao: "Está incorreto porque calcular taxa de entrega é função de um app de delivery, sem nenhuma relação com trocar mensagens entre usuários." },
      { texto: "Reservar livros no acervo", correto: false, explicacao: "Está incorreto porque reservar livro é função de uma biblioteca, um domínio sem nenhuma conexão com comunicação por mensagens." },
      { texto: "Reproduzir músicas offline", correto: false, explicacao: "Está incorreto porque reproduzir música é função de entretenimento de um app de streaming. Apps de mensagens podem compartilhar músicas, mas não reproduzi-las offline como função central." },
      { texto: "Agendar consultas médicas", correto: false, explicacao: "Está incorreto porque agendar consulta é função de um sistema médico, sem nenhuma ligação com a troca de mensagens entre usuários." },
      { texto: "Estimar o preço de uma corrida", correto: false, explicacao: "Está incorreto porque estimar preço de corrida é função de um app de transporte, sem aplicação dentro de um app cujo foco é comunicação." },
      { texto: "Calcular o frete por CEP", correto: false, explicacao: "Está incorreto porque calcular frete é função de uma loja virtual, sem nenhuma relação com enviar mensagens." },
      { texto: "Registrar repetições de um exercício", correto: false, explicacao: "Está incorreto porque registrar repetições é função de um app de fitness, um domínio completamente distinto do de comunicação." },
      { texto: "Emitir certificado de curso", correto: false, explicacao: "Está incorreto porque emitir certificado é função de uma plataforma EAD, sem relação com troca de mensagens entre pessoas." },
      { texto: "Pagar boletos por código de barras", correto: false, explicacao: "Está incorreto porque pagar boletos é função de um banco digital, sem nenhuma relação com enviar mensagens ou fazer chamadas." },
      { texto: "Controlar o estoque de produtos", correto: false, explicacao: "Está incorreto porque controlar estoque é função de uma loja virtual, sem nenhuma relação com um app de comunicação." },
    ],
  },
  {
    id: "ead",
    nome: "Plataforma de Cursos Online (EAD)",
    emoji: "🎓",
    descricao:
      "Uma plataforma onde o aluno assiste a aulas em vídeo, faz atividades, acompanha o progresso e recebe certificado.",
    requisitos: [
      { texto: "Exibir aulas em vídeo organizadas por módulos", correto: true, tipo: "funcional", explicacao: "Está correto porque apresentar o conteúdo educacional estruturado em módulos é a função que dá sentido à plataforma — sem ela, não haveria entrega de conteúdo ao aluno." },
      { texto: "Aplicar provas e corrigir automaticamente", correto: true, tipo: "funcional", explicacao: "Está correto porque apresentar questões, capturar respostas e corrigi-las automaticamente permite avaliar o aprendizado do aluno sem depender de correção manual." },
      { texto: "Acompanhar o progresso do aluno no curso", correto: true, tipo: "funcional", explicacao: "Está correto porque calcular e exibir quanto do curso já foi concluído ajuda o aluno a se organizar e visualizar sua evolução dentro da plataforma." },
      { texto: "Emitir certificado ao concluir o curso", correto: true, tipo: "funcional", explicacao: "Está correto porque gerar o certificado assim que as condições de conclusão são atendidas comprova formalmente que o aluno completou o curso." },
      { texto: "Reproduzir os vídeos sem travar em conexões lentas", correto: true, tipo: "nao-funcional", explicacao: "Está correto porque, mesmo a função de exibir vídeos já existindo, esse requisito garante que ela continue funcionando bem mesmo em conexões de internet ruins, evitando frustrar o aluno." },
      { texto: "Rastrear o entregador de comida no mapa", correto: false, explicacao: "Está incorreto porque rastrear entregador é função de um app de delivery, sem nenhuma relação com assistir aulas em uma plataforma de ensino." },
      { texto: "Calcular multas por atraso na devolução", correto: false, explicacao: "Está incorreto porque calcular multa por atraso é função de controle de prazos de uma biblioteca, sem nenhuma conexão com cursos online." },
      { texto: "Reproduzir playlists de música offline", correto: false, explicacao: "Está incorreto porque reproduzir playlists é função de um app de streaming de música. Mesmo a EAD reproduzindo vídeos, esse recurso específico pertence a apps musicais." },
      { texto: "Estimar o preço de uma corrida", correto: false, explicacao: "Está incorreto porque estimar preço de corrida é função de um app de transporte, sem relação com o consumo de conteúdo educacional." },
      { texto: "Pagar boletos por código de barras", correto: false, explicacao: "Está incorreto porque pagar boletos de terceiros é função de um banco digital. O aluno paga a mensalidade do curso, mas a plataforma não atua como meio de pagamento geral." },
      { texto: "Registrar a carga levantada em um treino", correto: false, explicacao: "Está incorreto porque registrar carga de treino é função de um app de fitness, um domínio completamente distinto do de uma plataforma de ensino." },
      { texto: "Agendar consulta com um cardiologista", correto: false, explicacao: "Está incorreto porque agendar consulta é função de um sistema médico, sem nenhuma ligação com estudar em uma plataforma EAD." },
      { texto: "Calcular o frete de um produto por CEP", correto: false, explicacao: "Está incorreto porque calcular frete envolve envio de produtos físicos, função de uma loja virtual. Cursos online são consumidos digitalmente, sem necessidade de frete." },
      { texto: "Enviar mensagens com confirmação de leitura", correto: false, explicacao: "Está incorreto porque confirmação de leitura é característica de apps de mensagens. A plataforma EAD pode ter fórum ou chat com o professor, mas não esse recurso específico." },
      { texto: "Exibir o cardápio de restaurantes próximos", correto: false, explicacao: "Está incorreto porque exibir cardápio é função de um app de delivery, sem nenhuma relação com o conteúdo de um curso online." },
    ],
  },
]
