import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "react-flow-renderer/dist/style.css";
import "react-flow-renderer/dist/theme-default.css";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
