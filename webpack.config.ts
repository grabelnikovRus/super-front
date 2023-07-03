import path from "path";
import { type Configuration } from "webpack";
import { buildWebpackCongif } from "./config/build/buildWebpackConfig";
import { type BuildEnv } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const port = env.port || 3000;
  const mode = env.mode || "development";
  const isDev = mode === "development";
  const apiUrl = env.mode || "http://localhost:8000/";

  const config: Configuration = buildWebpackCongif({
    mode,
    port,
    isDev,
    apiUrl,
    paths: {
      src: path.resolve(__dirname, "./src"),
      entry: path.resolve(__dirname, "./src/index.tsx"),
      output: path.resolve(__dirname, "./build"),
      html: path.resolve(__dirname, "./public/html.html"),
    },
  });

  return config;
};
