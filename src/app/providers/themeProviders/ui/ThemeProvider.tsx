import { useState, useEffect, type ReactNode } from "react";
import { ThemeContext, type ThemeType } from "./ThemeContext";
import { KEY_THEME } from "@shared/constants/common";

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(
    (localStorage.getItem(KEY_THEME) as ThemeType) || "light"
  );

  const toggleTheme = () => {
    const val = theme === "light" ? "dark" : "light";
    setTheme(val);
    localStorage.setItem(KEY_THEME, val);
  };

  useEffect(() => {
    document.body.classList.add(theme);
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
