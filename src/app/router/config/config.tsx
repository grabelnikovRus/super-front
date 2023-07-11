import { AboutAsync } from "@page/aboutPage";
import { MainAsync } from "@page/mainPage";
import { NotFoundPageAsync } from "@page/notFoundPage";
import { ProfilePageAsync } from "@page/profilePage/ui/ProfilePageAsync";
import { type PathRouteProps } from "react-router-dom";
import { RequiredAuth } from "../ui/RequiredAuth";
import { ArticleDetailsPage } from "@page/articleDetailsPage";
import { ArticlePage } from "@page/articlePage";

export enum RouterPath {
  MAIN = "/",
  ABOUT = "/about",
  PROFILE = "/profile",
  ARTICLES = "/articles",
  ARTICLE_DETAILS = "/article-details",
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
    element: (
      <RequiredAuth>
        <ProfilePageAsync />
      </RequiredAuth>
    )
  },
  [RouterPath.ARTICLES]: {
    element: (
      <RequiredAuth>
        <ArticlePage />
      </RequiredAuth>
    ),
  },
  [RouterPath.ARTICLE_DETAILS]: {
    path: `${RouterPath.ARTICLE_DETAILS}:id`,
    element: (
      <RequiredAuth>
        <ArticleDetailsPage />
      </RequiredAuth>
    ),
  },
  [RouterPath.NOT_FOUND]: {
    element: <NotFoundPageAsync />
  }
};
