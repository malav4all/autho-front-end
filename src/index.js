import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="https://dev-zxt25m4lcno40ulh.us.auth0.com"
      clientId="pFYJM95aPiUKqkhsZ2NWlJuiA8hL1sVx"
      authorizationParams={{
        redirect_uri: "http://localhost:3000",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
