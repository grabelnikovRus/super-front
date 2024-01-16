import { useState, type ReactNode, useRef } from "react"
import { Listbox as HListbox } from "@headlessui/react"
import { classNames } from "../../helpers/lib"
import { useDirection } from "../../hooks/useDirection";

import s from "./ListBox.module.scss"

interface ItemBoxProps {
  value: string;
  content: ReactNode;
}

export interface ListBoxProps<T extends ItemBoxProps> {
  list: T[]
  onChangeValue: (i: T) => void;
  defaultValue?: T;
  readonly?: boolean;
  label?: string
}

export function Listbox<T extends ItemBoxProps>({ 
  list, 
  onChangeValue, 
  defaultValue,
  readonly,
  label,
}: ListBoxProps<T>) {
  const [selectedPerson, setSelectedPerson] = useState(defaultValue || list[0])
  const ref = useRef<HTMLDivElement | null>(null)
  const { vertDirection, setDirection } = useDirection({ ref }) 

  const onChange = (item: T) => {
    setSelectedPerson(item)
    onChangeValue(item)
  }

  return (<>
    {label && <label htmlFor={label}>{label}</label>}
    <HListbox 
      as="div" // обязательно задать наименование обертки 
      className={s.root} 
      value={selectedPerson} 
      onChange={onChange}
      disabled={readonly}
      by="value" // свойство для сравнения объектов по определенному полю
      ref={ref}
    >
      <HListbox.Button className={s.root_btn} onClick={setDirection} id={label}>
        {selectedPerson.content}
      </HListbox.Button>
      <HListbox.Options className={classNames(s.root_options, vertDirection)}>
        {list.map((item) => (
          <HListbox.Option key={item.value} value={item}>
            {({ active, selected }) => (
              <li
                className={classNames(s.root_item, {
                  [s.active]: active,
                  [s.selected]: selected
                })}
              >
                {item.content}
              </li>
            )}
          </HListbox.Option>
        ))}
      </HListbox.Options>
    </HListbox>
  </>)
}