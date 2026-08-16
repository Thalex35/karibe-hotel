// Contact section: 4 quick channels (phone, WhatsApp, email, address)
// plus a CTA that opens the same booking dialog used elsewhere on the page.
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { BookingDialog } from "./booking-dialog";

const CHANNELS = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "+509 28 12 34 34",
    href: "tel:+50928123434",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Réponse en moins de 10 min",
    href: "https://wa.me/50928123434",
  },
  {
    icon: Mail,
    label: "Email",
    value: "reservations@karibehotel.com",
    href: "mailto:reservations@karibehotel.com",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Juvénat 7, Pétion-Ville, Haïti",
    href: "https://maps.google.com/?q=Karibe+Hotel+Petion-Ville",
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-ink py-24 text-ivory lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow rule-gold text-accent">Contact immédiat</p>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] text-ivory">
              Un conseiller vous répond
            </h2>
            <p className="mt-5 max-w-md text-ivory/65">
              Séjour sur-mesure, événement privé ou demande particulière : notre équipe réserve
              pour vous en quelques minutes.
            </p>
          </div>
          <BookingDialog
            trigger={
              <button className="h-12 bg-accent px-9 text-[11px] font-medium uppercase tracking-[0.24em] text-accent-foreground transition-transform hover:-translate-y-0.5 lg:justify-self-end">
                Demander une réservation
              </button>
            }
          />
        </div>

        <div className="mt-14 grid gap-px bg-ivory/12 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="group bg-ink p-8 transition-colors hover:bg-emerald-deep/40"
            >
              <Icon className="h-5 w-5 text-accent" />
              <p className="eyebrow mt-5 text-ivory/50">{label}</p>
              <p className="mt-2 text-sm text-ivory group-hover:text-gold-soft">{value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}