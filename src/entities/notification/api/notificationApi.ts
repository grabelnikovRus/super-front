import { rtkApi } from "@shared/api/rtkApi";
import { type NotificationTypes } from "../model/types";

const notificationListApi = rtkApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getNotificationList: query<NotificationTypes[], void>({
      query: () => ({
        url: "/notifications",
      })
    })
  }),
})

export const { useGetNotificationListQuery }  = notificationListApi;
