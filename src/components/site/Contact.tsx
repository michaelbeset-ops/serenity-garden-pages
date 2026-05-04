import { Phone, MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="relative overflow-hidden bg-forest-deep py-28 text-cream lg:py-36">
      {/* Soft organic top curve */}
      <svg
        className="absolute -top-1 left-0 right-0 w-full text-cream rotate-180"
        viewBox="0 0 1440 120"
        fill="currentColor"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,64 C240,120 480,0 720,40 C960,80 1200,120 1440,72 L1440,120 L0,120 Z" />
      </svg>

      <div ref={ref} className="reveal relative mx-auto max-w-7xl px-6 pt-16 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="text-[11px] uppercase tracking-[0.28em] text-moss">Contact</div>
            <h2 className="mt-4 font-serif text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
              Laten we een keer{" "}
              <em className="italic">koffie drinken in uw tuin.</em>
            </h2>
            <p className="mt-6 max-w-md text-cream/75">
              Vul uw gegevens in of bel direct. Binnen één werkdag krijgt u
              een persoonlijke reactie van Armando zelf.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="tel:0621892019"
                className="group flex items-center gap-4 border-t border-cream/15 py-4 transition-colors hover:text-moss"
              >
                <Phone className="h-5 w-5 text-moss" />
                <span className="font-serif text-2xl font-light">06-21 89 20 19</span>
                <ArrowRight className="ml-auto h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/31621892019"
                target="_blank"
                rel="noopener"
                className="group flex items-center gap-4 border-t border-cream/15 py-4 transition-colors hover:text-moss"
              >
                <MessageCircle className="h-5 w-5 text-moss" />
                <span className="font-serif text-2xl font-light">WhatsApp</span>
                <ArrowRight className="ml-auto h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:info@helpikhebeentuin.nl"
                className="group flex items-center gap-4 border-y border-cream/15 py-4 transition-colors hover:text-moss"
              >
                <Mail className="h-5 w-5 text-moss" />
                <span className="font-serif text-2xl font-light">
                  info@helpikhebeentuin.nl
                </span>
                <ArrowRight className="ml-auto h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </a>
              <div className="flex items-center gap-4 py-4 text-cream/70">
                <MapPin className="h-5 w-5 text-moss" />
                <span className="text-sm">Uden &amp; omstreken · wij komen naar u toe</span>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Bedankt! We nemen binnen 1 werkdag contact op.");
            }}
            className="rounded-2xl bg-cream p-8 text-ink shadow-2xl lg:col-span-6 lg:p-10"
          >
            <div className="font-serif text-2xl font-light">Plan uw vrijblijvende afspraak</div>
            <p className="mt-1 text-sm text-muted-foreground">
              We bellen u binnen 1 werkdag terug.
            </p>

            <div className="mt-6 grid gap-5">
              <Field label="Naam" name="naam" placeholder="Uw naam" />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Telefoon" name="tel" type="tel" placeholder="06-…" />
                <Field label="E-mail" name="email" type="email" placeholder="u@voorbeeld.nl" />
              </div>
              <Field label="Plaats" name="plaats" placeholder="Bijv. Uden" />
              <div>
                <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Waar kunnen we mee helpen?
                </label>
                <textarea
                  rows={4}
                  placeholder="Vertel kort over uw tuin of project…"
                  className="mt-2 w-full rounded-lg border border-border bg-cream-soft px-4 py-3 text-sm outline-none transition-colors focus:border-forest-deep"
                />
              </div>
              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-forest-deep px-6 py-4 text-sm font-medium text-cream transition-all hover:bg-forest hover:shadow-lg"
              >
                Verstuur aanvraag
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Of stuur direct een bericht via{" "}
                <a
                  href="https://wa.me/31621892019"
                  className="font-medium text-forest-deep underline-offset-4 hover:underline"
                >
                  WhatsApp
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-border bg-cream-soft px-4 py-3 text-sm outline-none transition-colors focus:border-forest-deep"
      />
    </div>
  );
}
