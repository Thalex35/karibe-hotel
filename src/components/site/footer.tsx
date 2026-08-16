// Simple footer: hotel name + short blurb, and quick nav links to sections.
export function Footer() {
  return (
    <footer className="border-t border-ivory/12 bg-ink pb-28 pt-14 text-ivory/60 lg:pb-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:px-10">
        <div>
          <p className="font-display text-2xl tracking-[0.18em] text-ivory">KARIBE</p>
          <p className="mt-3 max-w-md text-xs leading-relaxed">
            Prototype de démonstration réalisé pour illustrer une évolution premium du site du
            Karibe Hotel Group. Contenus et tarifs fictifs.
          </p>
        </div>
        <nav className="flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.2em] lg:justify-end">
          <a href="#chambres" className="hover:text-accent">Chambres</a>
          <a href="#services" className="hover:text-accent">Services</a>
          <a href="#galerie" className="hover:text-accent">Galerie</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </nav>
      </div>
    </footer>
  );
}