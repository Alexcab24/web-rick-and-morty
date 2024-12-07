import { gql } from "@apollo/client";

export const GET_CHARACTER_BY_NAME = gql`
  query getCharacterByName($name: String) {
  characters ( filter: {name: $name} ){
      results {
        name
        species
        status
        type
        gender
        episode {episode}
        location {name}
        image
      },
    },
  }
`;
