/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // html.class toggler
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary100: "var(--color-primary100)",
        primary50: "var(--color-primary50)",
        bgBase: "var(--color-bgBase)",
        bgContrast: "var(--color-bgContrast)",
        textBase: "var(--color-textBase)",
      },
    },
  },
  plugins: [],
};
