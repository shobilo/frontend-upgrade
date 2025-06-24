const path = require("path");
const buildSvgLoader = require("../webpackBuild/loaders/buildSvgLoader");
const buildCssLoader = require("../webpackBuild/loaders/buildCssLoader");

module.exports = {
  stories: [
    "../../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    const cssLoader = buildCssLoader(true);
    const svgLoader = buildSvgLoader();
    const srcPath = path.resolve(__dirname, "../../src");

    // eslint-disable-next-line no-param-reassign
    config.resolve.alias["@"] = srcPath;
    config.resolve.modules.push(srcPath);
    config.resolve.extensions.push(".ts", ".tsx", ".js", ".jsx");
    config.module.rules.push(cssLoader);
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
          options: {
            reportFiles: [
              "../**/src/**/*.{ts,tsx}",
            ],
          },
        },
      ],
    });
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule) => {
      if (/svg/.test(rule.test)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });
    config.module.rules.push(svgLoader);

    return config;
  },
};
