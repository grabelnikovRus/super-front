import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { KEY_STORAGE_AUTH } from "../constants/common";

export const rtkApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: _API_,
        prepareHeaders: (headers) => { // для отправки заголовков авторизации
            const key = localStorage.getItem(KEY_STORAGE_AUTH)
            
            if (key) headers.set("Authorization", key);

            return headers
        }
    }),
    endpoints: () => ({})
});
