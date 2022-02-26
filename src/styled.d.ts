import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      black: string;
      white: string;
      pink: string;
    };
  }
}
