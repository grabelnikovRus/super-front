import { type ArticleType } from "@entities/article";
import { type EntityState } from "@reduxjs/toolkit";

export interface ReactWindowPageSchema extends EntityState<ArticleType> {
  isLoading: boolean;
  error?: string;
  page: number;
  hasMore: boolean;
  scroll: number
}
