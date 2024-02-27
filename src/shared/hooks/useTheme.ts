import { useContext } from "react";
import { 
  type ProviderProps, 
  ThemeContext 
} from "../helpers/lib";

export const useTheme = (): ProviderProps => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return {
    theme,
    toggleTheme,
  };
};
