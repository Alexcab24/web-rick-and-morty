import { useQuery } from "@apollo/client";
import { GET_CHARACTER_BY_NAME } from "../graphql/queries/getCharacterByName";
import { CharacterDetails } from "../interfaces";
import Loading from "./Loading";

interface Props {
  searchName: string;
}

const CharacterCard = ({ searchName }: Props) => {
  const { loading, error, data } = useQuery(GET_CHARACTER_BY_NAME, {
    variables: { name: searchName },
  });

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="character-details-container">
        {data?.characters.results.map((character: CharacterDetails) => (
          <div className="character-details-card" key={character.id}>
            <div className="card-image">
              <img
                src={character.image || "https://via.placeholder.com/300"}
                alt={character.name}
                className="character-image"
              />
              <div className="image-overlay">
                <h1 className="character-name">{character.name}</h1>
                <p className="character-species">Species: {character.species}</p>
              </div>
            </div>

            <div className="card-details">
              <div className="detail">
                <p className="detail-label">Status:</p>
                <span className={`status-${character.status.toLowerCase()}`}>{character.status}</span>
              </div>
              <div className="detail">
                <p className="detail-label">Gender:</p>
                <span className="detail-value">{character.gender}</span>
              </div>
              <div className="detail">
                <p className="detail-label">Location:</p>
                <span className="detail-value">{character.location.name}</span>
              </div>
              <div className="detail">
                <p className="detail-label">Episodes Appeared:</p>
                <span className="detail-value episodes">{character.episode.length}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CharacterCard;
