import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  const links = [
    { href: "#manifeste", label: "Manifeste" },
    { href: "#suites", label: "Suites" },
    { href: "#table", label: "Table" },
    { href: "#heure-bleue", label: "Heure bleue" },
    { href: "#lieu", label: "Le Lieu" },
  ];

  return (
    <>
      {/* Corner logo — centered on mobile, top-left on desktop */}
      <a href="#top" className="fixed top-6 left-1/2 -translate-x-1/2 md:top-8 md:left-10 md:translate-x-0 z-40 group">
        <div className="flex items-center gap-4">
          <img
            src="/assets/images/logo.png"
            alt="Hôtel Azur"
            className="h-7 md:h-9 w-auto opacity-95 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="hidden md:block border-l border-cream/20 pl-4">
            <p className="font-mono uppercase tracking-widest2 text-[9.5px] text-cream/70 leading-none">Hôtel · 4★</p>
            <p className="font-mono uppercase tracking-widest2 text-[9.5px] text-cream leading-none mt-1">Casablanca</p>
          </div>
        </div>
      </a>

      {/* Corner brand — top right (hidden on mobile) */}
      <div className="fixed top-6 right-6 md:top-12 md:right-10 z-40 hidden md:flex items-center gap-3">
        <p className="font-mono uppercase tracking-widest2 text-[9.5px] text-cream/70">
          +212 5 22 79 75 06 | Aïn Diab <span className="text-cream"> · </span> Casablanca
        </p>
      </div>

      {/* Mobile menu backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-canvas/70 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Desktop: centered pill nav | Mobile: hamburger right */}
      <header
        className={`fixed top-3 md:top-8 inset-x-0 z-50 flex justify-end md:justify-center px-4 md:px-0 transition-all duration-500 ${
          scrolled ? "opacity-100" : "opacity-95"
        }`}
      >
        <nav className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-pill bg-canvas/70 backdrop-blur-xl border border-cream/15 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono uppercase tracking-widest2 text-[10px] text-cream/80 hover:text-cream px-4 py-2 rounded-pill hover:bg-cream/10 transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden min-touch w-11 h-11 flex items-center justify-center bg-canvas/80 backdrop-blur border border-cream/15 rounded-full text-cream text-xl transition-all duration-300 hover:bg-cream/10"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          <span className="block leading-none select-none">{open ? "×" : "☰"}</span>
        </button>
      </header>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="fixed inset-x-4 top-16 z-[55] md:hidden inset-card bg-canvasSoft/95 backdrop-blur-xl p-6 border border-cream/15 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
          <nav className="flex flex-col gap-4" role="navigation" aria-label="Navigation mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono uppercase tracking-widest2 text-[12px] text-cream hover:text-clay transition-colors py-3 min-touch-y flex items-center"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
