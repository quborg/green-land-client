import { gql } from '@apollo/client';

export const CHAPTER = gql`
  query GetChapter($_id: ID!) {
    getChapter(_id: $_id) {
      _id
      code
      sheikh {
        _id
        name
      }
      book {
        _id
        title
      }
      title
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

export const CHAPTERS_BY_TITLE = gql`
  query GetChaptersByTitle($args: FiltersArgs) {
    getChaptersByTitle(args: $args) {
      title
      chapters {
        _id
        fileName
      }
    }
  }
`;
