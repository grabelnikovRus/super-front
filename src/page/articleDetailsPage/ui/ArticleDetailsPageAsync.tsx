import { lazy } from "react";

export const ArticleDetailsPageAsync = lazy(
  async () =>
    await import("./ArticleDetailsPage").then((comp) => ({
      default: comp.ArticleDetailsPage,
    }))
);
