import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { href: "#diensten", label: "Diensten" },
  { href: "#werk", label: "Werk" },
  { href: "#over", label: "Over Armando" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="group">
          <div
            className={`font-serif text-xl leading-none tracking-tight transition-colors ${
              scrolled ? "text-ink" : "text-cream"
            }`}
          >
            Armando Lunenburg
          </div>
          <div
            className={`mt-1 text-[10px] uppercase tracking-[0.28em] transition-colors ${
              scrolled ? "text-muted-foreground" : "text-cream/70"
            }`}
          >
            Tuinverzorging
          </div>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${
                scrolled
                  ? "text-ink/80 hover:text-forest-deep"
                  : "text-cream/85 hover:text-cream"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:0621892019"
            className={`hidden items-center gap-2 text-sm transition-colors md:flex ${
              scrolled ? "text-ink/70 hover:text-forest-deep" : "text-cream/80 hover:text-cream"
            }`}
          >
            <Phone className="h-4 w-4" />
            06-21 89 20 19
          </a>
          <a
            href="#contact"
            className="hidden rounded-full bg-forest-deep px-5 py-2.5 text-sm font-medium text-cream transition-all hover:bg-forest hover:shadow-lg lg:inline-flex"
          >
            Plan afspraak
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className={`lg:hidden ${scrolled ? "text-ink" : "text-cream"}`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-cream lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm text-ink hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-forest-deep px-5 py-3 text-center text-sm font-medium text-cream"
            >
              Plan afspraak
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
