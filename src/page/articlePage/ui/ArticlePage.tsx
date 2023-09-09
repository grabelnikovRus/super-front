import { ArticleList } from "@entities/article";
import { useReducerManager } from "@shared/hooks/useReducerManager";
import { type FC, useCallback, useEffect } from "react";
import {
  articlePageReducer,
  getArticlePage,
} from "../model/slice/articlePageSlice";
import { useSelector } from "react-redux";
import { useInitEffect } from "@shared/hooks/useInitEffect";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import {
  getArticlePageError,
  getArticlePageIsLoading,
} from "../model/selectors";
import { LoadingOnScroll } from "@shared/ui";
import { fetchNextArticlePage } from "../model/services/fetchNextArticlePage";
import { initArticlePage } from "../model/services/initArticlesPage";
import { Filter } from "@feature/filters";
import { getFilterView } from "@feature/filters/model/selectors";

import s from "./ArticlePage.module.scss";

const reducer = { articlePage: articlePageReducer };

export const ArticlePage: FC = () => {
  const dispatch = useAppDispatch();

  useReducerManager(reducer, false);

  const articles = useSelector(getArticlePage.selectAll);
  const error = useSelector(getArticlePageError);
  const isLoading = useSelector(getArticlePageIsLoading);
  const view = useSelector(getFilterView);

  const onLoanNextPart = useCallback(async () => {
    dispatch(fetchNextArticlePage())
  }, []);

  useInitEffect(async () => {
    dispatch(initArticlePage())
  }, []);

  useEffect(() => {

  }, [])

  console.log(error);
  return (
    <div className={s.page}>
      <Filter />
      <ArticleList articles={articles} articleView={view} isLoading={isLoading} />
      {!isLoading && <LoadingOnScroll cb={onLoanNextPart} />}
    </div>
  );
};
