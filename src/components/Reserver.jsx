import { useState } from "react";

export default function Reserver() {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const fmt = (d) => d.toISOString().split("T")[0];

  const [arr, setArr] = useState(fmt(today));
  const [dep, setDep] = useState(fmt(tomorrow));
  const [guests, setGuests] = useState("2 adultes");
  const [room, setRoom] = useState("Solo Deluxe");

  return (
    <section id="reserver" className="relative py-32 md:py-44 px-4 md:px-10">
      <div className="max-w-[1500px] mx-auto">
        {/* Chapter mark */}
        <div className="flex items-baseline gap-6 mb-12 md:mb-16">
          <span className="font-mono uppercase tracking-widest2 text-[10px] text-clay">
            Chapitre · 06
          </span>
          <span className="h-px flex-1 bg-cream/15" />
          <span className="font-mono uppercase tracking-widest2 text-[10px] text-cream/45">
            Réserver
          </span>
        </div>

        {/* Title */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="display-serif text-[clamp(44px,7vw,128px)] leading-[0.92] text-cream text-balance">
            On vous attend
            <span className="italic clay-gradient-text block">avec la clé.</span>
          </h2>
        </div>

        {/* Big booking card */}
        <div className="inset-card brushed bg-canvasSoft px-4 md:px-3 py-3 mb-6">
          <div className="flex flex-col md:flex-row md:items-stretch gap-3">
            <div className="hidden md:flex items-center gap-3 pl-4 pr-6 border-r border-cream/10">
              <span className="text-clay text-2xl leading-none">✦</span>
              <div>
                <p className="font-mono uppercase tracking-widest2 text-[9.5px] text-cream/55">Réservation directe</p>
                <p className="editorial italic text-cream text-lg leading-tight">Au meilleur prix.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-cream/5 flex-1 rounded-[20px] overflow-hidden">
              <Field label="Arrivée">
                <input
                  type="date"
                  value={arr}
                  onChange={(e) => setArr(e.target.value)}
                  className="w-full bg-transparent text-cream editorial text-lg outline-none [color-scheme:dark]"
                />
              </Field>
              <Field label="Départ">
                <input
                  type="date"
                  value={dep}
                  onChange={(e) => setDep(e.target.value)}
                  className="w-full bg-transparent text-cream editorial text-lg outline-none [color-scheme:dark]"
                />
              </Field>
              <Field label="Voyageurs">
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-transparent text-cream editorial text-lg outline-none appearance-none cursor-pointer"
                >
                  <option className="bg-canvas">1 adulte</option>
                  <option className="bg-canvas">2 adultes</option>
                  <option className="bg-canvas">2 adultes · 1 enfant</option>
                  <option className="bg-canvas">2 adultes · 2 enfants</option>
                  <option className="bg-canvas">3 adultes</option>
                </select>
              </Field>
              <Field label="Catégorie">
                <select
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                  className="w-full bg-transparent text-cream editorial text-lg outline-none appearance-none cursor-pointer"
                >
                  <option className="bg-canvas">chambre individuelle</option>
                  <option className="bg-canvas">Chambre individuelle deluxe</option>
                  <option className="bg-canvas">Chambre double</option>
                  <option className="bg-canvas">Chambre double deluxe</option>
                  <option className="bg-canvas">Suite</option>
                </select>
              </Field>
            </div>

            <button
              type="button"
              className="md:w-auto bg-cream text-canvas rounded-[20px] px-6 py-4 font-mono uppercase tracking-widest2 text-[11px] hover:bg-clay hover:text-cream transition-colors duration-500 flex items-center justify-center gap-3"
            >
              <span>Vérifier les disponibilités</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Contact split */}
        <div className="grid grid-cols-12 gap-5 md:gap-6">
          {/* Adresse + tels */}
          <div className="col-span-12 md:col-span-5 inset-card brushed bg-canvasSoft p-8 md:p-10">
            <p className="font-mono uppercase tracking-widest2 text-[10px] text-clay mb-5">
              Nous trouver
            </p>
            <p className="display-serif text-3xl text-cream leading-snug">
              41 Boulevard de la Corniche,
              <br />
              Aïn Diab, Casablanca{" "}
              <span className="clay-gradient-text">20000</span>,
              <br />
              Maroc.
            </p>
            <div className="mt-10 space-y-5 border-t border-cream/10 pt-8">
              <Row label="Réception" value="+212 522 797 506" subtitle="24h / 24, 7j / 7" />
              <Row label="Informations" value="info@hotelazur.ma" />
              <Row label="Réservations" value="reservation@hotelazur.ma" />
            </div>
          </div>

          {/* Conciergerie form */}
          <div className="col-span-12 md:col-span-7 inset-card brushed bg-canvasSoft p-8 md:p-10">
            <p className="font-mono uppercase tracking-widest2 text-[10px] text-clay mb-4">
              — Conciergerie privée
            </p>
            <h3 className="display-serif italic text-3xl text-cream leading-tight mb-2">
              Une demande sur-mesure ?
            </h3>
            <p className="text-cream/55 text-[13.5px] font-light italic editorial mb-8 max-w-lg">
              Transfert privé, restaurant privatisé, soirée d'entreprise, célébration —
              nous vous répondons en moins de 24h.
            </p>

            <form className="grid grid-cols-2 gap-x-6 gap-y-5">
              <Input label="Nom complet" />
              <Input label="Email" type="email" />
              <Input label="Date d'arrivée" type="date" />
              <Input label="Nombre de voyageurs" />
              <Textarea label="Votre demande" />
              <div className="col-span-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-2">
                <p className="text-[11.5px] text-cream/45 italic editorial max-w-sm">
                  Vos données restent confidentielles.
                </p>
                <button type="button" className="pill-light">
                  Envoyer la demande
                  <span>→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col px-5 py-3 bg-canvasSoft hover:bg-canvas transition-colors">
      <span className="font-mono uppercase tracking-widest2 text-[9.5px] text-cream/55 mb-1.5">
        {label}
      </span>
      <div>{children}</div>
    </label>
  );
}

function Row({ label, value, subtitle }) {
  return (
    <div className="flex items-baseline justify-between gap-6">
      <span className="font-mono uppercase tracking-widest2 text-[10px] text-cream/55">{label}</span>
      <div className="text-right">
        <p className="editorial text-lg text-cream">{value}</p>
        {subtitle && <p className="text-[11px] text-cream/45 italic mt-0.5">{subtitle}</p>}
      </div>
    </div>
  );
}

function Input({ label, type = "text" }) {
  return (
    <label className="col-span-2 md:col-span-1 flex flex-col">
      <span className="font-mono uppercase tracking-widest2 text-[9.5px] text-cream/55 mb-2">{label}</span>
      <input
        type={type}
        className="bg-transparent border-b border-cream/20 focus:border-clay py-2 text-cream editorial text-lg outline-none transition-colors [color-scheme:dark]"
      />
    </label>
  );
}

function Textarea({ label }) {
  return (
    <label className="col-span-2 flex flex-col">
      <span className="font-mono uppercase tracking-widest2 text-[9.5px] text-cream/55 mb-2">{label}</span>
      <textarea
        rows="3"
        className="bg-transparent border-b border-cream/20 focus:border-clay py-2 text-cream text-[15px] font-light outline-none transition-colors resize-none"
      />
    </label>
  );
}
