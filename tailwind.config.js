/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Habilitar el modo oscuro por clase
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serif'], // Agrega Roboto
        sans: ['Passion One', 'sans-serif'], // Agregar Passion One aquí
        maiden: ['"Maiden Orange"', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'], // Define 'rajdhani' para usar en tus clases de Tailwind
      },
      height: {
        "80p": "80%",
        "75vh": '75vh',
        "70vh": '70vh',
        "80vh": '80vh',
        "90vh": '90vh'
      },
      width: {
        '80vh': '80vh',
        '90vh': '90vh',
      },
      colors: {
        primary: '#f7e1d7',
        secondary2: '#EDE8DC',
        product: '#EDE8DC',
        textPrimary: '#f48771',
        button: "#e6c7b9"
      },
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(0.8)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 }, // Comienza fuera de la vista
          '100%': { transform: 'translateX(0)', opacity: 1 }, // Termina en su lugar
        },
      },
      animation: {
        slideIn: 'slideIn 2.0s ease-in-out',
        zoomIn: 'zoomIn 2.2s ease-out',
        fadeIn: 'fadeIn 1.5s ease-out',
        slideUp: 'slideUp 1.5s ease-out',
        scroll: 'scroll 10s linear infinite',
      },
    },
  },
  plugins: [],
};
