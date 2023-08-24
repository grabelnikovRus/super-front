import { type FC } from "react";
import { classNames } from "@shared/helpers/lib";

import s from "./Article.module.scss";

type theme = "default" | "error";

type align = "center" | "left" | "rigth";

interface ArticleProps {
  title?: string | null;
  text?: string | number | null;
  theme?: theme;
  align?: align;
  className?: {
    title?: string;
    text?: string;
  };
}

export const Article: FC<ArticleProps> = ({
  title,
  text,
  theme = "default",
  align = "left",
  className,
}) => {
  if (!text && !title) return null;

  return (
    <article
      className={classNames(s.article, s[align], {
        [s.article__error]: theme === "error",
      })}
    >
      {title && (
        <h6 className={classNames(s.article_title, className?.title)}>{title}</h6>
      )}
      {text && <p className={classNames(s.article_text, className?.text)}>{text}</p>}
    </article>
  );
};
