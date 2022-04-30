module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      code: ["Fira Code", "monospace"],
      display: ["Permanent Marker", "cursive"],
      body1: ["Schoolbell", "cursive"],
      body2: ["Short Stack", "cursive"],
    },
    extend: {
      colors: {
        bgschool: {
          950: "#414143",
        },
        text: {
          100: "#FEFEFE",
        },
      },
    },
  },
  plugins: [],
};
// 0F3A46
