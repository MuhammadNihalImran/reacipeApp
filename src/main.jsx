import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import LoadingProvider from "./component/RecipeSearch/LoadingProvider";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <LoadingProvider>
      <Router>
        <App />
      </Router>
    </LoadingProvider>
  </React.StrictMode>
);
