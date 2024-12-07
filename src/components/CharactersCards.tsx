import { Character } from '../interfaces';
import '../styles/characters.css'


interface Props {
    data?: {
        characters: {
            results: Character[];
        };
    };
}


const CharactersCards = ({ data }: Props) => {


    return (
        <div className='characters-cards-container'>
            {
                data?.characters.results.map((character) => (
                    <a href={`/character/${character.id}`} className='characters-cards' key={character.id}>
                        <img src={character.image} alt={character.name} />
                        <h3>{character.name}</h3>
                        <p>
                            {character.species}
                        </p>
                    </a>
                ))
            }
        </div>
    )
}

export default CharactersCards
