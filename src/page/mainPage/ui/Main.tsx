import { type FC } from "react";
import { useTranslation } from "react-i18next";
import { Counter } from "@entities/counter";

export const Main: FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("main")}</h1>
      <Counter />
    </div>
  );
};
