import { gql } from "@apollo/client";


export const GET_CHARACTER_BY_ID = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      gender
      status
      location {
        name
      }
      episode {
        id
      }
    }
  }
`;