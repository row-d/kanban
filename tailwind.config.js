module.exports = {
  // mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      minWidth: {
        "1/3": "33.333333%",
      },
      colors: {
        primary: "#E0FF00",
      },
      fontFamily: {
        rubik: [
          "Rubik",
          "sans-serif",
          "-apple-system",
          "system-ui",
          "ui-sans-serif",
          "BlinkMacSystemFont",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [require("tailwind-nord")],
};
