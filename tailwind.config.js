/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primaryColor:'#1D267D',
        secondaryColor:'#FFC100',
        darkcolor: '#0C0C0C',
        lightcolor: '#F6F5F2'
      }
    },
    fontFamily:{
      lobster: '"Lobster", sans-serif',
      publicsans: '"Public Sans", sans-serif',
      spacefont: '"Space Grotesk", sans-serif'
    }
  },
  plugins: [],
}

