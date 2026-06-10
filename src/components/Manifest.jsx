export default function Manifest() {
  return (
    <section id="manifeste" className="relative py-24 md:py-48 px-4 md:px-10">
      <div className="max-w-[1500px] mx-auto">
        {/* Chapter mark */}
        <div className="flex items-baseline gap-6 mb-12 md:mb-24">
          <span className="font-mono uppercase tracking-widest2 text-[10px] text-clay">
            Chapitre · 01
          </span>
          <span className="h-px flex-1 bg-cream/15" />
          <span className="font-mono uppercase tracking-widest2 text-[10px] text-cream/45">
            Le Manifeste
          </span>
        </div>

        {/* Editorial split */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="col-span-12 md:col-span-7">
            <h2 className="display-serif text-[clamp(36px,7vw,128px)] leading-[0.92] text-cream text-balance">
              Une identité architecturale 
              <span className="italic clay-gradient-text"> inimitable.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:pt-6">
            <p className="text-cream/75 text-[14px] md:text-[15.5px] leading-[1.85] md:leading-[1.95] font-light">
              L'Hôtel Azur n'a jamais voulu être une chaîne. Depuis 1972, c'est
              une adresse — la nôtre — sur le seul bout de boulevard où Casablanca
              touche son océan. On y vient pour la lumière du matin, l'humeur du soir,
              et la conviction tranquille qu'on est exactement là où il faut être.
            </p>
          </div>
        </div>

        {/* Trois axes */}
        <div className="mt-20 md:mt-32 grid grid-cols-12 gap-5 md:gap-6">
          <Pillar
            n="01"
            tag="L'horizon"
            title="L'océan, sans intermédiaire."
            body="Pas de boulevard à traverser. Pas de route à longer. L'Atlantique commence là où finit notre terrasse."
            img="src/assets/images/pool/piscine2.webp"
            offset="md:mt-0"
            span="md:col-span-4"
          />
          <Pillar
            n="02"
            tag="La maison"
            title="Cinquante chambres, pas une de trop."
            body="Une maison à taille humaine. On vous reconnaît. On retient comment vous aimez votre café. On garde votre table."
            img="src/assets/images/reception/reception.webp"
            offset="md:mt-16"
            span="md:col-span-4"
          />
          <Pillar
            n="03"
            tag="L'humeur"
            title="Quatre étoiles, zéro raideur."
            body="Le service sait être présent sans se faire voir. La cuisine sait être française sans cesser d'être marocaine."
            img="src/assets/images/rooftop/ambiance.jpg"
            offset="md:mt-6"
            span="md:col-span-4"
          />
        </div>
      </div>
    </section>
  );
}

function Pillar({ n, tag, title, body, img, offset, span }) {
  return (
    <article className={`col-span-12 ${span} ${offset} group`}>
      <div className="inset-card brushed bg-canvasSoft min-h-[360px] md:min-h-[480px] max-h-[70svh] md:max-h-[600px] h-auto">
        <img
          src={img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-canvas/20 to-canvas/30" />
        <div className="absolute top-4 left-4 md:top-5 md:left-5 pill-outline !text-[8.5px] md:!text-[9.5px]">
          <span>{n}</span>
          <span>/</span>
          <span className="text-clay">{tag}</span>
        </div>
        <div className="absolute bottom-6 left-5 right-5 md:bottom-7 md:left-7 md:right-7">
          <h3 className="display-serif italic text-[clamp(22px,4vw,34px)] text-cream leading-[1.05] mb-3 md:mb-4 text-balance">
            {title}
          </h3>
          <p className="text-cream/75 leading-[1.7] md:leading-[1.75] text-[12.5px] md:text-[13.5px] font-light max-w-[90%] md:max-w-xs">{body}</p>
        </div>
      </div>
    </article>
  );
}
