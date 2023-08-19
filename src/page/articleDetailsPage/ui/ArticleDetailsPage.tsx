import { type FC } from "react";
import { ArticleDetails } from "@entities/article";
import { useParams } from "react-router-dom";

export const ArticleDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
      <div>
        <ArticleDetails id={id} />
      </div>
  );
}
