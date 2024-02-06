import { Link } from "react-router-dom"
import { type NotificationTypes } from "../model/types"
import s from "./NotificationItem.module.scss"

interface NotificationItemProps {
    item: NotificationTypes
}

export const NotificationItem = ({ item }: NotificationItemProps) => {
    const { title, description, href } = item
    return (
        <li className={s.item}>
            <span>{title}</span>
            {href 
                ? <Link target="_blank" to={href}>{description}</Link> 
                : <span>{description}</span>
            }
        </li>
    )
}