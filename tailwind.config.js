/** @type {import('tailwindcss').Config} */
module.exports = {
  ode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      title: ["Fredoka One, cursive"],
    },
    extend: {
      width: {
        desktop: "96%",
        mobil: "93%",
      },
      screens: {
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
      height: {
        18: "70px",
      },
      colors: {
        none: "none",
        firstColor: "#009DE0",
        secondaryColor: "#202125a3",
        thirdColor: "#202125",
      },
      fontFamily: {
        cursive: "cursive",
      },
      backgroundColor: {
        bgFirst: "#009de014",
        bgFirstHover: "#009de029",
        bgSecondary: "#2021251F",
      },
    },
  },
  plugins: [],
};
