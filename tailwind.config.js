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
        firstColorLight: "#009de0cc",
        secondaryColor: "#202125a3",
        secondaryLight: "#f2f2f28a",
        secondaryDark: "#2021251f",
        thirdColor: "#202125",
        borderColor: "#202125f",
        fourthColor: "#20212533",
        fiftyColor: "#20212514",
        sixthColor: "#FFFFFFB8",
        red: "#E0321F",
        blue: "#3975ea",
      },
      backgroundColor: {
        bgFirst: "#009de014",
        bgFirstHover: "#009de029",
        bgSecondary: "#20212514",
        bgSecondaryLight: "#f2f2f28a",
        bgFourthColor: "#141414",
      },
    },
  },
  plugins: [],
};
