import { type FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@shared/helpers/lib"
import s from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {}

export const ArticleDetailsPage: FC<ArticleDetailsPageProps> = () => {
  const { t } = useTranslation()

  return (
      <div className={classNames(s.articleDetailsPage)}>

      </div>
  );
}
