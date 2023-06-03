import { AboutAsync } from "@page/aboutPage";
import { MainAsync } from "@page/mainPage";
import { NotFoundPageAsync } from "@page/notFoundPage";
import { type PathRouteProps } from "react-router-dom";

export enum RouterPath {
  MAIN = "/",
  ABOUT = "/about",
  NOT_FOUND = "*",
}

export const routerConfig: Record<RouterPath, PathRouteProps> = {
  [RouterPath.MAIN]: {
    element: <MainAsync />,
  },
  [RouterPath.ABOUT]: {
    element: <AboutAsync />,
  },
  [RouterPath.NOT_FOUND]: {
    element: <NotFoundPageAsync />
  }
};
