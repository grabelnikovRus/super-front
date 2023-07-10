/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { type FC, memo, useMemo, useState, useRef, useEffect, useCallback } from "react"

import s from "./Select.module.scss"
import { classNames } from "@shared/helpers/lib"

interface OptionsSelect {
  value: string | number
  content: string
}

interface SelectProps {
  label?: string
  defaultValue?: string | number
  options: OptionsSelect[]
  onChange?: (value: string) => void
  readonly?: boolean
}

const Select: FC<SelectProps> = ({
  defaultValue,
  label,
  options,
  onChange,
  readonly
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const [value, setValue] = useState(defaultValue || "")

  const refList = useRef<HTMLDivElement>(null)

  const onFocus = () => { setIsFocus(true) };
  const onBlur = () => { setTimeout(() => { setIsFocus(false) }, 150) };

  const onClickValue = useCallback((value: OptionsSelect["value"]) => () => {
    setValue(value);
    onChange?.(String(value));
  }, [])

  const valueInp = useMemo(() => {
    const val = options?.find(({ value: valueOption }) => value === valueOption)
    return val?.content
  }, [value])

  const optionsMemo = useMemo(() => options?.map(({ value, content }) => (
    <div
      key={value}
      className={s.input_option}
      onClick={onClickValue(value)}
    >
      {content}
    </div>
  )), [options])

  useEffect(() => {
    if (isFocus && refList.current) {
      refList.current.style.overflow = "auto"
      refList.current.style.height = "120px"
    }
  }, [isFocus])

  return (
    <div className={s.input_wrapper}>
      {label && <label htmlFor={label} className={s.root_label}>{label}</label>}
      <input
        id={label}
        className={classNames(s.input, {
          [s.readonly]: readonly
        })}
        value={valueInp}
        onBlur={onBlur}
        onFocus={onFocus}
        readOnly={readonly}
      />
      {isFocus && !readonly && (
        <div ref={refList} className={s.input_list}>{optionsMemo}</div>
      )}
    </div>
  )
}

export const SelectMemo = memo(Select);
