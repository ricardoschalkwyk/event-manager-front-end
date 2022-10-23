/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        google: "#DB4437",
        facebook: "#4267B2",
      },
    },
  },
  plugins: ["@tailwindcss/forms"],
};
