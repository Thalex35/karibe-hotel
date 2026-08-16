# Karibe Hotel & Suites — site (React + Vite)

Site vitrine/booking du "Karibe Hotel & Suites" (Pétion-Ville), reconstruit
en **React + Vite classique** (SPA), sans framework méta (pas de TanStack
Start, pas de SSR, pas de react-query). C'est un site 100% statique : après
`npm run build`, le dossier `dist/` peut être déposé tel quel sur n'importe
quel hébergement (Netlify, Vercel, GitHub Pages, cPanel/FTP, etc.).

Contrairement au projet du restaurant, **toutes les vraies photos étaient
présentes dans cet export** — rien n'a été remplacé par des placeholders.

## Démarrer en local

```bash
npm install
npm run dev
```

Puis ouvrir l'URL affichée dans le terminal (en général http://localhost:5173).

## Build de production

```bash
npm run build
```

Le résultat est généré dans `dist/` — c'est ce dossier qu'il faut mettre en ligne.

## Le formulaire de réservation

Le `BookingDialog` (la fenêtre "Composez votre séjour" qui s'ouvre depuis
plusieurs boutons du site) est un **prototype** : il ne fait pas d'envoi
réel. À la soumission, il affiche juste un message de succès (toast) et se
ferme. Le code indique clairement où brancher un vrai envoi (API perso,
service de réservation, etc.) si tu veux le rendre fonctionnel.

## Structure du projet

```
src/
  main.tsx              → point d'entrée, monte <App /> dans #root
  App.tsx                → assemble toutes les sections de la page
  styles.css              → thème Tailwind (couleurs, polices, animations…)
  lib/
    utils.ts               → petit helper pour combiner des classes Tailwind
  assets/                 → les photos (hero, chambres, spa, rooftop…)
  components/
    site/                  → une section du site = un composant
      hero.tsx, rooms.tsx, benefits.tsx, services.tsx, gallery.tsx,
      faq.tsx, contact.tsx, header.tsx, footer.tsx, mobile-bar.tsx,
      booking-dialog.tsx    → la fenêtre de réservation réutilisée partout
    ui/                    → composants shadcn/radix utilisés par le site
      accordion.tsx (FAQ), dialog.tsx + sheet.tsx (fenêtre de réservation
      + menu mobile), input.tsx, label.tsx, sonner.tsx (notifications toast)
```

## Stack technique

- React 18 + Vite 6
- Tailwind CSS v4 (via `@tailwindcss/vite`, tout le thème est dans
  `src/styles.css`, pas de fichier `tailwind.config` séparé)
- Radix UI (accordion, dialog) + shadcn-style wrappers pour l'accessibilité
- `lucide-react` pour les icônes, `sonner` pour les notifications toast
