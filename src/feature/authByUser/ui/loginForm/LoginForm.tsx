import { type FC } from "react"
import { useTranslation } from "react-i18next"
import { Button, Input } from "@shared/ui"

import s from "./LoginForm.module.scss"

export const LoginForm: FC = () => {
  const { t } = useTranslation()

  return (
    <div className={s.auth}>
      <Input type="text" label={t("login")} placeholder={t("login")}/>
      <Input type="text" label={t("pass")} placeholder={t("pass")} autoFocus/>
      <Button theme="m" className={s.auth_btn}>{t("sign_in")}</Button>
    </div>
  )
}
