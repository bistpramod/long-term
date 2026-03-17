import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./assets/css/global.css";

import HomePage from "./pages/home/HomePage";
// React Component 


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
);