import { createListenerMiddleware } from "@reduxjs/toolkit";
import { userActions } from "../slice/userSlice";
import { KEY_STORAGE_AUTH } from "@shared/constants/common";

export const userMiddleware = createListenerMiddleware();
export const startUserMiddleware =
userMiddleware.startListening;
startUserMiddleware({
  actionCreator: userActions.setAuthData,
  effect: (action) => {
    localStorage.setItem(KEY_STORAGE_AUTH, JSON.stringify(action.payload))
  }
});

startUserMiddleware({
  actionCreator: userActions.initApp,
  effect: (_, api) => {
    const authData = JSON.parse(localStorage.getItem(KEY_STORAGE_AUTH))
    api.dispatch(userActions.setAuthData(authData))
  }
})

startUserMiddleware({
  actionCreator: userActions.logout,
  effect: () => {
    localStorage.removeItem(KEY_STORAGE_AUTH)
  }
})
