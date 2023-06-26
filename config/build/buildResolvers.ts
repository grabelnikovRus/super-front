import { type ResolveOptions } from "webpack";
import path from "path";
import { type BuildPaths } from "./types/config";

export function buildResolvers(pathSrc: BuildPaths["src"]): ResolveOptions {
  console.log(path.resolve(__dirname, pathSrc, "/app"));
  return {
    extensions: [".tsx", ".ts", ".js"], // расширения, которые мы не указываем при импорте
    modules: [pathSrc, "node_modules"], // для настройки абсолютныйъ путей
    preferAbsolute: true, // приоритете абсолютным путям
    alias: {
      "@app": path.resolve(__dirname, pathSrc, "app"),
      "@page": path.resolve(__dirname, pathSrc, "page"),
      "@widgets": path.resolve(__dirname, pathSrc, "widgets"),
      "@shared": path.resolve(__dirname, pathSrc, "shared"),
      "@entities": path.resolve(__dirname, pathSrc, "entities"),
      "@feature": path.resolve(__dirname, pathSrc, "feature"),
    },
  };
}
