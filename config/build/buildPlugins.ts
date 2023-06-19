import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { DefinePlugin, ProgressPlugin, type WebpackPluginInstance } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"
import { type BuildOptions, type BuildPaths } from "./types/config";

export function buildPlugins(
  paths: BuildPaths["html"],
  isDev: BuildOptions["isDev"]
): WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({ template: paths }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "[id].css",
    }), // извлекает CSS в отдельные файлы.Он создает CSS-файл для каждого JS-файла,который содержит CSS.
    // Он поддерживает загрузку CSS и SourceMaps по требованию.
    // MiniCssExtractPlugin также содержит статический метод loader
    new ProgressPlugin(),
    new DefinePlugin({ _IS_DEV_: isDev }),
  ]

  if (isDev) plugins.push(new BundleAnalyzerPlugin())

  return plugins
}
