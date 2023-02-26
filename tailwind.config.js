/** @type {import('tailwindcss').Config} */
module.exports = {
  ode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      fredoka: ["Fredoka One, cursive"],
    },
    extend: {
      width: {
        desktop: "96%",
        mobil: "93%",
        tablet: "90%",
        smTablet: "1100px",
      },
      screens: {
        xs: "450px",
        sm: "640px",
        md: "800px",
        lg: "1100px",
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
        borderColor: "#202125f",
        fourthColor: "#20212533",
        fiftyColor: "#20212514",
        sixthColor: "#FFFFFFB8",
        red: "#E0321F",
      },
      backgroundColor: {
        bgFirst: "#009de014",
        bgFirstHover: "#009de029",
        bgSecondary: "#2021251F",
        bgSecondaryLight: "#f2f2f28a",
        bgFourthColor: "#141414",
      },
    },
  },
  plugins: [],
};
