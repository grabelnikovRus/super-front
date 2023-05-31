import { FC } from "react"

import s from "./LangSwitcher.module.scss"
import { Button } from "@shared/ui/button/Button"
import { useTranslation } from "react-i18next"

interface LangSwitcherProps {}

export const LangSwitcher: FC<LangSwitcherProps> = () => {
    const { t, i18n } = useTranslation()

    const onToggleLang = () => i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")

    return (
        <Button onClick={onToggleLang} theme="xl">
            {t("language")}
        </Button>
    )
}