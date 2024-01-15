import { useState, type ReactNode, useRef } from "react"
import { Listbox as HListbox } from "@headlessui/react"
import { classNames } from "../../helpers/lib"

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
}

export function Listbox<T extends ItemBoxProps>({ 
  list, 
  onChangeValue, 
  defaultValue,
  readonly,
}: ListBoxProps<T>) {
  const [selectedPerson, setSelectedPerson] = useState(defaultValue || list[0])
  const [direction, setDirection] = useState<"bottom" | "top">("bottom")
  const ref = useRef<HTMLDivElement | null>(null)

  const onChange = (item: T) => {
    setSelectedPerson(item)
    onChangeValue(item)
  }

  const setDirectionOptions = () => {
    const top = ref.current?.getBoundingClientRect().top;

    if (!top) return;

    setDirection((window.innerHeight / 2) < top ? "top" : "bottom" )
  }
console.log(defaultValue)
  return (
    <HListbox 
      as="div" // обязательно задать наименование обертки 
      className={s.root} 
      value={selectedPerson} 
      onChange={onChange}
      disabled={readonly}
      by="value" // свойство для сравнения объектов по определенному полю
      ref={ref}
    >
      <HListbox.Button className={s.root_btn} onClick={setDirectionOptions}>
        {selectedPerson.content}
      </HListbox.Button>
      <HListbox.Options className={classNames(s.root_options, s[direction])}>
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
  )
}