import { useState } from "react";
import { Plus } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const faqs = [
  {
    q: "Werkt u met een vaste prijs of op uurbasis?",
    a: "Voor projecten als ontwerp, aanleg en renovatie krijgt u altijd een heldere, vaste offerte. Voor onderhoud bieden we zowel jaarcontracten als losse beurten — wat het beste past bij uw tuin en wensen.",
  },
  {
    q: "Hoe lang duurt het voordat u kunt starten?",
    a: "Voor onderhoud meestal binnen 1-2 weken. Aanleg- en ontwerpprojecten plannen we in overleg, afhankelijk van het seizoen en de omvang van het werk.",
  },
  {
    q: "Kost een eerste afspraak iets?",
    a: "Nee. Een kennismaking en eerste advies bij u thuis is altijd vrijblijvend en kosteloos.",
  },
  {
    q: "Werkt u alleen of met een team?",
    a: "Armando werkt met een vast, eigen team van vakmensen. Geen wisselende ZZP'ers — bij u thuis komt steeds dezelfde, vertrouwde ploeg.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-cream py-28 lg:py-36">
      <div ref={ref} className="reveal mx-auto max-w-4xl px-6 lg:px-10">
        <div className="mb-14 text-center">
          <div className="text-[11px] uppercase tracking-[0.28em] text-moss">Veelgesteld</div>
          <h2 className="mt-4 font-serif text-4xl font-light leading-[1.05] tracking-tight text-ink md:text-5xl">
            Goed om <span className="italic text-forest-deep">te weten.</span>
          </h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={f.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="block w-full py-6 text-left"
              >
                <div className="flex items-center justify-between gap-6">
                  <span className="font-serif text-lg text-ink md:text-xl">{f.q}</span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-forest-deep transition-transform duration-500 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
