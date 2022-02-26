import { createContext, useContext, useEffect, useState } from 'react';

import { ThemeContextProps, ThemeProviderProps } from '../types/Hooks';

const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const getThemeFromStorage = () => {
    if (window) {
      const themeFromStorage = window.localStorage.getItem('@POMODORO.Theme');

      if (!themeFromStorage) {
        setTheme('dark');
        window.localStorage.setItem('@POMODORO.Theme', 'dark');
      } else {
        if (themeFromStorage === 'light' || themeFromStorage === 'dark') {
          setTheme(themeFromStorage);
        } else {
          setTheme('dark');
        }
      }
    } else {
      setTheme('dark');
    }
  };

  useEffect(() => {
    getThemeFromStorage();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error('An useTheme hook should be used inside a Theme Provider!');

  return context;
};
