import { type ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { type StateType } from "./types";
import { counterReducer } from "@entities/counter";
import { userReducer, userMiddleware } from "@entities/user";
import { createReducerManager } from "./reducerManager";

const initialState: StateType = {
  counter: { value: 0 },
  user: {}
}

const rootReducer: ReducersMapObject<StateType> = {
  counter: counterReducer,
  user: userReducer
}

export const createStore = (state = initialState) => {
  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore({
    reducer: reducerManager.reduce,
    preloadedState: state,
    devTools: _IS_DEV_,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userMiddleware.middleware)
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
}
