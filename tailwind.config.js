/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5B2514",
        secondary: "#50281D",
      },
      screens: {
        xxs: "250px",
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
