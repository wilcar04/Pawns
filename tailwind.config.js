const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Agrega las rutas de contenido necesarias
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        firstColor: '#5E1414',
        secondColor: '#FAD3CA',
        highlightColor: '#AD706E',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    // Agrega el plugin de Flowbite
    flowbite.plugin(),
  ],
};