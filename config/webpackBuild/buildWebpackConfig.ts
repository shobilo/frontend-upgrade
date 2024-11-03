import { Configuration } from "webpack";
import path from "path";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, paths } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      // new name for the each bundle thanks to the templates
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
};
