import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Tailwind + design tokens (colors, fonts, custom utilities like
// "eyebrow", "rule-gold", "fade-up"...). Imported once, here at the top.
import "./styles.css";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
