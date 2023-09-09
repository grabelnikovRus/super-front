import { type StateType } from "@app/providers/storeProvider";

export const getArticlePageIsLoading = (state: StateType) =>
  state.articlePage?.isLoading ?? true;
export const getArticlePageError = (state: StateType) => state.articlePage?.error;
export const getArticleNumPage = (state: StateType) => state.articlePage?.page ?? 1;
export const getArticlePageHasMore = (state: StateType) => state.articlePage?.hasMore;
export const getArticlePageIsInit = (state: StateType) => state.articlePage?._isInit;
