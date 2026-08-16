import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BookingDialog } from "./booking-dialog";

const LINKS = [
  { label: "Chambres", href: "#chambres" },
  { label: "Services", href: "#services" },
  { label: "Galerie", href: "#galerie" },
  { label: "Avantages", href: "#avantages" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  // Swaps the header from transparent-over-hero to a solid blurred
  // background once the visitor has scrolled down a bit.
  const [scrolled, setScrolled] = useState(false);
  // Controls the slide-in mobile nav (shadcn Sheet component).
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); // check immediately in case the page loads already scrolled
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/95 py-3 backdrop-blur-md"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-10">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span
            className={`font-display text-2xl leading-none tracking-[0.18em] transition-colors ${
              scrolled ? "text-foreground" : "text-ivory"
            }`}
          >
            KARIBE
          </span>
          <span
            className={`hidden text-[10px] uppercase tracking-[0.32em] sm:block ${
              scrolled ? "text-muted-foreground" : "text-ivory/70"
            }`}
          >
            Hotel &amp; Suites
          </span>
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-xs uppercase tracking-[0.2em] transition-colors hover:text-accent ${
                  scrolled ? "text-foreground/80" : "text-ivory/85"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:+50928123434"
            aria-label="Appeler l'hôtel"
            className={`hidden h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors sm:grid ${
              scrolled
                ? "border-border text-foreground hover:border-accent hover:text-accent"
                : "border-ivory/40 text-ivory hover:border-accent hover:text-accent"
            }`}
          >
            <Phone className="h-4 w-4" />
          </a>

          <BookingDialog
            trigger={
              <button className="hidden h-10 shrink-0 bg-accent px-6 text-[11px] font-medium uppercase tracking-[0.24em] text-accent-foreground transition-transform hover:-translate-y-0.5 sm:block">
                Réserver
              </button>
            }
          />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Ouvrir le menu"
                className={`shrink-0 lg:hidden ${scrolled ? "text-foreground" : "text-ivory"}`}
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] border-border bg-background p-8">
              <p className="eyebrow text-accent">Karibe Hotel &amp; Suites</p>
              <nav className="mt-8 flex flex-col gap-6">
                {LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl font-light text-foreground"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
              <div className="mt-10 space-y-3">
                <BookingDialog
                  trigger={
                    <button className="h-12 w-full bg-accent text-[11px] font-medium uppercase tracking-[0.24em] text-accent-foreground">
                      Réserver en direct
                    </button>
                  }
                />
                <a
                  href="tel:+50928123434"
                  className="grid h-12 w-full place-items-center border border-border text-[11px] uppercase tracking-[0.24em] text-foreground"
                >
                  +509 28 12 34 34
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}