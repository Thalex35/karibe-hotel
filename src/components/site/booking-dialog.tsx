import { useState, type ReactNode } from "react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const FIELD =
  "mt-2 h-11 w-full rounded-none border border-border bg-background px-3 text-sm text-foreground focus:border-accent focus:outline-none";

// Reusable "book a room" modal, triggered from lots of places on the page
// (header, hero, benefits, rooms, contact, mobile bar). Pass a `trigger`
// element and it'll be wrapped so clicking it opens the dialog.
//
// NOTE: like the reservation form on the restaurant site, this is a
// front-end-only demo — the form doesn't actually send a booking anywhere.
// It just closes the dialog and shows a success toast. To make it real,
// swap the onSubmit body below for an actual API call.
export function BookingDialog({
  trigger,
  defaultRoom = "Standard Room",
}: {
  trigger: ReactNode;
  defaultRoom?: string;
}) {
  const [open, setOpen] = useState(false);

  // `defaultRoom` lets each "Réserver" button on the Rooms section
  // pre-select that specific room in the dialog's dropdown, instead of
  // always defaulting to "Standard Room".
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-lg rounded-none border-border bg-card p-8">
        <DialogHeader>
          <p className="eyebrow text-accent">Réservation directe</p>
          <DialogTitle className="font-display text-3xl font-light">
            Composez votre séjour
          </DialogTitle>
        </DialogHeader>
        <form
          className="mt-4 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setOpen(false);
            toast.success("Demande de réservation envoyée", {
              description: "Un conseiller Karibe vous confirme votre séjour sous 2 heures.",
            });
          }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="eyebrow text-muted-foreground">Arrivée</Label>
              <input type="date" required className={FIELD} />
            </div>
            <div>
              <Label className="eyebrow text-muted-foreground">Départ</Label>
              <input type="date" required className={FIELD} />
            </div>
          </div>
          <div>
            <Label className="eyebrow text-muted-foreground">Hébergement</Label>
            <select defaultValue={defaultRoom} className={FIELD}>
              <option>Standard Room</option>
              <option>Deluxe Room</option>
              <option>Junior Suite</option>
              <option>Central Suite</option>
              <option>Corner Suite</option>
              <option>Central Suite (2 chambres)</option>
              <option>Presidential Suite (2 chambres)</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="eyebrow text-muted-foreground">Voyageurs</Label>
              <select defaultValue="2 adultes" className={FIELD}>
                <option>1 adulte</option>
                <option>2 adultes</option>
                <option>2 adultes, 1 enfant</option>
                <option>Famille (4+)</option>
              </select>
            </div>
            <div>
              <Label className="eyebrow text-muted-foreground">Email</Label>
              <Input type="email" required placeholder="vous@email.com" className={FIELD} />
            </div>
          </div>
          <button
            type="submit"
            className="mt-2 h-12 w-full bg-primary text-xs font-medium uppercase tracking-[0.28em] text-primary-foreground transition-colors hover:bg-emerald-deep/90"
          >
            Confirmer la demande
          </button>
          <p className="text-center text-xs text-muted-foreground">
            Prototype de démonstration — aucun paiement n'est effectué.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
