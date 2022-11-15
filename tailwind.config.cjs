/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      keyframes: {
        spin: {
          '0%,100%': {transform: 'rotate(-45.0deg)'},
          '50%': {transform: 'rotate(45.0deg)'},
        }
      }
    },
  },
  plugins: [],
}
