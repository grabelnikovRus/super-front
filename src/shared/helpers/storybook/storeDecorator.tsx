import { type StateType, createStore } from "@app/providers/storeProvider";
import { type ReducersMapObject } from "@reduxjs/toolkit";
import { type PartialStoryFn, type Renderer, type Args } from "@storybook/csf";
import { Provider } from "react-redux";

export const storeDecorator = (
  initialState: StateType,
  initialReducer?: ReducersMapObject<StateType>
) => {
  const store = createStore(initialState, initialReducer)

  return (story: PartialStoryFn<Renderer, Args>) => (
    <Provider store={store}>
        {story()}
    </Provider>
  )
}
