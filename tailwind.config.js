/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode support
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // penting agar tailwind membaca file di src/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
