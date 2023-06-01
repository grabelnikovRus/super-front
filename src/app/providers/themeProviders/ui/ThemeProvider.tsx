import { type FC, useState } from "react";
import { ThemeContext, type ThemeType } from "./ThemeContext";

const KEY_THEME = "theme";

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(
    (localStorage.getItem(KEY_THEME) as ThemeType) || "light"
  );

  const toggleTheme = () => {
    const val = theme === "light" ? "dark" : "light";
    setTheme(val);
    localStorage.setItem(KEY_THEME, val);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
