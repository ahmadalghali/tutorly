// eslint-disable-next-line no-undef
const colors = require("tailwindcss/colors");

module.exports = {
  // content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: ["./public/**/*.html", "./src/**/*.vue"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      rose: colors.rose,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      violet: colors.violet,
      indigo: colors.indigo,
      blue: colors.blue,
      sky: colors.sky,
      cyan: colors.cyan,
      teal: colors.teal,
      emerald: colors.emerald,
      green: colors.green,
      lime: colors.lime,
      amber: colors.amber,
      orange: colors.orange,
      black: colors.black,
      white: colors.white,
      red: colors.red,
      yellow: colors.yellow,
      stone: colors.stone,
      neutral: colors.neutral,
      gray: colors.gray,
      slate: colors.slate,
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
