import { useContext } from "react";
import { type ProviderProps, ThemeContext } from "../ui/ThemeContext";

export const useTheme = (): ProviderProps => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return {
    theme,
    toggleTheme,
  };
};
