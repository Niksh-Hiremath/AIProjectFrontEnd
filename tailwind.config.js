/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#00555A",
        compliment: "#002938",
        secondary: "#03A1B5",
        tertiary: "#E3F8F8"
      }
    },
  },
  plugins: [],
}