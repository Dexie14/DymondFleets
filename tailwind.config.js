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
        foundationRed: "#F54748",
        deepBlue: "#02021E",
        textBlue: "#030937",
        textShade: "#616161",
        blueShade: "#071582",
        borderColor: "#A3A3A3",
        border: "#D1D1D1",
        Grey: "#E6E6E6",
        lightGrey: "#F4F4F4",
        mediumGrey: "#7F7F7F",
        mediumBlue: "#35354B",
        purpleBlue: "#E6E8F3",
        whitish: "#F7F7F7",
        selectColor: "#F3F4F6",
        buttonGrey: "#EBEBEB",
        placeholderColor: "#6D7280",
        subtle: "#EEEEEE",
        adminbg: "#F4F5F9",
        adminBlue: "#39449B",
        adminGrey: "#8B8B98",
        adminGreen: "#00B69B",
        adminRed: "#F93C65",
        deepYellow: "#6B5A23",
      },
      boxShadow: {
        custom: "0px 4px 5.8px 0px #00000026",
        authshadow: "0px 5.8px 5.8px 5px #0000001A",
        adminshadow: "box-shadow: 0px 5px 5px 58px #0000000D",
      },
      fontFamily: {
        DMSans: ["DM Sans", ...defaultTheme.fontFamily.sans],
        Inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
