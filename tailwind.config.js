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
      backgroundImage: {
        'gradient-vertical': `linear-gradient(180deg, #303F73 0%, #252D4A 100%)`,
        'gradient-horizontal': `linear-gradient(90deg, #303F73 0%, #252D4A 100%)`,
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
      },
      animation: {
        moveBackground: 'moveBackground 20s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
