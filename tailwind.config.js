/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "light-text": "#111517",
        "light-text-secondary": "#858585",
        "light-background": "#fafafa",
        "dark-background": "#202c37",
        "dark-background-secondary": "#2b3945",
      },
    },
  },
  plugins: [],
};
