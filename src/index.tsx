import * as React from "react";
import { ColorModeScript } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import { App } from "./App";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
