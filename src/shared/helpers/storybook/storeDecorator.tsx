import { type StateType, createStore } from "@app/providers/storeProvider";
import { type PartialStoryFn, type Renderer, type Args } from "@storybook/csf";
import { Provider } from "react-redux";

export const storeDecorator = (initialState: StateType) => {
  const store = createStore({ state: initialState })

  return (story: PartialStoryFn<Renderer, Args>) => (
    <Provider store={store}>
        {story()}
    </Provider>
  )
}
