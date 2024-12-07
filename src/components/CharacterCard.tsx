
import { CharacterDetails } from '../interfaces/index';

interface Props {
  character: CharacterDetails;
}


const CharacterCard = ({ character }: Props) => {

  return (
    <>
      <div className="character-details-container">
        <div className="character-details-card">
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
      </div>
    </>
  );
};

export default CharacterCard;
