import { useReveal } from "@/hooks/use-reveal";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";
import { ArrowRight } from "lucide-react";

const items = [
  { src: w1, caption: "Achtertuin · Uden", span: "row-span-2" },
  { src: w2, caption: "Stadstuin · Veghel", span: "" },
  { src: w3, caption: "Tuinpad · Heesch", span: "row-span-2" },
  { src: w4, caption: "Tuinverlichting · Bernheze", span: "" },
  { src: w5, caption: "Voortuin · Nistelrode", span: "" },
  { src: w6, caption: "Bedrijfstuin · Oss", span: "" },
];

export function Work() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="werk" className="relative bg-[oklch(0.94_0.012_85)] py-28 lg:py-36">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-moss">Portfolio</div>
            <h2 className="mt-4 font-serif text-4xl font-light leading-[1.05] tracking-tight text-ink md:text-5xl">
              Recent <span className="italic text-forest-deep">werk.</span>
            </h2>
          </div>
        </div>

        <div className="grid auto-rows-[14rem] grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {items.map((it) => (
            <figure
              key={it.caption}
              className={`group relative overflow-hidden rounded-2xl ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute bottom-4 left-4 right-4 translate-y-2 text-xs uppercase tracking-[0.2em] text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {it.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-forest-deep"
          >
            Bekijk volledige portfolio
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
