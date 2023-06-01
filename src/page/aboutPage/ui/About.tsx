import { type FC } from "react";
import { useTranslation } from "react-i18next";

export const About: FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("about_us")}</h1>
    </div>
  );
};
