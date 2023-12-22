import { useState, Fragment } from "react"
import { Listbox as HListbox} from "@headlessui/react"
import { classNames } from "../../helpers/lib"

import s from "./ListBox.module.scss"

interface ItemBoxProps {
    id: number;
    name: string;
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
    label
}: ListBoxProps<T>) {
  const [selectedPerson, setSelectedPerson] = useState(defaultValue || list[0])

  const onChange = (item: T) => {
    setSelectedPerson(item)
    onChangeValue(item)
  }

  return (
    <label>
        {label && label}
        <HListbox 
        as="div" // обязательно задать наименование обертки 
        className={s.root} 
        value={selectedPerson} 
        onChange={onChange}
        disabled={readonly}
        >
        <HListbox.Button className={s.root_btn}>{selectedPerson.name}</HListbox.Button>
        <HListbox.Options className={s.root_options}>
            {list.map((item) => (
            <HListbox.Option key={item.id} value={item} as={Fragment}>
                {({ active, selected }) => (
                <li
                    className={classNames(s.root_item, {
                        [s.active]: active,
                        [s.selected]: selected
                    })}
                >
                    {item.name}
                </li>
                )}
            </HListbox.Option>
            ))}
        </HListbox.Options>
        </HListbox>
    </label>
  )
}