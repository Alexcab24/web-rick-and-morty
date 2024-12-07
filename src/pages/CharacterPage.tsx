import Banner from "../components/Banner";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_BY_NAME } from "../graphql/queries/getCharacterByName";
import { useState } from "react";
import "../styles/character.css";
import CharacterCard from "../components/CharacterCard";


const CharacterPage = () => {
  const [searchName, setSearchName] = useState('');

  const { loading, error, data } = useQuery(GET_CHARACTER_BY_NAME, { variables: { name: searchName } });



  if (loading) return
  if (error) return <p>Error: {error.message}</p>;

  console.log(data?.characters.results)
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

        <CharacterCard data={data} />


      </div>
    </div>
  );

};

export default CharacterPage;
