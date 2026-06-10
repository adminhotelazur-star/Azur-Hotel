export default function Lieu() {
  const points = [
    { n: "01", name: "La plage", d: "0 min", note: "Traversez la rue." },
    { n: "02", name: "Anfaplace Mall", d: "5 min", note: "Shopping bord de mer." },
    { n: "03", name: "Mosquée Hassan II", d: "10 min", note: "Le minaret le plus haut du monde." },
    { n: "04", name: "Tramway", d: "5 min", note: "Toute la ville à portée." },
    { n: "05", name: "Morocco Mall", d: "5 min", note: "Le plus grand d'Afrique." },
    { n: "06", name: "Aéroport CMN", d: "45 min", note: "Navette privée sur demande." },
  ];

  return (
    <section id="lieu" className="relative py-24 md:py-44 px-4 md:px-10">
      <div className="max-w-[1500px] mx-auto">
        {/* Chapter mark */}
        <div className="flex items-baseline gap-6 mb-10 md:mb-16">
          <span className="font-mono uppercase tracking-widest2 text-[10px] text-clay">
            Chapitre · 05
          </span>
          <span className="h-px flex-1 bg-cream/15" />
          <span className="font-mono uppercase tracking-widest2 text-[10px] text-cream/45">
            Le Lieu
          </span>
        </div>

        {/* Title */}
        <div className="grid grid-cols-12 gap-6 mb-10 md:mb-20">
          <div className="col-span-12 md:col-span-7">
            <h2 className="display-serif text-[clamp(36px,7vw,128px)] leading-[0.92] text-cream text-balance">
              Aïn Diab —
              <span className="italic clay-gradient-text block">le bon angle de Casablanca.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:pt-10">
            <p className="text-cream/70 text-[14px] md:text-[15.5px] leading-[1.85] md:leading-[1.95] font-light mb-6">
              C'est l'avantage de l'adresse. La plage en face, la médina à dix
              minutes, l'aéroport à trois quarts d'heure. On vient ici pour ne
              plus avoir à choisir.
            </p>
            <p className="editorial italic text-clay text-lg md:text-xl leading-snug">
              « Garez votre voiture, vous n'en aurez plus besoin. »
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5 md:gap-6">
          <div className="col-span-12 md:col-span-7">
            <div className="relative inset-card brushed bg-canvasSoft min-h-[360px] md:min-h-[560px] max-h-[60svh] md:max-h-[640px]">
              <iframe
                title="Hôtel Azur — Aïn Diab"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-7.7100%2C33.5750%2C-7.6450%2C33.6050&layer=mapnik&marker=33.5905,-7.6826"
                className="absolute inset-0 w-full h-full grayscale-[60%] contrast-[1.05] brightness-[0.5] invert-[0.85] hue-rotate-[180deg]"
                loading="lazy"
              />
              <div className="absolute inset-0 mix-blend-multiply bg-gradient-to-br from-canvas/40 via-transparent to-canvas/40 pointer-events-none" />
              <div className="absolute left-4 top-4 md:left-5 md:top-5 pill-outline !text-[8.5px] md:!text-[9.5px]">
                <span className="w-1.5 h-1.5 rounded-full bg-clay" />
                41 Bd. de la Corniche
              </div>
              <div className="absolute right-4 top-4 md:right-5 md:top-5 pill-outline !text-[8.5px] md:!text-[9.5px] hidden md:inline-flex">
                33.5905° N · 7.6826° W
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="w-3 h-3 bg-clay rounded-full shadow-[0_0_0_10px_rgba(181,87,44,0.25)] animate-pulse" />
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5">
            <div className="inset-card bg-canvasSoft p-2">
              {points.map((p, i) => (
                <div
                  key={p.n}
                  className={`group flex items-center gap-3 md:gap-5 px-4 md:px-5 py-4 md:py-5 rounded-[18px] hover:bg-cream/5 transition-colors ${
                    i !== points.length - 1 ? "border-b border-cream/10" : ""
                  }`}
                >
                  <span className="font-mono uppercase tracking-widest2 text-[8.5px] md:text-[9.5px] text-clay w-6 md:w-7 shrink-0">
                    {p.n}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="editorial text-base md:text-xl text-cream leading-tight truncate">{p.name}</h4>
                    <p className="text-cream/55 text-[11px] md:text-[12.5px] italic editorial mt-0.5 truncate">{p.note}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-mono uppercase tracking-widest2 text-[8px] md:text-[9px] text-clay">Distance</p>
                    <p className="editorial text-base md:text-lg text-cream">{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
