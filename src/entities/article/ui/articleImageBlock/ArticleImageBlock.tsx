import { type FC } from "react";
import { type ArticleImageBlockType } from "../../model/types/article";
import { Article } from "@shared/ui";

import s from "./ArticleImageBlock.module.scss";

type ArticleImageBlockProps = Omit<ArticleImageBlockType, "type" | "id">

export const ArticleImageBlock: FC<ArticleImageBlockProps> = ({ title, src }) => (
  <div className={s.block}>
    <img src={src} loading="lazy" alt={title} className={s.img}/>
    <Article text={title} align="center"/>
  </div>
);
