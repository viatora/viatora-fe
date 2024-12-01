/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        viaOrange: "#EC5E29",
      },
      fontFamily: {
        swissLight: ["Swiss721BT-LightExtended"],
        swissBold: ["Swiss721BT-BoldExtended"],
      },
    },
  },
  plugins: [],
};
