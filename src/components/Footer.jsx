export default function Footer() {
  return (
    <footer className="relative px-4 md:px-10 pb-10">
      <div className="max-w-[1500px] mx-auto inset-card brushed bg-canvasSoft">
        {/* Marquee */}
        <div className="overflow-hidden border-b border-cream/10 py-5 scroll-mask-x">
          <div className="flex w-max animate-scroll-x whitespace-nowrap">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-10 mr-10">
                <span className="display-serif italic text-3xl text-clay">Hôtel Azur</span>
                <span className="text-clay">✦</span>
                <span className="font-mono uppercase tracking-widest2 text-[10.5px] text-cream/65">
                  4 étoiles boutique · Bd. de la Corniche · Aïn Diab
                </span>
                <span className="text-clay">✦</span>
                <span className="display-serif italic text-3xl text-clay">Casablanca</span>
                <span className="text-clay">✦</span>
                <span className="font-mono uppercase tracking-widest2 text-[10.5px] text-cream/65">
                  Face à l'Atlantique
                </span>
                <span className="text-clay">✦</span>
              </div>
            ))}
          </div>
        </div>

        <div className="px-8 md:px-14 py-16 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <img
              src="/logo-azur.png"
              alt="Hôtel Azur"
              className="h-12 md:h-16 w-auto mb-4"
            />
            <p className="font-mono uppercase tracking-widest2 text-[10px] text-clay">Hôtel · Casablanca · 4 ★</p>
            <p className="mt-8 max-w-xs text-cream/65 leading-[1.85] text-[14px] font-light italic editorial">
              « Une maison qui ne ressemble qu'à elle-même. »
            </p>
          </div>
          <div className="col-span-6 md:col-span-2 md:col-start-6">
            <p className="font-mono uppercase tracking-widest2 text-[10px] text-clay mb-5">Lire</p>
            <ul className="space-y-3 text-[13.5px] text-cream/75 font-light">
              <li><a href="#manifeste" className="hover:text-clay transition">Le Manifeste</a></li>
              <li><a href="#suites" className="hover:text-clay transition">Les Suites</a></li>
              <li><a href="#table" className="hover:text-clay transition">La Table</a></li>
              <li><a href="#heure-bleue" className="hover:text-clay transition">L'Heure Bleue</a></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-2">
            <p className="font-mono uppercase tracking-widest2 text-[10px] text-clay mb-5">Venir</p>
            <ul className="space-y-3 text-[13.5px] text-cream/75 font-light">
              <li><a href="#lieu" className="hover:text-clay transition">Le Lieu</a></li>
              <li><a href="#reserver" className="hover:text-clay transition">Réserver</a></li>
              <li><a href="#reserver" className="hover:text-clay transition">Conciergerie</a></li>
              <li><a href="tel:+212522797506" className="hover:text-clay transition">+212 522 797 506</a></li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-3 md:col-start-10">
            <p className="font-mono uppercase tracking-widest2 text-[10px] text-clay mb-5">Newsletter</p>
            <p className="text-[13.5px] text-cream/65 font-light leading-[1.7] mb-4">
              Les invitations privées de la maison, deux fois par an.
            </p>
            <form className="flex border-b border-cream/25 focus-within:border-clay transition-colors">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 bg-transparent text-cream py-2 text-[14px] outline-none placeholder:text-cream/30"
              />
              <button type="button" className="text-clay py-2 px-2 font-mono uppercase tracking-widest2 text-[10px] hover:text-claySoft transition">
                Envoyer →
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-cream/10 px-8 md:px-14 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[11.5px] text-cream/45">
          <p>© {new Date().getFullYear()} Hôtel Azur — Tous droits réservés.</p>
          <div className="flex items-center gap-6 font-mono uppercase tracking-widest2 text-[10px]">
            <a href="#" className="hover:text-clay">Mentions légales</a>
            <a href="#" className="hover:text-clay">Confidentialité</a>
            <a href="#" className="hover:text-clay">Cookies</a>
          </div>
          <p className="italic editorial">Conçu avec soin · Aïn Diab</p>
        </div>
      </div>
    </footer>
  );
}
