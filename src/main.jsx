import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./scss/global.scss"
import WebApp from "@twa-dev/sdk";

WebApp.ready();
createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <App />
  // </StrictMode>
);
