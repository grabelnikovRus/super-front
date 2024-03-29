import path from "path";
import { type Configuration } from "webpack";
import { buildWebpackCongif } from "./config/build/buildWebpackConfig";
import { type BuildEnv } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const port = env.port || 3000;
  const mode = env.mode || "development";
  const isDev = mode === "development";
  const apiUrl = env.apiUrl || "http://localhost:8000/";

  const config: Configuration = buildWebpackCongif({
    mode,
    port,
    isDev,
    apiUrl,
    project: "frontend",
    paths: {
      src: path.resolve(__dirname, "./src"),
      entry: path.resolve(__dirname, "./src/index.tsx"),
      output: path.resolve(__dirname, "./build"), // куда будет помещена сборка
      html: path.resolve(__dirname, "./public/html.html"),
      locales: path.resolve(__dirname, "./public/locales"), // откуда `copy-webpack-plugin` скопирует locales
      buildLocales: path.resolve(__dirname, "./build/locales"), // куда `copy-webpack-plugin` скопирует locales
    },
  });

  return config;
};
