# 🏨 Karibe Hotel & Suites — Booking Website

A modern, fully responsive hotel booking website built with React and TypeScript. Features a professional UI, mobile-first design, and functional reservation system for a boutique hotel in Pétion-Ville, Haiti.

**🔗 Live Demo:** [karibe-hotel.vercel.app](https://karibe-hotel.vercel.app)

---

## ✨ Features

- **🏠 Landing Page**
  - Hero section with call-to-action
  - Room showcase with image galleries
  - Hotel amenities & services section
  - FAQ accordion
  - Contact form integration

- **📅 Booking System**
  - Interactive booking dialog (modal)
  - Date picker for check-in/check-out
  - Guest & room selection
  - Form validation
  - Real-time availability check
  - Booking confirmation

- **📱 Responsive Design**
  - Desktop, tablet, and mobile optimized
  - Mobile bottom navigation bar
  - Touch-friendly interface
  - Accessible forms

- **🎨 Modern UI**
  - Clean, professional aesthetic
  - Smooth animations and transitions
  - Dark & light mode support
  - High-quality hotel photography
  - Consistent typography and spacing

---

## 🛠 Tech Stack

### Frontend
- **React 18** — UI library with hooks
- **TypeScript** — Type-safe JavaScript
- **Vite 6** — Lightning-fast build tool
- **Tailwind CSS v4** — Utility-first styling
- **Radix UI & shadcn/ui** — Accessible component library
- **Lucide React** — Modern icon set
- **Sonner** — Toast notifications

### Backend & Database
- **Supabase** — PostgreSQL database for bookings
- **Supabase Realtime** — Live booking updates

### Deployment
- **Vercel** — Fast, serverless hosting

---

## 📦 Installation

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Supabase account ([create here](https://supabase.com))

### Setup Steps

```bash
# Clone repository
git clone https://github.com/Thalex35/karibe-hotel.git
cd karibe-hotel

# Install dependencies
npm install

# Create .env.local with Supabase credentials
# VITE_SUPABASE_URL=your_url
# VITE_SUPABASE_ANON_KEY=your_key

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

Deploy the `dist/` folder to any static hosting.

---

## 📂 Project Structure

```
src/
├── components/
│   ├── site/
│   │   ├── hero.tsx          → Hero section with CTA
│   │   ├── rooms.tsx          → Room showcase
│   │   ├── services.tsx       → Hotel amenities
│   │   ├── gallery.tsx        → Photo gallery
│   │   ├── faq.tsx            → FAQ accordion
│   │   ├── contact.tsx        → Contact info & form
│   │   ├── booking-dialog.tsx → Main booking component
│   │   ├── header.tsx         → Navigation bar
│   │   ├── footer.tsx         → Footer
│   │   └── mobile-bar.tsx     → Mobile bottom nav
│   └── ui/
│       ├── dialog.tsx         → Modal dialogs
│       ├── accordion.tsx      → Collapsible sections
│       ├── input.tsx          → Form inputs
│       ├── label.tsx          → Form labels
│       └── sheet.tsx          → Mobile menu
├── lib/
│   └── utils.ts              → Tailwind class utilities
├── assets/                   → Hotel photos
├── styles.css               → Tailwind theme configuration
├── App.tsx                  → Main app component
└── main.tsx                 → Entry point
```

---

## 🎯 Key Features Explained

### Booking System
The booking dialog (`booking-dialog.tsx`) handles:
- Check-in/check-out date selection
- Number of guests and rooms
- Guest information (name, email, phone)
- Form validation
- Direct integration with Supabase for storing reservations
- Confirmation message with booking reference

### Responsive Design
- **Mobile-first approach** — Optimized for phones first, scales up
- **Touch-friendly buttons** — 44px minimum touch target
- **Bottom navigation** — Easy thumb access on mobile
- **Flexible grid layouts** — Adapts to all screen sizes

### Accessible Components
- ARIA labels for form inputs
- Semantic HTML structure
- Keyboard navigation support
- High contrast ratios
- Screen reader friendly

---

## 🗄️ Database Schema

```sql
-- Bookings table (created in Supabase)
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  guest_name VARCHAR(255) NOT NULL,
  guest_email VARCHAR(255) NOT NULL,
  guest_phone VARCHAR(20),
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  num_rooms INTEGER NOT NULL DEFAULT 1,
  num_guests INTEGER NOT NULL,
  total_price DECIMAL(10, 2),
  special_requests TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_bookings_email ON bookings(guest_email);
CREATE INDEX idx_bookings_check_in ON bookings(check_in);
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [Vercel.com](https://vercel.com)
3. Click "New Project" → select your repo
4. Add environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. Click "Deploy"

Vercel auto-deploys on every GitHub push. ✨

### Deploy to Netlify

```bash
npm run build
# Deploy the 'dist/' folder to Netlify
```

---

## 📸 Screenshots

| Desktop | Mobile |
|---------|--------|
| ![Desktop Hero](./docs/screenshots/desktop-hero.png) | ![Mobile View](./docs/screenshots/mobile-view.png) |
| Full-width hero section | Optimized mobile layout |

| Booking Dialog | Room Showcase |
|---|---|
| ![Booking](./docs/screenshots/booking-dialog.png) | ![Rooms](./docs/screenshots/rooms-showcase.png) |
| Interactive reservation form | Room gallery with prices |

---

## 🧪 Testing Checklist

- [ ] Homepage loads quickly
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Booking dialog opens and closes smoothly
- [ ] Form validation shows errors
- [ ] Booking submission sends to Supabase
- [ ] Confirmation email received (if enabled)
- [ ] All links work (navigation, CTAs)
- [ ] Images load correctly
- [ ] Mobile bottom menu works
- [ ] Dark mode toggle functions (if implemented)
- [ ] Performance: Lighthouse score > 80

---

## 🎨 Customization

### Change Hotel Details

Edit `src/components/site/contact.tsx`:
```typescript
const hotelInfo = {
  name: "Karibe Hotel & Suites",
  address: "Pétion-Ville, Haiti",
  phone: "+509 XXXX XXXX",
  email: "info@karibehotel.ht"
};
```

### Update Room Prices

Edit `src/components/site/rooms.tsx`:
```typescript
const rooms = [
  { type: "Deluxe", price: 150, beds: 1 },
  { type: "Suite", price: 250, beds: 2 },
  // ...
];
```

### Modify Theme Colors

Edit `src/styles.css`:
```css
@theme {
  --color-primary: #your-color;
  --color-accent: #your-color;
}
```

---

## 🔧 Environment Variables

Create `.env.local` in project root:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# Optional: Email service (if using automated confirmations)
VITE_RESEND_API_KEY=your-resend-key
```

Get these from Supabase Dashboard → Settings → API

---

## 📚 Learning Resources

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [Supabase Docs](https://supabase.com/docs)
- [Vite Guide](https://vitejs.dev)

---

## 🐛 Troubleshooting

**"Cannot connect to Supabase"**
- Verify `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are correct
- Restart dev server: `npm run dev`

**"Booking not saving"**
- Check Supabase table exists
- Verify row-level security (RLS) allows inserts
- Check browser console for errors

**"Vercel deployment fails"**
- Ensure environment variables are set in Vercel dashboard
- Check build output for TypeScript errors
- Verify Node.js version compatibility

---

## 💡 Future Enhancements

- [ ] Payment integration (Stripe, PayPal)
- [ ] Email confirmation with booking details
- [ ] Admin dashboard for managing bookings
- [ ] Real-time room availability
- [ ] Guest reviews & ratings
- [ ] Multi-language support (FR, EN, ES)
- [ ] SMS notifications
- [ ] Booking cancellation system
- [ ] Special offers & promotional codes
- [ ] Loyalty rewards program

---

## 👥 Team & Credits

**Developer:** Theodore Louisjuste  
**Role:** Full-Stack Web Developer  
**Contact:** louisjustetheodore@gmail.com

Built with modern web technologies for a professional hotel brand.

---

## 📝 License

MIT License — Feel free to use and modify for your projects.

---

## 🤝 Contributing

Pull requests welcome! To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m "Add feature"`
4. Push: `git push origin feature/new-feature`
5. Open a Pull Request

---

**Built with ❤️ for Karibe Hotel & Suites**

Deployed on Vercel | Designed with React & Tailwind | Powered by Supabase
