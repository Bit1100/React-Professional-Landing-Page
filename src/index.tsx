import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container!);

root.render(
  <React.StrictMode>
    <Router
      basename={
        process.env.REACT_APP_STAGE === "production"
          ? process.env.PUBLIC_URL
          : ""
      }
    >
      <App />
    </Router>
  </React.StrictMode>
);
