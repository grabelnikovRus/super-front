import { type FC } from "react"
import { classNames } from "@shared/helpers/lib"

import s from "./Article.module.scss"

type theme = "default" | "error"

type align = "center" | "left" | "rigth"

interface ArticleProps {
  title?: string | null
  text?: string | null
  theme?: theme
  align?: align
}

export const Article: FC<ArticleProps> = ({
  title,
  text,
  theme = "default",
  align = "left"
}) => {
  if (!text && !title) return null;

  return (
    <article className={classNames(s.article, s[align], {
      [s.article__error]: theme === "error",
    })}>
      {title && <h6 className={s.article_title}>{title}</h6>}
      {text && <p className={s.article_text}>{text}</p>}
    </article>
  )
}
