import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types";

export function buildLoaders(
  options: BuildOptions
): webpack.ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        auto: (pathname: string) => pathname.includes(".module."),
        localIdentName: "[local]--[hash:base64:4]",
      },
    },
  };

  const scssLoader = {
    test: /\.s?css$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // "style-loader",
      cssLoaderWithModules,
      "sass-loader",
    ],
  };

  return [tsLoader, scssLoader];
}
