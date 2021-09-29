declare namespace TYPES {
  import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

  type handleUpdateErrors = (errors: ErrorsContext) => void;

  interface IErrorsContext {
    message?: string;
    errors?: Maybe<{
      flag: boolean;
      [k: string]: string;
    }>;
  }

  type ErrorsContext = IErrorsContext[];

  type apolloClient = (cb: handleUpdateErrors) => ApolloClient<NormalizedCacheObject>;
}
