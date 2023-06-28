import { userActions, type UserType } from "@entities/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import i18n from "@shared/config/i18n/config";
import axios from "axios";

interface LoginByUserProps {
  username: string
  password: string
}

interface Options {
  rejectValue: string
}

export const loginByUser = createAsyncThunk<UserType, LoginByUserProps, Options>(
  "login/loginByUser",
  async(data, api) => {
    try {
      const res = await axios.post("http://localhost:8000/login", data)

      api.dispatch(userActions.setAuthData(res.data))
    } catch (e) {
      if (e.response.status === 403) {
        return api.rejectWithValue(i18n.t("check_username"))
      }
      return api.rejectWithValue(e.message)
    }
  })
