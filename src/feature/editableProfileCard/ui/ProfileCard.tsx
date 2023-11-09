import { type FC } from "react";
import { useTranslation } from "react-i18next";
import { Text, Avatar, Input, Loader, Select } from "@shared/ui";
import { type ProfileScheme } from "../model/types/types";

import s from "./ProfileCard.module.scss";
import { classNames } from "@shared/helpers/lib";
import { Country, Currency } from "@shared/constants/common";

interface ProfileCardProps extends ProfileScheme {
  onChangeName?: (val: string) => void;
  onChangeSurname?: (val: string) => void;
  onChangeCity?: (val: string) => void;
  onChangeAge?: (val: string) => void;
  onChangeUsername?: (val: string) => void;
  onChangeAvatar?: (val: string) => void;
  onChangeCurrency?: (val: string) => void;
  onChangeCountry?: (val: string) => void;
}

export const ProfileCard: FC<ProfileCardProps> = ({
  form,
  error,
  isLoading,
  readonly,
  onChangeName,
  onChangeSurname,
  onChangeAge,
  onChangeCity,
  onChangeAvatar,
  onChangeUsername,
  onChangeCurrency,
  onChangeCountry,
}) => {
  const { t } = useTranslation("profile");

  if (isLoading) {
    return (
      <div className={s.card_loading}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={s.card}>
        <Text
          title={t("has_error")}
          text={t("reload_age")}
          align="center"
          theme="error"
        />
      </div>
    );
  }

  return (
    <div
      className={classNames(s.card, {
        [s.card__editing]: !readonly,
      })}
    >
      <Avatar src={form?.avatar} />
      <Input
        value={form?.surname}
        label={t("surname") || ""}
        placeholder={t("enter_surname") || ""}
        readOnly={readonly}
        onChange={onChangeSurname}
      />
      <Input
        value={form?.name}
        label={t("name") || ""}
        placeholder={t("enter_name") || ""}
        readOnly={readonly}
        onChange={onChangeName}
      />
      <Input
        value={form?.age}
        label={t("age") || ""}
        placeholder={t("your_age") || ""}
        readOnly={readonly}
        onChange={onChangeAge}
      />
      <Input
        value={form?.city}
        label={t("city") || ""}
        placeholder={t("your_city") || ""}
        readOnly={readonly}
        onChange={onChangeCity}
      />
      <Select
        label={t("currency") || ""}
        defaultValue={Currency[form?.currency as Currency]}
        onChange={onChangeCurrency}
        readonly={readonly}
        options={Object.entries(Currency).map(([key, val]) => ({
          value: key,
          content: val,
        }))}
      />
      <Select
        label={t("country") || ""}
        defaultValue={form?.country}
        onChange={onChangeCountry}
        readonly={readonly}
        options={Object.entries(Country).map(([key, val]) => ({
          value: key,
          content: val,
        }))}
      />
      <Input
        value={form?.username}
        label={t("username") || ""}
        placeholder={t("your_username") || ""}
        readOnly={readonly}
        onChange={onChangeUsername}
      />
      <Input
        value={form?.avatar}
        label={t("avatar") || ""}
        placeholder={t("your_avatar") || ""}
        readOnly={readonly}
        onChange={onChangeAvatar}
      />
    </div>
  );
};
