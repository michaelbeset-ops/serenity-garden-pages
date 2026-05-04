import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import work1 from "@/assets/work-1.jpg";

const services = [
  { title: "Tuinontwerp", desc: "Van eerste schets tot 3D-impressie.", featured: true },
  { title: "Tuinaanleg & renovatie", desc: "Volledige herinrichting met oog voor detail." },
  { title: "Tuinonderhoud", desc: "Jaarcontract of losse beurt, altijd vakwerk." },
  { title: "Bedrijfstuinen", desc: "Een groene visitekaartje voor uw onderneming." },
  { title: "Sproei­installaties", desc: "Onzichtbaar comfort voor een gezonde tuin." },
  { title: "Bestrating & timmerwerk", desc: "Terrassen, paden, schuttingen en pergola's." },
];

export function Services() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="diensten" className="relative bg-cream py-28 lg:py-36">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-moss">Diensten</div>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl font-light leading-[1.05] tracking-tight text-ink md:text-5xl">
              Van eerste schets tot{" "}
              <span className="italic text-forest-deep">laatste tegel.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Eén aanspreekpunt voor uw hele buitenruimte. Wij denken mee, ontwerpen,
            realiseren en houden hem mooi.
          </p>
        </div>

        {/* Asymmetric mosaic grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-6 md:grid-rows-[14rem_14rem_14rem]">
          {/* Featured large with image */}
          <a
            href="#contact"
            className="group relative col-span-2 overflow-hidden rounded-2xl bg-forest-deep sm:col-span-3 md:row-span-2"
          >
            <img
              src={work1}
              alt="Tuinontwerp"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent" />
            <div className="relative flex h-full min-h-[20rem] flex-col justify-end p-6 text-cream sm:min-h-[28rem] sm:p-8">
              <div className="text-[10px] uppercase tracking-[0.28em] text-cream/70">
                Onze specialiteit
              </div>
              <h3 className="mt-2 font-serif text-2xl font-light sm:text-3xl md:text-4xl">
                Tuinontwerp
              </h3>
              <p className="mt-2 max-w-xs text-sm text-cream/80">
                Een tuin die past bij uw huis, uw leven en uw seizoenen.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm sm:mt-6">
                Lees meer{" "}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </div>
          </a>

          {services.slice(1, 3).map((s) => (
            <ServiceTile key={s.title} {...s} className="col-span-1 sm:col-span-3" />
          ))}
          {services.slice(3, 5).map((s) => (
            <ServiceTile key={s.title} {...s} className="col-span-1 sm:col-span-2" />
          ))}
          <ServiceTile {...services[5]} className="col-span-2 sm:col-span-2" />
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Ook:{" "}
          <a href="#contact" className="text-forest-deep underline-offset-4 hover:underline">
            vijvers, sedumdaken, tuinverlichting, kunstgras en boomverzorging →
          </a>
        </p>
      </div>
    </section>
  );
}

function ServiceTile({
  title,
  desc,
  className = "",
}: {
  title: string;
  desc: string;
  className?: string;
}) {
  return (
    <a
      href="#contact"
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-500 hover:border-forest-deep/30 hover:bg-forest-deep sm:p-7 ${className}`}
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <h3 className="font-serif text-lg font-light text-ink transition-colors group-hover:text-cream sm:text-2xl">
            {title}
          </h3>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground transition-colors group-hover:text-cream/75 sm:mt-2 sm:text-sm">
            {desc}
          </p>
        </div>
        <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-forest-deep transition-all group-hover:text-cream sm:mt-6">
          Lees meer
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </a>
  );
}
