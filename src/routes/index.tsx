import { createFileRoute } from "@tanstack/react-router";
import glassDossier from "@/assets/glass-dossier.jpg";
import dossierAsset from "@/assets/onderzoeksdossier.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dossier — De onzichtbare markt van digitale intimiteit" },
      {
        name: "description",
        content:
          "Een kritisch onderzoeksdossier over ghost chatting, psychologische profilering, dwangcontracten en de eenzaamheidseconomie.",
      },
      { property: "og:title", content: "De onzichtbare markt van digitale intimiteit" },
      {
        property: "og:description",
        content:
          "Een kritisch dossier over de systemen achter digitale intimiteit en commerciële beïnvloeding.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const chapters = [
  {
    number: "01",
    title: "Psychologische CRM-profielen",
    description: "Hoe persoonlijke kwetsbaarheid kan worden omgezet in commerciële sturing.",
  },
  {
    number: "02",
    title: "Financiële fraudestructuren",
    description: "De geldstromen en verkoopmechanismen die het dossier onderzoekt.",
  },
  {
    number: "03",
    title: "Dwangcontracten en escalatie",
    description: "Over controle, accounttoegang en druk op de grenzen van creators.",
  },
  {
    number: "04",
    title: "Algoritmische beïnvloeding",
    description: "Waar automatisering, platformprikkels en menselijke aandacht samenkomen.",
  },
  {
    number: "05",
    title: "Maatschappelijke polarisatie",
    description: "Hoe wantrouwen en isolatie een winstgevend verdienmodel kunnen voeden.",
  },
  {
    number: "06",
    title: "Beleidsvoorstellen",
    description: "Mogelijke waarborgen voor transparantie, autonomie en menselijke waardigheid.",
  },
];

const findings = [
  "Gesprekken kunnen door externe operators of geautomatiseerde systemen worden gevoerd zonder duidelijke herkenbaarheid voor de koper.",
  "Persoonlijke informatie kan worden bijgehouden om timing, toon en verkoopdruk steeds nauwkeuriger af te stemmen.",
  "Creators kunnen via contracten en accountbeheer afhankelijk worden van bureaus die hun digitale identiteit controleren.",
];

function Index() {
  return (
    <main className="dossier-canvas min-h-screen overflow-hidden text-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between py-6 sm:py-8">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Dossier, naar boven">
            <span className="size-2.5 rounded-full bg-accent shadow-[0_0_18px_var(--accent)]" />
            <span className="font-serif text-xl font-medium">Dossier</span>
          </a>
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            46 blz. · onderzoeksnotitie
          </span>
        </header>

        <section id="top" className="glass-panel scroll-mt-6 p-6 sm:p-9 lg:p-12">
          <div className="flex items-center gap-3">
            <span className="eyebrow">In onderzoek</span>
            <span className="h-px flex-1 bg-glass-line" />
            <span className="eyebrow text-muted-foreground">September 2026</span>
          </div>

          <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-alert">
                Kritisch dossier · onderzoeksclaims
              </p>
              <h1 className="max-w-3xl font-serif text-4xl font-medium leading-[1.02] sm:text-5xl lg:text-7xl">
                De onzichtbare markt van digitale intimiteit.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
                Een onderzoek naar ghost chatting, psychologische profilering en systemen die menselijke
                kwetsbaarheid kunnen omzetten in omzet — gepresenteerd als onderzoeksclaims, niet als
                vaststaande feiten.
              </p>
            </div>

            <figure className="glass-inset flex items-center gap-4 p-4 sm:p-5">
              <img
                src={glassDossier}
                alt="Gelaagde glazen panelen als visuele metafoor voor een onderzoeksdossier"
                width={1080}
                height={1080}
                className="size-20 shrink-0 rounded-xl object-cover sm:size-24"
              />
              <figcaption>
                <p className="eyebrow text-muted-foreground">Omvang</p>
                <p className="mt-1 font-serif text-lg">46 pagina’s</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">Van systeemanalyse tot beleidsadvies</p>
              </figcaption>
            </figure>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-2.5 sm:max-w-xl sm:gap-4">
            <Stat value="06" label="Thema’s" />
            <Stat value="46" label="Pagina’s" />
            <Stat value="01" label="Dossier" />
          </div>
        </section>

        <section className="mt-4 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <h2 className="eyebrow">Kernbevindingen</h2>
              <span className="h-px flex-1 bg-glass-line" />
            </div>
            <ol className="mt-5 space-y-5">
              {findings.map((finding, index) => (
                <li key={finding} className="flex gap-4">
                  <span className="font-serif text-sm text-muted-foreground">0{index + 1}</span>
                  <p className="text-sm leading-relaxed text-foreground/80">{finding}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-t border-glass-line pt-5 text-xs leading-relaxed text-muted-foreground">
              Deze samenvatting weerspiegelt de stellingen en analyses in het aangeleverde dossier. Onafhankelijke
              verificatie en bronvermelding blijven noodzakelijk voor journalistieke publicatie.
            </p>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <h2 className="eyebrow">Wat erin staat</h2>
              <span className="h-px flex-1 bg-glass-line" />
            </div>
            <div className="mt-4 divide-y divide-glass-line">
              {chapters.map((chapter) => (
                <article key={chapter.number} className="group flex gap-4 py-4 first:pt-2">
                  <span className="w-8 shrink-0 pt-0.5 font-serif text-sm text-muted-foreground">
                    {chapter.number}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold transition-colors group-hover:text-primary">
                      {chapter.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{chapter.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="glass-panel mt-4 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="eyebrow text-alert">Het systeem</p>
              <h2 className="mt-3 font-serif text-3xl font-medium leading-tight sm:text-4xl">
                Van persoonlijk signaal naar commerciële sturing
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">
                Het dossier beschrijft een terugkerende lus: informatie uit gesprekken wordt vastgelegd,
                geïnterpreteerd en opnieuw ingezet om betrokkenheid en betalingen te verhogen.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
              <SystemStep label="01 · Signaal" text="Een gesprek onthult behoefte of kwetsbaarheid." />
              <span className="hidden text-center text-xl text-primary sm:block" aria-hidden="true">→</span>
              <SystemStep label="02 · Profiel" text="Informatie wordt bewaard en geclassificeerd." />
              <span className="hidden text-center text-xl text-primary sm:block" aria-hidden="true">→</span>
              <SystemStep label="03 · Sturing" text="Timing en aanbod worden daarop afgestemd." />
            </div>
          </div>
        </section>

        <section className="glass-panel mt-4 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow">Lees het oorspronkelijke document</p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl font-medium leading-tight sm:text-4xl">
                Vorm zelf een oordeel op basis van het volledige dossier.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                De publicatie bevat uitvoerige analyses, scenario’s en beleidsvoorstellen. De website vat samen;
                het document geeft de volledige redenering weer.
              </p>
            </div>
            <a
              href={dossierAsset.url}
              target="_blank"
              rel="noreferrer"
              className="primary-action"
            >
              Dossier openen
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <footer className="flex flex-col gap-2 px-2 py-8 text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:justify-between">
          <span>Onderzoeksconcept · zorgvuldig lezen</span>
          <span>Digitale autonomie · menselijke waardigheid</span>
        </footer>
      </div>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass-stat p-3 sm:p-4">
      <p className="font-serif text-2xl leading-none">{value}</p>
      <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:text-[10px]">
        {label}
      </p>
    </div>
  );
}

function SystemStep({ label, text }: { label: string; text: string }) {
  return (
    <div className="glass-inset h-full p-4">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">{label}</p>
      <p className="mt-2 text-xs leading-relaxed text-foreground/75">{text}</p>
    </div>
  );
}