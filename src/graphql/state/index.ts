import { gql } from '@apollo/client';

export const FILTERS = gql`
  query Filters {
    filters @client
  }
`;

export default {
  FILTERS,
};
