import { type FC } from "react"
import { Provider } from "react-redux"
import { createStore } from "../config/store"

export const StoreProvider: FC = ({ children }) => {
  const store = createStore()
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
