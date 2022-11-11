import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f5f5f5;
  }

  html, body, #root {
    height: 100vh;
  }
  
  #root {
    display: flex;
    flex-direction: column;
  }
  
  main {
    flex-grow: 1;
  }

  a {
    color: inherit;
  }
`;
