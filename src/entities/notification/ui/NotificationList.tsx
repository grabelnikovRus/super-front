
import { Loader } from "@shared/ui"
import { useGetNotificationListQuery } from "../api/notificationApi"
import { NotificationItem } from "./NotificationItem"
import s from "./NotificationList.module.scss"

export const NotificationList= () => {
    const { data, isLoading } = useGetNotificationListQuery(undefined, {
        pollingInterval: 5000 // интервал запроса
    })

    if (isLoading) return <Loader />

    return (
        <ul className={s.list}>
            {data?.map((item) => (<NotificationItem key={item.id} item={item}/>))}
        </ul>
    )
}