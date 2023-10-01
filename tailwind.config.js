/** @type {import('tailwindcss').Config} */
module.exports = {
  //this array of regEx helps to add taiwind css in all types of files mentioned as extension 
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 'class' enables dark mode using a class name
  theme: {
    extend: {},
  },
  plugins: [],
}

