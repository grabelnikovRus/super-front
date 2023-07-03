import { type ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { type StateType } from "./types";
import { counterReducer } from "@entities/counter";
import { userReducer, userMiddleware } from "@entities/user";
import { createReducerManager } from "./reducerManager";
import { api } from "@shared/api/api";
import { type NavigateOptions, type To } from "react-router-dom";

const initialState: StateType = {
  counter: { value: 0 },
  user: {}
}

interface CreateStoreType {
  state?: StateType
  navigate?: (to: To, options?: NavigateOptions) => void
}

const rootReducer: ReducersMapObject<StateType> = {
  counter: counterReducer,
  user: userReducer
}

export const createStore = ({ state = initialState, navigate }: CreateStoreType) => {
  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore({
    reducer: reducerManager.reduce,
    preloadedState: state,
    devTools: _IS_DEV_,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: { api, navigate }
        }
      }).concat(userMiddleware.middleware)
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
}
