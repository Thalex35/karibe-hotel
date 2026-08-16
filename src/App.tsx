import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Rooms } from "@/components/site/rooms";
import { Benefits } from "@/components/site/benefits";
import { Services } from "@/components/site/services";
import { Gallery } from "@/components/site/gallery";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { MobileBookingBar } from "@/components/site/mobile-bar";
import { Toaster } from "@/components/ui/sonner";

// One-page site — every nav link is just an anchor (#chambres, #contact...)
// scrolling to a section below, so there's no need for react-router here.
//
// Note: the original project wrapped everything in a react-query
// QueryClientProvider, but nothing on this page actually fetches data with
// it (it was just boilerplate from the TanStack Start template), so it's
// been dropped here to keep things simple. Add it back if you later add
// real API calls (e.g. checking live room availability).
function App() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Rooms />
        <Benefits />
        <Services />
        <Gallery />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileBookingBar />

      {/* Toasts for the booking dialog confirmation message */}
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
