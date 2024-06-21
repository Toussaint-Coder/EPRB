/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#50281D",
        secondary: "#5B2514",
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "834px",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
}
