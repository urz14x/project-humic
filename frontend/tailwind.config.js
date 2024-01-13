export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sofia: ["Sofia Pro Light", "sans-serif"],
        tiempos_regular: ["TiemposHeadline-Regular"],
      },
      colors: {
        colors_primary: "#00B1B9",
        colors_primary_low: "#e5f7f8",
        colors_secondary: "#29295F",
        colors_smooth_white: "#f4f4f4",
        colors_smooth_black: "#252525",
      },
    },
  },
  plugins: [],
};
