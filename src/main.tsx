
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./assets/css/global.css";
import RouterConfig from "./config/Router";
import AuthProvider from "./context/provider/AuthProvider";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterConfig />
    </AuthProvider>
  </StrictMode>,
);
