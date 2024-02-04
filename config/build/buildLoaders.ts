import { type RuleSetRule } from "webpack";
import { type BuildOptions } from "./types/config";
import { buildCssLoader } from "./buildCssLoader";
import { buildSvgLoader } from "./buildSvgLOader";
import { RemovePropsPlugin } from "../babel/babelRemovePropsPlugin";

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

  const babelLoader = (isTSX?: boolean) => ({
    test: isTSX ? /\.(tsx|jsx)?$/ : /\.(ts|js)?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "babel-loader",
        options: {
          presets: [
            ["@babel/preset-env", { targets: { node: "current" } }],
            ["@babel/preset-react", { runtime: "automatic" }],
            ["@babel/preset-typescript", { isTSX, allExtensions: isTSX }],
          ],
          plugins: [
            "@babel/plugin-transform-runtime",
            isTSX && [ RemovePropsPlugin, { props: ["data-testid"] }]
          ].filter(Boolean)
        },
      },
    ],
  });

  // const tsLoader = {
  //   // лоадер применяется только к файлам с .tsx
  //   test: /\.tsx?$/,
  //   exclude: /node_modules/,
  //   use: [
  //     {
  //       loader: "ts-loader",
  //       options: {
  //         getCustomTransformers: () => ({
  //           before: [mode === "development" && ReactRefreshTypeScript()].filter(Boolean),
  //         }),
  //         transpileOnly: mode === "development",
  //       },
  //     },
  //   ],
  // };

  const cssLoader = buildCssLoader(mode === "production");

  // важен порядок лоадеров
  return [svgLoader, fileLoader, babelLoader(), babelLoader(true), cssLoader];
}
