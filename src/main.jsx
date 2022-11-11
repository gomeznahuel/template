import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App";
import { GlobalStyle, Theme } from "./stylesheet";
import { ThemeProvider } from "styled-components";
import { Providers } from "./hooks";
import { MenuProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Providers providers={[<ThemeProvider theme={Theme} />, <MenuProvider />]}>
      <GlobalStyle />
      <App />
    </Providers>
  </StrictMode>
);
