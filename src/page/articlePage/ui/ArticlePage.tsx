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
  getArticlePageHasMore,
  getArticlePageIsLoading,
} from "../model/selectors";
import { LoadingOnScroll } from "@shared/ui";
import { fetchNextArticlePage } from "../model/services/fetchNextArticlePage";
import { initArticlePage } from "../model/services/initArticlesPage";
import { 
  Filter, 
  getFilterOrder,  
  getFilterView,
  getFilterSearch,
  getFilterSort,
  filterReducer,
} from "@feature/filters";
import { fetchArticlePage } from "../model/services/fetchArticlePage";

import s from "./ArticlePage.module.scss";

const reducer = { 
  articlePage: articlePageReducer,
  filter: filterReducer
};

export const ArticlePage: FC = () => {
  const dispatch = useAppDispatch();

  useReducerManager(reducer, false);

  const articles = useSelector(getArticlePage.selectAll);
  const error = useSelector(getArticlePageError);
  const isLoading = useSelector(getArticlePageIsLoading);
  const view = useSelector(getFilterView);
  const order = useSelector(getFilterOrder)
  const sort = useSelector(getFilterSort)
  const search = useSelector(getFilterSearch)
  const hasMore = useSelector(getArticlePageHasMore);

  const onLoanNextPart = useCallback(async () => {
    dispatch(fetchNextArticlePage())
  }, []);

  useInitEffect(async () => {
    dispatch(initArticlePage())
  }, []);

  useEffect(() => {

     dispatch(fetchArticlePage({ replace: true }))
  }, [order, sort, search])

  console.log(error);
  return (
    <div className={s.page}>
      <Filter />
      <ArticleList articles={articles} articleView={view} isLoading={isLoading} />
      {!isLoading && hasMore && <LoadingOnScroll cb={onLoanNextPart} />}
    </div>
  );
};
