import { gql } from '@apollo/client';

export const CATEGORY = gql`
  query GetCategory($_id: ID!) {
    getCategory(_id: $_id) {
      _id
      ID
      name
      order
      parent
      child
      parentRef {
        _id
      }
      level
      description
    }
  }
`;

export const CATEGORIES = gql`
  query GetCategories($args: FiltersArgs) {
    getCategories(args: $args) {
      _id
      ID
      name
      order
      parent
      child
      parentRef {
        _id
      }
      level
      description
    }
  }
`;
