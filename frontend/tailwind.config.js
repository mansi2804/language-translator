/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "light-mode": "url('https://wiremedia.net/wp-content/uploads/2024/07/Translations_jpeg-aspect-ratio-1170-572.jpg')",
        "dark-mode": "url('https://www.shutterstock.com/image-illustration/languages-world-word-cloud-on-260nw-1714717147.jpg')",
      },
    },
  },
  plugins: [],
}

