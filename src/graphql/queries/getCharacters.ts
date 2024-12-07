import { gql } from "@apollo/client";



export const GET_CHARACTERS = gql`
query getCharacter($name: String, $page: Int) {
  characters(filter: {name: $name}, page: $page) {
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