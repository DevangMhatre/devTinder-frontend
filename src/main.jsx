import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import "./style.css";
import { store } from "./utils/store";
import App from "./App";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <Toaster position="top-center" />
    <App />
  </Provider>
  // </StrictMode>
);
