module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV == "production",
    content: ["./src/**/*.vue", "./src/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: "#f75d3e",
        green: "#58bd44",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
