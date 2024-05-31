/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fontColor: "#282828",
        primary: "#590595",
        blue: "#0162DD",
        darkOutline: "#444444",
        lightOutline: "#EAEAEA",
        backgroundColor: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
