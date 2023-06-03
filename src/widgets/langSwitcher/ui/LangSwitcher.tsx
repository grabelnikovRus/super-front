import { type FC } from "react";

import { Button } from "@shared/ui";
import { useTranslation } from "react-i18next";

export const LangSwitcher: FC = () => {
  const { t, i18n } = useTranslation();

  const onToggleLang = async () =>
    await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");

  return (
    <Button onClick={onToggleLang} theme="xl">
      {t("language")}
    </Button>
  );
};
