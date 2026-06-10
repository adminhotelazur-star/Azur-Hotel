export default function HeureBleue() {
  const moments = [
    { hour: "06:42", title: "Le lever du soleil", body: "Sur la terrasse, café noir, mer plate. La ville dort encore.", img: "/assets/images/rooms/suite/suite-4.jpg" },
    { hour: "13:15", title: "L'apéritif piscine", body: "Citronnade glacée, olives noires, longue chaise au soleil. La piscine sur le toit, la Corniche en bas.", img: "/assets/images/pool/piscine2.webp" },
    { hour: "19:08", title: "L'heure dorée", body: "Le soleil tombe dans la baie vitrée du Rooftop. Vingt minutes de cinéma offert.", img: "/assets/images/rooftop/dessert.jpg" },
    { hour: "23:55", title: "Le dernier verre", body: "Banquette velours, lampe ambrée, vue qui ne dort jamais. Une habitude.", img: "/assets/images/rooftop/ambiance.jpg" },
  ];

  return (
    <section id="heure-bleue" className="relative py-24 md:py-44 px-4 md:px-10 overflow-hidden">
      {/* Giant background watermark */}
      <div className="absolute inset-x-0 top-20 text-center pointer-events-none select-none">
        <span className="display-serif italic text-[clamp(100px,20vw,340px)] leading-none text-cream/[0.035] tracking-tighter">
          l'heure bleue
        </span>
      </div>

      <div className="max-w-[1500px] mx-auto relative">
        {/* Chapter mark */}
        <div className="flex items-baseline gap-6 mb-10 md:mb-16">
          <span className="font-mono uppercase tracking-widest2 text-[10px] text-clay">
            Chapitre · 04
          </span>
          <span className="h-px flex-1 bg-cream/15" />
          <span className="font-mono uppercase tracking-widest2 text-[10px] text-cream/45">
            L'Heure Bleue
          </span>
        </div>

        {/* Title */}
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-28">
          <div className="col-span-12 md:col-span-9">
            <h2 className="display-serif text-[clamp(36px,7vw,128px)] leading-[0.92] text-cream text-balance">
              Une journée 
              <span className="italic clay-gradient-text"> inoubliable.</span>
              <span className="block text-cream/60 text-[clamp(16px,2.4vw,28px)] editorial italic mt-4 md:mt-6 leading-normal max-w-2xl">
                — Quatre moments choisis pour comprendre ce qu'on essaye de faire.
              </span>
            </h2>
          </div>
        </div>

        {/* Editorial timeline */}
        <div className="space-y-16 md:space-y-32">
          {moments.map((m, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={m.hour}
                className={`grid grid-cols-12 gap-6 md:gap-16 items-center ${
                  reverse ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="col-span-12 md:col-span-7 [direction:ltr]">
                  <div className="relative inset-card brushed min-h-[300px] md:min-h-[480px] max-h-[55svh] md:max-h-[540px]">
                    <img
                      src={m.img}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-canvas/40 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 md:top-5 md:left-5 pill-outline !text-[8.5px] md:!text-[9.5px]">
                      <span>0{i + 1}</span>
                      <span>/</span>
                      <span className="text-clay">04</span>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-5 [direction:ltr]">
                  <p className="font-mono uppercase tracking-widest2 text-[10px] text-clay mb-3 md:mb-4">
                    {m.hour} · Aïn Diab
                  </p>
                  <h3 className="display-serif italic text-[clamp(28px,5vw,60px)] text-cream leading-[0.98] mb-4 md:mb-6 text-balance">
                    {m.title}
                  </h3>
                  <p className="text-cream/70 text-[14px] md:text-[15.5px] leading-[1.8] md:leading-[1.9] font-light max-w-md">
                    {m.body}
                  </p>
                  <div className="mt-6 md:mt-8 inline-flex items-center gap-3 text-clay font-mono uppercase tracking-widest2 text-[10px]">
                    <span className="h-px w-8 md:w-10 bg-clay" />
                    Moment · 0{i + 1}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
