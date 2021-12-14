declare namespace TYPES {
  import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

  type handleUpdateErrors = (errors: IErrorsContext[]) => void;

  interface IErrorsContext {
    message: string;
    errors?: Maybe<{
      flag: boolean;
      [k: string]: string;
    }>;
  }

  type ErrorsContext = string[];

  type ApolloClientType = (cb: handleUpdateErrors) => ApolloClient<NormalizedCacheObject>;

  type InitiableEntities = MaybeIn<
    SCHEMA.Sheikh[],
    SCHEMA.Book[],
    SCHEMA.Category[],
    number,
    { data: string[]; count: number }
  >;
}
