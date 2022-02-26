import { ReactChild } from 'react';

export interface ThemeContextProps {
  theme: 'light' | 'dark';
}

export interface ThemeProviderProps {
  children: ReactChild;
}
