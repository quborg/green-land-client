import { gql } from '@apollo/client';

export const CHAPTER = gql`
  query GetChapter($_id: ID!) {
    getChapter(_id: $_id) {
      _id
      code
      title
      sheikh {
        name
      }
      book {
        title
      }
      categories {
        seq
        category {
          name
        }
      }
      fileName
      fileSize
      duration
      path
      CDNumber
      order
    }
  }
`;

export const CHAPTER_BY_CODE = gql`
  query GetChapterByCode($code: Int!) {
    getChapterByCode(code: $code) {
      _id
      code
      title
      sheikh {
        name
      }
      book {
        title
      }
      categories {
        seq
        category {
          name
        }
      }
      fileName
      fileSize
      duration
      path
      CDNumber
      order
    }
  }
`;

export const CHAPTERS = gql`
  query GetChapters($args: FiltersArgs) {
    getChapters(args: $args) {
      data
      count
    }
  }
`;
export const SHEIKHS_CHAPTERS_BY_TITLE = gql`
  query GetSheikhsChaptersByTitle($args: FiltersArgs) {
    getSheikhsChaptersByTitle(args: $args) {
      title
      sheikhs {
        _id
        name
      }
    }
  }
`;

export const CHAPTERS_SHEIKH_BY_TITLE = gql`
  query GetChaptersSheikhByTitle($args: FiltersArgs) {
    getChaptersSheikhByTitle(args: $args) {
      title
      sheikh
      chapters {
        _id
        fileName
      }
    }
  }
`;
