import { Menu } from "@headlessui/react"
import { Fragment, useRef,type ReactNode } from "react";
import { useDirection } from "../../hooks/useDirection";
import { classNames } from "../../helpers/lib";

import s from "./Dropdown.module.scss";

export interface DropdownItem {
   content: ReactNode
   onClick?: () => void
   href?: string
}

interface DropdownProps {
   list: DropdownItem[]
   trigger: ReactNode
}

const getTag = (props: DropdownItem & { className: string}) => {
   if ("href" in props) {
      return (<a href={props.href} className={props.className}>{props.content}</a>)
   }

   if ("onClick" in props) {
      return (
         <button onClick={props.onClick} className={props.className}>
            {props.content}
         </button>
      )
   }

   return <span className={props.className}>{props.content}</span>
}

export const Dropdown = ({ trigger, list }: DropdownProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { vertDirection, horDirection, setDirection } = useDirection({ ref });
  
  return (
    <Menu as="div" className={s.dropdown} ref={ref}>
      <Menu.Button 
        className={s.dropdown_btn} 
        onClick={setDirection}
      >
         {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(s.dropdown_items, vertDirection, horDirection)}>
         {list.map((prop, i) => (
            <Menu.Item as={Fragment} key={prop.href || i}>
               {getTag({ ...prop, className: s.dropdown_item })}
            </Menu.Item>
         ))}
      </Menu.Items>
    </Menu>
  )
}
