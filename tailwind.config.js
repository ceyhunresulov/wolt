/** @type {import('tailwindcss').Config} */
module.exports = {
  ode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        desktop: "96%",
        mobil: "93%",
      },
      screens: {
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
        blue: "#009DE0",
      },
      fontFamily: {
        cursive: "cursive",
      },
      backgroundColor: {
        lightBlue: "#EBF7FD",
      },
    },
  },
  plugins: [],
};
