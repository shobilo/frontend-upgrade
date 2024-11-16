import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface useThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export const useTheme = (): useThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);
  };

  return { toggleTheme, theme };
};
