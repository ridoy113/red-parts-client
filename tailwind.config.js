module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        cartheme: {
          primary: "#E52727",
          secondary: "#FF6347",
          accent: "#333333",
          neutral: "#333333",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },

  plugins: [require("daisyui")],
}
