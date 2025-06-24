const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function buildCssLoader(isDev) {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      // For development we use style-loader but for prod
      // we use mini-css-extract-plugin to extract css in the separate file
      // instead of keeping it int he main js file in build
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS with custom names for prod and dev envs + support for modules
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath) => Boolean(resPath.includes(".module.")),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  return cssLoader;
}

module.exports = buildCssLoader;
