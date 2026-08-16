import { BedDouble, Eye, Wifi, Plus } from "lucide-react";
import deluxe from "@/assets/room-deluxe.jpg";
import suite from "@/assets/room-suite.jpg";
import presidential from "@/assets/room-presidential.jpg";
import { BookingDialog } from "./booking-dialog";

const AMENITIES = [
  "Wi-Fi gratuit",
  "TV & satellite",
  "Coffre-fort",
  "Service de blanchisserie",
  "Non-fumeur",
  "Animaux non admis",
  "Parking",
  "Piscine",
  "Sèche-cheveux",
  "Boutique de l'hôtel",
  "Wellness",
  "Tennis",
  "Cocktail bar",
  "Salle de sport",
  "Espace enfants",
  "Médecin sur appel",
  "Bureau de change",
];

// The 7 room categories shown as cards. Note several rooms intentionally
// share the same photo (deluxe/suite/presidential) since we only have one
// representative shot per room *type*, not per individual category.
const ROOMS = [
  {
    name: "Standard Room",
    image: deluxe,
    price: "180",
    bed: "2 lits doubles ou 1 king",
    view: "Vue montagne",
    description:
      "Chambre avec 2 lits doubles ou 1 lit king, et une vue sur la montagne. Avec balcon.",
  },
  {
    name: "Deluxe Room",
    image: deluxe,
    price: "210",
    bed: "2 lits queen ou 1 king",
    view: "Panorama depuis le balcon",
    description:
      "Chambre moderne avec 2 lits queen ou 1 lit king, offrant une vue panoramique exceptionnelle depuis son balcon.",
  },
  {
    name: "Junior Suite",
    image: suite,
    price: "220",
    bed: "1 lit king",
    view: "Vue piscine",
    description: "Chambre avec un lit king et vue sur la piscine. Avec balcon.",
  },
  {
    name: "Central Suite",
    image: suite,
    price: "300",
    bed: "1 chambre fermée, lit king",
    view: "Balcon privatif",
    description:
      "Suite avec une chambre fermée équipée d'un lit king et un espace salon. Avec balcon.",
  },
  {
    name: "Corner Suite",
    image: suite,
    price: "450",
    bed: "Chambre séparée, lit king",
    view: "Terrasse panoramique",
    description:
      "Suite avec chambre séparée, lit king, salon chaleureux et terrasse offrant des vues panoramiques spectaculaires.",
  },
  {
    name: "Central Suite (2 chambres)",
    image: presidential,
    price: "480",
    bed: "2 chambres fermées, lits king",
    view: "Balcon privatif",
    description:
      "Suite avec deux chambres fermées équipées de lits king et un espace salon. Avec balcon.",
  },
  {
    name: "Presidential Suite (2 chambres)",
    image: presidential,
    price: "909",
    bed: "2 chambres king sur 2 niveaux",
    view: "Rooftop privatif",
    description:
      "Deux chambres fermées avec lits king sur deux niveaux, un salon et une salle à manger. Grande terrasse rooftop au second niveau.",
  },
];

export function Rooms() {
  return (
    <section id="chambres" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow rule-gold text-accent">Chambres &amp; Suites</p>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]">
            Sept manières d'habiter les hauteurs
          </h2>
          <p className="mt-5 text-muted-foreground">
            De la chambre Standard à la Suite Présidentielle, chaque catégorie donne accès à
            l'ensemble des services de l'hôtel. Tarifs par nuit, hors taxes, en réservation directe.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ROOMS.map((room) => (
            <article
              key={room.name}
              className="group flex flex-col border border-border bg-card shadow-[var(--shadow-card)] transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  loading="lazy"
                  width={1200}
                  height={912}
                  className="h-64 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <span className="absolute left-0 top-5 bg-ink/85 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-ivory">
                  ${room.price} + taxes / nuit
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-2xl">{room.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {room.description}
                </p>

                <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <Eye className="h-4 w-4 shrink-0 text-accent" /> {room.view}
                  </li>
                  <li className="flex items-center gap-3">
                    <BedDouble className="h-4 w-4 shrink-0 text-accent" /> {room.bed}
                  </li>
                  <li className="flex items-center gap-3">
                    <Wifi className="h-4 w-4 shrink-0 text-accent" /> Wi-Fi gratuit
                  </li>
                  <li className="flex items-center gap-3">
                    <Plus className="h-4 w-4 shrink-0 text-accent" /> +15,00 $ par personne
                    supplémentaire
                  </li>
                </ul>

                <div className="mt-6 flex-1 border-t border-border pt-5">
                  <p className="eyebrow text-foreground/60">Services inclus</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {AMENITIES.map((item) => (
                      <span
                        key={item}
                        className="border border-border bg-secondary px-2.5 py-1 text-[11px] text-secondary-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-baseline justify-between border-t border-border pt-5">
                  <span className="eyebrow text-muted-foreground">Par nuit</span>
                  <span className="font-display text-3xl">
                    ${room.price}
                    <span className="ml-1 text-xs tracking-wide text-muted-foreground">
                      + taxes
                    </span>
                  </span>
                </div>

                <BookingDialog
                  defaultRoom={room.name}
                  trigger={
                    <button className="mt-5 h-11 w-full border border-primary text-[11px] font-medium uppercase tracking-[0.24em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                      Réserver
                    </button>
                  }
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}