import { FC } from "react"
import { AppLink } from "@shared/ui";

import s from "./NavBar.module.scss"
import { ThemeSwitcher } from "@widgets/themeSwitcher";

interface NavBarProps {
    className?: string
}

export const NavBar: FC<NavBarProps> = () => {
    return (
         <div className={s.navbar}>
            <ThemeSwitcher />
            <div className={s.navbar__links}>
                <AppLink to="/" className={s.navbar__link}>главная</AppLink>
                <AppLink to="/about" className={s.navbar__link} theme="border">о нас</AppLink>
            </div>
        </div>
    )
}