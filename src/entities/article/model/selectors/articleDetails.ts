import { type StateType } from "@app/providers/storeProvider";

export const getArticlesData = (state: StateType) => state.articles?.data;
export const getArticlesIsLoadind = (state: StateType) => state.articles?.isLoading;
export const getArticlesError = (state: StateType) => state.articles?.error;
