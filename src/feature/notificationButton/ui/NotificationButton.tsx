
import { NotificationList } from "@entities/notification"
import { BottomSheet, Popover } from "@shared/ui"
import { useDevice } from "@shared/hooks/useDevice"
import { useState } from "react"
import Icon from "@shared/assest/icon/notification.svg"
import { AnimationProvider } from "@shared/helpers/components/AnimationProvider"

import s from "./NotificationButton.module.scss"

export const NotificationButton = () => {
  const isMobile = useDevice()
  const [isOpen, setIsOpen] = useState(false)

  const onCloseBS = () => {
    setIsOpen(false)
  }

  const onOpenBS = () => {
    setIsOpen(true)
  }

  const trigger = (<Icon className={s.btn__icon} />)

  return (
    isMobile ? (
      <AnimationProvider>
        <BottomSheet 
          trigger={trigger} 
          isOpen={isOpen} 
          onClose={onCloseBS} 
          onOpen={onOpenBS}
        >
          <NotificationList />
        </BottomSheet>
      </AnimationProvider>
    ) : (
      <Popover 
        className={s.btn__list} 
        trigger={trigger}
      >
        <NotificationList />
      </Popover>
    )
  )
}