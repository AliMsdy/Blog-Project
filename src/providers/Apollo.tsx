import React from "react";
import { useErrorBoundary } from "react-error-boundary";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const httpLink = createHttpLink({
  uri: "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clp2oum8q06te01t6h23saxez/master",
});

function Apollo({ children }: { children: React.ReactNode }) {
  const { showBoundary } = useErrorBoundary();

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (networkError) {
      // Handle network errors here
      showBoundary({
        ...networkError,
        message: "Server Error Please Check Your Internet Status and Try Again Later",
      });
    }
    if (graphQLErrors) {
      // Handle GraphQL errors here
      showBoundary(graphQLErrors[0]);
    }
  });

  const client = new ApolloClient({
    link: errorLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default Apollo;
