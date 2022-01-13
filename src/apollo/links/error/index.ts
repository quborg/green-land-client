/* eslint-disable no-console */
import { ApolloLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const isUnauthenticated = ({ message, extensions }): boolean =>
  (extensions && extensions.code === 'UNAUTHENTICATED') ||
  message.includes('TokenExpiredError');

const errorLink = (handleUpdateErrors): ApolloLink =>
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      const gqlErrors = graphQLErrors.map((error) => {
        if (isUnauthenticated(error)) {
          localStorage.setItem('token', '');
        }
        return {
          message: error.message,
          errors: error.extensions?.errors,
        };
      });
      handleUpdateErrors(gqlErrors);
    }
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

export default errorLink;
