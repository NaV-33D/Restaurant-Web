/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // ✅ Fixed typo from "drakMode" to "darkMode"
  
  theme: {
    extend: {
      colors: {
        primary: "#ffc001",
        secondary: "#ff9c01",
      },
      container: {
        center: true,
        padding: '1rem',
        sm: '3em',
      },
    },
  },
  plugins: [],
};
