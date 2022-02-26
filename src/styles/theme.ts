import { DefaultTheme } from 'styled-components';

const DefaultThemeConstants = {
  fontSize: '16px',
};

export const DarkTheme: DefaultTheme = {
  ...DefaultThemeConstants,
  colors: {
    background: '#141414',
    text: '#f9f9f9',
    black: '#141414',
    white: '#F9F9F9',
    pink: '#CF1259',
  },
};

export const LightTheme: DefaultTheme = {
  ...DefaultThemeConstants,
  colors: {
    background: '#f9f9f9',
    text: '#141414',
    black: '#141414',
    white: '#F9F9F9',
    pink: '#CF1259',
  },
};
