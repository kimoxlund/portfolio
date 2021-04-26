module.exports = {
  productionSourceMap: false,
  pwa: {
    name: "Kim Oxlund",
    themeColor: "#f06da9",
    msTileColor: "#f06da9",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
      exclude: [/^.*static\/inc\/.*$/],
    },
  },

  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
    },
  },
};
