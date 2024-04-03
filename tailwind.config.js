/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        giloryRegular: ["Gilory-Regular, sans-serif"],
        giloryBold: ["Gilory-Bold, sans-serif"],
        giloryHeavy: ["Gilory-Heavy, sans-serif"],
      },
      colors: {
        'regal-blue': '#0B3558',
        'color2' : '#476788',
        'bgColor' : '#f4f8ff',
        'blue1' : '#006BFF'
      },
    },
  },
  plugins: [],
};
