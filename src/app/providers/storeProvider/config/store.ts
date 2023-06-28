import { configureStore } from "@reduxjs/toolkit";
import { type StateType } from "./types";
import { counterReducer } from "@entities/counter";
import { loginReducer } from "@feature/authByUser";
import { userReducer, userMiddleware } from "@entities/user";

const initialState: StateType = {
  counter: { value: 0 },
  user: {}
}

export const createStore = (state = initialState) => configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    user: userReducer
  },
  preloadedState: state,
  devTools: _IS_DEV_,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userMiddleware.middleware)
})
