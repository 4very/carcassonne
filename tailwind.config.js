module.exports = {
  content: ['./index.html', './src/**/*.vue', './src/**/*.ts'],
  theme: {
    extend: {
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
