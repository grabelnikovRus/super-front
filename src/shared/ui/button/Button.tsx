import { ButtonHTMLAttributes, FC } from "react"

import s from "./Button.module.scss"
import { classNames } from "@shared/helpers"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: "default" | ""
}

export const Button: FC<ButtonProps> = ({ children, className, theme = "default", ...other }) => {
    return (
        <button 
          className={classNames(s.button, className, s[theme])}
          {...other}
        >
            {children}
        </button>
    )
}