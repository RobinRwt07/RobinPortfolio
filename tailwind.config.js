/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",'./**/*.{html,js}'],
  theme: {
    extend: {},
    colors:{
      darkBlue:"#041636",
      darkVoid:"#151419",
      DustyGrey:"#878787",
      lightGrey:"#F9F9F9",
      snow:"#FBFBFB",
      lava:"#f5860f",
      teal:"#003049",
      grey:"#E0E0E0",
      transparent:"transparent",
    
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
  darkMode:'class',
}

