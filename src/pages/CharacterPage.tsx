import Banner from "../components/Banner";

import { useState } from "react";
import "../styles/character.css";
import CharacterCard from "../components/CharacterCard";
import CharactersContainer from "../components/CharactersContainer";


const CharacterPage = () => {
  const [searchName, setSearchName] = useState('');


  return (



    <div className="character">
      <Banner
        title="Personaje"
        description="¡Busca y explora tus personajes favoritos de Rick y Morty!"
      />
      <div className="character-container">
        <h2>Detalles de personaje</h2>
        <div className="input-search-container">
          <input
            type="text"
            placeholder="Buscar por nombre de personaje..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>

        {
          searchName !== "" ? <CharactersContainer searchName={searchName} /> : <CharacterCard />
        }




      </div>
    </div>
  );

};

export default CharacterPage;
