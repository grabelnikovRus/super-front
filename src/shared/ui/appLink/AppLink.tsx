import { FC } from "react"

import s from "./AppLink.module.scss"
import { Link, LinkProps } from "react-router-dom"
import { classNames } from "@shared/helpers"

type ThemeLink = "default" | "border"

interface AppLinkProps extends LinkProps {
    theme?: ThemeLink
}

export const AppLink: FC<AppLinkProps> = ({ 
    children, 
    to, 
    className, 
    theme = "default",
    ...other }) => {
    return (
        <Link 
          to={to} 
          className={classNames(s.link, s[theme], className)}
          {...other}
        >
            {children}
        </Link>
    )
}