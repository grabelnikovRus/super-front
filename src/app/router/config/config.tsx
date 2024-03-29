import { AboutAsync } from "@page/aboutPage";
import { MainAsync } from "@page/mainPage";
import { NotFoundPageAsync } from "@page/notFoundPage";
import { ProfilePageAsync } from "@page/profilePage";
import { type PathRouteProps } from "react-router-dom";
import { RequiredAuth } from "../ui/RequiredAuth";
import { ArticleDetailsPage } from "@page/articleDetailsPage";
import { ArticlePage } from "@page/articlePage";
import { ArticleDetailsEditPage } from "@page/articleDetailsEditPage";
import { ReactWindowPage } from "@page/reactWindowPage";
import { AdminPanelPage } from "@page/adminPanelPage";
import { ForbiddenPage } from "@page/forbiddenPage";
import { RouterPath } from "@shared/constants/routerPath";

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
    ),
  },
  [RouterPath.ARTICLES]: {
    element: (
      <RequiredAuth>
        <ArticlePage />
      </RequiredAuth>
    ),
  },
  [RouterPath.ARTICLES_CREATE]: {
    element: (
      <RequiredAuth>
        <ArticleDetailsEditPage />
      </RequiredAuth>
    ),
  },
  [RouterPath.ARTICLES_DETAILS]: {
    element: (
      <RequiredAuth>
        <ArticleDetailsPage />
      </RequiredAuth>
    ),
  },
  [RouterPath.ARTICLES_DETAILS_EDIT]: {
    element: (
      <RequiredAuth>
        <ArticleDetailsEditPage />
      </RequiredAuth>
    ),
  },
  [RouterPath.ADMIN_PANEL]: {
    element: (
      <RequiredAuth nameComp="AdminPanelPage">
        <AdminPanelPage />
      </RequiredAuth>
    ),
  },
  [RouterPath.REACT_WINDOW]: {
    element: (
      <RequiredAuth>
        <ReactWindowPage />
      </RequiredAuth>
    ),
  },
  [RouterPath.NOT_FOUND]: {
    element: <NotFoundPageAsync />,
  },
  [RouterPath.FORBIDDEN]: {
    element: <ForbiddenPage />,
  },
};
