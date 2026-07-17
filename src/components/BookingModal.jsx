import { useState, useEffect } from "react";
import { buildNozoulUrl } from "../utils/nozoul";

export default function BookingModal({ isOpen, onClose }) {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const fmt = (d) => d.toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState(fmt(today));
  const [checkOut, setCheckOut] = useState(fmt(tomorrow));
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [childAges, setChildAges] = useState([]);
  const [error, setError] = useState("");

  // Keep the childAges array in sync with the children count
  useEffect(() => {
    setChildAges((prev) => {
      const next = Array.from({ length: children }, (_, i) => prev[i] ?? "5");
      return next;
    });
  }, [children]);

  // Reset the form each time the modal is opened
  useEffect(() => {
    if (isOpen) {
      setCheckIn(fmt(today));
      setCheckOut(fmt(tomorrow));
      setAdults(1);
      setChildren(0);
      setChildAges([]);
      setError("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

  function updateChildAge(index, value) {
    setChildAges((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!checkIn || !checkOut) {
      setError("Merci de sélectionner une date d'arrivée et de départ.");
      return;
    }
    if (new Date(checkOut) <= new Date(checkIn)) {
      setError("La date de départ doit être après la date d'arrivée.");
      return;
    }
    setError("");

    const url = buildNozoulUrl({ checkIn, checkOut, adults, children, childAges });
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-canvas/85 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal card */}
      <div className="relative inset-card brushed bg-canvasSoft w-full max-w-xl p-6 md:p-10 max-h-[90svh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-canvas/60 border border-cream/15 text-cream hover:bg-clay hover:border-clay transition-colors flex items-center justify-center text-lg"
        >
          ✕
        </button>

        <p className="font-mono uppercase tracking-widest2 text-[10px] text-clay mb-3">
          Réservation directe
        </p>
        <h3 id="booking-modal-title" className="display-serif italic text-3xl md:text-4xl text-cream leading-tight mb-8">
          Choisissez vos dates.
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Date d'arrivée">
              <input
                type="date"
                value={checkIn}
                min={fmt(today)}
                onChange={(e) => setCheckIn(e.target.value)}
                required
                className="w-full bg-transparent text-cream editorial text-lg outline-none [color-scheme:dark]"
              />
            </Field>
            <Field label="Date de départ">
              <input
                type="date"
                value={checkOut}
                min={checkIn || fmt(tomorrow)}
                onChange={(e) => setCheckOut(e.target.value)}
                required
                className="w-full bg-transparent text-cream editorial text-lg outline-none [color-scheme:dark]"
              />
            </Field>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Nombre d'adultes">
              <Counter value={adults} min={1} onChange={setAdults} />
            </Field>
            <Field label="Nombre d'enfants">
              <Counter value={children} min={0} onChange={setChildren} />
            </Field>
          </div>

          {children > 0 && (
            <div className="border-t border-cream/10 pt-5">
              <p className="font-mono uppercase tracking-widest2 text-[9.5px] text-cream/55 mb-3">
                Âge des enfants
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {childAges.map((age, i) => (
                  <label key={i} className="flex flex-col px-4 py-2.5 bg-canvas rounded-[14px] border border-cream/10">
                    <span className="font-mono uppercase tracking-widest2 text-[8.5px] text-cream/50 mb-1">
                      Enfant {i + 1}
                    </span>
                    <select
                      value={age}
                      onChange={(e) => updateChildAge(i, e.target.value)}
                      className="w-full bg-transparent text-cream editorial text-base outline-none appearance-none cursor-pointer"
                    >
                      {Array.from({ length: 13 }, (_, a) => a).map((a) => (
                        <option key={a} className="bg-canvas" value={a}>
                          {a} an{a > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </label>
                ))}
              </div>
            </div>
          )}

          {error && (
            <p className="text-clay text-[13px] italic editorial">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-cream text-canvas rounded-[20px] px-6 py-4 font-mono uppercase tracking-widest2 text-[11px] hover:bg-clay hover:text-cream transition-colors duration-500 flex items-center justify-center gap-3 mt-2"
          >
            <span>Vérifier les disponibilités</span>
            <span>→</span>
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col px-4 py-3 bg-canvas rounded-[16px] border border-cream/10">
      <span className="font-mono uppercase tracking-widest2 text-[9px] text-cream/55 mb-1.5">
        {label}
      </span>
      <div>{children}</div>
    </label>
  );
}

function Counter({ value, min, onChange }) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="w-8 h-8 rounded-full border border-cream/30 text-cream flex items-center justify-center text-base hover:bg-cream/10 transition-colors shrink-0"
      >
        −
      </button>
      <span className="text-cream editorial text-lg min-w-[1.2ch] text-center">{value}</span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="w-8 h-8 rounded-full border border-cream/30 text-cream flex items-center justify-center text-base hover:bg-cream/10 transition-colors shrink-0"
      >
        +
      </button>
    </div>
  );
}
