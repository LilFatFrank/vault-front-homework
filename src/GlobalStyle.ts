import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *:after, *:before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
    background-color: transparent;
    border: none;
  }

  html {
    box-sizing: border-box;
  }

  body {
    padding: 24px;
  }
`;
