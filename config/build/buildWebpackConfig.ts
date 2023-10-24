import { type Configuration } from "webpack";
import { type BuildOptions } from "./types/config";

import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildDevSrver } from "./buildDevServer";

export function buildWebpackCongif({
  mode,
  paths,
  port,
  isDev,
  apiUrl,
  project,
}: BuildOptions): Configuration {
  return {
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: "bundle.[contenthash].js",
      clean: true,
      publicPath: "/",
    },
    mode,
    module: {
      rules: buildLoaders(mode),
    },
    resolve: buildResolvers(paths.src),
    plugins: buildPlugins(paths, isDev, apiUrl, project),
    devServer: isDev ? buildDevSrver(port) : undefined,
    devtool: isDev ? "inline-source-map" : false,
  };
}
