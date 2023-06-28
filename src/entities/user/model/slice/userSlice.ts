import { type PayloadAction, createSlice } from "@reduxjs/toolkit"
import { type UserType, type UserSchema } from "../types/userSchema"

const initialState: UserSchema = {}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<UserType>) => {
      state.authData = action.payload
    },
    initApp: () => {},
    logout: (state) => {
      state.authData = undefined
    }
  },
})

export const { actions: userActions, reducer: userReducer } = userSlice;
