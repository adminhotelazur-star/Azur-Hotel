import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const WEEKDAYS = ["LU", "MA", "ME", "JE", "VE", "SA", "DI"];

const MONTHS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

function getMonthDays(year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const days = [];
  const startPad = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
  for (let i = 0; i < startPad; i++) days.push(null);
  for (let d = 1; d <= lastDay.getDate(); d++) days.push(d);
  return days;
}

function isPast(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
}

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setVisible(true));
      document.body.style.overflow = "hidden";
    } else {
      setVisible(false);
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const days = getMonthDays(year, month);

  const prevMonth = () => setCurrentMonth(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentMonth(new Date(year, month + 1, 1));

  const handleDateClick = (day) => {
    if (!day) return;
    const date = new Date(year, month, day);
    if (isPast(date)) return;

    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (date < startDate) {
      setStartDate(date);
      setEndDate(null);
    } else if (date.getTime() !== startDate.getTime()) {
      setEndDate(date);
    }
  };

  const formatRange = () => {
    if (!startDate) return "";
    const startStr = `${startDate.getDate()} ${MONTHS[startDate.getMonth()]}`;
    if (!endDate) return `Du ${startStr}`;
    return `Du ${startStr} au ${endDate.getDate()} ${MONTHS[endDate.getMonth()]} ${endDate.getFullYear()}`;
  };

  const sel = (day) => {
    if (!day) return null;
    const date = new Date(year, month, day);
    if (startDate && date.getTime() === startDate.getTime()) return "start";
    if (endDate && date.getTime() === endDate.getTime()) return "end";
    return null;
  };

  const inRange = (day) => {
    if (!day || !startDate || !endDate) return false;
    const d = new Date(year, month, day).getTime();
    return d > startDate.getTime() && d < endDate.getTime();
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const fmt = (d) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${dd}`;
  };

  const handleSubmit = () => {
    const url = `https://azur.nozoul.ma/#/be/a00a49d0-42a9-4f65-b551-07fc158a6b31/book`;
    window.open(url, "_blank", "noopener");
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex justify-end">
      <div
        className={`absolute inset-0 bg-canvas/60 backdrop-blur-sm transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <div
        className={`relative w-full sm:max-w-md bg-canvas sm:border-l border-cream/15 shadow-[0_0_80px_-20px_rgba(0,0,0,0.8)] flex flex-col transition-all duration-500 ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Réservation Hôtel Azur"
      >
        <div className="sticky top-0 z-10 bg-canvas border-b border-cream/10 px-4 md:px-6 py-4 md:py-5 flex items-center justify-between">
          <h2 className="font-mono uppercase tracking-widest2 text-[9px] md:text-[10px] text-cream/70">
            Azur Hotel <span className="text-cream">·</span> Casablanca
          </h2>
          <button
            onClick={onClose}
            className="min-touch w-8 h-8 rounded-full border border-cream/15 text-cream/60 hover:text-cream hover:border-cream/30 flex items-center justify-center transition-all text-lg leading-none"
            aria-label="Fermer"
          >
            ×
          </button>
        </div>

        {step === 1 && (
          <>
            <div className="px-4 md:px-6 py-4 flex-1 overflow-y-auto">
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <button
                  onClick={prevMonth}
                  className="min-touch w-8 h-8 rounded-full border border-cream/15 text-cream/50 hover:text-cream hover:border-cream/30 flex items-center justify-center transition-all text-sm"
                  aria-label="Mois précédent"
                >
                  ‹
                </button>
                <h3 className="editorial text-lg md:text-xl text-cream">
                  {MONTHS[month]} <span className="text-cream/50">{year}</span>
                </h3>
                <button
                  onClick={nextMonth}
                  className="min-touch w-8 h-8 rounded-full border border-cream/15 text-cream/50 hover:text-cream hover:border-cream/30 flex items-center justify-center transition-all text-sm"
                  aria-label="Mois suivant"
                >
                  ›
                </button>
              </div>

              <div className="grid grid-cols-7 mb-3 md:mb-4">
                {WEEKDAYS.map((wd) => (
                  <div
                    key={wd}
                    className="text-center text-[8px] md:text-[9px] font-mono uppercase tracking-widest2 text-cream/35"
                  >
                    {wd}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-y-1">
                {days.map((day, i) => {
                  if (day === null) return <div key={`e-${i}`} />;
                  const date = new Date(year, month, day);
                  const past = isPast(date);
                  const selected = sel(day);
                  const range = inRange(day);
                  const isToday = date.getTime() === today.getTime();

                  let cls =
                    "relative flex items-center justify-center text-xs md:text-sm transition-colors rounded-sm min-touch";

                  if (past) {
                    cls += " text-cream/15 line-through cursor-not-allowed";
                  } else if (selected) {
                    cls += " bg-clay text-canvas font-semibold";
                  } else if (range) {
                    cls += " bg-cream/8 text-cream";
                  } else {
                    cls += " text-cream/70 hover:bg-cream/8 hover:text-cream cursor-pointer";
                  }
                  if (isToday && !selected && !range) cls += " ring-1 ring-inset ring-cream/20";

                  return (
                    <button key={day} onClick={() => handleDateClick(day)} disabled={past} className={cls}>
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="sticky bottom-0 bg-canvas border-t border-cream/10 px-4 md:px-6 py-4 md:py-5 flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <p className="font-mono uppercase tracking-widest2 text-[8px] md:text-[9px] text-cream/45 mb-1">Votre séjour</p>
                <p className="editorial text-xs md:text-sm text-cream truncate">
                  {formatRange() || (
                    <span className="text-cream/40 italic font-sans text-[10px] md:text-[11px] font-light">
                      Sélectionnez vos dates
                    </span>
                  )}
                </p>
              </div>
              <button
                onClick={() => startDate && endDate && setStep(2)}
                disabled={!startDate || !endDate}
                className="whitespace-nowrap bg-clay text-canvas px-5 md:px-6 py-2.5 md:py-2.5 text-[9px] md:text-[10px] font-mono font-semibold uppercase tracking-widest2 disabled:opacity-25 disabled:cursor-not-allowed hover:bg-clay/90 transition-all min-h-[44px]"
              >
                Suivant →
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="px-4 md:px-6 py-4 flex-1 overflow-y-auto">
              <div className="bg-cream/5 border border-cream/10 p-4 md:p-5 mb-6 flex items-center justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <p className="font-mono uppercase tracking-widest2 text-[8px] md:text-[9px] text-clay mb-1">
                    Dates sélectionnées
                  </p>
                  <p className="editorial text-xs md:text-sm text-cream truncate">{formatRange()}</p>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="whitespace-nowrap text-clay text-[9px] md:text-[10px] font-mono uppercase tracking-widest2 underline underline-offset-4 decoration-cream/20 hover:decoration-clay/60 transition-all min-h-[44px]"
                >
                  Modifier
                </button>
              </div>

              <div className="space-y-1">
                <CounterRow label="Chambres" sublabel="Nombre de chambres" value={rooms} onChange={setRooms} min={1} />
                <CounterRow label="Adultes" sublabel="13 ans et plus" value={adults} onChange={setAdults} min={1} />
                <CounterRow label="Enfants" sublabel="De 0 à 12 ans" value={children} onChange={setChildren} min={0} />
              </div>
            </div>

            <div className="sticky bottom-0 bg-canvas border-t border-cream/10 px-4 md:px-6 py-4 md:py-5">
              <button
                onClick={handleSubmit}
                className="w-full bg-clay text-canvas py-3 md:py-3 text-[9px] md:text-[10px] font-mono font-semibold uppercase tracking-widest2 hover:bg-clay/90 transition-all min-h-[48px]"
              >
                Vérifier les disponibilités →
              </button>
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}

function CounterRow({ label, sublabel, value, onChange, min }) {
  return (
    <div className="flex items-center justify-between py-3 md:py-4 border-b border-cream/8 last:border-b-0 gap-4">
      <div className="min-w-0 flex-1">
        <p className="font-mono text-sm md:text-base text-cream">{label}</p>
        <p className="font-mono text-[9px] md:text-[10px] text-cream/45 tracking-widest2 uppercase">{sublabel}</p>
      </div>
      <div className="flex items-center gap-3 md:gap-4 shrink-0">
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="min-touch w-8 h-8 md:w-8 md:h-8 rounded-full border border-cream/20 text-cream/50 flex items-center justify-center text-sm hover:border-cream/50 hover:text-cream transition-all disabled:opacity-25 disabled:cursor-not-allowed"
          aria-label={`Réduire ${label.toLowerCase()}`}
        >
          −
        </button>
        <span className="editorial text-base md:text-lg text-cream w-5 md:w-6 text-center">{value}</span>
        <button
          onClick={() => onChange(value + 1)}
          className="min-touch w-8 h-8 md:w-8 md:h-8 rounded-full border border-cream/20 text-cream/50 flex items-center justify-center text-sm hover:border-cream/50 hover:text-cream transition-all"
          aria-label={`Augmenter ${label.toLowerCase()}`}
        >
          +
        </button>
      </div>
    </div>
  );
}
