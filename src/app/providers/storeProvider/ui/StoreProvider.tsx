import { type FC } from "react"
import { Provider } from "react-redux"
import { createStore } from "../config/store"
import { type StateType } from "../config/types"

interface StoreProviderProps {
  initialState?: StateType
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
  const store = createStore(initialState)
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
