import { ArticleList } from "@entities/article";
import { useReducerManager } from "@shared/hooks/useReducerManager";
import { type FC, useCallback } from "react";
import {
  articlePageReducer,
  getArticlePage,
  articlePageActions,
} from "../model/slice/articlePageSlice";
import { useSelector } from "react-redux";
import { useInitEffect } from "@shared/hooks/useInitEffect";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import ListIcon from "@shared/assest/icon/list.svg";
import TileIcon from "@shared/assest/icon/tile.svg";
import {
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView,
} from "../model/selectors";
import { type ViewType, ViewSwitcher } from "@feature/viewSwitcher";

import s from "./ArticlePage.module.scss";
import { LoadingOnScroll } from "@shared/ui";
import { fetchNextArticlePage } from "../model/services/fetchNextArticlePage";
import { initArticlePage } from "../model/services/initArticlesPage";

const reducer = { articlePage: articlePageReducer };

const views: ViewType[] = [
  {
    Icon: TileIcon,
    actionType: () => articlePageActions.setView("small"),
    name: "small",
  },
  {
    Icon: ListIcon,
    actionType: () => articlePageActions.setView("big"),
    name: "big",
  },
];

export const ArticlePage: FC = () => {
  const dispatch = useAppDispatch();

  useReducerManager(reducer, false);

  const articles = useSelector(getArticlePage.selectAll);
  const error = useSelector(getArticlePageError);
  const isLoading = useSelector(getArticlePageIsLoading);
  const view = useSelector(getArticlePageView);

  const onLoanNextPart = useCallback(async () => {
    dispatch(fetchNextArticlePage())
  }, []);

  useInitEffect(async () => {
    dispatch(initArticlePage())
  }, []);

  console.log(error);
  return (
    <div className={s.page}>
      <ViewSwitcher
        arrayRender={views}
        className={s.page_switcher}
        currentActive={view}
      />
      <ArticleList articles={articles} articleView={view} isLoading={isLoading} />
      {/* <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}
      /> */}
      {!isLoading && <LoadingOnScroll cb={onLoanNextPart} />}
    </div>
  );
};
