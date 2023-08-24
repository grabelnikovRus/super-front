import ReactRefreshTypeScript from "react-refresh-typescript";
import { type RuleSetRule } from "webpack";
import { type BuildOptions } from "./types/config";
import { buildCssLoader } from "./buildCssLoader";
import { buildSvgLoader } from "./buildSvgLOader";

export function buildLoaders(mode: BuildOptions["mode"]): RuleSetRule[] {
  const svgLoader = buildSvgLoader();

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const tsLoader = {
    // лоадер применяется только к файлам с .tsx
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "ts-loader",
        options: {
          getCustomTransformers: () => ({
            before: [mode === "development" && ReactRefreshTypeScript()].filter(Boolean),
          }),
          transpileOnly: mode === "development",
        },
      },
    ],
  };

  const cssLoader = buildCssLoader(mode === "production");

  // важен порядок лоадеров
  return [svgLoader, fileLoader, tsLoader, cssLoader];
}
