const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "main-blue": "var(--main-blue)",
      "secondary-blue": "var(--secondary-blue)",
      "tertiary-blue": "var(--tertiary-blue)",
      "main-text-blue": "var(--main-text-blue)",
      "main-green": "var(--main-green)",
    },
    extend: {
      fontFamily: {
        fira: "var(--fira)",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
});
