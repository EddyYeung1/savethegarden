import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-WXB9G99"
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
