import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
// import ApolloProvider from "./utils/client.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ApolloProvider> */}
    <App />
    {/* </ApolloProvider> */}
  </React.StrictMode>
);
