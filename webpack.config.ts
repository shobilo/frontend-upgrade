import webpack from "webpack";

import path from "path";
import {
  BuildEnv,
  BuildMode,
  BuildPaths,
} from "./config/webpackBuild/types/config";
import { buildWebpackConfig } from "./config/webpackBuild/buildWebpackConfig";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const mode = env.mode || BuildMode.Development;
  const isDev = mode === BuildMode.Development;
  const port = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });
  return config;
};
