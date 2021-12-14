import { gql } from '@apollo/client';

export const CONTENT = gql`
  query GetContent($_id: ID!) {
    getContent(_id: $_id) {
      _id
      code
      seq
      sheikh {
        _id
        ID
        name
      }
      book {
        _id
        ID
        title
      }
      category {
        _id
        name
      }
      HNum
      line
      offsetStart
      offsetEnd
      write
      ques
    }
  }
`;

export const CONTENTS = gql`
  query GetContents($args: FiltersArgs) {
    getContents(args: $args) {
      data {
        _id
        code
        seq
        sheikh {
          _id
          ID
          name
        }
        book {
          _id
          ID
          title
        }
        category {
          _id
          name
        }
        HNum
        line
        offsetStart
        offsetEnd
        write
        ques
      }
      count
    }
  }
`;
