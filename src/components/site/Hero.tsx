import heroImg from "@/assets/hero-garden.jpg";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      {/* Background image with subtle pan */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Sfeervolle aangelegde tuin bij avondlicht"
          className="h-full w-full object-cover [animation:var(--animate-soft-pan)]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-forest-deep/40 to-forest-deep/85" />
      </div>

      {/* Organic curve at the bottom */}
      <svg
        className="absolute -bottom-1 left-0 right-0 z-10 w-full text-cream"
        viewBox="0 0 1440 120"
        fill="currentColor"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,64 C240,120 480,0 720,40 C960,80 1200,120 1440,72 L1440,120 L0,120 Z" />
      </svg>

      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pb-24 pt-40 lg:px-10">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-cream/85 backdrop-blur-sm animate-[var(--animate-fade-in)]">
            <span className="h-1.5 w-1.5 rounded-full bg-moss" />
            Hovenier · Uden &amp; omstreken
          </div>

          <h1 className="font-serif text-balance text-5xl font-light leading-[0.98] tracking-tight text-cream sm:text-6xl md:text-7xl lg:text-[5.5rem] animate-[var(--animate-fade-up)]">
            Een tuin om <em className="italic font-light text-cream/95">in te leven.</em>
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-cream/80 [animation-delay:200ms] animate-[var(--animate-fade-up)] opacity-0">
            25 jaar vakmanschap in tuinontwerp, aanleg en onderhoud — in
            Uden, Veghel, Oss en omstreken.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center [animation-delay:400ms] animate-[var(--animate-fade-up)] opacity-0">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cream px-7 py-4 text-sm font-medium text-forest-deep transition-all hover:bg-cream/90 hover:shadow-2xl"
            >
              Plan een vrijblijvende afspraak
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#werk"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-7 py-4 text-sm font-medium text-cream transition-all hover:border-cream hover:bg-cream/5"
            >
              Bekijk ons werk
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-cream/70 [animation-delay:600ms] animate-[var(--animate-fade-up)] opacity-0">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-moss text-moss" />
              ))}
            </div>
            <span>Beoordeeld via Tuinkeur &amp; HovenierNederland</span>
            <span className="hidden h-3 w-px bg-cream/30 sm:block" />
            <span>25+ jaar ervaring</span>
          </div>
        </div>
      </div>
    </section>
  );
}
