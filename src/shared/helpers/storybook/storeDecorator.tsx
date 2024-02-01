import { type StateType, createStore } from "@app/providers/storeProvider";
import { type ReducersMapObject } from "@reduxjs/toolkit";
import { type FC } from "react";
import { Provider } from "react-redux";

export const storeDecorator = (
  initialState: StateType,
  initialReducer?: ReducersMapObject<StateType>
) => {
  const store = createStore(initialState, initialReducer);

  return (Story: FC) => (
    <Provider store={store}><Story /></Provider>
  );
};
