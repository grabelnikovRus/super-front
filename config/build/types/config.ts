type BuildMode = "development" | "production"

export interface BuildPaths {
    src: string
    html: string
    entry: string
    output: string
}

export interface BuildEnv {
    mode: BuildMode
    port: number
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    port: number
}
