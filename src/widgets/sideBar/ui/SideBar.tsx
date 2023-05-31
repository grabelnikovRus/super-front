import { FC, useState } from "react"

import s from "./SideBar.module.scss"
import { classNames } from "@shared/helpers"
import { Button } from "@shared/ui/button/Button"
import { ThemeSwitcher } from "@widgets/themeSwitcher";

interface SideBarProps {}

export const SideBar: FC<SideBarProps> = () => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => setCollapsed((prev) => !prev);

    return (
        <div className={classNames(s.sidebar, { 
            [s.sidebar__collapsed]: collapsed
        })}>
            <Button onClick={onToggle}>toggle</Button>
            <div className={s.sidebar_switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    )
}