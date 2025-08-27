module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // enable class-based dark mode
  theme: {
    extend: {},
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1220px",
    },
  },
};
