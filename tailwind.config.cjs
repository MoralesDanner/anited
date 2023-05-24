/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#004c6a",
        secondary:"#a9c7ca"
      },
      fontFamily:{
        'Roboto':'Roboto Condensed'
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
