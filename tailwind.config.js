module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        textarea: ["#2c3e50", "#3498db"],
        textareadark: ["#3D7EAA", "#FFE47A"],
      },
      linearBorderGradients: theme => ({
        colors: theme("colors"),
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-border-gradients")()],
};
