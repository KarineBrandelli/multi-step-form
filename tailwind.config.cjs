/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue-marine': 'hsl(213, 96%, 18%)',
      'blue-purplish': 'hsl(243, 100%, 62%)',
      'blue-pastel': 'hsl(228, 100%, 84%)',
      'blue-light': 'hsl(206, 94%, 87%)',
      'red-strawberry': 'hsl(354, 84%, 57%)',
      'gray-cool': 'hsl(231, 11%, 63%)',
      'gray-light': 'hsl(229, 24%, 87%)',
      'magnolia': 'hsl(217, 100%, 97%)',
      'alabaster': 'hsl(231, 100%, 99%)',
      'white': 'hsl(0, 0%, 100%)'
    },
    extend: {},
  },
  plugins: [],
}