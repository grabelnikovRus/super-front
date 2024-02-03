import { type FC } from "react";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { useDebounce } from "@shared/hooks/useDebounce"
import { Filter } from "@feature/filters";
import { fetchNextArticlePage } from "../model/services/fetchNextArticlePage";
import { ArticleInfiniteList } from "./ArticleInfiniteList";

import s from "./ArticlePage.module.scss";

export const ArticlePage: FC = () => {
  const dispatch = useAppDispatch();

  const fetchArticlePageDebounce = useDebounce(
    async (isRemove: boolean) => await dispatch(fetchNextArticlePage(isRemove)), 400
  )

  return (
    <div className={s.page}>
      <Filter fetchInfo={fetchArticlePageDebounce}/>
      <ArticleInfiniteList fetchInfo={fetchArticlePageDebounce}/>
    </div>
  );
};
