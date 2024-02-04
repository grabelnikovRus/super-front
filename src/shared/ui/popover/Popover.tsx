import { classNames as cn } from "../../helpers/lib/classnames/classNames"
import { Popover as HPopover } from "@headlessui/react"
import { useRef, type ReactNode } from "react";
import { useDirection } from "../../hooks/useDirection";

import s from "./Popover.module.scss";

interface PopoverProps {
  children: ReactNode
  trigger: ReactNode
}

export function Popover({ children, trigger }: PopoverProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const { vertDirection, horDirection, setDirection } = useDirection({ ref }) 
  return (
    <HPopover className={s.popover} ref={ref}>
      <HPopover.Button 
        className={s.popover__btn}
        onClick={setDirection}
      >
        {trigger}
      </HPopover.Button>
      <HPopover.Panel className={cn(s.popover__wrapper, horDirection, vertDirection)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  )
}
