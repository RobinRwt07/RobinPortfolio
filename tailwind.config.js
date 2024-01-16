/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/*.{html,js}"],
  theme: {
    extend: {},
    colors:{
      darkBlue:"#111E34",
      darkVoid:"#151419",
      DustyGrey:"#878787",
      lightGrey:"#F9F9F9",
      gluonGrey:"#1B1B1E",
      snow:"#FBFBFB",
      lava:"#F56E0F",
      slateGret:"#262626",
      teal:"#003049",
      grey:"#E0E0E0",
      transparent:"transparent",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
}

