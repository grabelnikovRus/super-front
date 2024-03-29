import { type CommentTypes } from "@entities/comment";
import { type EntityState } from "@reduxjs/toolkit";

export interface ArticleDetailsCommentsSchema extends EntityState<CommentTypes> {
  isLoading: boolean;
  error?: string;
}
