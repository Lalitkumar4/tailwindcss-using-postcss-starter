module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-preset-env")({
      stage: 1,
    }),
    require("postcss-assets")({
      loadPaths: ["dist/img"],
    }),
    // for production
    // require("cssnano")({
    //   preset: "default",
    // }),
  ],
}
