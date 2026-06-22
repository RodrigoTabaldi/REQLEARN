"use client"

import { useCallback, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { SOFTWARES, type Software, type Requisito } from "@/lib/softwares"
import { cn } from "@/lib/utils"
import { type ConfigDificuldade, type ResultadoRodada, embaralhar } from "@/components/game/config"
import { useTimer } from "@/components/game/use-timer"
import { Shuffle, Check, X, ArrowRight, Home, Trophy, Target, Timer, RotateCcw, Zap } from "lucide-react"

const CORRETOS_NECESSARIOS = 5

type Fase = "sorteio" | "jogo" | "resultado"

function TipoBadge({ tipo }: { tipo?: "funcional" | "nao-funcional" }) {
  if (!tipo) return null
  const fr = tipo === "funcional"
  return (
    <span
      className={cn(
        "rounded-md px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide",
        fr ? "bg-chart-1/15 text-chart-1" : "bg-chart-3/20 text-chart-3",
      )}
    >
      {fr ? "RF" : "RNF"}
    </span>
  )
}

export function ModeIdentificacao({
  config,
  desafio,
  onRegistrar,
  onSair,
}: {
  config: ConfigDificuldade
  desafio: boolean
  onRegistrar: (r: ResultadoRodada) => void
  onSair: () => void
}) {
  const [fase, setFase] = useState<Fase>("sorteio")
  const [software, setSoftware] = useState<Software | null>(null)
  const [baloes, setBaloes] = useState<Requisito[]>([])
  const [selecionados, setSelecionados] = useState<Requisito[]>([])
  const [sorteando, setSorteando] = useState(false)
  const [nomePreview, setNomePreview] = useState("")

  function montarRodada() {
    const escolhido = SOFTWARES[Math.floor(Math.random() * SOFTWARES.length)]
    const corretos = escolhido.requisitos.filter((r) => r.correto)
    const distratores = embaralhar(escolhido.requisitos.filter((r) => !r.correto)).slice(
      0,
      Math.max(0, config.baloes - corretos.length),
    )
    setSoftware(escolhido)
    setBaloes(embaralhar([...corretos, ...distratores]))
    setSelecionados([])
  }

  function sortear() {
    setSorteando(true)
    let contador = 0
    const intervalo = setInterval(() => {
      const aleatorio = SOFTWARES[Math.floor(Math.random() * SOFTWARES.length)]
      setNomePreview(`${aleatorio.emoji} ${aleatorio.nome}`)
      contador++
      if (contador > 12) {
        clearInterval(intervalo)
        montarRodada()
        setSorteando(false)
        setNomePreview("")
        setFase("jogo")
      }
    }, 80)
  }

  function alternar(req: Requisito) {
    setSelecionados((atual) => {
      if (atual.includes(req)) return atual.filter((r) => r !== req)
      if (atual.length >= CORRETOS_NECESSARIOS) return atual
      return [...atual, req]
    })
  }

  const finalizar = useCallback(() => {
    setFase((faseAtual) => {
      if (faseAtual !== "jogo") return faseAtual
      return "resultado"
    })
  }, [])

  // Resultado calculado
  const resultado: ResultadoRodada | null = useMemo(() => {
    if (fase !== "resultado" || !software) return null
    const corretosSel = selecionados.filter((r) => r.correto).length
    const incorretosSel = selecionados.length - corretosSel
    const base = Math.max(0, corretosSel * 20 - incorretosSel * 10)
    const pontos = Math.round(base * config.multiplicador)
    const perfeito = corretosSel === CORRETOS_NECESSARIOS && incorretosSel === 0
    return { pontos, acertos: corretosSel, questoes: CORRETOS_NECESSARIOS, perfeito }
  }, [fase, software, selecionados, config.multiplicador])

  if (fase === "sorteio") {
    return (
      <Painel>
        <div className="flex flex-col items-center gap-6 text-center">
          <IconeTopo desafio={desafio} />
          <div className="flex flex-col gap-2">
            <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
              {desafio ? "Desafio Relâmpago" : "Identifique os Requisitos"}
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Vamos sortear um software. Em seguida escolha os{" "}
              <span className="font-semibold text-foreground">5 requisitos corretos</span> entre {config.baloes}{" "}
              balões.
              {config.timer > 0 && ` Você terá ${config.timer} segundos!`}
            </p>
          </div>
          <div
            className={cn(
              "flex min-h-14 w-full items-center justify-center rounded-2xl border-2 border-dashed px-4 py-3 text-lg font-semibold transition-colors",
              sorteando ? "border-primary/40 bg-primary/5 text-primary" : "border-border text-muted-foreground",
            )}
            aria-live="polite"
          >
            {sorteando ? nomePreview || "Sorteando..." : "Pronto para começar?"}
          </div>
          <div className="flex w-full flex-col gap-2 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2" onClick={sortear} disabled={sorteando}>
              <Shuffle className="size-5" aria-hidden="true" />
              {sorteando ? "Sorteando..." : "Sortear software"}
            </Button>
            <Button size="lg" variant="ghost" className="gap-2" onClick={onSair} disabled={sorteando}>
              <Home className="size-4" aria-hidden="true" />
              Voltar ao menu
            </Button>
          </div>
        </div>
      </Painel>
    )
  }

  if (fase === "jogo" && software) {
    return (
      <TelaJogo
        software={software}
        baloes={baloes}
        selecionados={selecionados}
        config={config}
        onAlternar={alternar}
        onEnviar={finalizar}
        onSair={onSair}
        onTempoEsgotado={finalizar}
      />
    )
  }

  if (fase === "resultado" && software && resultado) {
    const corretosPerdidos = software.requisitos.filter((r) => r.correto && !selecionados.includes(r))
    return (
      <TelaResultado
        software={software}
        selecionados={selecionados}
        corretosPerdidos={corretosPerdidos}
        resultado={resultado}
        onProxima={() => {
          onRegistrar(resultado)
          setFase("sorteio")
        }}
        onSair={() => {
          onRegistrar(resultado)
          onSair()
        }}
      />
    )
  }

  return null
}

function IconeTopo({ desafio }: { desafio: boolean }) {
  return (
    <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
      {desafio ? <Zap className="size-8" aria-hidden="true" /> : <Target className="size-8" aria-hidden="true" />}
    </div>
  )
}

function Painel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10">{children}</div>
  )
}

function TelaJogo({
  software,
  baloes,
  selecionados,
  config,
  onAlternar,
  onEnviar,
  onSair,
  onTempoEsgotado,
}: {
  software: Software
  baloes: Requisito[]
  selecionados: Requisito[]
  config: ConfigDificuldade
  onAlternar: (r: Requisito) => void
  onEnviar: () => void
  onSair: () => void
  onTempoEsgotado: () => void
}) {
  const restante = config.timer
  const completo = selecionados.length === CORRETOS_NECESSARIOS
  const faltam = CORRETOS_NECESSARIOS - selecionados.length
  const segundos = useTimer(config.timer, config.timer > 0, onTempoEsgotado)
  const tempoCritico = config.timer > 0 && segundos <= 10

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-5">
      <div className="flex flex-col gap-3 rounded-3xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl" aria-hidden="true">
              {software.emoji}
            </span>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">{software.nome}</h2>
          </div>
          {config.timer > 0 && (
            <span
              className={cn(
                "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold tabular-nums",
                tempoCritico ? "bg-destructive/15 text-destructive" : "bg-secondary text-secondary-foreground",
              )}
              aria-live="off"
            >
              <Timer className="size-4" aria-hidden="true" />
              {String(segundos).padStart(2, "0")}s
            </span>
          )}
        </div>
        <p className="text-pretty leading-relaxed text-muted-foreground">{software.descricao}</p>
        <div className="mt-1 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-accent/40 px-4 py-3">
          <p className="text-sm font-medium text-accent-foreground">
            Selecione os <strong>5 requisitos corretos</strong> deste sistema.
          </p>
          <span
            className={cn(
              "rounded-full px-3 py-1 text-sm font-semibold",
              completo ? "bg-success text-success-foreground" : "bg-primary text-primary-foreground",
            )}
          >
            {selecionados.length}/{CORRETOS_NECESSARIOS} selecionados
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {baloes.map((req, i) => {
          const ativo = selecionados.includes(req)
          const bloqueado = !ativo && faltam === 0
          return (
            <button
              key={i}
              type="button"
              onClick={() => onAlternar(req)}
              disabled={bloqueado}
              aria-pressed={ativo}
              className={cn(
                "flex items-start gap-3 rounded-2xl border-2 p-4 text-left text-sm font-medium leading-snug transition-all",
                ativo
                  ? "border-primary bg-primary/10 text-foreground shadow-sm"
                  : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-secondary",
                bloqueado && "cursor-not-allowed opacity-50 hover:border-border hover:bg-card",
              )}
            >
              <span
                className={cn(
                  "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                  ativo ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/40",
                )}
                aria-hidden="true"
              >
                {ativo && <Check className="size-3.5" />}
              </span>
              <span className="text-pretty">{req.texto}</span>
            </button>
          )
        })}
      </div>

      <div className="flex flex-col-reverse items-center justify-between gap-3 rounded-3xl border border-border bg-card p-4 shadow-sm sm:flex-row">
        <Button variant="ghost" className="gap-2" onClick={onSair}>
          <Home className="size-4" aria-hidden="true" />
          Voltar ao menu
        </Button>
        <div className="flex w-full flex-col items-center gap-2 sm:w-auto sm:flex-row">
          {!completo && (
            <span className="text-sm text-muted-foreground">
              Faltam {faltam} {faltam === 1 ? "balão" : "balões"}
            </span>
          )}
          <Button size="lg" className="w-full gap-2 sm:w-auto" disabled={!completo} onClick={onEnviar}>
            Enviar respostas
            <ArrowRight className="size-5" aria-hidden="true" />
          </Button>
        </div>
      </div>
      {/* restante usado só para acessibilidade do timer inicial */}
      <span className="sr-only">{restante > 0 ? `Tempo total da rodada: ${restante} segundos` : ""}</span>
    </div>
  )
}

function TelaResultado({
  software,
  selecionados,
  corretosPerdidos,
  resultado,
  onProxima,
  onSair,
}: {
  software: Software
  selecionados: Requisito[]
  corretosPerdidos: Requisito[]
  resultado: ResultadoRodada
  onProxima: () => void
  onSair: () => void
}) {
  const mensagem = resultado.perfeito
    ? "Perfeito! Você identificou todos os requisitos corretamente."
    : resultado.acertos >= 3
      ? "Bom trabalho! Reveja os comentários para acertar todos na próxima."
      : "Continue praticando! Analise os comentários abaixo com atenção."

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-8 text-center shadow-sm">
        <div
          className={cn(
            "flex size-16 items-center justify-center rounded-2xl",
            resultado.acertos >= 3 ? "bg-success/15 text-success" : "bg-destructive/10 text-destructive",
          )}
        >
          <Trophy className="size-8" aria-hidden="true" />
        </div>
        <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          {software.emoji} {software.nome}
        </p>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">{resultado.acertos} de 5 corretos</h2>
        <p className="text-pretty leading-relaxed text-muted-foreground">{mensagem}</p>
        <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
          <Zap className="size-4" aria-hidden="true" />
          <span className="font-bold tabular-nums">+{resultado.pontos} pontos</span>
        </div>
        <div className="flex w-full max-w-xs items-center gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={cn("h-2 flex-1 rounded-full", i < resultado.acertos ? "bg-success" : "bg-muted")}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      <ListaRequisitos titulo="Suas escolhas" itens={selecionados} modo="escolha" />
      {corretosPerdidos.length > 0 && (
        <ListaRequisitos titulo="Corretos que você não marcou" itens={corretosPerdidos} modo="perdido" />
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button size="lg" className="w-full gap-2" onClick={onProxima}>
          <RotateCcw className="size-5" aria-hidden="true" />
          Próxima rodada
        </Button>
        <Button size="lg" variant="outline" className="w-full gap-2" onClick={onSair}>
          <Home className="size-5" aria-hidden="true" />
          Voltar ao menu
        </Button>
      </div>
    </div>
  )
}

function ListaRequisitos({
  titulo,
  itens,
  modo,
}: {
  titulo: string
  itens: Requisito[]
  modo: "escolha" | "perdido"
}) {
  return (
    <div className="flex flex-col gap-3 rounded-3xl border border-border bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-foreground">{titulo}</h3>
      <ul className="flex flex-col gap-3">
        {itens.map((req, i) => {
          const ok = modo === "perdido" ? true : req.correto
          return (
            <li
              key={i}
              className={cn(
                "flex items-start gap-3 rounded-2xl border p-4",
                modo === "perdido"
                  ? "border-border bg-secondary/50"
                  : req.correto
                    ? "border-success/30 bg-success/10"
                    : "border-destructive/30 bg-destructive/10",
              )}
            >
              <span
                className={cn(
                  "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-primary-foreground",
                  modo === "perdido" ? "bg-primary" : ok ? "bg-success" : "bg-destructive",
                )}
                aria-hidden="true"
              >
                {modo === "perdido" ? (
                  <Target className="size-3.5" />
                ) : ok ? (
                  <Check className="size-4" />
                ) : (
                  <X className="size-4" />
                )}
              </span>
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-medium text-foreground">{req.texto}</p>
                  <TipoBadge tipo={req.tipo} />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{req.explicacao}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
