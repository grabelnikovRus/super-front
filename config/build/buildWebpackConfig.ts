import path from "path";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";

import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildDevSrver } from "./buildDevServer";

export function buildWebpackCongif({ mode, paths, port }: BuildOptions): Configuration {
    const isDev = mode === "development"

    return {
        entry: paths.entry,
        output: {
          path: paths.output,
          filename: "bundle.[contenthash].js",
          clean: true,
        },
        mode,
        module: {
          rules: buildLoaders(mode),
        },
        resolve: buildResolvers(paths.src),
        plugins: buildPlugins(paths.html),
        devServer: isDev ? buildDevSrver(port) : undefined,
        devtool: isDev ? "inline-source-map" : false
    }
}