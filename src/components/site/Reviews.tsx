import { Star } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const reviews = [
  {
    quote:
      "Armando dacht overal in mee, van eerste schets tot het laatste bloembed. Onze tuin voelt nu écht als een verlengstuk van het huis.",
    name: "Familie Van Boxtel",
    place: "Uden",
  },
  {
    quote:
      "Eindelijk een hovenier die doet wat hij belooft. Strakke planning, eerlijke offerte en het resultaat is prachtig.",
    name: "Marielle Hendriks",
    place: "Veghel",
  },
  {
    quote:
      "We onderhouden onze bedrijfstuin nu al jaren met Armando's team. Altijd net dat beetje extra. Aanrader.",
    name: "J. de Wit",
    place: "Oss",
  },
];

export function Reviews() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="reviews" className="relative bg-cream py-28 lg:py-36">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <div className="text-[11px] uppercase tracking-[0.28em] text-moss">Reviews</div>
          <h2 className="mt-4 font-serif text-4xl font-light leading-[1.05] tracking-tight text-ink md:text-5xl">
            Klanten over <span className="italic text-forest-deep">Armando.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className={`flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-xl ${
                i === 1 ? "md:translate-y-6" : ""
              }`}
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-3.5 w-3.5 fill-moss text-moss" />
                ))}
              </div>
              <blockquote className="mt-6 font-serif text-xl font-light leading-snug text-ink">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-8 text-sm">
                <div className="font-medium text-ink">{r.name}</div>
                <div className="text-muted-foreground">{r.place}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
