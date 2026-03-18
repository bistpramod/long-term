import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./assets/css/global.css";

import HomePage from "./pages/home/HomePage";
import ForgetPassword from "./pages/auth/ForgetPassword";
// React Component 


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HomePage /> */}
    <ForgetPassword />
  </StrictMode>,
);