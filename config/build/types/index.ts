export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
}

export type BuildMode = "production" | "development";

export interface BuildOptions {
  mode: BuildMode;
  port: number;
  paths: BuildPaths;
  analyzer?: boolean;
}
