import { type StateType } from "@app/providers/storeProvider";

export const getArticlePageIsLoading = (state: StateType) => state.articlePage?.isLoading ?? true
export const getArticlePageError = (state: StateType) => state.articlePage?.error
export const getArticlePageView = (state: StateType) => state.articlePage?.view ?? "small"