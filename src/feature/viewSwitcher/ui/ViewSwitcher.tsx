import { useCallback, type FC, type SVGProps } from "react"
import { type PayloadAction } from "@reduxjs/toolkit"
import { Button } from "@shared/ui"
import { useAppDispatch } from "@shared/hooks/useAppDispatch"
import { classNames } from "@shared/helpers/lib"

import s from "./ViewSwitcher.module.scss"

export interface ViewType {
    Icon: FC<SVGProps<SVGSVGElement>>
    actionType: () => PayloadAction<any>
    name?: string
}

interface ViewSwitcherProps {
    arrayRender: ViewType[]
    className?: string
    currentActive?: string
}

export const ViewSwitcher: FC<ViewSwitcherProps> = ({ arrayRender, className, currentActive }) => {
    const dispatch = useAppDispatch()

    const onClick = useCallback(
        (cb: ViewType["actionType"]) => () => { dispatch(cb()) }
        , []
    )

    return (
        <div className={classNames(s.switcher, className)}>
            {arrayRender.map(({ Icon, actionType, name }, i) => (
                <Button key={i} onClick={onClick(actionType)} className={s.switcher_btn}>
                    <Icon className={classNames({
                        [s.active]: name === currentActive
                    })}/>
                </Button>
            ))}
        </div>
    )
}