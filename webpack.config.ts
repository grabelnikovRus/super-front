import path from "path"
import { Configuration } from "webpack"
import { buildWebpackCongif } from "./config/build/buildWebpackConfig";
import { BuildEnv } from "config/build/types/config";

export default (env: BuildEnv) => {
  const port = env.port || 3000
  const mode = env.mode || "development"

  const config: Configuration = buildWebpackCongif({
    mode,
    port,
    paths: {
      entry: path.resolve(__dirname, "./src/index.tsx"),
      output: path.resolve(__dirname, "./build"),
      html: path.resolve(__dirname, "./public/html.html"),
    }
  });

  return config;
};
