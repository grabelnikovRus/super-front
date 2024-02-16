import { type FC } from "react";
import { useTranslation } from "react-i18next";
import { Counter } from "@entities/counter";
import { RatingCard } from "@entities/ratingCard";

export const Main: FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("main")}</h1>
      <Counter />
      <RatingCard title="dsdsd" hasFeedback titleFeedback="dsfdsfsdfs" />
    </div>
  );
};
