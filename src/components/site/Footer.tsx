export function Footer() {
  return (
    <footer className="bg-ink py-14 text-cream/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3 lg:px-10">
        <div>
          <div className="font-serif text-xl text-cream">Armando Lunenburg</div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-cream/50">
            Tuinverzorging
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Vakmanschap in tuinontwerp, aanleg en onderhoud. Al 25 jaar
            de hovenier van Uden en omstreken.
          </p>
        </div>
        <div className="text-sm">
          <div className="text-[11px] uppercase tracking-[0.22em] text-cream/50">Contact</div>
          <ul className="mt-4 space-y-2">
            <li><a href="tel:0621892019" className="hover:text-cream">06-21 89 20 19</a></li>
            <li><a href="mailto:info@helpikhebeentuin.nl" className="hover:text-cream">info@helpikhebeentuin.nl</a></li>
            <li>helpikhebeentuin.nl</li>
            <li>Uden, Noord-Brabant</li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="text-[11px] uppercase tracking-[0.22em] text-cream/50">Werkgebied</div>
          <p className="mt-4 leading-relaxed">
            Uden · Veghel · Oss · Heesch · Bernheze · Nistelrode · Volkel ·
            Zeeland · Schaijk · Geffen
          </p>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-cream/10 px-6 pt-6 text-xs text-cream/40 md:flex-row md:items-center lg:px-10">
        <div>© {new Date().getFullYear()} Armando Lunenburg Tuinverzorging. Alle rechten voorbehouden.</div>
        <div>Tuinkeur · HovenierNederland gecertificeerd</div>
      </div>
    </footer>
  );
}
