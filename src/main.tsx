import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clp2oum8q06te01t6h23saxez/master",
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
