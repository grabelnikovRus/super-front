import { type FC } from "react"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { getCanEditArticle } from "../model/selectors/getCanEditArticle"
import { AppLink } from "@shared/ui"
import { useTranslation } from "react-i18next"

import s from "./ArticleDetailsPageHeader.module.scss"
import { RouterPath } from "@app/router/config/config"

interface ArticleDetailsPageHeaderProps {
  id?: string;
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = ({ id }) => {
    const { t } = useTranslation("articles");

    const canEdit = useSelector(getCanEditArticle);

    const a = useLocation()

    if (!id) return null;
    console.log(a)
    return (
        <header className={s.header}>
            {canEdit && 
              <AppLink to={RouterPath.ARTICLES_DETAILS_EDIT.replace(":id", `${id}`)}>
                {t("edit")}
              </AppLink>
            }
        </header>
    )
}