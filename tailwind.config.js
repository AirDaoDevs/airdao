module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      md: '768px',
      xl: '1200px',
    },
    container: {
      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1072px',
        '2xl': '1072px',
      },
    },
    extend: {
      colors: {
        black: '#313131',
        grey: '#767676',
        green: '#d5de26',
        'dark-grey': '#a1a1a1',
        'dark-white': '#f5f5f7',
        'bg-dark': '#202020',
        'light-dark': '#2a2a2a',
        'dark-white': '#dddddd',
        'light-black': '#9c9c9c',
      },
    },
  },
  plugins: [],
}
