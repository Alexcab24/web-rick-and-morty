import Banner from "../components/Banner";

import { useState } from "react";
import "../styles/character.css";
import CharactersContainer from "../components/CharactersContainer";
import { Navigate, useParams } from "react-router-dom";
import CharacterContainer from "../components/CharacterContainer";


const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();
  const [searchName, setSearchName] = useState('');

  if (!id) {
    return <Navigate to="/character/1" replace />;
  }


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
          searchName !== "" ? <CharactersContainer searchName={searchName} /> : <CharacterContainer characterId={id} />
        }




      </div>
    </div>
  );

};

export default CharacterPage;
