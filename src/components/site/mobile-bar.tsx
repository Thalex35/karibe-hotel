// The sticky call-to-action bar pinned to the bottom of the screen on
// mobile (hidden on desktop via `lg:hidden`, since the header already has
// a booking button there).
import { Phone } from "lucide-react";
import { BookingDialog } from "./booking-dialog";

export function MobileBookingBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 border-t border-border bg-background/95 p-3 backdrop-blur-md lg:hidden">
      <a
        href="tel:+50928123434"
        aria-label="Appeler l'hôtel"
        className="grid h-12 w-12 shrink-0 place-items-center border border-border text-foreground"
      >
        <Phone className="h-4 w-4" />
      </a>
      <BookingDialog
        trigger={
          <button className="h-12 w-full bg-accent text-[11px] font-medium uppercase tracking-[0.24em] text-accent-foreground">
            Réserver en direct
          </button>
        }
      />
    </div>
  );
}