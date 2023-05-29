import { AboutAsync } from "@page/aboutPage";
import { MainAsync } from "@page/mainPage";
import { PathRouteProps } from "react-router-dom";

export enum RouterPath {
    MAIN = "/",
    ABOUT = "/about"
}

export const routerConfig: Record<RouterPath, PathRouteProps> = {
    [RouterPath.MAIN]: {
        element: <MainAsync />
    },
    [RouterPath.ABOUT]: {
        element: <AboutAsync />
    },
}