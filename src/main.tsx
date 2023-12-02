import Apollo from "./providers/Apollo.tsx";

import { CacheProvider } from "@emotion/react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import ErrorFallback from "./Components/ErrorFallBackUI/ErrorFallBackUI.tsx";
import theme, { cacheRtl } from "./MUI/theme.ts";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Apollo>
      <StyledEngineProvider injectFirst>
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </CacheProvider>
      </StyledEngineProvider>
    </Apollo>
  </ErrorBoundary>
);
