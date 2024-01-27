import { type FC } from "react";
import { useTranslation } from "react-i18next";
import { Text, Button } from "@shared/ui";

import s from "./ProfileHeader.module.scss";

interface ProfileHeaderProps {
  onClickBtn: () => void;
  onSave: () => void;
  isEdit: boolean;
  readonly: boolean | undefined;
  isLoading: boolean | undefined;
}

export const ProfileHeader: FC<ProfileHeaderProps> = ({
  onClickBtn,
  onSave,
  readonly,
  isLoading,
  isEdit,
}) => {
  const { t } = useTranslation("profile");

  return (
    <header className={s.header}>
      <Text title={t("profile") || ""} />
      {!readonly && (
        <Button 
          theme="m" 
          onClick={onSave} 
          className={s.card_btn} 
          disabled={isLoading}
          data-testid="save-profile-btn"
        >
          {t("save")}
        </Button>
      )}
      {isEdit && (
        <Button
          theme="m"
          onClick={onClickBtn}
          className={s.card_btn}
          disabled={isLoading}
          data-testid="edit-profile-btn"
        >
          {t(readonly ? "edit" : "cancel_edit")}
        </Button>
      )}
    </header>
  );
};
