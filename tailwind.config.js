module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bms: {
          50: '#edf1fc',
          100: '#d3d4e1',
          200: '#b6b8c9',
          300: '#989bb2',
          400: '#7c7f9b',
          500: '#636582',
          600: '#4c4f66',
          700: '#363849',
          800: '#21222e',
          900: '#0a0a16',
        },
        logored: {
          50: '#ffe5e4',
          100: '#fdbab8',
          200: '#f58e8b',
          300: '#ef615d',
          400: '#e93530',
          500: '#cf1c16',
          600: '#a21310',
          700: '#740c0a',
          800: '#480504',
          900: '#1f0000',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
