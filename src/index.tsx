import { Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "@app/App";
import { ThemeProvider } from "@app/providers/themeProviders";
import { ErrorBoundary } from "@app/providers/errorBoundary";
import { PageLoader } from "@widgets/pageLoader";
import { StoreProvider } from "@app/providers/storeProvider";

render(
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
  </BrowserRouter>,
  document.getElementById("root")
);
