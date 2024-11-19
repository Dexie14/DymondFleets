/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        foundationWhite: "#FDFDFD",
        foundationBlue: "#040C48",
        deepBlue: "#02021E",
        textShade: "#616161",
        blueShade: "#071582",
        borderColor: "#A3A3A3",
        Grey: "#E6E6E6",
        lightGrey: "#F4F4F4",
        mediumGrey: "#7F7F7F",
        mediumBlue: "#35354B",
        purpleBlue: "#E6E8F3",
        whitish: "#F7F7F7",
        selectColor: "#F3F4F6",
        buttonGrey: "#EBEBEB",
        placeholderColor: "#6D7280",
      },
      fontFamily: {
        DMSans: ["DM Sans", ...defaultTheme.fontFamily.sans],
        Inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
