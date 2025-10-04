import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import App from "@/app/App";
import i18n from "./shared/config/i18n/i18n";
import { ErrorBoundary } from "./app/providers/ErrorBoundary";

import "./app/styles/index.scss";

render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </I18nextProvider>
  </BrowserRouter>,
  document.getElementById("root"),
);
