import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
}

@font-face {
  font-family: "Poppins";
  src: url("./assets/fonts/Poppins-Regular.ttf") format("truetype");
}

html {
  font-size: 62.5%;
}

body {
  overflow-x: hidden;
}

@media (max-width: 768px) {
  html {
    font-size: 56.25%;
  }
}

:root {
  --font-family: "Poppins", sans-serif;
  --background-color: #5E693E;
  --base-color: #8c9c5c;
  --text-color: #242222;
  --text-color-hover: #D0E889;
  --text-color-background: #5E693E;
}

html, body, #__next {
  height: 100vh;
}

#__next {
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
}
`;
