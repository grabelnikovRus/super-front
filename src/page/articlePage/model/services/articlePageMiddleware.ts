import { createListenerMiddleware } from "@reduxjs/toolkit";
import { articlePageActions } from "../slice/articlePageSlice";
import { KEY_STORAGE_VIEW } from "@shared/constants/common";
import { type ArticleViewType } from "@entities/article";

export const articlePageMiddleware = createListenerMiddleware();
export const startArticlePageMiddleware = articlePageMiddleware.startListening;
startArticlePageMiddleware({
  actionCreator: articlePageActions.setView,
  effect: (action) => {
    localStorage.setItem(KEY_STORAGE_VIEW, JSON.stringify(action.payload));
  },
});

startArticlePageMiddleware({
    actionCreator: articlePageActions.init,
    effect: (_, { dispatch }) => {
      const view = localStorage.getItem(KEY_STORAGE_VIEW);
      console.log(view)
      if (!view) return
      dispatch(articlePageActions.setView(JSON.parse(view) as ArticleViewType))
    },
});