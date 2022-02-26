/* istanbul ignore file */
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-weight: 300;
  }

  html, body, #__next {
    height: 100%;
    width: 100%;

    max-width: 50rem;
    margin: 0 auto;

    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    padding: 0 8px;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export default GlobalStyles;
