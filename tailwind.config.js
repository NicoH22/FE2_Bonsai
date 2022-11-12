/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      maxlg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      maxmd: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      maxsm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      maxxs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
      ...defaultTheme.screens,
    },
    extend: {
      backgroundPosition: {
        "50%": "50% 50%",
      },
    },
  },
  plugins: [],
};
