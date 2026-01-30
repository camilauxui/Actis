import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Ajusta estos imports si tus estilos están en otras rutas
import "./styles/tailwind.css";
import "./styles/theme.css";
import "./styles/fonts.css";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
