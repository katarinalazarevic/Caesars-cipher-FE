/// <reference types="vite/client" />
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import * as React from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./routes/AppRouter";
import theme from "./providers/app-provider/theme-provider/theme-provider";
import { ThemeProvider } from "@mui/material";
import { PrimaryHeader } from "./components/primary-header/primary-header";
import { I18nextProvider } from "react-i18next";
import  i18n  from "./i18n";
import ToastList from "./components/toast-list/toast-list";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <PrimaryHeader />
        <AppRouter />
        <ToastList/>
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
