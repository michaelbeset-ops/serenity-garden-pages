import { useReveal } from "@/hooks/use-reveal";

const pillars = [
  {
    title: "Vakmanschap",
    body: "Geen kunstjes, maar 25 jaar echte ervaring met grond, beplanting en bestrating.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-10 w-10">
        <path d="M24 6c-6 8-10 14-10 20a10 10 0 0020 0c0-6-4-12-10-20z" />
        <path d="M24 26v16" />
      </svg>
    ),
  },
  {
    title: "Eerlijke prijs",
    body: "Een vrijblijvend gesprek, een heldere offerte. Geen verrassingen achteraf.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-10 w-10">
        <circle cx="24" cy="24" r="16" />
        <path d="M24 14v20M19 19h7a3 3 0 010 6h-4a3 3 0 000 6h7" />
      </svg>
    ),
  },
  {
    title: "Persoonlijke aanpak",
    body: "U krijgt Armando zelf aan tafel. Geen verkoper, maar de man die ook de schop in de grond zet.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-10 w-10">
        <circle cx="24" cy="18" r="6" />
        <path d="M10 40c2-7 8-11 14-11s12 4 14 11" />
      </svg>
    ),
  },
];

export function Pillars() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative bg-cream py-28 lg:py-36">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.28em] text-moss">
              Waar wij in geloven
            </div>
            <h2 className="mt-4 font-serif text-4xl font-light leading-[1.05] tracking-tight text-ink md:text-5xl">
              Ontzorgen is onze missie.{" "}
              <span className="italic text-forest-deep">Genieten</span> is uw resultaat.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="-mx-6 overflow-x-auto px-6 sm:mx-0 sm:overflow-visible sm:px-0">
              <div className="flex snap-x snap-mandatory gap-10 pb-4 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 lg:gap-8">
                {pillars.map((p) => (
                  <div key={p.title} className="min-w-[78vw] shrink-0 snap-center group sm:min-w-0 sm:shrink">
                    <div className="mb-6 text-forest-deep transition-transform duration-500 group-hover:-translate-y-1">
                      {p.icon}
                    </div>
                    <h3 className="font-serif text-xl text-ink">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
