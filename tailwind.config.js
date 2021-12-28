module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      minWidth: {
        "1/3": "33.333333%",
      },
      colors: {
        primary: "#E0FF00",
      },
    },
  },
  plugins: [],
};
