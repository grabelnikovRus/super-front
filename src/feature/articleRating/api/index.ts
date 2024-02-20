import { rtkApi } from "@shared/api/rtkApi";
import { type RatingCardType } from "@entities/ratingCard";

export interface ArticleRatingArg {
  userId: string, 
  articleId: string
}

export interface MutationArticleRatingArg extends ArticleRatingArg {
  feedback?: string
  rate?: number
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getArticleRating: query<RatingCardType[], ArticleRatingArg>({
      query: ({ userId, articleId}) => ({
        url: "/article-rating",
        params: {
          userId,
          articleId
        }
      })
    }),
    setArticleRating: mutation<void, MutationArticleRatingArg>({ 
      query: (arg) => ({
        url: "/article-rating",
        method: "POST",
        body: arg
      })
    })
  }),
})

export const { 
  useGetArticleRatingQuery, 
  useSetArticleRatingMutation 
}  = articleRatingApi;
