import { useContext } from "react"
import { ProviderProps, ThemeContext } from "./ThemeContext"

export const useTheme = (): ProviderProps => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return {
        theme,
        toggleTheme
    }
}