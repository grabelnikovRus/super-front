import { ArticleList } from "@entities/article";
import { useReducerManager } from "@shared/hooks/useReducerManager";
import { type FC } from "react";
import { 
  articlePageReducer, 
  getArticlePage,
  articlePageActions
} from "../model/slice/articlePageSlice";
import { useSelector } from "react-redux";
import { useInitEffect } from "@shared/hooks/useInitEffect";
import { fetchArticlePage } from "../model/services/fetchArticlePage";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import ListIcon from "@shared/assest/icon/list.svg"
import TileIcon from "@shared/assest/icon/tile.svg"
import { 
  getArticlePageError, 
  getArticlePageIsLoading, 
  getArticlePageView 
} from "../model/selectors";
import { type ViewType, ViewSwitcher } from "@feature/viewSwitcher";

import s from "./ArticlePage.module.scss"

const reducer = { articlePage: articlePageReducer }

const views: ViewType[] = [
  {
    Icon: TileIcon,
    actionType: () => articlePageActions.setView("small"),
    name: "small"
  },
  {
    Icon: ListIcon,
    actionType: () => articlePageActions.setView("big"),
    name: "big"
  }
]

export const ArticlePage: FC = () => {
  const dispatch = useAppDispatch()

  useReducerManager(reducer)

  const articles = useSelector(getArticlePage.selectAll)
  const error = useSelector(getArticlePageError)
  const isLoading = useSelector(getArticlePageIsLoading)
  const view = useSelector(getArticlePageView)

  useInitEffect(async() => {
    dispatch(articlePageActions.init())
    await dispatch(fetchArticlePage())
  })
  console.log(error)
  return (
    <div className={s.page}>
      <ViewSwitcher arrayRender={views} className={s.page_switcher} currentActive={view} />
      <ArticleList articles={articles} articleView={view} isLoading={isLoading} />
    </div>);
};
