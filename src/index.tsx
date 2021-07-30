import * as React from "react";
import { ColorModeScript } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
