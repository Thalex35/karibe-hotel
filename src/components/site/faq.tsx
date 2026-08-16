// FAQ section, built on shadcn's Accordion (radix under the hood).
// type="single" + collapsible = only one question open at a time, and
// clicking the open one again closes it.
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ITEMS = [
  {
    q: "Quels sont les horaires d'arrivée et de départ ?",
    a: "Check-in à partir de 13 h et départ jusqu'à 15 h pour toute réservation directe. Une arrivée anticipée peut être organisée sur demande auprès de la conciergerie.",
  },
  {
    q: "La réservation est-elle modifiable ou annulable ?",
    a: "Oui. Toute réservation directe est annulable sans frais jusqu'à 48 heures avant l'arrivée, et modifiable par téléphone, WhatsApp ou email.",
  },
  {
    q: "Le petit-déjeuner et le Wi-Fi sont-ils inclus ?",
    a: "Le petit-déjeuner créole servi à La Brasserie et le Wi-Fi fibre sont inclus dans toutes les catégories, ainsi que l'accès à la piscine et au fitness.",
  },
  {
    q: "Proposez-vous une navette depuis l'aéroport ?",
    a: "Une navette privée relie l'aéroport international Toussaint Louverture à l'hôtel. Réservez-la à l'avance : elle est offerte pour les suites.",
  },
  {
    q: "Peut-on organiser un mariage ou un séminaire ?",
    a: "Notre centre de conventions accueille jusqu'à 600 personnes, avec accompagnement dédié pour mariages, conférences et dîners de gala.",
  },
  {
    q: "Le paiement se fait-il en ligne ?",
    a: "Ce prototype ne traite aucun paiement. Sur le site final, le règlement sécurisé s'effectuerait à la réservation ou à l'arrivée, au choix.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:px-10">
        <div>
          <p className="eyebrow rule-gold text-accent">Questions fréquentes</p>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05]">
            Tout savoir avant d'arriver
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {ITEMS.map((item) => (
            <AccordionItem key={item.q} value={item.q} className="border-border">
              <AccordionTrigger className="py-6 text-left font-display text-xl font-normal hover:text-accent hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}