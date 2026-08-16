// Photo grid: one big "hero" shot spanning 2 columns/rows, and four
// smaller shots next to it.
import hero from "@/assets/hero.jpg";
import pool from "@/assets/pool.jpg";
import suite from "@/assets/room-suite.jpg";
import rooftop from "@/assets/rooftop.jpg";
import spa from "@/assets/spa.jpg";

export function Gallery() {
  return (
    <section id="galerie" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow rule-gold text-accent">Galerie</p>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]">
            Un avant-goût du séjour
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          <figure className="col-span-2 row-span-2 overflow-hidden lg:col-span-2">
            <img
              src={hero}
              alt="Piscine à débordement du Karibe Hotel au crépuscule"
              loading="lazy"
              width={1920}
              height={1200}
              className="h-full min-h-[280px] w-full object-cover transition-transform duration-[1200ms] hover:scale-105 lg:min-h-[620px]"
            />
          </figure>
          {[
            { src: pool, alt: "Piscine tropicale bordée de palmiers" },
            { src: rooftop, alt: "Rooftop lounge Asú à l'heure bleue" },
            { src: suite, alt: "Suite junior avec balcon panoramique" },
            { src: spa, alt: "Cabine de soin du Botanik Spa" },
          ].map((img) => (
            <figure key={img.alt} className="overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1200}
                height={912}
                className="h-[180px] w-full object-cover transition-transform duration-[1200ms] hover:scale-105 lg:h-[302px]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}