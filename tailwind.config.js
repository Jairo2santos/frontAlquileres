/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('./assets/css/images/mudados.png')",
      },
      colors: {
        'custom-bg-color': '#e0f7fa',
      },
    },
  },
  plugins: [],
}

