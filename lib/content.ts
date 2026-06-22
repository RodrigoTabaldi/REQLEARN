import type { TipoRequisito } from "@/lib/softwares"

/* ---------------- Modo Classificação: pool de requisitos FR x RNF ---------------- */

export type ItemClassificacao = {
  texto: string
  tipo: TipoRequisito
  explicacao: string
}

export const POOL_CLASSIFICACAO: ItemClassificacao[] = [
  { texto: "Permitir que o usuário cadastre um novo produto", tipo: "funcional", explicacao: "Descreve uma função do sistema (o que ele faz)." },
  { texto: "O sistema deve responder a qualquer busca em até 2 segundos", tipo: "nao-funcional", explicacao: "Critério de desempenho (quão bem o sistema faz)." },
  { texto: "Gerar relatório mensal de vendas em PDF", tipo: "funcional", explicacao: "Função concreta executada pelo sistema." },
  { texto: "A senha do usuário deve ser armazenada criptografada", tipo: "nao-funcional", explicacao: "Critério de segurança, não uma função de negócio." },
  { texto: "Enviar e-mail de confirmação após o cadastro", tipo: "funcional", explicacao: "Comportamento/ação que o sistema realiza." },
  { texto: "A interface deve ser acessível a pessoas com deficiência visual", tipo: "nao-funcional", explicacao: "Critério de usabilidade/acessibilidade." },
  { texto: "Permitir login com e-mail e senha", tipo: "funcional", explicacao: "Função de autenticação do sistema." },
  { texto: "O sistema deve estar disponível 99,9% do tempo", tipo: "nao-funcional", explicacao: "Critério de disponibilidade/confiabilidade." },
  { texto: "Calcular o valor total do carrinho com impostos", tipo: "funcional", explicacao: "Cálculo que é uma função do sistema." },
  { texto: "Suportar 5.000 usuários simultâneos", tipo: "nao-funcional", explicacao: "Critério de escalabilidade/desempenho." },
  { texto: "Permitir filtrar resultados por categoria", tipo: "funcional", explicacao: "Função de navegação/consulta." },
  { texto: "Funcionar nos navegadores Chrome, Firefox e Safari", tipo: "nao-funcional", explicacao: "Critério de portabilidade/compatibilidade." },
  { texto: "Exportar a lista de contatos em CSV", tipo: "funcional", explicacao: "Função de exportação de dados." },
  { texto: "A tela inicial deve carregar em menos de 1 segundo", tipo: "nao-funcional", explicacao: "Critério de desempenho." },
  { texto: "Permitir redefinir a senha por e-mail", tipo: "funcional", explicacao: "Função de recuperação de conta." },
  { texto: "O sistema deve registrar logs de todas as operações", tipo: "nao-funcional", explicacao: "Critério de auditoria/manutenibilidade." },
  { texto: "Notificar o usuário quando um pedido for enviado", tipo: "funcional", explicacao: "Ação de notificação executada pelo sistema." },
  { texto: "Estar em conformidade com a LGPD", tipo: "nao-funcional", explicacao: "Restrição legal/de conformidade." },
  { texto: "Permitir editar o perfil do usuário", tipo: "funcional", explicacao: "Função de manutenção de dados." },
  { texto: "A aplicação deve ser fácil de aprender para novos usuários", tipo: "nao-funcional", explicacao: "Critério de usabilidade." },
  { texto: "Permitir agendar uma data e horário", tipo: "funcional", explicacao: "Função de agendamento." },
  { texto: "Os dados devem ter backup automático diário", tipo: "nao-funcional", explicacao: "Critério de confiabilidade/recuperação." },
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
