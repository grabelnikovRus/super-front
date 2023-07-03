import { type FC } from "react"
import { Provider } from "react-redux"
import { createStore } from "../config/store"
import { type StateType } from "../config/types"
import { useNavigate } from "react-router-dom";

interface StoreProviderProps {
  initialState?: StateType
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const navigate = useNavigate()

  const store = createStore({ navigate })
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
