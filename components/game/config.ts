export type Modo = "identificacao" | "classificacao" | "desafio"

export type Dificuldade = "facil" | "medio" | "dificil"

export type ConfigDificuldade = {
  label: string
  descricao: string
  baloes: number // qtd de balões no modo identificação (sempre 5 corretos)
  itensClass: number // qtd de itens no modo classificação
  timer: number // segundos (0 = sem timer)
  multiplicador: number // multiplicador de pontuação
}

export const DIFICULDADES: Record<Dificuldade, ConfigDificuldade> = {
  facil: {
    label: "Fácil",
    descricao: "12 balões, sem tempo. Ideal para começar.",
    baloes: 12,
    itensClass: 5,
    timer: 0,
    multiplicador: 1,
  },
  medio: {
    label: "Médio",
    descricao: "15 balões, sem tempo. Mais distratores.",
    baloes: 15,
    itensClass: 8,
    timer: 0,
    multiplicador: 1.2,
  },
  dificil: {
    label: "Difícil",
    descricao: "15 balões com cronômetro. Pontuação em dobro.",
    baloes: 15,
    itensClass: 10,
    timer: 45,
    multiplicador: 1.5,
  },
}

export type Estatisticas = {
  pontuacaoTotal: number
  sequenciaAtual: number
  melhorSequencia: number
  rodadas: number
  acertos: number
  questoes: number
}

export const ESTATISTICAS_INICIAIS: Estatisticas = {
  pontuacaoTotal: 0,
  sequenciaAtual: 0,
  melhorSequencia: 0,
  rodadas: 0,
  acertos: 0,
  questoes: 0,
}

export type ResultadoRodada = {
  pontos: number
  acertos: number
  questoes: number
  perfeito: boolean
}

export function embaralhar<T>(lista: T[]): T[] {
  const copia = [...lista]
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copia[i], copia[j]] = [copia[j], copia[i]]
  }
  return copia
}
