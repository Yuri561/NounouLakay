/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#20243F',
        violet: '#5145A1',
        lilac: '#EEEAFB',
        coral: '#E98E79',
        peach: '#FFF0E9',
        cream: '#FAF8F5',
        muted: '#777B8E',
        line: '#EAE6E3',
        sage: '#DCEFE4',
      },
      boxShadow: {
        soft: '0 18px 65px rgba(38, 36, 65, 0.08)',
        card: '0 6px 22px rgba(38, 36, 65, 0.055)',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
