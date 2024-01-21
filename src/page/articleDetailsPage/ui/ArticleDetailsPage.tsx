import { useCallback, type FC } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "@entities/article";
import { CommentList, type CommentTypes } from "@entities/comment";
import { useReducerManager } from "@shared/hooks/useReducerManager";
import {
  getArticleComments,
} from "../model/slice/articleCommentsSlice";
import { useSelector } from "react-redux";
import { 
  getArticleCommentsError, 
  getArticleCommentsIsLOading 
} from "../model/selectors/getArticle";
import { fetchComments } from "../model/services/fetchComments";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { useInitEffect } from "@shared/hooks/useInitEffect";
import {
  AddCommentForm,
  getAddCommentText,
  getAddCommentError,
  sendComment,
  addCommentActions,
} from "@feature/addComment";

import s from "./ArticleDetailsPage.module.scss";
import { articleDetailsPageReducer } from "../model/slice";
import { type ReducerList } from "@app/providers/storeProvider";
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader";
import { ArticleRecommendationsList } from "@feature/articleRecommendationsList";

const reducer: ReducerList = { 
  articleDetailsPage: articleDetailsPageReducer
};

export const ArticleDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("articles");
  const dispatch = useAppDispatch();

  useReducerManager(reducer);

  const comments = useSelector(getArticleComments.selectAll);
  const error = useSelector(getArticleCommentsError);
  const isLoading = useSelector(getArticleCommentsIsLOading);
  const text = useSelector(getAddCommentText);
  const errorComment = useSelector(getAddCommentError);

  const onSendComment = useCallback(async () => {
    if (!id) return;
    await dispatch(sendComment({ text, articleId: id }));
    dispatch(addCommentActions.setText(""));
    dispatch(fetchComments(id));
  }, [text, id]);

  useInitEffect(() => {
    if (id) dispatch(fetchComments(id));
  }, [id]);

  return (
    <>
      <ArticleDetailsPageHeader id={id}/>
      <ArticleDetails id={id} />
      <ArticleRecommendationsList />
      <h3 className={s.page_title}>{t("comments")}</h3>
      <AddCommentForm text={text} error={errorComment} onSend={onSendComment} />
      <CommentList
        comments={isLoading ? new Array(2).fill({} as unknown as CommentTypes) : comments}
        isLoading={isLoading === true}
        error={error}
      />
    </>
  );
};
