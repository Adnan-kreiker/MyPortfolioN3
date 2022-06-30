/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [require('daisyui'), require('@tailwindcss/typography')
  ],
  daisyui: {
    themes: ['black', 'light']
  }
}
