import {
  useEffect,
  useRef,
  type ChangeEvent,
  type InputHTMLAttributes,
  memo,
} from "react";

import s from "./Input.module.scss";
import { classNames } from "@shared/helpers/lib";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange?: (value: string) => void;
  label?: string;
}

export const Input = memo(
  ({
    label = "",
    type = "text",
    autoFocus,
    onChange,
    readOnly,
    className,
    ...other
  }: InputProps) => {
    const ref = useRef<HTMLInputElement>(null);

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    useEffect(() => {
      if (autoFocus && ref.current) ref.current.focus();
    }, [ref.current]);

    return (
      <div className={classNames(s.input_wrapper, className)}>
        <label className={s.input_label}>
          {label && label}
          <input
            ref={ref}
            className={classNames(s.input, {
              [s.readonly]: readOnly,
            })}
            type={type}
            onChange={onChangeInput}
            readOnly={readOnly}
            {...other}
          />
        </label>
      </div>
    );
  }
);
