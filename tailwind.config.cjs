/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#a855f7", // purple-500
          600: "#7c3aed", // purple-600
        },
        accent: {
          500: "#22d3ee", // cyan-400
        },
      },
      boxShadow: {
        "glow-primary": "0 0 30px rgba(168,85,247,0.4)",
      },
    },
  },
  plugins: [],
};

