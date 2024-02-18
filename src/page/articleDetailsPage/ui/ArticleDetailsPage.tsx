import { type FC } from "react";
import { useParams } from "react-router-dom";
import { ArticleDetails } from "@entities/article";
import { useReducerManager } from "@shared/hooks/useReducerManager";
import { articleDetailsPageReducer } from "../model/slice";
import { type ReducerList } from "@app/providers/storeProvider";
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader";
import { ArticleRecommendationsList } from "@feature/articleRecommendationsList";
import { ArticleDetailsComments } from "./ArticleDetailsComments";
import { ArticleRating } from "@feature/articleRating";

import s from "./ArticleDetailsPage.module.scss"

const reducer: ReducerList = { 
  articleDetailsPage: articleDetailsPageReducer
};

export const ArticleDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  useReducerManager(reducer);

  if (!id) return null;

  return (
    <div className={s.page}>
      <ArticleDetailsPageHeader id={id}/>
      <ArticleDetails id={id} />
      <ArticleRating articleId={id} />
      <ArticleRecommendationsList />
      <ArticleDetailsComments id={id} />
    </div>
  );
};
