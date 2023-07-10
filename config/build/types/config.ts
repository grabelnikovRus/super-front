type BuildMode = "development" | "production";

export interface BuildPaths {
  src: string
  html: string
  entry: string
  output: string
}

export interface BuildEnv {
  mode: BuildMode
  port: number
  apiUrl: string
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  port: number
  isDev: boolean
  apiUrl: string
  project: "frontend" | "jest" | "storybook"
}
