module.exports = {
  future: {},
  purge: [],
  theme: {
    zIndex: {
      auto: 'auto',
      'negative': '-1',
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
    },
    colors: {
      transparent: 'transparent',
      black: '#0d0d0d',
      white: '#fff',
      brand: '#ff5900',
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-debug-screens'),
  ]
}
