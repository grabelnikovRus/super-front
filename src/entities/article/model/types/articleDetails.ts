import { type ArticleType } from "./article";

export interface ArticleDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: ArticleType;
}
