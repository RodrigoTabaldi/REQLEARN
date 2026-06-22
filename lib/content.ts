import type { TipoRequisito } from "@/lib/softwares"

/* ---------------- Modo Classificação: pool de requisitos FR x RNF ---------------- */

export type ItemClassificacao = {
  texto: string
  tipo: TipoRequisito
  explicacao: string
}

export const POOL_CLASSIFICACAO: ItemClassificacao[] = [
  { texto: "Permitir que o usuário cadastre um novo produto", tipo: "funcional", explicacao: "É funcional porque descreve uma ação concreta que o sistema executa: receber os dados do produto e armazená-los. Responde à pergunta 'o que o sistema faz', não 'como ele se comporta'." },
  { texto: "O sistema deve responder a qualquer busca em até 2 segundos", tipo: "nao-funcional", explicacao: "É não-funcional porque não cria uma função nova (buscar já existe), mas impõe uma exigência de tempo de resposta sobre como essa função deve se comportar. Quando o requisito fala de velocidade ou tempo, é sinal de desempenho, uma categoria não-funcional." },
  { texto: "Gerar relatório mensal de vendas em PDF", tipo: "funcional", explicacao: "É funcional porque descreve um processo concreto: reunir dados de vendas do período e produzir um documento PDF como saída. É uma ação executável e observável do sistema, não uma qualidade dele." },
  { texto: "A senha do usuário deve ser armazenada criptografada", tipo: "nao-funcional", explicacao: "É não-funcional porque não é uma função que o usuário aciona, e sim uma exigência de segurança sobre como os dados são protegidos internamente. Requisitos de proteção de dados são classificados como não-funcionais por serem uma propriedade do sistema, não uma ação de negócio." },
  { texto: "Enviar e-mail de confirmação após o cadastro", tipo: "funcional", explicacao: "É funcional porque descreve uma ação automatizada e concreta: disparar um e-mail assim que o cadastro é concluído. Mesmo sendo automático, é um comportamento específico do sistema, por isso é funcional." },
  { texto: "A interface deve ser acessível a pessoas com deficiência visual", tipo: "nao-funcional", explicacao: "É não-funcional porque não descreve uma função nova, mas uma qualidade que a interface inteira precisa ter (ser utilizável por pessoas com deficiência visual). Requisitos de acessibilidade e usabilidade são sempre não-funcionais, pois atravessam todo o sistema." },
  { texto: "Permitir login com e-mail e senha", tipo: "funcional", explicacao: "É funcional porque descreve uma ação concreta: validar as credenciais informadas e autorizar o acesso. É um comportamento direto do sistema, por isso funcional." },
  { texto: "O sistema deve estar disponível 99,9% do tempo", tipo: "nao-funcional", explicacao: "É não-funcional porque não cria nenhuma função nova, apenas garante que as funções já existentes estejam acessíveis na grande maioria do tempo. Disponibilidade é uma qualidade do sistema como um todo, não uma ação isolada." },
  { texto: "Calcular o valor total do carrinho com impostos", tipo: "funcional", explicacao: "É funcional porque representa uma regra de negócio que o sistema processa: somar os itens do carrinho e aplicar os impostos correspondentes. Cálculos com base em regras de negócio são sempre classificados como funcionais." },
  { texto: "Suportar 5.000 usuários simultâneos", tipo: "nao-funcional", explicacao: "É não-funcional porque não descreve uma ação, mas a capacidade do sistema de lidar com uma certa carga de uso sem perder desempenho. Esse é um exemplo clássico de requisito de escalabilidade." },
  { texto: "Permitir filtrar resultados por categoria", tipo: "funcional", explicacao: "É funcional porque descreve uma ação de consulta: restringir os resultados exibidos com base em um critério escolhido pelo usuário. Funcionalidades de busca e filtro são sempre funcionais." },
  { texto: "Funcionar nos navegadores Chrome, Firefox e Safari", tipo: "nao-funcional", explicacao: "É não-funcional porque não é uma função do sistema, e sim uma restrição técnica sobre em quais ambientes ele precisa operar corretamente. Esse é um requisito de portabilidade/compatibilidade." },
  { texto: "Exportar a lista de contatos em CSV", tipo: "funcional", explicacao: "É funcional porque descreve uma ação concreta: converter os dados de contatos para o formato CSV e disponibilizar o arquivo para download. É uma saída observável gerada pelo sistema." },
  { texto: "A tela inicial deve carregar em menos de 1 segundo", tipo: "nao-funcional", explicacao: "É não-funcional porque não cria uma função nova (a tela inicial já existe), mas exige uma velocidade específica de carregamento. Tempo de carregamento é um critério de desempenho." },
  { texto: "Permitir redefinir a senha por e-mail", tipo: "funcional", explicacao: "É funcional porque descreve um processo concreto: gerar um link ou código de redefinição e enviá-lo por e-mail ao usuário. É uma ação executada pelo sistema em resposta a uma solicitação." },
  { texto: "O sistema deve registrar logs de todas as operações", tipo: "nao-funcional", explicacao: "É não-funcional porque não é uma função voltada ao usuário final, mas uma exigência de rastreabilidade e manutenção que serve para auditoria e diagnóstico técnico do sistema." },
  { texto: "Notificar o usuário quando um pedido for enviado", tipo: "funcional", explicacao: "É funcional porque descreve uma ação direta do sistema: detectar a mudança de status do pedido e disparar uma notificação correspondente ao usuário." },
  { texto: "Estar em conformidade com a LGPD", tipo: "nao-funcional", explicacao: "É não-funcional porque não descreve uma função específica, mas uma restrição legal que precisa ser respeitada em todo o tratamento de dados pessoais do sistema. Requisitos legais e de conformidade são classificados como não-funcionais." },
  { texto: "Permitir editar o perfil do usuário", tipo: "funcional", explicacao: "É funcional porque descreve uma ação concreta: receber novos dados informados pelo usuário e atualizar o registro correspondente no sistema." },
  { texto: "A aplicação deve ser fácil de aprender para novos usuários", tipo: "nao-funcional", explicacao: "É não-funcional porque não é uma função específica, mas uma qualidade subjetiva da experiência geral de uso. Facilidade de aprendizado é um critério clássico de usabilidade." },
  { texto: "Permitir agendar uma data e horário", tipo: "funcional", explicacao: "É funcional porque descreve uma ação concreta: capturar a data e o horário escolhidos pelo usuário e registrar esse agendamento no sistema." },
  { texto: "Os dados devem ter backup automático diário", tipo: "nao-funcional", explicacao: "É não-funcional porque não é uma função acionada pelo usuário, mas uma garantia de segurança e recuperação dos dados em caso de falha, executada de forma automática e transversal ao sistema." },
]

/* ---------------- Conteúdo teórico (lições) ---------------- */

export type Licao = {
  titulo: string
  paragrafos: string[]
  exemplos?: { rotulo: string; texto: string }[]
}

export const LICOES: Licao[] = [
  {
    titulo: "O que é um requisito?",
    paragrafos: [
      "Um requisito é uma descrição do que um sistema deve fazer ou de qual qualidade ele deve ter. Ele expressa uma necessidade dos usuários ou do negócio que o software precisa atender.",
      "A Análise de Requisitos é a etapa da Engenharia de Software em que entendemos o problema, levantamos essas necessidades e as transformamos em descrições claras, completas e sem ambiguidade.",
    ],
  },
  {
    titulo: "Requisitos Funcionais (RF)",
    paragrafos: [
      "Requisitos funcionais descrevem O QUE o sistema deve fazer: funções, serviços e comportamentos. Normalmente respondem à pergunta 'qual ação o sistema executa?'.",
    ],
    exemplos: [
      { rotulo: "RF", texto: "Permitir que o usuário adicione itens ao carrinho." },
      { rotulo: "RF", texto: "Calcular o valor do frete a partir do CEP." },
      { rotulo: "RF", texto: "Emitir um certificado ao concluir o curso." },
    ],
  },
  {
    titulo: "Requisitos Não-Funcionais (RNF)",
    paragrafos: [
      "Requisitos não-funcionais descrevem COMO o sistema deve se comportar: critérios de qualidade como desempenho, segurança, usabilidade, disponibilidade, portabilidade e conformidade legal.",
      "Eles não definem uma função específica, mas restringem ou qualificam o funcionamento do sistema como um todo.",
    ],
    exemplos: [
      { rotulo: "RNF", texto: "Responder a qualquer busca em até 2 segundos (desempenho)." },
      { rotulo: "RNF", texto: "Criptografar os dados sensíveis do usuário (segurança)." },
      { rotulo: "RNF", texto: "Estar disponível 99,9% do tempo (disponibilidade)." },
    ],
  },
  {
    titulo: "Escopo: o que pertence ao sistema?",
    paragrafos: [
      "Analisar requisitos também é decidir o que está DENTRO e o que está FORA do escopo. Um requisito pode ser perfeitamente válido — porém para outro sistema.",
      "Por isso, identificar requisitos exige conhecer o domínio do problema: um app de delivery rastreia entregadores; um banco digital faz transferências. Trocar esses requisitos é um erro comum de escopo.",
    ],
  },
  {
    titulo: "Boas práticas na escrita de requisitos",
    paragrafos: [
      "Um bom requisito é claro, verificável e sem ambiguidade. Evite termos vagos como 'rápido' ou 'amigável' sem um critério mensurável.",
      "Prefira frases objetivas e testáveis. Em vez de 'o sistema deve ser rápido', escreva 'o sistema deve responder em até 2 segundos'.",
    ],
  },
]

/* ---------------- Glossário ---------------- */

export type TermoGlossario = { termo: string; definicao: string }

export const GLOSSARIO: TermoGlossario[] = [
  { termo: "Requisito", definicao: "Necessidade ou condição que o software deve satisfazer para resolver um problema ou atingir um objetivo." },
  { termo: "Requisito Funcional (RF)", definicao: "Função ou comportamento específico que o sistema deve executar." },
  { termo: "Requisito Não-Funcional (RNF)", definicao: "Critério de qualidade ou restrição sobre como o sistema opera (desempenho, segurança, usabilidade etc.)." },
  { termo: "Escopo", definicao: "Conjunto de funcionalidades e limites que definem o que faz e o que não faz parte do sistema." },
  { termo: "Stakeholder", definicao: "Qualquer pessoa ou grupo interessado no sistema (usuários, clientes, gestores, equipe)." },
  { termo: "Levantamento de requisitos", definicao: "Atividade de descobrir e coletar as necessidades junto aos stakeholders." },
  { termo: "Especificação", definicao: "Documento que registra os requisitos de forma organizada, clara e verificável." },
  { termo: "Validação", definicao: "Conferir se os requisitos descrevem realmente o sistema que os stakeholders desejam." },
  { termo: "Ambiguidade", definicao: "Quando um requisito pode ser interpretado de mais de uma forma — algo a ser evitado." },
  { termo: "Rastreabilidade", definicao: "Capacidade de relacionar um requisito à sua origem e às partes do sistema que o implementam." },
]
