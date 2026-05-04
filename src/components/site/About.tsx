import portrait from "@/assets/armando-portrait.jpg";
import { useReveal } from "@/hooks/use-reveal";

const stats = [
  ["25+", "jaar ervaring"],
  ["500+", "tuinen"],
  ["Tuinkeur", "gecertificeerd"],
  ["Eigen", "team"],
];

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="over" className="relative overflow-hidden bg-forest-deep py-28 text-cream lg:py-36">
      {/* Decorative blob */}
      <svg
        className="absolute -right-32 -top-24 h-[500px] w-[500px] text-moss/15"
        viewBox="0 0 200 200"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M44.5,-60.5C56.6,-50.7,64.2,-35.2,68.4,-19.1C72.6,-3,73.5,13.7,67.3,27.6C61,41.4,47.6,52.4,32.7,59.7C17.7,67,1.3,70.7,-14.6,68.5C-30.5,66.3,-45.9,58.3,-56.8,45.6C-67.7,32.9,-74.2,15.5,-73.3,-1.4C-72.4,-18.3,-64.1,-35,-51.8,-45.4C-39.5,-55.7,-23.2,-59.7,-7.1,-58.3C9,-56.9,32.4,-70.3,44.5,-60.5Z" transform="translate(100 100)" />
      </svg>

      <div ref={ref} className="reveal relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-moss/40" />
              <img
                src={portrait}
                alt="Armando Lunenburg"
                loading="lazy"
                className="relative aspect-[4/5] w-full rounded-2xl object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.28em] text-moss">Over Armando</div>
            <blockquote className="mt-6 font-serif text-3xl font-light leading-[1.15] text-cream md:text-5xl">
              <span className="text-moss">“</span>Een mooie tuin maak je{" "}
              <em className="italic">niet vanuit een kantoor.</em>
              <span className="text-moss">”</span>
            </blockquote>

            <div className="mt-8 max-w-xl space-y-4 text-cream/80">
              <p>
                Al 25 jaar trek ik er met liefde op uit om tuinen te ontwerpen,
                aan te leggen en te onderhouden in de regio Uden. Geen project is hetzelfde,
                en dat is precies wat dit vak zo mooi maakt.
              </p>
              <p>
                Of het nu gaat om een complete herinrichting of gewoon een goede onderhoudsbeurt —
                u krijgt eerlijk advies, vakwerk en een lekker bakkie koffie erbij.
              </p>
              <p className="text-cream/60">— Armando Lunenburg</p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-y-6 border-t border-cream/15 pt-8 sm:grid-cols-4">
              {stats.map(([num, label]) => (
                <div key={label}>
                  <div className="font-serif text-3xl font-light text-cream">{num}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-cream/60">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
