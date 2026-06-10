import { useEffect, useRef, useState } from "react";

export default function CinematicFooter() {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const docH = document.documentElement.scrollHeight;
      const winH = window.innerHeight;
      const scrolled = window.scrollY + winH;
      const fromBottom = docH - scrolled;
      const range = 700;
      const r = Math.max(0, Math.min(1, 1 - fromBottom / range));
      setReveal(r);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <footer
      ref={ref}
      aria-hidden={reveal < 0.05}
      className="fixed inset-x-0 bottom-0 z-0 pointer-events-none"
      style={{ height: "min(600px, 85vh)" }}
    >
      <div
        className="absolute inset-0 flex flex-col text-cream"
        style={{
          opacity: 0.35 + reveal * 0.65,
          transform: `scale(${0.96 + reveal * 0.04})`,
          transformOrigin: "center bottom",
          transition: "opacity 200ms linear, transform 400ms cubic-bezier(.22,.61,.36,1)",
          pointerEvents: reveal > 0.1 ? "auto" : "none",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-canvasSoft via-canvas to-[#0a0810]" />
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              'url("data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"220\\" height=\\"220\\"><filter id=\\"n\\"><feTurbulence type=\\"fractalNoise\\" baseFrequency=\\"0.9\\" numOctaves=\\"2\\" stitchTiles=\\"stitch\\"/><feColorMatrix type=\\"matrix\\" values=\\"0 0 0 0 0.7 0 0 0 0 0.6 0 0 0 0 0.4 0 0 0 0.9 0\\"/></filter><rect width=\\"100%25\\" height=\\"100%25\\" filter=\\"url(%23n)\\"/></svg>")',
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-[70%] pointer-events-none"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 30%, rgba(196,166,97,0.10), transparent 70%)",
          }}
        />

        {/* Top marquee */}
        <div className="relative border-b border-cream/10 py-4 md:py-5 overflow-hidden scroll-mask-x">
          <div className="flex w-max animate-scroll-x whitespace-nowrap">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-6 md:gap-10 mr-6 md:mr-10">
                <span className="display-serif italic text-xl md:text-3xl text-clay">Hôtel Azur</span>
                <span className="text-clay">✦</span>
                <span className="font-mono uppercase tracking-widest2 text-[9px] md:text-[10.5px] text-cream/65">
                  4 étoiles boutique · Bd. de la Corniche · Aïn Diab
                </span>
                <span className="text-clay">✦</span>
                <span className="display-serif italic text-xl md:text-3xl text-clay">Casablanca</span>
                <span className="text-clay">✦</span>
                <span className="font-mono uppercase tracking-widest2 text-[9px] md:text-[10.5px] text-cream/65">
                  Face à l'Atlantique
                </span>
                <span className="text-clay">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero band */}
        <div className="relative flex-1 flex items-center px-6 md:px-14 overflow-y-auto">
          <div className="max-w-[1500px] mx-auto w-full grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-7 flex flex-col justify-center py-6 md:py-0"
                 style={{
                   transform: `translateY(${(1 - reveal) * 40}px)`,
                   transition: "transform 600ms cubic-bezier(.22,.61,.36,1)",
                 }}
            >
              <img src="/assets/images/logo.png" alt="Hôtel Azur" className="h-10 md:h-20 w-auto mb-4 md:mb-5" />
              <p className="font-mono uppercase tracking-widest2 text-[9px] md:text-[10px] text-clay mb-4 md:mb-6">
                Hôtel · Casablanca · 4 ★
              </p>
              <h2 className="display-serif text-[clamp(28px,6vw,120px)] leading-[0.95] text-cream text-balance">
                « Une maison qui ne
                <span className="block italic clay-gradient-text">ressemble qu'à elle-même. »</span>
              </h2>
            </div>

            <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-row md:flex-col justify-start gap-6 md:gap-10 pb-6 md:pb-0"
                 style={{
                   transform: `translateY(${(1 - reveal) * 60}px)`,
                   transition: "transform 700ms cubic-bezier(.22,.61,.36,1) 80ms",
                 }}
            >
              <Col title="Lire" links={[
                ["#manifeste", "Le Manifeste"],
                ["#suites", "Les Suites"],
                ["#table", "La Table"],
                ["#heure-bleue", "L'Heure Bleue"],
              ]} />
              <Col title="Venir" links={[
                ["#lieu", "Le Lieu"],
                ["#reserver", "Réserver"],
                ["#reserver", "Conciergerie"],
                ["tel:+212522797506", "+212 522 797 506"],
              ]} />
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="relative border-t border-cream/10 px-6 md:px-14 py-4 md:py-5 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-3 text-[10px] md:text-[11.5px] text-cream/55">
          <p>© {new Date().getFullYear()} Hôtel Azur — Tous droits réservés.</p>
          <div className="flex items-center gap-4 md:gap-6 font-mono uppercase tracking-widest2 text-[9px] md:text-[10px]">
            <a href="#" className="hover:text-clay min-touch-y inline-flex items-center">Mentions légales</a>
            <a href="#" className="hover:text-clay min-touch-y inline-flex items-center">Confidentialité</a>
            <a href="#" className="hover:text-clay min-touch-y inline-flex items-center">Cookies</a>
          </div>
          <p className="italic editorial text-[10px] md:text-[11.5px]">Conçu avec soin · Aïn Diab</p>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, links }) {
  return (
    <div>
      <p className="font-mono uppercase tracking-widest2 text-[9px] md:text-[10px] text-clay mb-2 md:mb-3">{title}</p>
      <ul className="space-y-1.5 md:space-y-2 text-[13px] md:text-[14px] text-cream/80 font-light">
        {links.map(([h, l]) => (
          <li key={h + l}><a href={h} className="hover:text-clay transition min-touch-y inline-flex items-center">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}
