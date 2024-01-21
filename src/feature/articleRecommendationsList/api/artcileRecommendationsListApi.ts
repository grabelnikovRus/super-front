import { type ArticleType } from "@entities/article";
import { rtkApi } from "@shared/api/rtkApi";

const articleRecommendationsListApi = rtkApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getArticleRecommendationsList: query<ArticleType[], number>({
      query: (limit = 4) => ({
        url: "/articles",
        params: {
          _expand: "user",
          _limit: limit
        }
      })
    })
  }),
  overrideExisting: false,
})

export const { useGetArticleRecommendationsListQuery }  = articleRecommendationsListApi;
