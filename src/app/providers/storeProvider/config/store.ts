import {
  type ReducersMapObject,
  configureStore,
  type Reducer,
  type AnyAction,
} from "@reduxjs/toolkit";
import { type StateType } from "./types";
import { counterReducer } from "@entities/counter";
import { userReducer, userMiddleware } from "@entities/user";
import { createReducerManager } from "./reducerManager";
import { api } from "@shared/api/api";
import { articlePageMiddleware } from "@page/articlePage";

const initialState: StateType = {
  counter: { value: 0 },
  user: { _isInit: false },
};

const rootReducer: ReducersMapObject<StateType> = {
  counter: counterReducer,
  user: userReducer,
};

export const createStore = (state = initialState, initialReducer = rootReducer) => {
  const reducerManager = createReducerManager(initialReducer);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<StateType, AnyAction>,
    preloadedState: state,
    devTools: _IS_DEV_,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: { api },
        },
      }).concat(userMiddleware.middleware, articlePageMiddleware.middleware),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
};
