/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#41a377',
        secondary: '#39867c',
        background: '#193d38',
        darkBackground: '#1f2128',
        accent: '#c1d4cd',
      },
    },
    fontFamily: {
      code: ['"M PLUS Code Latin", monospace'],
    },
  },
  plugins: [],
}
