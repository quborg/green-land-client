import { gql } from '@apollo/client';

export const ALERT = gql`
  query Alert {
    alert @client
  }
`;

export const ACTION = gql`
  query Action {
    action @client
  }
`;

export const FILTERS = gql`
  query Filters {
    filters @client
  }
`;

export const INPUTS_ERRORS = gql`
  query InputsErrors {
    inputsErrors @client
  }
`;

export const DATA = gql`
  query Data {
    data @client
  }
`;

export default {
  ACTION,
  ALERT,
  FILTERS,
  INPUTS_ERRORS,
  DATA,
};
