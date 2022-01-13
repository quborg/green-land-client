import { gql } from '@apollo/client';

export const SHEIKH = gql`
  query GetSheikh($_id: ID!) {
    getSheikh(_id: $_id) {
      _id
      ID
      name
      order
      additionalNames
      country
      affiliations {
        affiliation {
          name
        }
      }
      professions
      role
      birthDate
      email
      jobTitle
      accomplishments
      achievements
      biography
    }
  }
`;

export const SHEIKHS = gql`
  query GetSheikhs($args: FiltersArgs) {
    getSheikhs(args: $args) {
      _id
      ID
      name
      order
      additionalNames
      country
      affiliations {
        affiliation {
          name
        }
      }
      professions
      role
      birthDate
      email
      jobTitle
      accomplishments
      achievements
      biography
    }
  }
`;
