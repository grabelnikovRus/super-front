import {
  type KeyStateType,
  type StoreWithReducerManager,
} from "@app/providers/storeProvider";
import { type Reducer } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useStore } from "react-redux";
import { useAppDispatch } from "./useAppDispatch";

type ReducerObjType = {
  [key in KeyStateType]?: Reducer;
};

export const useReducerManager = (
  initReducers: ReducerObjType[] | ReducerObjType, 
  remove = true
) => {
  const store = useStore() as StoreWithReducerManager;
  const dispatch = useAppDispatch();
  const arrayReducers = Array.isArray(initReducers) ? initReducers : [initReducers];

  useEffect(() => {
    if (_PROJECT_ !== "frontend") return;

    arrayReducers.forEach((obj) => {
      Object.entries(obj).forEach(([key, reducer]) => {
        dispatch({ type: `init ${key} reducer` });
        store.reducerManager.add(key as KeyStateType, reducer);
      });
    });
    return () => {
      if (!remove) return;

      arrayReducers.forEach((obj) => {
        Object.entries(obj).forEach(([key, reducer]) => {
          dispatch({ type: `destroy ${key} reducer` });
          store.reducerManager.remove(key as KeyStateType);
        });
      });
    };
  }, []);
};
