import { type FC } from "react";
import { useParams } from "react-router-dom";
import { ArticleDetails } from "@entities/article";
import { useReducerManager } from "@shared/hooks/useReducerManager";
import { articleDetailsPageReducer } from "../model/slice";
import { type ReducerList } from "@app/providers/storeProvider";
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader";
import { ArticleRecommendationsList } from "@feature/articleRecommendationsList";
import { ArticleDetailsComments } from "./ArticleDetailsComments";

const reducer: ReducerList = { 
  articleDetailsPage: articleDetailsPageReducer
};

export const ArticleDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  useReducerManager(reducer);

  return (
    <>
      <ArticleDetailsPageHeader id={id}/>
      <ArticleDetails id={id} />
      <ArticleRecommendationsList />
      <ArticleDetailsComments id={id} />
    </>
  );
};
