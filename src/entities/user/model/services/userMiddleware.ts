import { createListenerMiddleware } from "@reduxjs/toolkit";
import { userActions } from "../slice/userSlice";

export const userMiddleware = createListenerMiddleware();
export const startUserMiddleware =
userMiddleware.startListening;
startUserMiddleware({
  actionCreator: userActions.setAuthData,
  effect: (action) => {
    localStorage.setItem("AUTH", JSON.stringify(action.payload))
  }
});

startUserMiddleware({
  actionCreator: userActions.initApp,
  effect: (_, api) => {
    const authData = JSON.parse(localStorage.getItem("AUTH"))
    api.dispatch(userActions.setAuthData(authData))
  }
})

startUserMiddleware({
  actionCreator: userActions.logout,
  effect: () => {
    localStorage.removeItem("AUTH")
  }
})
