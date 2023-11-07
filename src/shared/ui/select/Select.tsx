/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { memo, useMemo, useState, useRef, useEffect, useCallback } from "react";

import s from "./Select.module.scss";
import { classNames } from "../../helpers/lib";

export interface OptionsSelect<T> {
  value: T;
  content: string;
}

interface SelectProps<T extends string | number> {
  label?: string;
  defaultValue?: T;
  options: Array<OptionsSelect<T>>;
  onChange?: (value: T) => void;
  readonly?: boolean;
  className?: string
}

const Select = <T extends string | number>(props: SelectProps<T>) => {
  const {
    defaultValue,
    label,
    options,
    onChange,
    readonly,
    className
  } = props;
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [value, setValue] = useState(defaultValue || "");

  const refList = useRef<HTMLDivElement>(null);

  const onFocus = () => {
    setIsFocus(true);
  };
  const onBlur = () => {
    setTimeout(() => {
      setIsFocus(false);
    }, 150);
  };

  const onClickValue = useCallback(
    (value: OptionsSelect<T>["value"]) => () => {
      setValue(value);
      onChange?.(value);
    },
    []
  );

  const valueInp = useMemo(() => {
    const val = options?.find(({ value: valueOption }) => value === valueOption);
    return val?.content;
  }, [value]);

  const optionsMemo = useMemo(
    () =>
      options?.map(({ value, content }) => (
        <div key={value} className={s.input_option} onClick={onClickValue(value)}>
          {content}
        </div>
      )),
    [options]
  );

  useEffect(() => {
    if (isFocus && refList.current) {
      refList.current.style.overflow = "auto";
      refList.current.style.height = "120px";
    }
  }, [isFocus]);

  return (
    <div className={classNames(s.input_wrapper, className)}>
      {label && (
        <label htmlFor={label} className={s.root_label}>
          {label}
        </label>
      )}
      <input
        id={label}
        className={classNames(s.input, {
          [s.readonly]: readonly,
        })}
        value={valueInp}
        onBlur={onBlur}
        onFocus={onFocus}
        readOnly={readonly}
      />
      {isFocus && !readonly && (
        <div ref={refList} className={s.input_list}>
          {optionsMemo}
        </div>
      )}
    </div>
  );
};

export const SelectMemo = memo(Select) as typeof Select;
