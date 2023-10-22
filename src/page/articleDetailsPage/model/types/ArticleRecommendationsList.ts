import { type ArticleType } from "@entities/article";
import { type EntityState } from "@reduxjs/toolkit";

export interface ArticleRecommendationsListSchema extends EntityState<ArticleType> {
    isLoading: boolean
    error?: string
    data?: ArticleType;
}