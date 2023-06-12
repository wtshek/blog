/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",
    "./src/app/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F9F8F2",
        secondary: "#F6CC61",
        grey: "#D9D9D9",
      },
      fontSize: {
        h1: [
          "2.07rem",
          {
            fontWeight: 800,
            letterSpacing: "0",
            lineHeight: "125%",
          },
        ],
        "h1-small": [
          "1.73rem",
          {
            fontWeight: 800,
            letterSpacing: "0",
            lineHeight: "125%",
          },
        ],
        h2: [
          "1.73rem",
          {
            fontWeight: 800,
            letterSpacing: "0",
            lineHeight: "125%",
          },
        ],
        "h2-small": [
          "1.44rem",
          {
            fontWeight: 800,
            letterSpacing: "0",
            lineHeight: "125%",
          },
        ],
        h3: [
          "1.44rem",
          {
            fontWeight: 800,
            letterSpacing: "0",
            lineHeight: "125%",
          },
        ],
        "h3-small": [
          "1.19rem",
          {
            fontWeight: 800,
            letterSpacing: "0",
            lineHeight: "125%",
          },
        ],
        "p-large": [
          "1.2rem",
          {
            fontWeight: 400,
            lineHeight: "1.5rem",
          },
        ],
        p: [
          "1rem",
          {
            fontWeight: 400,
            lineHeight: "1.5rem",
          },
        ],
        "p-small": [
          "0.83rem",
          {
            fontWeight: 400,
            lineHeight: "1rem",
          },
        ],
        caption: [
          "0.83rem",
          {
            fontWeight: 400,
            lineHeight: "1rem",
          },
        ],
        "caption-small": [
          "0.69rem",
          {
            fontWeight: 400,
            lineHeight: "1rem",
          },
        ],
      },
    },
  },
  plugins: [],
};
