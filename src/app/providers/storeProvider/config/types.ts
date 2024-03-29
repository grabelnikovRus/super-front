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
import { type ArticleDetailsPageScheme } from "@page/articleDetailsPage";
import { type AddCommentSchema } from "@feature/addComment";
import { type ArticlePageSchema } from "@page/articlePage";
import { type ScrollScheme } from "@widgets/saveScroll";
import { type FilterScheme } from "@feature/filters";
import { type ReactWindowPageSchema } from "@page/reactWindowPage";
import { type rtkApi } from "@shared/api/rtkApi";

export interface StateType {
  counter: CounterShema;
  user: UserSchema;
  scroll: ScrollScheme
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // асинхронные редусеры
  login?: LoginSchema;
  profile?: ProfileScheme;
  articles?: ArticleDetailsSchema;
  articleDetailsPage?: ArticleDetailsPageScheme
  addComment?: AddCommentSchema;
  articlePage?: ArticlePageSchema
  reactWindowPage?: ReactWindowPageSchema
  filter?: FilterScheme
}

export type KeyStateType = keyof StateType;

export type RootState = ReturnType<typeof createStore>["getState"];
export type AppDispatch = ReturnType<typeof createStore>["dispatch"];

export interface CreateReducerManagerType {
  getReducerMap: () => ReducersMapObject<StateType>;
  reduce: (state: StateType, action: AnyAction) => CombinedState<StateType>;
  add: (key: KeyStateType, reducer: Reducer) => void;
  remove: (key: KeyStateType) => void;
}

export interface StoreWithReducerManager extends ReturnType<typeof configureStore> {
  reducerManager: CreateReducerManagerType;
}

interface ThunkExtraArgType {
  api: AxiosInstance;
}

export interface OptionsCreateAsync<T = string> {
  rejectValue: T;
  extra: ThunkExtraArgType;
  state: StateType;
}

export type ReducerList = {
  [name in KeyStateType]?: Reducer<NonNullable<StateType[name]>>
}
