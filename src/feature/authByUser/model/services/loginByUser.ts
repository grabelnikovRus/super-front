import { type OptionsCreateAsync } from "@app/providers/storeProvider";
import { userActions, type UserType } from "@entities/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import i18n from "@shared/config/i18n/config";

interface LoginByUserProps {
  username: string
  password: string
}

export const loginByUser =
  createAsyncThunk<UserType, LoginByUserProps, OptionsCreateAsync>(
    "login/loginByUser",
    async(data, { dispatch, rejectWithValue, extra }) => {
      try {
        const res = await extra.api.post("/login", data)

        dispatch(userActions.setAuthData(res.data))

        return res.data
      } catch (e) {
        if (e.response.status === 403) {
          return rejectWithValue(i18n.t("check_username"))
        }
        return rejectWithValue(e.message)
      }
    })
