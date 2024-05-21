/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // Suprascrie toate stilurile
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    //Le extinde fara si le putem folosi suplimentar
    extend: {
      colors: {
        pizza: "#123456",
      },

      height: {
        screen: "100dvh", //modern phone
      },
    },
  },
  plugins: [],
};
