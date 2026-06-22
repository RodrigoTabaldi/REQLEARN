"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { POOL_CLASSIFICACAO, type ItemClassificacao } from "@/lib/content"
import type { TipoRequisito } from "@/lib/softwares"
import { cn } from "@/lib/utils"
import { type ConfigDificuldade, type ResultadoRodada, embaralhar } from "@/components/game/config"
import { useTimer } from "@/components/game/use-timer"
import { Check, X, ArrowRight, Home, Trophy, Layers, Timer, RotateCcw, Zap } from "lucide-react"

export function ModeClassificacao({
  config,
  onRegistrar,
  onSair,
}: {
  config: ConfigDificuldade
  onRegistrar: (r: ResultadoRodada) => void
  onSair: () => void
}) {
  const [chave, setChave] = useState(0) // força nova rodada
  const itens = useMemo<ItemClassificacao[]>(() => {
    const funcionais = embaralhar(POOL_CLASSIFICACAO.filter((i) => i.tipo === "funcional"))
    const naoFuncionais = embaralhar(POOL_CLASSIFICACAO.filter((i) => i.tipo === "nao-funcional"))
    const metade = Math.floor(config.itensClass / 2)
    const conjunto = [...funcionais.slice(0, metade), ...naoFuncionais.slice(0, config.itensClass - metade)]
    return embaralhar(conjunto)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.itensClass, chave])

  const [respostas, setRespostas] = useState<Record<number, TipoRequisito>>({})
  const [enviado, setEnviado] = useState(false)

  const todasRespondidas = Object.keys(respostas).length === itens.length

  function classificar(indice: number, tipo: TipoRequisito) {
    if (enviado) return
    setRespostas((r) => ({ ...r, [indice]: tipo }))
  }

  function enviar() {
    if (!todasRespondidas) return
    setEnviado(true)
  }

  const resultado: ResultadoRodada = useMemo(() => {
    const acertos = itens.reduce((acc, item, i) => acc + (respostas[i] === item.tipo ? 1 : 0), 0)
    const pontos = Math.round(acertos * 15 * config.multiplicador)
    return { pontos, acertos, questoes: itens.length, perfeito: acertos === itens.length }
  }, [itens, respostas, config.multiplicador])

  const segundos = useTimer(config.timer, config.timer > 0 && !enviado, enviar)
  const tempoCritico = config.timer > 0 && segundos <= 10

  function proxima() {
    onRegistrar(resultado)
    setRespostas({})
    setEnviado(false)
    setChave((k) => k + 1)
  }

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-5">
      <div className="flex flex-col gap-3 rounded-3xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Layers className="size-6" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-xl font-bold text-foreground">Classifique os Requisitos</h2>
              <p className="text-sm text-muted-foreground">Funcional (RF) ou Não-Funcional (RNF)?</p>
            </div>
          </div>
          {config.timer > 0 && !enviado && (
            <span
              className={cn(
                "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold tabular-nums",
                tempoCritico ? "bg-destructive/15 text-destructive" : "bg-secondary text-secondary-foreground",
              )}
            >
              <Timer className="size-4" aria-hidden="true" />
              {String(segundos).padStart(2, "0")}s
            </span>
          )}
        </div>
        {!enviado && (
          <div className="rounded-2xl bg-accent/40 px-4 py-3 text-sm font-medium text-accent-foreground">
            Para cada requisito, escolha se ele é uma <strong>função</strong> do sistema (RF) ou um{" "}
            <strong>critério de qualidade</strong> (RNF).
          </div>
        )}
      </div>

      <ul className="flex flex-col gap-3">
        {itens.map((item, i) => {
          const resposta = respostas[i]
          const acertou = enviado && resposta === item.tipo
          const errou = enviado && resposta !== undefined && resposta !== item.tipo
          return (
            <li
              key={i}
              className={cn(
                "flex flex-col gap-3 rounded-2xl border-2 p-4 transition-colors",
                acertou
                  ? "border-success/40 bg-success/10"
                  : errou
                    ? "border-destructive/40 bg-destructive/10"
                    : "border-border bg-card",
              )}
            >
              <div className="flex items-start gap-3">
                {enviado && (
                  <span
                    className={cn(
                      "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-primary-foreground",
                      acertou ? "bg-success" : "bg-destructive",
                    )}
                    aria-hidden="true"
                  >
                    {acertou ? <Check className="size-4" /> : <X className="size-4" />}
                  </span>
                )}
                <p className="text-pretty font-medium leading-snug text-foreground">{item.texto}</p>
              </div>

              <div className="flex gap-2">
                <BotaoTipo
                  ativo={resposta === "funcional"}
                  enviado={enviado}
                  correto={item.tipo === "funcional"}
                  onClick={() => classificar(i, "funcional")}
                >
                  Funcional (RF)
                </BotaoTipo>
                <BotaoTipo
                  ativo={resposta === "nao-funcional"}
                  enviado={enviado}
                  correto={item.tipo === "nao-funcional"}
                  onClick={() => classificar(i, "nao-funcional")}
                >
                  Não-Funcional (RNF)
                </BotaoTipo>
              </div>

              {enviado && (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">
                    {item.tipo === "funcional" ? "RF" : "RNF"}.
                  </strong>{" "}
                  {item.explicacao}
                </p>
              )}
            </li>
          )
        })}
      </ul>

      {!enviado ? (
        <div className="flex flex-col-reverse items-center justify-between gap-3 rounded-3xl border border-border bg-card p-4 shadow-sm sm:flex-row">
          <Button variant="ghost" className="gap-2" onClick={onSair}>
            <Home className="size-4" aria-hidden="true" />
            Voltar ao menu
          </Button>
          <div className="flex w-full flex-col items-center gap-2 sm:w-auto sm:flex-row">
            <span className="text-sm text-muted-foreground">
              {Object.keys(respostas).length}/{itens.length} respondidos
            </span>
            <Button size="lg" className="w-full gap-2 sm:w-auto" disabled={!todasRespondidas} onClick={enviar}>
              Conferir respostas
              <ArrowRight className="size-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-6 text-center shadow-sm">
          <div
            className={cn(
              "flex size-14 items-center justify-center rounded-2xl",
              resultado.acertos >= itens.length / 2 ? "bg-success/15 text-success" : "bg-destructive/10 text-destructive",
            )}
          >
            <Trophy className="size-7" aria-hidden="true" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">
            {resultado.acertos} de {itens.length} corretos
          </h3>
          <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
            <Zap className="size-4" aria-hidden="true" />
            <span className="font-bold tabular-nums">+{resultado.pontos} pontos</span>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row">
            <Button size="lg" className="w-full gap-2" onClick={proxima}>
              <RotateCcw className="size-5" aria-hidden="true" />
              Nova rodada
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full gap-2"
              onClick={() => {
                onRegistrar(resultado)
                onSair()
              }}
            >
              <Home className="size-5" aria-hidden="true" />
              Voltar ao menu
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

function BotaoTipo({
  children,
  ativo,
  enviado,
  correto,
  onClick,
}: {
  children: React.ReactNode
  ativo: boolean
  enviado: boolean
  correto: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={enviado}
      aria-pressed={ativo}
      className={cn(
        "flex-1 rounded-xl border-2 px-3 py-2 text-sm font-semibold transition-all",
        enviado && correto && "border-success bg-success/15 text-success",
        enviado && !correto && ativo && "border-destructive bg-destructive/15 text-destructive",
        enviado && !correto && !ativo && "border-border text-muted-foreground opacity-60",
        !enviado && ativo && "border-primary bg-primary/10 text-foreground",
        !enviado && !ativo && "border-border text-foreground hover:border-primary/40 hover:bg-secondary",
      )}
    >
      {children}
    </button>
  )
}
