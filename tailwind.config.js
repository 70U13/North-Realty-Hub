/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./resources/**/*.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}