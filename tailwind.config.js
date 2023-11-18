const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "main-blue": "var(--main-blue)",
      "secondary-blue": "var(--secondary-blue)",
      "tertiary-blue": "var(--tertiary-blue)",
    },
    extend: {
      fontFamily: {
        fira: "var(--fira)",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
});
