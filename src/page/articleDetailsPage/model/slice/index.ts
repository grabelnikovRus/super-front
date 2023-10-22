import { combineReducers } from "@reduxjs/toolkit";
import { type ArticleDetailsPageScheme } from "../types";
import { articleRecommendationsListReducer } from "./articleRecommedationsSlice";
import { articleCommentsReducer } from "./articleCommentsSlice";

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageScheme>({
    articleRecommendationsList: articleRecommendationsListReducer,
    articleComments: articleCommentsReducer
})