import { ArticleList } from "@entities/article";
import { type FC } from "react";


export const ArticlePage: FC = () => {
  return <div><ArticleList articles={[]} articleView="big" isLoading={false} /></div>;
};
