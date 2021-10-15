import { gql } from '@apollo/client';

export const ALERT = gql`
  query Alert {
    alert @client
  }
`;

export const FILTERS = gql`
  query Filters {
    filters @client
  }
`;

export const DATA = gql`
  query Data {
    data @client
  }
`;

export default {
  ALERT,
  FILTERS,
  DATA,
};
