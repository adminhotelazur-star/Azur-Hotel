import { useState, useEffect } from "react";
import BookingModal from "./BookingModal";



const SUITES = [
  {
    n: "01",
    name: "Single",
    sub: "Vue Mer",
    images: [
      "src/assets/images/rooms/single/single-1.jpg",
      "src/assets/images/rooms/single/single-2.jpg",
      "src/assets/images/rooms/single/single-3.jpg",
      "src/assets/images/rooms/single/single-4.jpg",
      "src/assets/images/rooms/single/single-5.jpg",
    ],
    area: "18 m²",
    bed: "1 Lit Simple",
    tag: "Pour la nuit du voyageur pressé.",
  },
  {
    n: "02",
    name: "Single Deluxe",
    sub: "Vue Mer + Balcon",
    images: [
      "src/assets/images/rooms/singledeluxe/deluxe-1.jpg",
      "src/assets/images/rooms/singledeluxe/deluxe-2.jpg",
      "src/assets/images/rooms/singledeluxe/deluxe-3.jpg",
      "src/assets/images/rooms/singledeluxe/deluxe-4.jpg",
      "src/assets/images/rooms/singledeluxe/deluxe-5.jpg",
    ],
    area: "20 m²",
    bed: "1 Lit Simple",
    tag: "L'évasion solo, en peignoir.",
    featured: true,
  },
  {
    n: "03",
    name: "Double",
    sub: "Vue Mer",
    images: [
      "src/assets/images/rooms/double/double-1.jpg",
      "src/assets/images/rooms/double/double-2.jpg",
      "src/assets/images/rooms/double/double-3.jpg",
      "src/assets/images/rooms/double/double-4.jpg",
      "src/assets/images/rooms/double/double-5.jpg",
    ],
    area: "20 m²",
    bed: "1 Lit Double",
    tag: "Le grand large, à deux.",
  },
  {
    n: "03",
    name: "Double Deluxe",
    sub: "Vue Mer",
    images: [
      "src/assets/images/rooms/ddeluxe/ddeluxe-1.jpg", 
      "src/assets/images/rooms/ddeluxe/ddeluxe-2.jpg",
      "src/assets/images/rooms/ddeluxe/ddeluxe-3.jpg",
      "src/assets/images/rooms/ddeluxe/ddeluxe-4.jpg",
      "src/assets/images/rooms/ddeluxe/ddeluxe-5.jpg",
    ],
    area: "20 m²",
    bed: "1 Lit Double",
    tag: "Le grand large, à deux.",
  },
  {
    n: "04",
    name: "Twin",
    sub: "Vue Mer",
    images: [
      "src/assets/images/rooms/twin/twin-1.jpg",
      "src/assets/images/rooms/twin/twin-2.jpg",
      "src/assets/images/rooms/twin/twin-3.jpg",
      "src/assets/images/rooms/twin/twin-4.jpg",
      "src/assets/images/rooms/twin/twin-5.jpg",
    ],
    area: "19 m²",
    bed: "2 Lits Simples",
    tag: "Idéal pour partager, chacun son espace.",
  },
  {
    n: "05",
    name: "Triple",
    sub: "Vue Mer & Piscine + Balcon",
    images: [
      "src/assets/images/rooms/triple/triple-1.jpg",
      "src/assets/images/rooms/triple/triple-2.jpg",
      "src/assets/images/rooms/triple/triple-3.jpg",
      "src/assets/images/rooms/triple/triple-4.jpg",
      "src/assets/images/rooms/triple/triple-5.jpg",
    ],
    area: "22 m²",
    bed: "1 Lit Double ou 2 Lits Doubles",
    tag: "Le sommet de la maison.",
  },
  {
    n: "06",
    name: "Suite",
    sub: "Vue Mer",
    images: [
      "src/assets/images/rooms/suite/suite-1.jpg",
      "src/assets/images/rooms/suite/suite-2.jpg",
      "src/assets/images/rooms/suite/suite-3.jpg",
      "src/assets/images/rooms/suite/suite-4.jpg",
      "src/assets/images/rooms/suite/suite-5.jpg",
    ],
    area: "35 m²",
    bed: "Très Grands Lit + Salon",
    tag: "L'espace ultime pour la famille ou les amis.",
  },
];

export default function Suites() {
  const [active, setActive] = useState(1);
  const [slide, setSlide] = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);
  const s = SUITES[active];
  const total = s.images.length;

  useEffect(() => {
    setSlide(0);
  }, [active]);

  useEffect(() => {
    const id = setInterval(() => setSlide((i) => (i + 1) % total), 5000);
    return () => clearInterval(id);
  }, [active, total]);

  const next = () => setSlide((i) => (i + 1) % total);
  const prev = () => setSlide((i) => (i - 1 + total) % total);

  return (
    <section id="suites" className="relative py-24 md:py-44 px-4 md:px-10">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-baseline gap-6 mb-10 md:mb-16">
          <span className="font-mono uppercase tracking-widest2 text-[10px] text-clay">
            Chapitre · 02
          </span>
          <span className="h-px flex-1 bg-cream/15" />
          <span className="font-mono uppercase tracking-widest2 text-[10px] text-cream/45">
            Les Suites
          </span>
        </div>

        <div className="grid grid-cols-12 gap-6 mb-10 md:mb-20">
          <div className="col-span-12 md:col-span-7">
            <h2 className="display-serif text-[clamp(36px,7vw,128px)] leading-[0.92] text-cream text-balance">
              Six manières
              <span className="clay-gradient-text block">de dormir bien.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:pt-8">
            <p className="text-cream/70 text-[14px] md:text-[15px] leading-[1.8] md:leading-[1.9] font-light">
              Chaque chambre est filmée et photographiée — vous savez exactement ce
              que vous réservez. La lumière du matin, le bruit de la mer derrière la vitre,
              l'angle de la terrasse. Pas de surprise, sauf l'agréable.
            </p>
          </div>
        </div>

        {/* Stage carousel + catalog */}
        <div className="grid grid-cols-12 gap-5 md:gap-6 mb-8">
          {/* Carousel stage */}
          <div className="col-span-12 md:col-span-8">
            <div className="relative inset-card brushed bg-canvasSoft min-h-[360px] md:min-h-[560px] max-h-[75svh] md:max-h-[640px] h-auto">
              {/* Slides */}
              {s.images.map((src, i) => (
                <img
                  key={`${s.n}-${i}`}
                  src={src}
                  alt={`${s.name} ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1.2s] ${
                    i === slide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-canvas/85 via-canvas/5 to-transparent pointer-events-none" />

              {/* Top badges */}
              {s.featured && (
                <div className="absolute top-4 left-4 md:top-5 md:left-5 pill-light !text-[8.5px] md:!text-[9.5px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-clay" />
                  Le plus apprécié
                </div>
              )}
              <div className="absolute top-4 right-4 md:top-5 md:right-5 pill-outline !text-[8.5px] md:!text-[9.5px]">
                {(active + 1).toString().padStart(2, "0")} / {SUITES.length.toString().padStart(2, "0")}
              </div>

              {/* Carousel arrows */}
              <button
                onClick={prev}
                aria-label="Précédent"
                className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 min-touch w-11 h-11 rounded-full bg-canvas/60 backdrop-blur-md border border-cream/15 text-cream hover:bg-clay hover:border-clay transition-colors flex items-center justify-center text-xl"
              >
                ‹
              </button>
              <button
                onClick={next}
                aria-label="Suivant"
                className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 min-touch w-11 h-11 rounded-full bg-canvas/60 backdrop-blur-md border border-cream/15 text-cream hover:bg-clay hover:border-clay transition-colors flex items-center justify-center text-xl"
              >
                ›
              </button>

              {/* Bottom content */}
              <div className="absolute bottom-20 md:bottom-7 left-5 right-5 md:left-7 md:right-7 flex items-end justify-between gap-4 pointer-events-none">
                <div className="min-w-0 flex-1">
                  <p className="font-mono uppercase tracking-widest2 text-[9px] md:text-[10px] text-clay mb-2 md:mb-3">{s.sub}</p>
                  <h3 className="display-serif text-[clamp(28px,5vw,60px)] text-cream leading-[0.95] text-balance">
                    {s.name}
                  </h3>
                  <p className="editorial text-cream/75 text-[clamp(14px,2.5vw,20px)] mt-2 md:mt-3 max-w-md leading-snug">
                    « {s.tag} »
                  </p>
                </div>
                <div className="hidden md:flex flex-col gap-3 items-end shrink-0">
                   <Mini label="Surface" value={s.area} />
                   <Mini label="Couchage" value={s.bed} />
                </div>
              </div>

              {/* Slide indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-canvas/60 backdrop-blur-md border border-cream/15">
                <span className="font-mono uppercase tracking-widest2 text-[8px] md:text-[9px] text-cream/65 pr-1">
                  {(slide + 1).toString().padStart(2, "0")} / {total.toString().padStart(2, "0")}
                </span>
                {s.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    aria-label={`Photo ${i + 1}`}
                    className={`min-h-[4px] rounded-full transition-all ${
                      i === slide ? "w-5 md:w-6 bg-clay" : "w-2 md:w-3 bg-cream/35 hover:bg-cream/65"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail strip below */}
            <div className="mt-3 md:mt-4 grid grid-cols-5 gap-1.5 md:gap-3">
              {s.images.map((src, i) => (
                <button
                  key={`thumb-${i}`}
                  onClick={() => setSlide(i)}
                  className={`group relative aspect-[4/3] overflow-hidden rounded-[10px] md:rounded-[12px] border transition-all ${
                    i === slide
                      ? "border-clay shadow-[0_0_0_2px_rgba(181,87,44,0.25)]"
                      : "border-cream/15 hover:border-cream/40"
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    className={`absolute inset-0 w-full h-full object-cover transition-all ${
                      i === slide ? "" : "opacity-65 grayscale-[20%] group-hover:opacity-100 group-hover:grayscale-0"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Catalog side panel */}
          <div className="col-span-12 md:col-span-4">
            <div className="inset-card bg-canvasSoft p-3 h-full flex flex-col max-h-[75svh] md:max-h-none">
              <div className="px-4 py-3 mb-1 border-b border-cream/10">
                <p className="font-mono uppercase tracking-widest2 text-[9.5px] text-clay">Le catalogue</p>
              </div>
              <div className="flex-1 overflow-y-auto">
                {SUITES.map((su, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`group text-left w-full px-4 py-3 md:py-4 rounded-[18px] transition-all ${
                      i === active ? "bg-cream/5" : "hover:bg-cream/5"
                    }`}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <span
                        className={`font-mono uppercase tracking-widest2 text-[8.5px] md:text-[9.5px] w-7 md:w-8 shrink-0 ${
                          i === active ? "text-clay" : "text-cream/45"
                        }`}
                      >
                        {su.n}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p
                          className={`editorial text-base md:text-lg leading-tight truncate ${
                            i === active ? "text-cream" : "text-cream/75"
                          }`}
                        >
                          {su.name}
                        </p>
                        <p className="text-[11px] md:text-[12px] text-cream/45 italic editorial mt-0.5 truncate">{su.sub}</p>
                      </div>
                      <span
                        className={`transition-all shrink-0 ${
                          i === active ? "text-clay" : "text-cream/30 -translate-x-1"
                        }`}
                      >
                        →
                      </span>
                    </div>
                    {i === active && (
                      <div className="mt-3 ml-10 md:ml-12 flex items-baseline gap-3 md:gap-5 text-cream/60 text-[10px] md:text-[12px] font-mono uppercase tracking-widest2 flex-wrap">
                        <span>{su.area}</span>
                        <span>·</span>
                        <span>{su.bed}</span>
                        <span>·</span>
                        <span className="whitespace-nowrap">{su.images.length} photos</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <div className="mt-auto p-4 border-t border-cream/10 flex items-center justify-between gap-2">
                <p className="font-mono uppercase tracking-widest2 text-[8px] md:text-[9.5px] text-cream/55 hidden md:block">
                  Visite vidéo & photos
                </p>
                <button onClick={() => setBookingOpen(true)} className="pill-light !text-[8.5px] md:!text-[9.5px] min-h-[44px]">
                  Réserver →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  );
}

function Mini({ label, value, note }) {
  return (
    <div className="text-right">
      <p className="font-mono uppercase tracking-widest2 text-[9px] text-cream/55">{label}</p>
      <p className="editorial text-lg text-cream leading-tight">
        {value}
        {note && <span className="text-cream/55 text-[11px] ml-1">{note}</span>}
      </p>
    </div>
  );
}
