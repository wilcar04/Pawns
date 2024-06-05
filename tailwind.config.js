/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        firstColor: '#5E1414',
        secondColor: '#420C0C',
        softColor: '#DFAFA4',
        neutralColor: '#AD8786',
        brilliantColor: '#F4D3CA',
        rojo: '#FF3131',
        azulClaro: '#7BC9C0',
        azulOscuro: '#19055B'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

