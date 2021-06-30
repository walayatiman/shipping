module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Metropolis", "sans-serif"],
        serif: ["Metropolis", "sans-serif"],
        mono: ["Metropolis", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right bottom, rgba(30, 30, 30, 0.7), rgba(30, 30, 30, 0.7)), url('../images/moving.jpg')",
        "aqua-bg":
          "linear-gradient(to right bottom, rgba(51, 209, 153, 0.7), rgba(51, 209, 153, 0.7)), url('../images/aqua.jpg')",
        "fist-bump":
          "linear-gradient(to right bottom, rgba(30, 30, 30, 0.7), rgba(30, 30, 30, 0.7)), url('../images/fist.jpg')",
        "first-delivery":
          "linear-gradient(to right bottom, rgba(30, 30, 30, 0.5), rgba(30, 30, 30, 0.5)), url('../images/amazon.jpg')",
        "second-delivery":
          "linear-gradient(to right bottom, rgba(30, 30, 30, 0.5), rgba(30, 30, 30, 0.5)), url('../images/bag.jpg')",
        "third-delivery":
          "linear-gradient(to right bottom, rgba(30, 30, 30, 0.5), rgba(30, 30, 30, 0.5)), url('../images/deliver.jpg')",
        "fourth-delivery":
          "linear-gradient(to right bottom, rgba(30, 30, 30, 0.5), rgba(30, 30, 30, 0.5)), url('../images/mcdo.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
