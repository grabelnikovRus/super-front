import { type FC } from "react"
import { type CommentTypes } from "../../model/types/comment"
import { Avatar, Skeleton } from "@shared/ui"

import s from "./CommentItem.module.scss"
import { classNames } from "@shared/helpers/lib"

interface CommentItemProps {
  comment: CommentTypes
  isLoading: boolean
}

export const CommentItem: FC<CommentItemProps> = ({ comment, isLoading }) => {
  if (isLoading) {
    return (
        <div className={s.comment}>
            <div className={s.comment_head}>
                <Skeleton width="40px" height="40px" borderRadius="50%"/>
                <Skeleton className={classNames(s.comment_name, s.skeleton_name)} />
            </div>
            <Skeleton className={classNames(s.comment_text, s.skeleton_text)} />
        </div>
    )
  }

  const { text = "", user: { username, avatar } } = comment

  return (
    <div className={s.comment}>
        <div className={s.comment_head}>
            <Avatar theme="s" src={avatar} />
            <h6 className={s.comment_name}>{username}</h6>
        </div>
        <p className={s.comment_text}>{text}</p>
    </div>
  )
}
