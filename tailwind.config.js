/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./image/hero.png')",
        'step': "url('./image/villa2.jpg')",
        'about1': "url('./image/villa2.jpg')",
      }
    },
  },
  plugins: [],
}
