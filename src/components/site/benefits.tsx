// "Pourquoi réserver en direct" section: headline + 4 benefit tiles.
import { BadgePercent, CalendarCheck, Clock, Sparkles } from "lucide-react";
import { BookingDialog } from "./booking-dialog";

const BENEFITS = [
  {
    icon: BadgePercent,
    title: "Meilleur tarif garanti",
    text: "Jusqu'à 12 % de moins que les plateformes de réservation. Trouvé moins cher ? Nous l'alignons.",
  },
  {
    icon: Sparkles,
    title: "Surclassement prioritaire",
    text: "Les clients directs sont surclassés en priorité selon les disponibilités du jour.",
  },
  {
    icon: Clock,
    title: "Check-in 13 h, départ 15 h",
    text: "Des horaires étendus offerts, sans supplément ni conditions cachées.",
  },
  {
    icon: CalendarCheck,
    title: "Flexibilité totale",
    text: "Annulation gratuite jusqu'à 48 h avant l'arrivée et modification en un message.",
  },
];

export function Benefits() {
  return (
    <section id="avantages" className="bg-ink py-24 text-ivory lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <p className="eyebrow rule-gold text-accent">Pourquoi réserver en direct</p>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] text-ivory">
              Le meilleur du Karibe s'obtient
              <em className="italic text-gold-soft"> sans intermédiaire</em>
            </h2>
            <p className="mt-5 max-w-md text-ivory/65">
              Réserver directement, c'est parler à l'hôtel : un interlocuteur, une confirmation
              en deux heures, et des attentions réservées à nos hôtes.
            </p>
            <BookingDialog
              trigger={
                <button className="mt-8 h-12 bg-accent px-9 text-[11px] font-medium uppercase tracking-[0.24em] text-accent-foreground transition-transform hover:-translate-y-0.5">
                  Réserver au meilleur tarif
                </button>
              }
            />
          </div>

          <div className="grid gap-px bg-ivory/12 sm:grid-cols-2">
            {BENEFITS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-ink p-8">
                <Icon className="h-6 w-6 text-accent" />
                <h3 className="mt-5 font-display text-2xl text-ivory">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}