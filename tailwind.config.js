/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  darkMode: "class",
  theme: {
    extend: {
      backgroundImage:{
        "home_mobile":"url(../public/images/CoffeeShop-Files/headerBgMobile.webp)",
        "home_desktop":"url(../public/images/CoffeeShop-Files/headerBgDesktop.webp)"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem",
        },
      },
      letterSpacing: {
        "tracking-tight-s": "-0.065em",
      },
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
      },
      boxShadow: {
        "primary-shadow": "0px 1px 10px rgba(0,0,0,0.5)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        Dana: "dana",
        DanaMedium: "dana medium",
        DanaDemibold: "dana demibold",
        MorabbaLight: "morabba light",
        MorabbaMedium: "morabba medium",
        MorabbaBold: "morabba bold",
      },
    },
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1050px",
      xl: "1280px",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
