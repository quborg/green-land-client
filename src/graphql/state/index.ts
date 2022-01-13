import { gql } from '@apollo/client';

export const GET_SEARCH_FILTERS = gql`
  query GetSearchFilters {
    getSearchFilters @client
  }
`;

export const GET_SHEIKHS_FILTERS = gql`
  query GetSheikhsFilters {
    getSheikhsFilters @client
  }
`;

export const GET_BOOKS_FILTERS = gql`
  query GetBooksFilters {
    getBooksFilters @client
  }
`;

export const GET_CATEGORIES_FILTERS = gql`
  query GetCategoriesFilters {
    getCategoriesFilters @client
  }
`;

export const GET_CHAPTERS_FILTERS = gql`
  query GetChaptersFilters {
    getChaptersFilters @client
  }
`;

export const GET_CONTENTS_FILTERS = gql`
  query GetContentsFilters {
    getContentsFilters @client
  }
`;

export const GET_CONTENT_VIEW_FILTERS = gql`
  query GetContentViewFilters {
    getContentViewFilters @client
  }
`;

export default {
  GET_SEARCH_FILTERS,
  GET_SHEIKHS_FILTERS,
  GET_BOOKS_FILTERS,
  GET_CATEGORIES_FILTERS,
  GET_CHAPTERS_FILTERS,
  GET_CONTENTS_FILTERS,
  GET_CONTENT_VIEW_FILTERS,
};
