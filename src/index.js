import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Router from "./router/Router";
import { LangProvider } from "./context/langContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LangProvider>
      <Router />
    </LangProvider>
  </React.StrictMode>
);
