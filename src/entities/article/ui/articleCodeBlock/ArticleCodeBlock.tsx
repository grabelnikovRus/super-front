import { type FC } from "react";
import { Code } from "@shared/ui";
import { type ArticleCodeBlockType } from "../../model/types/article";

type ArticleCodeBlockProps = Omit<ArticleCodeBlockType, "type" | "id">;

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = ({ code }) => {
  return (
    <div>
      <Code text={code} />
    </div>
  );
};
