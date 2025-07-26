import "./style/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { HomePage } from "./ui/home/home.page.tsx";
import { RootLayout } from "./ui/root.layout.tsx";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(
  <StrictMode>
    <RootLayout>
      <HomePage />
    </RootLayout>
  </StrictMode>,
);
