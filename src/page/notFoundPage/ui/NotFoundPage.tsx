import { type FC } from "react";

import { useTranslation } from "react-i18next";

import s from "./NotFoundPage.module.scss";

export const NotFoundPage: FC = () => {
  const { t } = useTranslation();

  return <div className={s.page}>{t("not_found_page")}</div>;
};
