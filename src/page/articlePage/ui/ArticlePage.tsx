import { type FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@shared/helpers/lib"
import s from "./ArticlePage.module.scss";

interface ArticlePageProps {}

export const ArticlePage: FC<ArticlePageProps> = () => {
  const { t } = useTranslation()

  return (
      <div className={classNames(s.articlePage)}>

      </div>
  );
}
