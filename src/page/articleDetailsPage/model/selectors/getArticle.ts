import { type StateType } from "@app/providers/storeProvider";

export const getArticleCommentsError = (state: StateType) => 
  state.articleDetailsPage?.articleComments?.error;
export const getArticleCommentsIsLOading = (state: StateType) =>
  state.articleDetailsPage?.articleComments?.isLoading;
