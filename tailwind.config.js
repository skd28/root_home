/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/lib/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xs: "400px",
      
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [

    require("flowbite/plugin"),

    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          scrollbarWidth: 'none',
          '-ms-overflow-style': 'none',
          'scrollbar-color': 'transparent transparent', // for Firefox
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    
  ],
}
