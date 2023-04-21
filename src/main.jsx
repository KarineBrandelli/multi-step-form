import React from "react";
import ReactDOM from "react-dom/client";
import { AppContextProvider } from "./context/AppContext";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
