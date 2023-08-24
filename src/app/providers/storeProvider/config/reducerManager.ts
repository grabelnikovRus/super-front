import { type ReducersMapObject, combineReducers } from "@reduxjs/toolkit";
import {
  type CreateReducerManagerType,
  type KeyStateType,
  type StateType,
} from "./types";

export function createReducerManager(
  initialReducers: ReducersMapObject<StateType>
): CreateReducerManagerType {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: KeyStateType[] = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state, action) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key: KeyStateType) => {
          delete state[key];
        });
        keysToRemove = [];
      }
      return combinedReducer(state, action);
    },
    add: (key, reducer) => {
      if (!key || reducers[key]) {
        return;
      }
      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },
    remove: (key) => {
      if (!key || !reducers[key]) {
        return;
      }
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
}
