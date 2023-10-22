import { useCallback, type FC } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArticleDetails, ArticleList } from "@entities/article";
import { CommentList, type CommentTypes } from "@entities/comment";
import { useReducerManager } from "@shared/hooks/useReducerManager";
import {
  getArticleComments,
} from "../model/slice/articleCommentsSlice";
import { 
  getArticlePage
} from "../model/slice/articleRecommedationsSlice";
import { useSelector } from "react-redux";
import { 
  getArticleCommentsError, 
  getArticleCommentsIsLOading 
} from "../model/selectors/getArticle";
import { 
  getErrorArticleRecommend, 
  getIsLoadingArticleRecommend 
} from "../model/selectors/getArticleRecommend";
import { 
  fetchArticleRecommendationsList 
} from "../model/services/fetchArticleRecommendationsList";
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
  const recommendList = useSelector(getArticlePage.selectAll)
  const isLoadingRecommend = useSelector(getIsLoadingArticleRecommend);
  const errorRecommend = useSelector(getErrorArticleRecommend)

  const onSendComment = useCallback(async () => {
    if (!id) return;
    await dispatch(sendComment({ text, articleId: id }));
    dispatch(addCommentActions.setText(""));
    dispatch(fetchComments(id));
  }, [text, id]);

  useInitEffect(() => {
    if (id) dispatch(fetchComments(id));
    dispatch(fetchArticleRecommendationsList())
  }, [id]);

  return (
    <>
      <ArticleDetails id={id} />
      <h3 className={s.page_title}>{t("recommend")}</h3>
      {!errorRecommend ? 
        <ArticleList 
          isLoading={isLoadingRecommend} 
          articles={recommendList} 
          articleView="small"
          target="_self"
          className={s.page_recommend}
        /> 
        : <div>{errorRecommend}</div>
      }
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
