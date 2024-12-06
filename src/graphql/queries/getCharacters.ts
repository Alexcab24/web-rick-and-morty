import { gql } from "@apollo/client";



export const GET_CHARACTERS = gql`
query getCharacter {
  characters {
    results {
      name
      status
      
    }
  }
}
`;