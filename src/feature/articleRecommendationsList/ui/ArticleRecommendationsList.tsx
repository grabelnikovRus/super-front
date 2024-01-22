import { useTranslation } from "react-i18next";
import { ArticleList } from "@entities/article";
import { 
  useGetArticleRecommendationsListQuery
} from "../api/artcileRecommendationsListApi"

import s from "./ArticleRecommendationsList.module.scss"

export const ArticleRecommendationsList = () => {
    const { t } = useTranslation("articles");
    const { data, isLoading } = useGetArticleRecommendationsListQuery(3);

    if (isLoading) return null;

    return (
      <div className={s.root}>
        <h3 className={s.root_title}>{t("recommend")}</h3>
        {data && (
          <ArticleList 
            isLoading={false} 
            articles={data} 
            articleView="small"
            target="_self"
          />
        )} 
      </div>
    );
  };
