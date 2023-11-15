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

  const scssLoader = {
    test: /\.s?css$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (pathname: string) => pathname.includes(".module."),
            localIdentName: "[local]--[hash:base64:4]",
          },
        },
      },
      "sass-loader",
    ],
  };

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const svgLoader = {
    test: /\.svg$/i,
    oneOf: [
      {
        type: "asset/resource",
        resourceQuery: /url/, // *.svg?url
      },
      {
        issuer: /\.tsx?$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
              // заливает все в черный
              // svgoConfig: {
              //   plugins: [
              //     {
              //       name: "convertColors",
              //       params: {
              //         currentColor: true,
              //       },
              //     },
              //   ],
              // },
            },
          },
        ],
      },
    ],
  };

  return [tsLoader, scssLoader, svgLoader, assetLoader];
}
