import { useState } from "react";

export default function Hero() {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const fmt = (d) => d.toISOString().split("T")[0];

  const [arr, setArr] = useState(fmt(today));
  const [dep, setDep] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [room, setRoom] = useState("Single Room");

  function handleSubmit() {
    const depFinal = dep || fmt(new Date(new Date(arr).getTime() + 86400000));
    const url = `https://azur.nozoul.ma/#/be/a00a49d0-42a9-4f65-b551-07fc158a6b31/book?period=${arr},${depFinal}&adults=${adults}&child=${children}`;
    window.open(url, "_blank");
  }  

  return (
    <section id="top" className="relative w-full pt-28 md:pt-36 pb-6 md:pb-10 px-4 md:px-10">
      <div className="relative max-w-[1500px] mx-auto inset-card brushed min-h-[60svh] md:min-h-[90svh] max-h-[90svh] md:max-h-none">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="src/assets/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="src/assets/images/rooms/suite/suite-1.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas/85 via-canvas/30 to-canvas/55" />
        <div className="absolute inset-0 vignette" />

        {/* Massive display word — one line */}
        <div
          className="absolute left-4 md:left-10 top-[10%] md:top-[14%] right-4 md:right-10 z-10 pointer-events-none select-none opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <h1 className="display-serif text-cream leading-[0.9] tracking-tight text-[clamp(56px,15vw,260px)]">
            Azur
          </h1>
        </div>

        {/* Right tagline column */}
        <div
          className="absolute right-6 md:right-12 top-[16%] md:top-[16%] max-w-[45%] md:max-w-md text-right opacity-0 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          <p className="font-mono uppercase tracking-widest2 text-[9.5px] md:text-[10.5px] text-cream/65 mb-2 md:mb-3">
            — Boutique · Casablanca
          </p>
          <p className="editorial text-[clamp(18px,4vw,34px)] text-cream leading-[1.04]">
            L'âme de Casablanca,
            <br />
            <span className="italic clay-gradient-text">face à l'Atlantique.</span>
          </p>
        </div>

        {/* Booking card overlay */}
        <div
          className="absolute left-4 md:left-10 right-4 md:right-10 bottom-4 md:bottom-20 z-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "1s" }}
        >
          <div className="inset-card brushed bg-canvas/70 backdrop-blur-md px-3 py-3">
            <div className="flex flex-col md:flex-row md:items-stretch gap-3">
              <div className="hidden md:flex items-center gap-3 pl-4 pr-6 border-r border-cream/10">
                <span className="text-clay text-2xl leading-none">✦</span>
                <div>
                  <p className="font-mono uppercase tracking-widest2 text-[9.5px] text-cream/55">Réservation directe</p>
                  <p className="editorial italic text-cream text-lg leading-tight">Au meilleur prix.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-cream/5 flex-1 rounded-[20px] overflow-hidden">
                <Field label="Arrivée">
                  <input
                    type="date"
                    value={arr}
                    onChange={(e) => setArr(e.target.value)}
                    className="w-full min-w-0 bg-transparent text-cream editorial text-sm md:text-base outline-none [color-scheme:dark]"
                  />
                </Field>
                <Field label="Départ">
                  <input
                    type="date"
                    value={dep}
                    onChange={(e) => setDep(e.target.value)}
                    className="w-full min-w-0 bg-transparent text-cream editorial text-sm md:text-base outline-none [color-scheme:dark]"
                  />
                </Field>
                <Field label="Catégorie">
                  <select
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                    className="w-full bg-transparent text-cream editorial text-sm md:text-lg outline-none appearance-none cursor-pointer"
                  >
                    <option className="bg-canvas">Single Room</option>
                    <option className="bg-canvas">Single Deluxe</option>
                    <option className="bg-canvas">Double Room</option>
                    <option className="bg-canvas">Double Deluxe</option>
                    <option className="bg-canvas">Triple</option>
                    <option className="bg-canvas">Twin</option>
                  </select>
                </Field>
                <Field label="Adultes">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="min-touch w-7 h-7 md:w-7 md:h-7 rounded-full border border-cream/30 text-cream flex items-center justify-center text-base leading-none shrink-0 hover:bg-cream/10 transition-colors"
                      aria-label="Réduire le nombre d'adultes"
                    >
                      −
                    </button>
                    <span className="text-cream editorial text-base md:text-lg min-w-[1.5ch] text-center">{adults}</span>
                    <button
                      type="button"
                      onClick={() => setAdults(adults + 1)}
                      className="min-touch w-7 h-7 md:w-7 md:h-7 rounded-full border border-cream/30 text-cream flex items-center justify-center text-base leading-none shrink-0 hover:bg-cream/10 transition-colors"
                      aria-label="Augmenter le nombre d'adultes"
                    >
                      +
                    </button>
                  </div>
                </Field>
                <Field label="Enfants">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="min-touch w-7 h-7 md:w-7 md:h-7 rounded-full border border-cream/30 text-cream flex items-center justify-center text-base leading-none shrink-0 hover:bg-cream/10 transition-colors"
                      aria-label="Réduire le nombre d'enfants"
                    >
                      −
                    </button>
                    <span className="text-cream editorial text-base md:text-lg min-w-[1.5ch] text-center">{children}</span>
                    <button
                      type="button"
                      onClick={() => setChildren(children + 1)}
                      className="min-touch w-7 h-7 md:w-7 md:h-7 rounded-full border border-cream/30 text-cream flex items-center justify-center text-base leading-none shrink-0 hover:bg-cream/10 transition-colors"
                      aria-label="Augmenter le nombre d'enfants"
                    >
                      +
                    </button>
                  </div>
                </Field>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="md:w-auto bg-cream text-canvas rounded-[20px] px-4 py-3 min-h-[44px] font-mono uppercase tracking-widest2 text-[10px] md:text-[11px] hover:bg-clay hover:text-cream transition-colors duration-500 flex items-center justify-center gap-2"
              >
                <span>Vérifier les disponibilités</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="max-w-[1500px] mx-auto mt-6 overflow-hidden scroll-mask-x">
        <div className="flex w-max animate-scroll-x whitespace-nowrap py-2 text-cream/55">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-8 mr-8 font-mono uppercase tracking-widest2 text-[9.5px] md:text-[10.5px]"
            >
              <span>✦</span>
              <span>Boulevard de la Corniche</span>
              <span>✦</span>
              <span>4 étoiles boutique</span>
              <span>✦</span>
              <span>Aïn Diab · Casablanca</span>
              <span>✦</span>
              <span>Face à l'Atlantique</span>
              <span>✦</span>
              <span>Depuis 1972</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col px-2 py-2 md:px-3 md:py-3 bg-transparent hover:bg-canvas/30 transition-colors min-w-0">
      <span className="font-mono uppercase tracking-widest2 text-[8px] md:text-[9.5px] text-cream/55 mb-1">
        {label}
      </span>
      <div>{children}</div>
    </label>
  );
}
