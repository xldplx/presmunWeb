/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        horizon: ['Horizon', 'sans-serif'],
      },
      colors: {
        primary: '#00072d',
        accent: {
          light: '#f5f5f5',
          yellow: '#f3c623',
          orange: '#eb8317',
        },
      },
    },
  },
  plugins: [],
}

