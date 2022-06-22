module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      wide: '0.2em',
      widest: '0.5em'
    },
    extend: {
      colors: {
        'brand-gold': '#BE9619',
        'brand-Magenta': '#7F2362',
        'brand-blue': '#304C78',
        'brand-green': '#117E58',
        'brand-purple': '#5955A4',
      }, 
      fontFamily: {
        RedHat: ['Red Hat Display', 'sans-serif'],
      }
    },
  },
  plugins: [],
}