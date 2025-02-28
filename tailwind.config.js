/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    extend: {
      backgroundImage: {

      },
      colors: {
        primary: "#ff3030",
        secondary: "#3bb7ff",
        black: "#000",
        white: "#fff"
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Roboto", "sans-serif"],
        game: ["Coiny", "system-ui"],

      },
      animation: {
        "bounce-custom": "bounce 0.5s infinite alternate ease-in-out",
      },
      keyframes: {

      },

    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};

