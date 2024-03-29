import { type HTMLAttributeAnchorTarget, type FC } from "react";
import { classNames } from "@shared/helpers/lib";
import { type ArticleViewType, type ArticleType } from "../../model/types/article";
import { ArticleListItem } from "../articleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../articleListItem/ArticleListItemSkeleton";

import s from "./ArticleList.module.scss";

interface ArticleListProps {
  articles: ArticleType[];
  isLoading: boolean;
  articleView: ArticleViewType;
  className?: string
  target?: HTMLAttributeAnchorTarget
}

export const ArticleList: FC<ArticleListProps> = ({
  articles,
  articleView,
  isLoading,
  className,
  target
}) => {
  if (articles.length === 0 && !isLoading) return null;

  return (
    <div
      className={classNames(s.list, className, {
        [s.list__big]: articleView === "big",
      })}
    >
      {articles.length > 0 &&
        articles.map((item) => (
          <ArticleListItem 
            key={item.id} 
            article={item} 
            articleView={articleView} 
            target={target}
          />
        ))}
      {isLoading && target !== "_self" &&
        new Array(articleView === "big" ? 2 : 12)
          .fill(null)
          .map((_, i) => <ArticleListItemSkeleton articleView={articleView} key={i} />)}
    </div>
  );
};
