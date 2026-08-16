// The big full-screen intro at the top of the page: background photo with
// a slow-zoom effect (see the "slow-zoom" utility in styles.css), headline,
// and a mini booking form that opens the shared BookingDialog on submit.
import { ChevronDown, Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { BookingDialog } from "./booking-dialog";

const FIELD =
  "mt-2 h-11 w-full rounded-none border border-ivory/25 bg-transparent px-3 text-sm text-ivory outline-none focus:border-accent [color-scheme:dark]";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-ink">
      <img
        src={heroImg}
        alt="Vue nocturne de la piscine et des terrasses du Karibe Hotel dominant Pétion-Ville"
        width={1920}
        height={1200}
        className="slow-zoom absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/35 to-ink/95" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-10 pt-32 lg:px-10 lg:pb-16">
        <div className="fade-up max-w-3xl">
          <div className="flex items-center gap-3 text-accent">
            {[0, 1, 2, 3].map((i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-current" />
            ))}
            <span className="eyebrow text-ivory/70">Pétion-Ville · Haïti</span>
          </div>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,8vw,6rem)] leading-[0.95] text-ivory">
            Là où la nature
            <br />
            <em className="font-normal italic text-gold-soft">rencontre l'élégance</em>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75">
            Un refuge contemporain sur les hauteurs de Port-au-Prince : 120 chambres et suites,
            spa botanique, rooftop panoramique et un service pensé dans le moindre détail.
          </p>
        </div>

        <div className="fade-up mt-10 border border-ivory/15 bg-ink/45 p-5 backdrop-blur-md lg:p-6">
          <div className="grid gap-4 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto] lg:items-end">
            <div>
              <span className="eyebrow text-ivory/55">Arrivée</span>
              <input type="date" className={FIELD} />
            </div>
            <div>
              <span className="eyebrow text-ivory/55">Départ</span>
              <input type="date" className={FIELD} />
            </div>
            <div>
              <span className="eyebrow text-ivory/55">Voyageurs</span>
              <select defaultValue="2 adultes" className={FIELD}>
                <option className="text-foreground">1 adulte</option>
                <option className="text-foreground">2 adultes</option>
                <option className="text-foreground">2 adultes, 1 enfant</option>
                <option className="text-foreground">Famille (4+)</option>
              </select>
            </div>
            <div>
              <span className="eyebrow text-ivory/55">Séjour</span>
              <select defaultValue="Loisir" className={FIELD}>
                <option className="text-foreground">Loisir</option>
                <option className="text-foreground">Affaires</option>
                <option className="text-foreground">Lune de miel</option>
                <option className="text-foreground">Événement</option>
              </select>
            </div>
            <BookingDialog
              trigger={
                <button className="h-11 w-full bg-accent px-8 text-[11px] font-medium uppercase tracking-[0.24em] text-accent-foreground transition-transform hover:-translate-y-0.5 lg:w-auto">
                  Vérifier les tarifs
                </button>
              }
            />
          </div>
          <p className="mt-4 text-xs tracking-wide text-ivory/50">
            Meilleur tarif garanti · Annulation gratuite jusqu'à 48 h · Surclassement offert selon
            disponibilité
          </p>
        </div>

        <a
          href="#chambres"
          className="mt-8 hidden items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-ivory/60 hover:text-accent lg:flex"
        >
          Découvrir <ChevronDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}