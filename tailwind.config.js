/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Boutique riad palette
        canvas: "#141118",
        canvasSoft: "#1B161E",
        canvasGlow: "#26201F",
        cream: "#F2EBDD",
        creamSoft: "#E8DEC9",
        sand: "#D9C8AA",
        clay: "#B5572C",
        claySoft: "#C56F47",
        bronze: "#8E6A3D",
        gold: "#C4A661",
        goldSoft: "#E1C786",
        ink: "#19161C",
        inkSoft: "#3A3038",
        mist: "rgba(242,235,221,0.08)",
      },
      fontFamily: {
        display: ['"Gilroy"', "system-ui", "sans-serif"],
        serif: ['"Gilroy"', "system-ui", "sans-serif"],
        sans: ['"Gilroy"', "system-ui", "sans-serif"],
        mono: ['"Gilroy"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        widest2: "0.32em",
        widest3: "0.5em",
      },
      borderRadius: {
        card: "28px",
        pill: "999px",
      },
      animation: {
        "fade-in": "fadeIn 1.4s ease forwards",
        "fade-up": "fadeUp 1.4s cubic-bezier(.22,.61,.36,1) forwards",
        shimmer: "shimmer 8s linear infinite",
        "scroll-x": "scrollX 60s linear infinite",
        "ken-burns": "kenBurns 18s ease-in-out infinite alternate",
        sheen: "sheen 12s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        kenBurns: {
          "0%": { transform: "scale(1.0)" },
          "100%": { transform: "scale(1.08)" },
        },
        sheen: {
          "0%, 100%": { transform: "translateX(-30%) skewX(-12deg)" },
          "50%": { transform: "translateX(30%) skewX(-12deg)" },
        },
      },
    },
  },
  plugins: [],
};
