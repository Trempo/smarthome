import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { IntlProvider } from "react-intl";

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import "bootstrap/dist/css/bootstrap.css";

const getLocale = () => {
  return navigator.language || navigator.userLanguage;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IntlProvider
      locale={getLocale()}
      messages={getLocale() === "es" ? localeEsMessages : localeEnMessages}>
      <App />
    </IntlProvider>
    ,
  </React.StrictMode>
);
