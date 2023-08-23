import { type FC } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "@entities/article";
import { CommentList, type CommentTypes } from "@entities/comment";
import { useReducerManager } from "@shared/hooks/useReducerManager";
import {
  articleCommentsReducer,
  getArticleComments
} from "../model/slice/articleCommentsSlice";
import { useSelector } from "react-redux";
import { getArticleCommentsError, getArticleCommentsIsLOading } from "../model/selectors";
import { fetchComments } from "../model/services/fetchComments";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";

import s from "./ArticleDetailsPage.module.scss"
import { useInitEffect } from "@shared/hooks/useInitEffect";

const reducer = { articleComments: articleCommentsReducer }

export const ArticleDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation("articles");
  const comments = useSelector(getArticleComments.selectAll)
  const error = useSelector(getArticleCommentsError)
  const isLoading = useSelector(getArticleCommentsIsLOading)
  const dispatch = useAppDispatch()

  useReducerManager(reducer)

  useInitEffect(() => {
    if (id) dispatch(fetchComments(id))
  }, [id])

  return (
      <div>
        <ArticleDetails id={id} />
        <h3 className={s.page_title_comments}>{t("comments")}</h3>
        <CommentList
          comments={
            isLoading ? new Array(2).fill({} as unknown as CommentTypes) : comments
          }
          isLoading={isLoading === true}
          error={error}
        />
      </div>
  );
}
