import { Provider } from "react-redux";
import { createStore } from "../config/store";
import { type ReactNode } from "react";

interface StoreProviderProps {
  children: ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const store = createStore();
  return <Provider store={store}>{children}</Provider>;
};
