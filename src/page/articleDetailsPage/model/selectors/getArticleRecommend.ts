import { type StateType } from "@app/providers/storeProvider";

export const getIsLoadingArticleRecommend = 
    (state: StateType) => 
        state.articleDetailsPage?.articleRecommendationsList?.isLoading ?? true;
export const getErrorArticleRecommend = 
    (state: StateType) => 
        state.articleDetailsPage?.articleRecommendationsList?.error ?? "";