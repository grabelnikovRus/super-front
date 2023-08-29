import { type ArticleType, type ArticleViewType } from "@entities/article";
import { type EntityState } from "@reduxjs/toolkit";

export interface ArticlePageSchema extends EntityState<ArticleType> {
    isLoading: boolean
    error?: string
    view: ArticleViewType
}