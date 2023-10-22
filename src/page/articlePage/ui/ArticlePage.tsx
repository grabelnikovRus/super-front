import { ArticleList } from "@entities/article";
import { useReducerManager } from "@shared/hooks/useReducerManager";
import { type FC, useEffect, useMemo } from "react";
import {
  articlePageReducer,
  getArticlePage,
} from "../model/slice/articlePageSlice";
import { useSelector } from "react-redux";
import { useInitEffect } from "@shared/hooks/useInitEffect";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { useDebounce } from "@shared/hooks/useDebounce"
import {
  getArticlePageError,
  getArticlePageHasMore,
  getArticlePageIsLoading,
} from "../model/selectors";
import { LoadingOnScroll } from "@shared/ui";
import { fetchNextArticlePage } from "../model/services/fetchNextArticlePage";
import {  initArticlePage } from "../model/services/initArticlesPage";
import { 
  Filter, 
  getFilterOrder,  
  getFilterView,
  getFilterSearch,
  getFilterSort,
  filterReducer,
  getType,
} from "@feature/filters";
import { 
  type FetchArticlePageProps, 
  fetchArticlePage 
} from "../model/services/fetchArticlePage";

import s from "./ArticlePage.module.scss";
import { addQueryParams } from "@shared/helpers/lib/addQueryParams/addQueryParams";
import { useSearchParams } from "react-router-dom";

const reducer = { 
  articlePage: articlePageReducer,
  filter: filterReducer
};

const getIsFetch = (kitString: string) => {
  let cache = kitString

  return function(params: string) {
    const isFetch = params !== cache

    if (isFetch) cache = params
    return isFetch
  }
}

export const ArticlePage: FC = () => {
  const dispatch = useAppDispatch();

  useReducerManager(reducer, false);

  const [ searchParams ] = useSearchParams()

  const articles = useSelector(getArticlePage.selectAll);
  const error = useSelector(getArticlePageError);
  const isLoading = useSelector(getArticlePageIsLoading);
  const view = useSelector(getFilterView);
  const order = useSelector(getFilterOrder)
  const sort = useSelector(getFilterSort)
  const search = useSelector(getFilterSearch)
  const type = useSelector(getType);
  const hasMore = useSelector(getArticlePageHasMore);

  const isFetch = useMemo(() => getIsFetch(order + sort + search), [])

  const fetchArticlePageDebounce = useDebounce<FetchArticlePageProps>(
    async () => await dispatch(fetchArticlePage({ replace: true })), 400
  )

  const fetchNextArticlePageDebounce = useDebounce(
    async () =>  await dispatch(fetchNextArticlePage()), 400
  )

  useInitEffect(async () => {
    dispatch(initArticlePage(searchParams))
  }, []);

  useEffect(() => {
    addQueryParams({ order, sort, search, type });
  
    if (!isFetch(order + sort + search + type)) return
  
    fetchArticlePageDebounce()
  }, [order, sort, search, type])
  
  console.log(error);
  return (
    <div className={s.page}>
      <Filter search={search} order={order} sort={sort} type={type}/>
      <ArticleList 
        articles={articles} 
        articleView={view}
        isLoading={isLoading} 
        target="_blank"
      />
      {!isLoading && hasMore && <LoadingOnScroll cb={fetchNextArticlePageDebounce} />}
    </div>
  );
};
