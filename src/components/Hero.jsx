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
      <div className="relative max-w-[1500px] mx-auto inset-card brushed min-h-[85svh] md:min-h-[90svh] max-h-none overflow-hidden">

        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/images/hero.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-canvas/35 to-canvas/50" />
        <div className="absolute inset-0 vignette" />

        {/* ── MOBILE LAYOUT ── */}
        <div className="md:hidden absolute inset-0 flex flex-col justify-between z-10 px-5 pt-8 pb-6">

          {/* Top: big headline */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <h1 className="display-serif text-cream leading-[0.88] tracking-tight text-[clamp(72px,22vw,120px)]">
              Azur
            </h1>
            <p className="font-mono uppercase tracking-widest2 text-[9px] text-cream/55 mt-2">
              — Hôtel · Casablanca
            </p>
          </div>

          {/* Middle: tagline */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.55s" }}>
            <p className="editorial text-[clamp(20px,5.5vw,28px)] text-cream leading-[1.06]">
              L'âme de Casablanca,
              <br />
              <span className="italic clay-gradient-text">face à l'Atlantique.</span>
            </p>
          </div>

          {/* Bottom: booking card */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <div className="inset-card brushed bg-canvas/80 backdrop-blur-md rounded-[2rem] p-5 shadow-2xl">
              <p className="font-mono uppercase tracking-widest2 text-[9px] text-cream/50 mb-1">
                Réservation directe
              </p>
              <h2 className="editorial italic text-cream text-[19px] leading-tight mb-4">
                Vivez Casablanca autrement
              </h2>

              {/* Date row */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <MobileField label="Arrivée">
                  <input
                    type="date"
                    value={arr}
                    onChange={(e) => setArr(e.target.value)}
                    className="block w-full bg-transparent text-cream editorial text-[14px] outline-none [color-scheme:dark]"
                  />
                </MobileField>
                <MobileField label="Départ">
                  <input
                    type="date"
                    value={dep}
                    onChange={(e) => setDep(e.target.value)}
                    className="block w-full bg-transparent text-cream editorial text-[14px] outline-none [color-scheme:dark]"
                  />
                </MobileField>
              </div>

              {/* Catégorie row */}
              <div className="mb-3">
                <MobileField label="Catégorie">
                  <div className="relative w-full">
                    <select
                      value={room}
                      onChange={(e) => setRoom(e.target.value)}
                      className="w-full bg-transparent text-cream editorial text-[14px] outline-none appearance-none cursor-pointer pr-5"
                    >
                      <option className="bg-canvas">Single Room</option>
                      <option className="bg-canvas">Single Deluxe</option>
                      <option className="bg-canvas">Double Room</option>
                      <option className="bg-canvas">Double Deluxe</option>
                      <option className="bg-canvas">Triple</option>
                      <option className="bg-canvas">Twin</option>
                    </select>
                    <svg className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none w-3 h-3 text-cream/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </MobileField>
              </div>

              {/* Guests row */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <MobileField label="Adultes">
                  <Counter value={adults} min={1} onChange={setAdults} />
                </MobileField>
                <MobileField label="Enfants">
                  <Counter value={children} min={0} onChange={setChildren} />
                </MobileField>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-cream text-canvas rounded-[2rem] px-5 py-3 min-h-[48px] font-mono uppercase tracking-widest2 text-[10px] hover:bg-clay hover:text-cream transition-colors duration-500 flex items-center justify-center gap-2"
              >
                <span>Planifier mon séjour</span>
                <span className="text-base leading-none mb-0.5">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── DESKTOP LAYOUT ── */}

        {/* Big headline */}
        <div
          className="hidden md:block absolute left-10 top-[12%] right-10 z-10 pointer-events-none select-none opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <h1 className="display-serif text-cream leading-[0.9] tracking-tight text-[clamp(72px,14vw,240px)]">
            Azur
          </h1>
        </div>

        {/* Right tagline */}
        <div
          className="hidden md:block absolute right-12 top-[16%] max-w-md text-right z-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          <p className="font-mono uppercase tracking-widest2 text-[10px] text-cream/60 mb-2">
            — Hôtel · Casablanca
          </p>
          <p className="editorial text-[clamp(20px,3.5vw,34px)] text-cream leading-[1.04]">
            L'âme de Casablanca,
            <br />
            <span className="italic clay-gradient-text">face à l'Atlantique.</span>
          </p>
        </div>

        {/* Desktop booking bar */}
        <div
          className="hidden md:block absolute left-10 right-10 bottom-16 xl:bottom-20 z-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "1s" }}
        >
          <div className="inset-card brushed bg-canvas/80 backdrop-blur-md rounded-[2.5rem] p-2 shadow-2xl">
            <div className="flex items-stretch divide-x divide-cream/10">

              {/* Branding */}
              <div className="hidden xl:flex items-center gap-3 pl-4 pr-5 shrink-0">
                <span className="text-clay text-xl leading-none">✦</span>
                <div>
                  <p className="font-mono uppercase tracking-widest2 text-[9px] text-cream/50">Réservation</p>
                  <p className="editorial italic text-cream text-lg leading-tight mt-0.5">Directe</p>
                </div>
              </div>

              <Field label="Arrivée" className="xl:pl-5">
                <input
                  type="date"
                  value={arr}
                  onChange={(e) => setArr(e.target.value)}
                  className="block w-full min-w-0 bg-transparent text-cream editorial text-[15px] outline-none [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:ml-auto cursor-pointer"
                />
              </Field>

              <Field label="Départ">
                <input
                  type="date"
                  value={dep}
                  onChange={(e) => setDep(e.target.value)}
                  className="block w-full min-w-0 bg-transparent text-cream editorial text-[15px] outline-none [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:ml-auto cursor-pointer"
                />
              </Field>

              <Field label="Catégorie">
                <div className="relative w-full">
                  <select
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                    className="w-full min-w-0 bg-transparent text-cream editorial text-[15px] outline-none appearance-none cursor-pointer pr-5"
                  >
                    <option className="bg-canvas">Single Room</option>
                    <option className="bg-canvas">Single Deluxe</option>
                    <option className="bg-canvas">Double Room</option>
                    <option className="bg-canvas">Double Deluxe</option>
                    <option className="bg-canvas">Triple</option>
                    <option className="bg-canvas">Twin</option>
                  </select>
                  <svg className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none w-3.5 h-3.5 text-cream/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </Field>

              <Field label="Adultes" className="xl:pr-2">
                <Counter value={adults} min={1} onChange={setAdults} />
              </Field>

              <Field label="Enfants" className="xl:pr-2">
                <Counter value={children} min={0} onChange={setChildren} />
              </Field>

              {/* CTA */}
              <div className="px-3 py-2 flex items-center shrink-0">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="h-full min-h-[52px] bg-cream text-canvas rounded-[2rem] px-5 xl:px-6 font-mono uppercase tracking-widest2 text-[10px] hover:bg-clay hover:text-cream transition-colors duration-500 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Vérifier les disponibilités</span>
                  <span className="text-base leading-none mb-0.5">→</span>
                </button>
              </div>

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

/* ── Shared sub-components ── */

function Field({ label, children, className = "" }) {
  return (
    <div className={`flex flex-col justify-center px-4 py-2 flex-1 min-w-0 ${className}`}>
      <span className="font-mono uppercase tracking-widest2 text-[9px] text-cream/50 mb-1.5 truncate">
        {label}
      </span>
      <div className="w-full flex items-center">{children}</div>
    </div>
  );
}

function MobileField({ label, children }) {
  return (
    <div className="bg-cream/8 rounded-xl px-3 py-2.5 border border-cream/10">
      <span className="font-mono uppercase tracking-widest2 text-[8.5px] text-cream/50 mb-1 block">
        {label}
      </span>
      <div className="w-full flex items-center">{children}</div>
    </div>
  );
}

function Counter({ value, min, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="w-7 h-7 rounded-full border border-cream/30 text-cream flex items-center justify-center text-sm hover:bg-cream/10 transition-colors shrink-0"
      >
        −
      </button>
      <span className="text-cream editorial text-[15px] min-w-[1.2ch] text-center">{value}</span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="w-7 h-7 rounded-full border border-cream/30 text-cream flex items-center justify-center text-sm hover:bg-cream/10 transition-colors shrink-0"
      >
        +
      </button>
    </div>
  );
}