import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildCssLoader = (isProd: boolean) => ({
  test: /\.s[ac]ss$/i,
  use: [
    isProd ? MiniCssExtractPlugin.loader : "style-loader", // MiniCssExtractPlugin - создает отдельные файлы сss
    {
      loader: "css-loader", // "css-loader" - Переводит CSS в CommonJS
      options: {
        modules: {
          auto: /\.module.scss/,
          localIdentName: isProd
            ? "[hash:base64]"
            : "[path][name]__[local]--[hash:base64:5]",
        }, // включаем модули css
      },
    },
    "sass-loader", // Компилирует Sass в CSS
  ],
});
