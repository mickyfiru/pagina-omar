/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#030303",
        charcoal: "#101010",
        card: "#161616",
        phoenix: "#FF5A00",
        ember: "#FFB347",
        crimson: "#8B1E0F",
        bronze: "#7A3E1D",
        ash: "#9A9A9A",
        ivory: "#F4EFE3",
      },
      backgroundImage: {
        "fire-gradient": "linear-gradient(135deg, #FFB347 0%, #FF5A00 48%, #8B1E0F 100%)",
      },
      boxShadow: {
        ember: "0 0 26px rgba(255, 90, 0, 0.38)",
        "ember-soft": "0 18px 55px rgba(255, 90, 0, 0.14)",
        "ember-strong": "0 0 38px rgba(255, 90, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
