import { type FC } from "react";
import { classNames } from "@shared/helpers/lib";
import s from "./ArticleTextBlock.module.scss";
import { type ArticleTextBlockType } from "../../model/types/article";

type ArticleTextBlockProps = Omit<ArticleTextBlockType, "type" | "id">;

export const ArticleTextBlock: FC<ArticleTextBlockProps> = ({ paragraphs, title }) => {
  return (
    <div className={classNames(s.block)}>
      {title && <h6 className={s.block_title}>{title}</h6>}
      {paragraphs.map((text) => (
        <p key={text} className={s.block_text}>
          {text}
        </p>
      ))}
    </div>
  );
};
