import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "@app/App";
import { ThemeProvider } from "@app/providers/themeProviders";
import { ErrorBoundary } from "@app/providers/errorBoundary";
import { PageLoader } from "@widgets/pageLoader";
import { StoreProvider } from "@app/providers/storeProvider";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Is not container")
}
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeProvider>
        <Suspense fallback={<PageLoader appLoad />}>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </Suspense>
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>
);
