export default function Table() {
  return (
    <section id="table" className="relative py-24 md:py-44 px-4 md:px-10">
      <div className="max-w-[1500px] mx-auto">
        {/* Chapter mark */}
        <div className="flex items-baseline gap-6 mb-10 md:mb-16">
          <span className="font-mono uppercase tracking-widest2 text-[10px] text-clay">
            Chapitre · 03
          </span>
          <span className="h-px flex-1 bg-cream/15" />
          <span className="font-mono uppercase tracking-widest2 text-[10px] text-cream/45">
            Le Rooftop
          </span>
        </div>

        {/* Title block */}
        <div className="grid grid-cols-12 gap-6 mb-10 md:mb-20">
          <div className="col-span-12 md:col-span-8">
            <p className="font-mono uppercase tracking-widest2 text-[10px] md:text-[11px] text-cream/55 mb-4">
              Restaurant & Lounge — au septième
            </p>
            <h2 className="display-serif text-[clamp(36px,7vw,128px)] leading-[0.92] text-cream text-balance">
              Élevez vos moments,
              <span className="italic clay-gradient-text block">face au coucher de soleil.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:pt-10">
            <p className="text-cream/70 text-[14px] md:text-[15px] leading-[1.8] md:leading-[1.9] font-light">
              On monte au Rooftop pour la vue, on y reste pour l'assiette.
              Banquettes velours, baies vitrées sur l'Atlantique, lumière qui glisse —
              le restaurant signature de la maison.
            </p>
          </div>
        </div>

        {/* Hero video — coucher de soleil rooftop */}
        <div className="relative inset-card brushed min-h-[360px] md:min-h-[600px] max-h-[70svh] md:max-h-[680px] mb-6">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/assets/videos/rooftop-sunset.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/images/rooftop/ambiance.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-canvas/85 via-canvas/10 to-transparent" />

          <div className="absolute top-4 left-4 md:top-5 md:left-5 pill-outline !text-[8.5px] md:!text-[9.5px]">
            <span className="w-1.5 h-1.5 rounded-full bg-clay" />
            Le Rooftop · Restaurant & Lounge
          </div>
          <div className="absolute top-4 right-4 md:top-5 md:right-5 pill-outline !text-[8.5px] md:!text-[9.5px]">
            18h00 — 02h00
          </div>

          <div className="absolute bottom-6 left-5 right-5 md:bottom-7 md:left-7 md:right-7 flex items-end justify-between gap-4">
            <div className="min-w-0 flex-1">
              <p className="font-mono uppercase tracking-widest2 text-[9px] md:text-[10px] text-clay mb-2 md:mb-3">
                01 / L'adresse
              </p>
              <h3 className="display-serif italic text-[clamp(32px,6vw,72px)] text-cream leading-[0.96] text-balance">
                Le Rooftop
              </h3>
              <p className="editorial italic text-cream/80 text-[clamp(14px,2.5vw,20px)] mt-3 md:mt-4 max-w-md leading-snug">
                « Un coucher de soleil spectaculaire,
                servi tous les soirs. »
              </p>
            </div>
            <a href="#reserver" className="pill-light hidden md:inline-flex shrink-0">
              Réserver une table
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Triptyque assiettes */}
        <div className="grid grid-cols-12 gap-5 md:gap-6 mb-6">
          <Plate
            label="Le plat"
            tag="P-01"
            img="/assets/images/rooftop/plat.jpg"
            span="md:col-span-5"
            h="min-h-[320px] md:min-h-[460px] max-h-[55svh] md:max-h-[520px]"
            quote="L'assiette du jour change avec le marché."
          />
          <Plate
            label="Le dessert"
            tag="P-02"
            img="/assets/images/rooftop/dessert.jpg"
            span="md:col-span-4 md:mt-12"
            h="min-h-[320px] md:min-h-[460px] max-h-[55svh] md:max-h-[520px]"
            quote="Tiramisu maison, devant le soleil qui tombe."
          />
          <Plate
            label="Le verre"
            tag="P-03"
            img="/assets/images/rooftop/boisson.jpg"
            span="md:col-span-3"
            h="min-h-[320px] md:min-h-[460px] max-h-[55svh] md:max-h-[520px]"
            quote="Cocktails signature."
          />
        </div>

        {/* Quote band */}
        <div className="inset-card brushed bg-canvasGlow px-6 md:px-14 py-10 md:py-16 relative overflow-hidden">
          <span className="display-serif italic text-clay/25 text-[clamp(80px,12vw,180px)] absolute -top-6 md:-top-8 left-2 md:left-4 leading-none select-none pointer-events-none">
            «
          </span>
          <div className="relative grid grid-cols-12 gap-6 items-center">
            <p className="col-span-12 md:col-span-8 editorial italic text-cream text-[clamp(18px,3vw,36px)] leading-[1.2] text-balance">
              Une cuisine du marché, une vue imprenable, et la conviction tranquille que la soirée vient seulement de commencer.
            </p>
            <div className="col-span-12 md:col-span-3 md:col-start-10 md:border-l border-cream/15 md:pl-8 pt-4 md:pt-0">
              <p className="font-mono uppercase tracking-widest2 text-[10px] text-clay mb-2">— Le Chef</p>
              <p className="editorial text-cream text-base md:text-lg leading-tight">Le Rooftop</p>
              <p className="font-mono uppercase tracking-widest2 text-[9.5px] text-cream/55 mt-1">
                Hôtel Azur · 7ème étage
              </p>
            </div>
          </div>
        </div>

        {/* Petits plaisirs */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          <Petit n="P-01" title="Le petit-déjeuner" time="07h — 11h" body="Pain chaud, œufs minute, miel de l'Atlas, jus pressé. Servi face à la mer." />
          <Petit n="P-02" title="Le thé de cinq heures" time="16h — 18h" body="Théière fumante, pâtisseries marocaines, le temps qui ralentit." />
          <Petit n="P-03" title="Le room service" time="24h / 24" body="Une carte courte mais sérieuse, livrée en moins de vingt minutes." />
        </div>
      </div>
    </section>
  );
}

function Plate({ label, tag, img, span, h, quote }) {
  return (
    <article className={`col-span-12 ${span} group`}>
      <div className={`relative inset-card brushed ${h}`}>
        <img
          src={img}
          alt={label}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas/85 via-canvas/10 to-transparent" />
        <div className="absolute top-4 left-4 md:top-5 md:left-5 pill-outline !text-[8.5px] md:!text-[9.5px]">
          <span>{tag}</span>
          <span>/</span>
          <span className="text-clay">{label}</span>
        </div>
        <div className="absolute bottom-5 left-5 right-5 md:bottom-6 md:left-6 md:right-6">
          <h4 className="display-serif italic text-[clamp(24px,3.5vw,36px)] text-cream mb-2">{label}</h4>
          <p className="editorial italic text-cream/80 text-[13px] md:text-[14.5px] leading-snug max-w-[90%] md:max-w-xs">« {quote} »</p>
        </div>
      </div>
    </article>
  );
}

function Petit({ n, title, time, body }) {
  return (
    <div className="inset-card brushed bg-canvasSoft p-6 md:p-8 group hover:bg-canvasGlow transition-colors duration-700">
      <div className="flex items-baseline justify-between mb-4 md:mb-5 gap-4">
        <span className="font-mono uppercase tracking-widest2 text-[9.5px] text-clay whitespace-nowrap">{n}</span>
        <span className="font-mono uppercase tracking-widest2 text-[9.5px] text-cream/55 whitespace-nowrap">{time}</span>
      </div>
      <h4 className="display-serif italic text-[clamp(24px,3vw,30px)] text-cream mb-3">{title}</h4>
      <p className="text-cream/65 leading-[1.8] md:leading-[1.85] text-[13px] md:text-[13.5px] font-light">{body}</p>
    </div>
  );
}
