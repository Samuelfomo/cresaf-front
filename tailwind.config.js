/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './public/**/*.html',
    './public/**/*.vue',
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'patrick-hand': ['Patrick Hand', 'cursive'],
        accent: ['Merriweather', 'serif'],
        primary: [
        'Montserrat', '-apple-system', 'BlinkMacSystemFont',
          'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif',
          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'
        ]
      },
      backgroundImage: {
        'login': "url('@/assets/images/background.jpg')",
      },
    },
  },
  plugins: [],
}
