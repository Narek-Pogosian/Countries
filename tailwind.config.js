/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      darkElement: "#2b3945",
      darkBg: "#202c37",
      lightText: "#111517",
      lightInput: "#475569",
      lightBg: "#fafafa",
      white: "#fff",
      transparent: "transparent",
      darkInput: "#cbd5e1",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
