/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff3030", // Màu nền chính
        secondary: "#3bb7ff", // Màu logo
        black: "#000",
        white: "#fff"
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
};
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
      },
      animation: {

      },
      keyframes: {

      },

    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};

