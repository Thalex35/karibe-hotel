// "Une destination à part entière": 3 big featured photo cards (spa,
// rooftop, restaurant) plus a grid of smaller amenity icons below.
import { Car, Dumbbell, Flower2, Gem, Martini, PartyPopper, UtensilsCrossed, Waves } from "lucide-react";
import spa from "@/assets/spa.jpg";
import rooftop from "@/assets/rooftop.jpg";
import restaurant from "@/assets/restaurant.jpg";

const FEATURED = [
  {
    image: spa,
    tag: "Bien-être",
    title: "Botanik Spa",
    text: "Rituels aux plantes locales, hammam et cabines duo ouvertes sur le jardin.",
  },
  {
    image: rooftop,
    tag: "Nightlife",
    title: "Asú Rooftop Lounge",
    text: "Cocktails d'auteur, DJ sets et la plus belle vue sur les lumières de la baie.",
  },
  {
    image: restaurant,
    tag: "Gastronomie",
    title: "La Brasserie",
    text: "Cuisine créole revisitée par notre chef, produits d'îles et cave sélectionnée.",
  },
];

const MORE = [
  { icon: Waves, label: "Piscine tropicale" },
  { icon: Dumbbell, label: "Fitness 24/7" },
  { icon: Car, label: "Navette aéroport" },
  { icon: Gem, label: "Conciergerie" },
  { icon: PartyPopper, label: "Mariages & événements" },
  { icon: UtensilsCrossed, label: "Room service" },
  { icon: Martini, label: "Bar de la piscine" },
  { icon: Flower2, label: "La Boutique" },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow rule-gold text-accent">L'art de vivre Karibe</p>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]">
            Une destination à part entière
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {FEATURED.map((s) => (
            <article key={s.title} className="group relative overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                width={1200}
                height={912}
                className="h-[460px] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="eyebrow text-accent">{s.tag}</span>
                <h3 className="mt-3 font-display text-3xl text-ivory">{s.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/70">{s.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {MORE.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 bg-background px-6 py-6">
              <Icon className="h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}