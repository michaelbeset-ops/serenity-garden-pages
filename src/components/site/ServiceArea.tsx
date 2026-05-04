import { useReveal } from "@/hooks/use-reveal";

const places = [
  "Uden", "Veghel", "Oss", "Heesch", "Bernheze",
  "Nistelrode", "Volkel", "Zeeland", "Schaijk", "Geffen",
];

export function ServiceArea() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative bg-[oklch(0.94_0.012_85)] py-24">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.28em] text-moss">Werkgebied</div>
            <h2 className="mt-3 font-serif text-3xl font-light leading-tight text-ink md:text-4xl">
              Thuis in <span className="italic text-forest-deep">Noordoost-Brabant.</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul className="flex flex-wrap gap-2.5">
              {places.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-border bg-cream px-4 py-2 text-sm text-ink/80 transition-colors hover:border-forest-deep/40 hover:text-forest-deep"
                >
                  {p}
                </li>
              ))}
              <li className="rounded-full bg-forest-deep px-4 py-2 text-sm text-cream">
                &amp; omstreken
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
