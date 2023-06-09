import { type FC } from "react"
import { useTranslation } from "react-i18next"
import { Article, Button } from "@shared/ui"

import s from "./ProfileHeader.module.scss"

interface ProfileHeaderProps {
  onClickBtn: () => void
  onSave: () => void
  readonly: boolean | undefined
  isLoading: boolean | undefined
}

export const ProfileHeader: FC<ProfileHeaderProps> = ({
  onClickBtn,
  onSave,
  readonly,
  isLoading
}) => {
  const { t } = useTranslation("profile")

  return (
    <header className={s.header}>
      <Article title={t("profile") || ""} />
      {!readonly && (
        <Button
          theme="m"
          onClick={onSave}
          className={s.card_btn}
          disabled={isLoading}
        >
          {t("save")}
        </Button>
      )}
      <Button theme="m" onClick={onClickBtn} className={s.card_btn} disabled={isLoading}>
        {t(readonly ? "edit" : "cancel_edit")}
      </Button>
    </header>
  )
}
