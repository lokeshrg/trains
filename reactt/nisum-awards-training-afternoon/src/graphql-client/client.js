import {ApolloClient, createNetworkInterface} from 'react-apollo';

export const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:8080/graphql'
  })
  , connectToDevTools: true
});
