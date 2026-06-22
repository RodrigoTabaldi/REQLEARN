import { ReqlearnGame } from "@/components/reqlearn-game"
import { TeoriaSection, GlossarioSection } from "@/components/learn-sections"
import { GraduationCap, Target, Users, ListChecks, BrainCircuit } from "lucide-react"

const OBJETIVOS = [
  "Analisar um sistema de software e identificar quais requisitos pertencem ao seu escopo.",
  "Diferenciar requisitos funcionais (RF) de requisitos não-funcionais (RNF).",
  "Reconhecer distratores que pertencem a outros sistemas.",
]

const PUBLICO = [
  "Estudantes de Ensino Superior",
  "Profissionais de Desenvolvimento de Software",
  "Analistas de Sistemas Iniciantes",
  "Profissionais de Gestão de Projetos",
]

const REFERENCIAS = [
  "SOMMERVILLE, Ian. Engenharia de Software. 10. ed. São Paulo: Pearson, 2019.",
  "PRESSMAN, Roger S.; MAXIM, Bruce R. Engenharia de Software: uma abordagem profissional. 8. ed. Porto Alegre: AMGH, 2016.",
  "ANDERSON, L. W.; KRATHWOHL, D. R. A Taxonomy for Learning, Teaching, and Assessing. New York: Longman, 2001.",
]

const NAV = [
  { href: "#praticar", rotulo: "Praticar" },
  { href: "#teoria", rotulo: "Teoria" },
  { href: "#glossario", rotulo: "Glossário" },
  { href: "#sobre", rotulo: "Sobre" },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      {/* Barra superior */}
      <div className="sticky top-0 z-20 border-b border-border bg-card/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <a href="#topo" className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <BrainCircuit className="size-5" aria-hidden="true" />
            </span>
            <span className="text-lg font-extrabold tracking-tight text-foreground">REQLEARN</span>
          </a>
          <nav className="hidden items-center gap-1 sm:flex" aria-label="Navegação principal">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {n.rotulo}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Cabeçalho / Hero */}
      <header id="topo" className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 md:py-14">
          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            <GraduationCap className="size-5" aria-hidden="true" />
            UFR · Informática na Educação · Análise de Requisitos
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-balance text-3xl font-bold leading-tight text-foreground md:text-5xl">
              Aprenda Análise de Requisitos jogando
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              O <strong className="text-foreground">REQLEARN</strong> é um Objeto Digital de Aprendizagem (ODA) para
              praticar a identificação e a classificação de requisitos funcionais e não-funcionais. Sem cadastro:
              escolha um modo e comece.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-3">
            <InfoCard icon={<Target className="size-5" />} titulo="Objetivos de aprendizagem">
              <ul className="flex flex-col gap-2">
                {OBJETIVOS.map((o) => (
                  <li key={o} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {o}
                  </li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard icon={<Users className="size-5" />} titulo="Público-alvo">
              <ul className="flex flex-col gap-2">
                {PUBLICO.map((p) => (
                  <li key={p} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard icon={<ListChecks className="size-5" />} titulo="Pré-requisitos">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Afinidade com a área de tecnologia e noções básicas sobre o funcionamento de um software (o que é um
                sistema, suas funções e características de qualidade).
              </p>
            </InfoCard>
          </div>
        </div>
      </header>

      {/* Atividade interativa */}
      <section id="praticar" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-10 md:py-14" aria-label="Praticar">
        <ReqlearnGame />
      </section>

      {/* Teoria */}
      <section id="teoria" className="scroll-mt-20 border-t border-border bg-card">
        <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
          <TeoriaSection />
        </div>
      </section>

      {/* Glossário */}
      <section id="glossario" className="scroll-mt-20 border-t border-border">
        <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
          <GlossarioSection />
        </div>
      </section>

      {/* Sobre / Referências */}
      <section id="sobre" className="scroll-mt-20 border-t border-border bg-card">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">Sobre o projeto</h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Analisar requisitos é saber quais necessidades pertencem ao escopo de um sistema — e quais não, mesmo
              parecendo plausíveis. O REQLEARN treina essa habilidade com três modos: identificação de requisitos,
              classificação entre funcionais e não-funcionais, e um desafio cronometrado.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-foreground">Referências</h2>
            <ul className="flex flex-col gap-3">
              {REFERENCIAS.map((r) => (
                <li key={r} className="text-sm leading-relaxed text-muted-foreground">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 py-8 text-center">
          <p className="text-sm font-bold text-foreground">REQLEARN · Grupo</p>
          <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
            Fernando Matos Mafra · Rodrigo Tabaldi · Kauã Fernando Braun · Guilherme Simões de Souza · Gustavo Silva
            Bittencourt
          </p>
        </div>
      </footer>
    </main>
  )
}

function InfoCard({
  icon,
  titulo,
  children,
}: {
  icon: React.ReactNode
  titulo: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-5">
      <div className="flex items-center gap-2 text-foreground">
        <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">{icon}</span>
        <h3 className="font-semibold">{titulo}</h3>
      </div>
      {children}
    </div>
  )
}
