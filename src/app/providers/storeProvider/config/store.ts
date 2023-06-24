import { configureStore } from "@reduxjs/toolkit";
import { type StateType } from "./types";
import { counterReducer } from "@entities/counter";

const initialState: StateType = {
  counter: { value: 0 }
}

export const createStore = (state = initialState) => configureStore<StateType>({
  reducer: { counter: counterReducer },
  preloadedState: state,
  devTools: _IS_DEV_
})
