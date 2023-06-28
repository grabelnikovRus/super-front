import { type FC } from "react"

import s from "./Article.module.scss"
import { classNames } from "@shared/helpers"

type theme = "default" | "error"

interface ArticleProps {
  title?: string
  text?: string
  theme?: theme
}

export const Article: FC<ArticleProps> = ({ title, text, theme = "default" }) => {
  if (!text && !title) return null;

  return (
    <article className={classNames(s.article, {
      [s.article__error]: theme === "error",
    })}>
      {title && <h6 className={s.article_title}>{title}</h6>}
      {text && <p className={s.article_text}>{text}</p>}
    </article>
  )
}
