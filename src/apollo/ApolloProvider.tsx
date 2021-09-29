import { ApolloProvider } from '@apollo/client';

import apolloClient from './ApolloClient';
import ErrorContext from './links/error/ContextProvider';

const { ErrorConsumer, ErrorProvider } = ErrorContext;

const ApolloClientProvider: React.FC = ({ children }) => (
  <ErrorProvider>
    <ErrorConsumer>
      {(context) => (
        <ApolloProvider client={apolloClient(context.handleUpdateErrors)}>
          {children}
        </ApolloProvider>
      )}
    </ErrorConsumer>
  </ErrorProvider>
);

export default ApolloClientProvider;
