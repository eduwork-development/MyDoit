/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        customPrimary: {
          500: "#00D27F",
          600: "#00A866",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
