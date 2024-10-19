import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import ApolloProvider from "./utils/client.js";
import { GlobalProvider } from "./context/GlobalContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </ApolloProvider>
  </React.StrictMode>
);
