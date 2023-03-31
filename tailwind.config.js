/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      color: {
        'custom-gray-100': '#F8F9FC',
        'custom-gray-200': '#E6E8F2',
        'custom-gray-300': '#D1D6E4',
        'custom-gray-400': '#8D95AF',
        'custom-gray-500': '#303F73',
        'custom-gray-600': '#252D4A',
        'custom-gray-700': '#181C2A',
        'custom-gray-800': '#0E1116',
      },
      backgroundImage: {
        'gradient-vertical': `linear-gradient(180deg, #303F73 0%, #181C2A 100%)`,
        'gradient-horizontal': `linear-gradient(90deg, #303F73 0%, #181C2A 100%)`,
      },

      backgroundColor: {
        'custom-gray-100': '#F8F9FC',
        'custom-gray-200': '#E6E8F2',
        'custom-gray-300': '#D1D6E4',
        'custom-gray-400': '#8D95AF',
        'custom-gray-500': '#303F73',
        'custom-gray-600': '#252D4A',
        'custom-gray-700': '#181C2A',
        'custom-gray-800': '#0E1116',
      },
      keyframes: {
        moveBackground: {
          '0% ': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
          '100%': {
            'background-position': '0% 50%',
          },
        },
        ChangeColor: {
          '0%': {
            '-webkit-filter': 'brightness(0) invert(1)',
            filter: 'brightness(0) invert(1)',
          },
          '11%': {
            '-webkit-filter': 'none',
            filter: 'none',
          },
          '33%': {
            '-webkit-filter': 'none',
            filter: 'none',
          },
          '55%': {
            '-webkit-filter': 'brightness(0) invert(1)',
            ' filter': 'brightness(0) invert(1)',
          },
        },
      },
      animation: {
        moveBackground: 'moveBackground 20s ease-in-out infinite',
        changeColor: 'ChangeColor 10s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}
