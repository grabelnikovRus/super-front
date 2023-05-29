import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin  from "mini-css-extract-plugin"
import { ProgressPlugin, WebpackPluginInstance } from "webpack"
import { BuildPaths } from "./types/config"

export function buildPlugins(paths: BuildPaths["html"]): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({ template: paths }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash].css",
            chunkFilename: "[id].css",
        }),// извлекает CSS в отдельные файлы.Он создает CSS-файл для каждого JS-файла,который содержит CSS.Он поддерживает загрузку CSS и SourceMaps по требованию.
        // MiniCssExtractPlugin также содержит статический метод loader
        new ProgressPlugin()
    ]
}