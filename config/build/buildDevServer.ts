import { Configuration as DevServerConfiguration } from "webpack-dev-server"
import { BuildOptions } from "./types/config"

export function buildDevSrver(port: BuildOptions["port"]): DevServerConfiguration {
    return {
        hot: true, // использует обновление страницы без перезашрузки
        port,
        open: true,
        historyApiFallback: true, // позволяет запускать не с главной страницы приложение
    }
}