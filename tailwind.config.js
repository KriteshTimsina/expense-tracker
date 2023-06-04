/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        slide: "slide .1s linear forwards",
      },
      keyframes: {
        slide: {
          "0%": {
            transform: "translateX(-10px)",
            zIndex: -1,
          },
          "100%": {
            marginRight: "translateX(0px)",
            zIndex: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
