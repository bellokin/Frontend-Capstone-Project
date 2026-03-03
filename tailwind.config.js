/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        sans: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        black:     "#0A0A08",
        ink:       "#111110",
        card:      "#161614",
        border:    "#252522",
        gold:      "#D4A853",
        "gold-dim":"#8A6B2E",
        cream:     "#F5F0E8",
        muted:     "#65655A",
        "muted-hi":"#8A8A7E",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
