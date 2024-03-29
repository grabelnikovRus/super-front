import { type ButtonHTMLAttributes } from "react";

import s from "./Button.module.scss";
import { classNames } from "../../helpers/lib";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "default" | "m" | "l" | "xl" | "outline";
}

export const Button = ({
  children,
  className,
  theme = "default",
  disabled,
  ...other
}: ButtonProps) => {
  return (
    <button
      className={classNames(s.button, className, s[theme], {
        [s.button__disabled]: disabled,
      })}
      disabled={disabled}
      {...other}
    >
      {children}
    </button>
  );
};
