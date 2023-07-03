import { type CounterShema } from "@entities/counter";
import { type LoginSchema } from "@feature/authByUser";
import { type store } from "../ui/StoreProvider";
import { type UserSchema } from "@entities/user";
import {
  type Reducer,
  type AnyAction,
  type CombinedState,
  type ReducersMapObject,
} from "@reduxjs/toolkit";
import { type configureStore } from "@reduxjs/toolkit/dist/configureStore";
import { type ProfileScheme } from "@entities/profile";

export interface StateType {
  counter: CounterShema
  user: UserSchema
  // асинхронные редусеры
  login?: LoginSchema
  profile?: ProfileScheme
}

export type KeyStateType = keyof StateType

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export interface CreateReducerManagerType {
  getReducerMap: () => ReducersMapObject<StateType>
  reduce: (state: StateType, action: AnyAction) => CombinedState<StateType>
  add: (key: KeyStateType, reducer: Reducer) => void
  remove: (key: KeyStateType) => void
}

export interface StoreWithReducerManager extends ReturnType<typeof configureStore> {
  reducerManager: CreateReducerManagerType
}
