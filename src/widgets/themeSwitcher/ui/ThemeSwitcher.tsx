import { useTheme } from "@app/providers/themeProviders";
import { FC } from "react";
import IconDark from "@shared/assest/icon/theme-dark.svg";
import IconLight from "@shared/assest/icon/theme-light.svg";

import s from "ThemeSwitcher./NavBar.module.scss"
import { Button } from "@shared/ui/button/Button";

interface ThemeSwitcherProps {}

export const ThemeSwitcher: FC< ThemeSwitcherProps> = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button onClick={toggleTheme} className="">
            {theme === "dark" ? <IconDark /> : <IconLight />}
        </Button>
    )
}