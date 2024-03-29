import { lazy } from "react";

export const ArticlePageAsync = lazy(
  async () =>
    await import("./ArticlePage").then((comp) => ({ default: comp.ArticlePage }))
);
