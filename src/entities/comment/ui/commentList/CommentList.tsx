import { type FC } from "react";
import { useTranslation } from "react-i18next";
import { type CommentTypes } from "../../model/types/comment";
import { CommentItem } from "../commentItem/CommentItem";

import s from "./CommentList.module.scss";

interface CommentListProps {
  comments: CommentTypes[];
  isLoading: boolean;
  error: string | undefined;
}

export const CommentList: FC<CommentListProps> = ({ comments, isLoading, error }) => {
  const { t } = useTranslation("articles");

  return (
    <div className={s.list}>
      {comments.length && !error ? (
        comments.map((comment, i) => (
          <CommentItem key={comment.id || i} comment={comment} isLoading={isLoading} />
        ))
      ) : (
        <span>{t("no_comment")}</span>
      )}
    </div>
  );
};
