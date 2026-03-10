/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#38bdf8", // sky-400
          600: "#0284c7", // sky-600
        },
        accent: {
          500: "#22c55e", // green-500
        },
      },
      boxShadow: {
        "glow-primary": "0 0 30px rgba(56,189,248,0.35)",
      },
    },
  },
  plugins: [],
};

