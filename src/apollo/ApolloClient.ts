import { ApolloClient, from } from '@apollo/client';
import { auth, cache, error, http } from 'src/apollo/links';

const apolloClient: TYPES.apolloClient = (handleUpdateErrors) =>
  new ApolloClient({
    link: from([auth, error(handleUpdateErrors), http]),
    cache,
    connectToDevTools: process.env.NODE_ENV !== 'production',
    assumeImmutableResults: true,
  });

export default apolloClient;
