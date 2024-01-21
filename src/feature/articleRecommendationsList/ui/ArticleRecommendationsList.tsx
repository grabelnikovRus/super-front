import { useTranslation } from "react-i18next";
import { ArticleList } from "@entities/article";
import { 
  useGetArticleRecommendationsListQuery
} from "../api/artcileRecommendationsListApi"

export const ArticleRecommendationsList = () => {
    const { t } = useTranslation("profile");
    const { data, isLoading } = useGetArticleRecommendationsListQuery(3);

    if (isLoading) return null;

    return (
      <>
        <h3>{t("recommend")}</h3>
        {data && (
          <ArticleList 
            isLoading={false} 
            articles={data} 
            articleView="small"
            target="_self"
          />
        )} 
      </>
    );
  };
