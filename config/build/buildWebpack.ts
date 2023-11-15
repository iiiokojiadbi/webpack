import path from "path";
import webpack from "webpack";

import { buildLoaders } from "./buildLoaders";
import { buildDevServer } from "./buildDevServer";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const isDev = options.mode === "development";

  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      path: options.paths.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(options),
    devServer: buildDevServer(options),
    devtool: isDev && "inline-source-map",
  };
}
