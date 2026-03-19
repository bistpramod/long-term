import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./assets/css/global.css";
import RouterConfig from "./config/Router";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterConfig />
  </StrictMode>,
);