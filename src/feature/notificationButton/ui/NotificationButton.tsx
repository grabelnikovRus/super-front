
import { NotificationList } from "@entities/notification"
import { Popover } from "@shared/ui"
import Icon from "@shared/assest/icon/notification.svg"

import s from "./NotificationButton.module.scss"

export const NotificationButton = () => {

    return (
        <Popover 
          className={s.btn__list} 
          trigger={<Icon className={s.btn__icon}/>}
        >
          <NotificationList />
        </Popover>
    )
}