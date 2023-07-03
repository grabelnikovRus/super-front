import { AboutAsync } from "@page/aboutPage";
import { MainAsync } from "@page/mainPage";
import { NotFoundPageAsync } from "@page/notFoundPage";
import { ProfilePageAsync } from "@page/profilePage/ui/ProfilePageAsync";
import { type PathRouteProps } from "react-router-dom";

export enum RouterPath {
  MAIN = "/",
  ABOUT = "/about",
  PROFILE = "/profile",
  NOT_FOUND = "*",
}

export const routerConfig: Record<RouterPath, PathRouteProps> = {
  [RouterPath.MAIN]: {
    element: <MainAsync />,
  },
  [RouterPath.ABOUT]: {
    element: <AboutAsync />,
  },
  [RouterPath.PROFILE]: {
    element: <ProfilePageAsync />
  },
  [RouterPath.NOT_FOUND]: {
    element: <NotFoundPageAsync />
  }
};
