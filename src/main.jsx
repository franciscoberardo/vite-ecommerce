import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./components/ThemeContext";
import { CartProvider } from "./components/CartContext"; // Importar el CartProvider
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { TranslationProvider } from './components/TranslationContext';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <I18nextProvider i18n={i18n}>
            <TranslationProvider>
              <App />
            </TranslationProvider>
          </I18nextProvider>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  </StrictMode>
);
