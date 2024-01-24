import { useTranslation } from "react-i18next"
import s from "./ArticleDetailsComments.module.scss"
import { 
    AddCommentForm, 
    addCommentActions, 
    getAddCommentError, 
    getAddCommentText, 
    sendComment 
} from "@feature/addComment"
import { CommentList, type CommentTypes } from "@entities/comment"
import { useAppDispatch } from "@shared/hooks/useAppDispatch"
import { useSelector } from "react-redux"
import { useCallback } from "react"
import { fetchComments } from "../model/services/fetchComments"
import { useInitEffect } from "@shared/hooks/useInitEffect"
import { getArticleComments } from "../model/slice/articleCommentsSlice"
import { 
    getArticleCommentsError, 
    getArticleCommentsIsLOading 
} from "../model/selectors/getArticle"

interface ArticleDetailsCommentsProps {
    id?: string
}

export const ArticleDetailsComments = ({ id }: ArticleDetailsCommentsProps) => {
  const { t } = useTranslation("articles");
  const dispatch = useAppDispatch();

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
      <h3 className={s.page_title}>{t("comments")}</h3>
      <AddCommentForm text={text} error={errorComment} onSend={onSendComment} />
      <CommentList
        comments={isLoading ? new Array(2).fill({} as unknown as CommentTypes) : comments}
        isLoading={isLoading === true}
        error={error}
      />
    </>
  );
}