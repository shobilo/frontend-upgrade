import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";
import buildCssLoader from "./loaders/buildCssLoader";
import buildSvgLoader from "./loaders/buildSvgLoader";

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const cssLoader = buildCssLoader(isDev);

  // without ts we should use babel-loader for the jsx
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const svgLoader = buildSvgLoader();

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          [
            "i18next-extract",
            {
              locales: ["en", "ru"],
              keyAsDefaultValue: true,
            },
          ],
        ],
      },
    },
  };

  // order is matter, babel-loader should be before ts-loader
  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
};
