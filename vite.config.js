import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, "./", "VITE")

  return {
    plugins: [
      react(),
      svgr({ 
        svgrOptions: { exportType: "default" },
        include: "**/*.svg", 
      }),
      viteTsConfigPaths({
        root: "./",
      }),
    ],
    resolve: {
      alias: [
        { find: "@app", replacement: path.resolve(__dirname, env.VITE_SRC, "app") },
        { find: "@page", replacement: path.resolve(__dirname, env.VITE_SRC, "page") },
        { 
          find: "@widgets", 
          replacement: path.resolve(__dirname, env.VITE_SRC, "widgets")
        },
        { find: "@shared", replacement: path.resolve(__dirname, env.VITE_SRC, "shared") },
        { 
          find: "@entities", 
          replacement: path.resolve(__dirname, env.VITE_SRC, "entities") 
        },
        { 
          find: "@feature", 
          replacement: path.resolve(__dirname, env.VITE_SRC, "feature") 
        },
      ]
    },
        define: {
            _IS_DEV_: JSON.stringify(true),
            _API_: JSON.stringify("http://localhost:8000/"),
            _PROJECT_: JSON.stringify("frontend"),
        }
    }
});
