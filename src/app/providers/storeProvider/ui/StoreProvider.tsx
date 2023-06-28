import { type FC } from "react"
import { Provider } from "react-redux"
import { createStore } from "../config/store"
import { type StateType } from "../config/types"

interface StoreProviderProps {
  initialState?: StateType
}

export const store = createStore()

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
