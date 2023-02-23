/** @type {import('tailwindcss').Config} */
module.exports = {
  ode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      fredoka: ["Fredoka One, cursive, poppins"],
    },
    extend: {
      width: {
        desktop: "96%",
        mobil: "93%",
        tablet: "90%",
      },
      screens: {
        xs: "450px",
        sm: "640px",
        md: "800px",
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
        borderColor: "#202125f",
        fourthColor: "#20212533",
        fiftyColor: "#20212514",
        sixthColor: '#FFFFFFB8'
      },
      backgroundColor: {
        bgFirst: "#009de014",
        bgFirstHover: "#009de029",
        bgSecondary: "#2021251F",
        bgFourthColor: '#141414'
      },
    },
  },
  plugins: [],
};
