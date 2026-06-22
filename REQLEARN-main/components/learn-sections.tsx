import { LICOES, GLOSSARIO } from "@/lib/content"
import { BookOpen, ChevronDown, GraduationCap } from "lucide-react"

export function TeoriaSection() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <BookOpen className="size-5 text-primary" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-foreground">Aprenda primeiro</h2>
      </div>
      <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
        Revise os conceitos essenciais antes de praticar. Clique em cada tópico para expandir.
      </p>
      <div className="flex flex-col gap-3">
        {LICOES.map((licao) => (
          <details
            key={licao.titulo}
            className="group rounded-2xl border border-border bg-card p-5 shadow-sm [&[open]]:bg-card"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
              <span className="font-semibold text-foreground">{licao.titulo}</span>
              <ChevronDown
                className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <div className="mt-4 flex flex-col gap-3">
              {licao.paragrafos.map((p, i) => (
                <p key={i} className="text-pretty leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {licao.exemplos && (
                <ul className="flex flex-col gap-2">
                  {licao.exemplos.map((ex, i) => (
                    <li key={i} className="flex items-start gap-3 rounded-xl bg-secondary/50 px-3 py-2">
                      <span
                        className={
                          ex.rotulo === "RF"
                            ? "rounded-md bg-chart-1/15 px-2 py-0.5 text-xs font-bold text-chart-1"
                            : "rounded-md bg-chart-3/20 px-2 py-0.5 text-xs font-bold text-chart-3"
                        }
                      >
                        {ex.rotulo}
                      </span>
                      <span className="text-sm leading-relaxed text-foreground">{ex.texto}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}

export function GlossarioSection() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <GraduationCap className="size-5 text-primary" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-foreground">Glossário</h2>
      </div>
      <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {GLOSSARIO.map((g) => (
          <div key={g.termo} className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-4 shadow-sm">
            <dt className="font-semibold text-foreground">{g.termo}</dt>
            <dd className="text-sm leading-relaxed text-muted-foreground">{g.definicao}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
