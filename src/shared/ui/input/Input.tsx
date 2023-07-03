import {
  useEffect,
  useRef,
  type ChangeEvent,
  type InputHTMLAttributes,
  memo
} from "react"

import s from "./Input.module.scss"

interface InputProps extends
  Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange?: (value: string) => void
  label?: string
}

export const Input = memo(({
  label,
  type = "text",
  autoFocus,
  onChange,
  ...other
}: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  useEffect(() => {
    if (autoFocus && ref.current) ref.current.focus()
  }, [ref.current])

  return (
    <div className={s.input_wrapper}>
      <label className={s.input_label}>
        {label && label}
        <input
          ref={ref}
          className={s.input}
          type={type}
          onChange={onChangeInput}
          {...other}
        />
      </label>
    </div>
  )
})
