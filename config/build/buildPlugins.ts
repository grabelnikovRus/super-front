import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import { DefinePlugin, ProgressPlugin, type WebpackPluginInstance } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { type BuildOptions, type BuildPaths } from "./types/config";

export function buildPlugins(
  paths: BuildPaths,
  isDev: BuildOptions["isDev"],
  apiUrl: BuildOptions["apiUrl"],
  project: BuildOptions["project"]
): WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({ template: paths.html }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "[id].css",
    }), // извлекает CSS в отдельные файлы.Он создает CSS-файл для каждого JS-файла,который содержит CSS.
    // Он поддерживает загрузку CSS и SourceMaps по требованию.
    // MiniCssExtractPlugin также содержит статический метод loader
    new ProgressPlugin(),
    new DefinePlugin({
      _IS_DEV_: isDev,
      _API_: JSON.stringify(apiUrl),
      _PROJECT_: JSON.stringify(project),
    }),
    new CopyPlugin({
      patterns: [
        { from: paths.locales, to: paths.buildLocales },
      ],
    }),
    new BundleAnalyzerPlugin(),
  ];

  if (isDev) plugins.push(new ReactRefreshWebpackPlugin());

  return plugins;
}
