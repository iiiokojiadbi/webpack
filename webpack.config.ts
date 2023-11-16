import { buildWebpack } from "./config/build/buildWebpack";
import { BuildOptions, BuildPaths } from "./config/build/types";
import path from "path";

interface EnvVariables {
  port?: BuildOptions["port"];
  mode?: BuildOptions["mode"];
  analyzer?: BuildOptions["analyzer"];
  platform?: BuildOptions["platform"];
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    favicon: path.resolve(__dirname, "public", "favicon.ico"),
    locales: path.resolve(__dirname, "public", "locales"),
    localesOutput: path.resolve(__dirname, "build", "locales"),
  };

  return buildWebpack({
    port: env?.port ?? 3000,
    mode: env?.mode ?? "development",
    analyzer: env?.analyzer ?? false,
    platform: env?.platform ?? "desktop",
    paths,
  });
};
