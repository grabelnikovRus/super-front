import { type ArticleDetailsCommentsSchema } from "./ArticleDetailsComments";
import { type ArticleRecommendationsListSchema } from "./ArticleRecommendationsList";

export interface ArticleDetailsPageScheme {
  articleComments: ArticleDetailsCommentsSchema;
  articleRecommendationsList: ArticleRecommendationsListSchema;
}