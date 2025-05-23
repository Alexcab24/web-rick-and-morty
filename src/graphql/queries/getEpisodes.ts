import { gql } from "@apollo/client";


export const GET_EPISODES = gql`
query getEpisodes($page: Int) {
  episodes(page: $page) {
    info {
      count
      pages
    }
    results {
      id
      name
      episode
      air_date
      created
    }
  }
}
`;
