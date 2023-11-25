import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import ErrorFallback from "./Components/ErrorFallBackUI/ErrorFallBackUI.tsx";
import theme from "./MUI/theme.ts";
import "./styles/index.css";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHCMS_URI,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <App />
          </ErrorBoundary>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  </ApolloProvider>
);
