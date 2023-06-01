import { createContext } from "react";

export type ThemeType = "dark" | "light";

export interface ProviderProps {
  theme: ThemeType;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ProviderProps>({
  theme: "light",
  toggleTheme: () => {},
});
