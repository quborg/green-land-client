import { gql } from '@apollo/client';

export const BOOK = gql`
  query GetBook($_id: ID!) {
    getBook(_id: $_id) {
      _id
      ID
      isbn
      format
      title
      subtitle
      type
      authors {
        _id
      }
      presenters {
        _id
      }
      correctors {
        _id
      }
      categories {
        _id
      }
      description
      languages
      advice
      editions
      publishers
      pages
      publicationDate
      saleDate
      group
      series
      volume
      related {
        _id
      }
    }
  }
`;

export const BOOKS = gql`
  query GetBooks($args: FiltersArgs) {
    getBooks(args: $args) {
      _id
      ID
      isbn
      format
      title
      subtitle
      type
      authors {
        _id
      }
      presenters {
        _id
      }
      correctors {
        _id
      }
      categories {
        _id
      }
      description
      languages
      advice
      editions
      publishers
      pages
      publicationDate
      saleDate
      group
      series
      volume
      related {
        _id
      }
    }
  }
`;
