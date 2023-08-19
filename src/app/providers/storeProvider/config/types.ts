import { type AxiosInstance } from "axios";
import {
  type Reducer,
  type AnyAction,
  type CombinedState,
  type ReducersMapObject,
} from "@reduxjs/toolkit";
import { type createStore } from "./store";
import { type CounterShema } from "@entities/counter";
import { type LoginSchema } from "@feature/authByUser";
import { type UserSchema } from "@entities/user";
import { type configureStore } from "@reduxjs/toolkit/dist/configureStore";
import { type ProfileScheme } from "@feature/editableProfileCard";
import { type ArticleDetailsSchema } from "@entities/article";

export interface StateType {
  counter: CounterShema
  user: UserSchema
  // асинхронные редусеры
  login?: LoginSchema
  profile?: ProfileScheme
  articles?: ArticleDetailsSchema
}

export type KeyStateType = keyof StateType

export type RootState = ReturnType<typeof createStore>["getState"]
export type AppDispatch = ReturnType<typeof createStore>["dispatch"]

export interface CreateReducerManagerType {
  getReducerMap: () => ReducersMapObject<StateType>
  reduce: (state: StateType, action: AnyAction) => CombinedState<StateType>
  add: (key: KeyStateType, reducer: Reducer) => void
  remove: (key: KeyStateType) => void
}

export interface StoreWithReducerManager extends ReturnType<typeof configureStore> {
  reducerManager: CreateReducerManagerType
}

interface ThunkExtraArgType {
  api: AxiosInstance
}

export interface OptionsCreateAsync<T = string> {
  rejectValue: T
  extra: ThunkExtraArgType
  state: StateType
}
