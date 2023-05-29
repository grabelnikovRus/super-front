import { RuleSetRule } from "webpack"
import MiniCssExtractPlugin  from "mini-css-extract-plugin"
import { BuildOptions } from "./types/config"

export function buildLoaders(mode: BuildOptions["mode"]): RuleSetRule[] {
  const isProd = mode ==="production"
  const tsLoader = { // лоадер применяется только к файлам с .tsx
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isProd ? MiniCssExtractPlugin.loader : "style-loader", //MiniCssExtractPlugin - создает отдельные файлы сss
      {
        loader: "css-loader", // "css-loader" - Переводит CSS в CommonJS
        options: {
          modules: {
            auto: /\.module.scss/,
            localIdentName: isProd ? "[hash:base64]" : "[path][name]__[local]--[hash:base64:5]"
          }, // включаем модули css
          
        },
      }, 
      "sass-loader", // Компилирует Sass в CSS
    ],
  }

  // важен порядок лоадеров
  return [
    tsLoader,
    cssLoader
  ]
}