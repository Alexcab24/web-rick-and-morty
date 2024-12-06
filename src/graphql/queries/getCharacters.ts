import { gql } from "@apollo/client";



export const GET_CHARACTERS = gql`
query getCharacter($page: Int) {
  characters(page: $page) {
  info {
      count
      pages
    }
    results {
     id
      name
      image
      status
      species
      
    }
  }
}
`;