"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeIdentificacao } from "@/components/game/mode-identificacao"
import { ModeClassificacao } from "@/components/game/mode-classificacao"
import {
  DIFICULDADES,
  ESTATISTICAS_INICIAIS,
  type Dificuldade,
  type Estatisticas,
  type Modo,
  type ResultadoRodada,
} from "@/components/game/config"
import { Target, Layers, Zap, Trophy, Flame, ListChecks, Percent, RotateCcw } from "lucide-react"

type Tela = "menu" | "jogando"

const MODOS: {
  id: Modo
  titulo: string
  descricao: string
  icone: React.ReactNode
  dificuldadeFixa?: Dificuldade
}[] = [
  {
    id: "identificacao",
    titulo: "Identificação",
    descricao: "Sorteie um software e escolha os 5 requisitos que realmente pertencem a ele.",
    icone: <Target className="size-6" aria-hidden="true" />,
  },
  {
    id: "classificacao",
    titulo: "Classificação",
    descricao: "Decida se cada requisito é Funcional (RF) ou Não-Funcional (RNF).",
    icone: <Layers className="size-6" aria-hidden="true" />,
  },
  {
    id: "desafio",
    titulo: "Desafio Relâmpago",
    descricao: "Identificação contra o relógio, rodadas encadeadas e pontuação em dobro.",
    icone: <Zap className="size-6" aria-hidden="true" />,
    dificuldadeFixa: "dificil",
  },
]

export function ReqlearnGame() {
  const [tela, setTela] = useState<Tela>("menu")
  const [modo, setModo] = useState<Modo>("identificacao")
  const [dificuldade, setDificuldade] = useState<Dificuldade>("facil")
  const [stats, setStats] = useState<Estatisticas>(ESTATISTICAS_INICIAIS)

  function iniciar(m: Modo) {
    const def = MODOS.find((x) => x.id === m)
    setModo(m)
    if (def?.dificuldadeFixa) setDificuldade(def.dificuldadeFixa)
    setTela("jogando")
  }

  function registrar(r: ResultadoRodada) {
    setStats((s) => {
      const sequenciaAtual = r.perfeito ? s.sequenciaAtual + 1 : 0
      const bonusSequencia = r.perfeito ? sequenciaAtual * 10 : 0
      return {
        pontuacaoTotal: s.pontuacaoTotal + r.pontos + bonusSequencia,
        sequenciaAtual,
        melhorSequencia: Math.max(s.melhorSequencia, sequenciaAtual),
        rodadas: s.rodadas + 1,
        acertos: s.acertos + r.acertos,
        questoes: s.questoes + r.questoes,
      }
    })
  }

  const config = DIFICULDADES[dificuldade]

  return (
    <div className="flex flex-col gap-6">
      <Placar stats={stats} />

      {tela === "menu" ? (
        <Menu
          modoSelecionado={modo}
          dificuldade={dificuldade}
          onSelecionarModo={setModo}
          onSelecionarDificuldade={setDificuldade}
          onIniciar={iniciar}
        />
      ) : modo === "classificacao" ? (
        <ModeClassificacao config={config} onRegistrar={registrar} onSair={() => setTela("menu")} />
      ) : (
        <ModeIdentificacao
          config={config}
          desafio={modo === "desafio"}
          onRegistrar={registrar}
          onSair={() => setTela("menu")}
        />
      )}
    </div>
  )
}

/* ---------------- Placar de sessão ---------------- */

function Placar({ stats }: { stats: Estatisticas }) {
  const precisao = stats.questoes > 0 ? Math.round((stats.acertos / stats.questoes) * 100) : 0
  const itens = [
    { icone: <Trophy className="size-4" />, rotulo: "Pontuação", valor: stats.pontuacaoTotal.toLocaleString("pt-BR") },
    { icone: <Flame className="size-4" />, rotulo: "Sequência", valor: stats.sequenciaAtual },
    { icone: <ListChecks className="size-4" />, rotulo: "Rodadas", valor: stats.rodadas },
    { icone: <Percent className="size-4" />, rotulo: "Precisão", valor: `${precisao}%` },
  ]
  return (
    <div className="grid grid-cols-2 gap-3 rounded-3xl border border-border bg-card p-4 shadow-sm sm:grid-cols-4">
      {itens.map((it) => (
        <div key={it.rotulo} className="flex items-center gap-3 rounded-2xl bg-secondary/50 px-4 py-3">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            {it.icone}
          </span>
          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{it.rotulo}</span>
            <span className="text-lg font-bold tabular-nums text-foreground">{it.valor}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ---------------- Menu de seleção ---------------- */

function Menu({
  modoSelecionado,
  dificuldade,
  onSelecionarModo,
  onSelecionarDificuldade,
  onIniciar,
}: {
  modoSelecionado: Modo
  dificuldade: Dificuldade
  onSelecionarModo: (m: Modo) => void
  onSelecionarDificuldade: (d: Dificuldade) => void
  onIniciar: (m: Modo) => void
}) {
  const modoAtual = MODOS.find((m) => m.id === modoSelecionado)!
  const dificuldadeTravada = modoAtual.dificuldadeFixa

  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-foreground">Escolha um modo de treino</h2>
        <p className="text-pretty leading-relaxed text-muted-foreground">
          Pratique a análise de requisitos do seu jeito. Selecione um modo, ajuste a dificuldade e comece.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {MODOS.map((m) => {
          const ativo = m.id === modoSelecionado
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => onSelecionarModo(m.id)}
              aria-pressed={ativo}
              className={cn(
                "flex flex-col gap-3 rounded-2xl border-2 p-5 text-left transition-all",
                ativo
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-border bg-background hover:border-primary/40 hover:bg-secondary",
              )}
            >
              <span
                className={cn(
                  "flex size-11 items-center justify-center rounded-xl",
                  ativo ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary",
                )}
              >
                {m.icone}
              </span>
              <span className="font-bold text-foreground">{m.titulo}</span>
              <span className="text-sm leading-relaxed text-muted-foreground">{m.descricao}</span>
            </button>
          )
        })}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-foreground">Dificuldade</h3>
          {dificuldadeTravada && (
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              Fixada em Difícil neste modo
            </span>
          )}
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {(Object.keys(DIFICULDADES) as Dificuldade[]).map((d) => {
            const cfg = DIFICULDADES[d]
            const ativo = d === dificuldade
            const desabilitado = Boolean(dificuldadeTravada) && d !== dificuldadeTravada
            return (
              <button
                key={d}
                type="button"
                disabled={desabilitado}
                onClick={() => onSelecionarDificuldade(d)}
                aria-pressed={ativo}
                className={cn(
                  "flex flex-col gap-1 rounded-2xl border-2 p-4 text-left transition-all",
                  ativo
                    ? "border-primary bg-primary/5"
                    : "border-border bg-background hover:border-primary/40 hover:bg-secondary",
                  desabilitado && "cursor-not-allowed opacity-40 hover:border-border hover:bg-background",
                )}
              >
                <span className="font-bold text-foreground">{cfg.label}</span>
                <span className="text-sm leading-relaxed text-muted-foreground">{cfg.descricao}</span>
              </button>
            )
          })}
        </div>
      </div>

      <Button size="lg" className="w-full gap-2 text-base" onClick={() => onIniciar(modoSelecionado)}>
        <RotateCcw className="size-5" aria-hidden="true" />
        Começar {modoAtual.titulo}
      </Button>
    </div>
  )
}
