import { useState } from 'react';
import Banner from '../components/Banner'
import '../styles/characters.css'
import CharactersContainer from '../components/CharactersContainer';


const CharactersPage = () => {
  const [searchName, setSearchName] = useState('');

  return (
    <div className="characters-page">
      <Banner
        title='Personajes'
        description='¡Descubre personajes todos los personajes de esta serie!'
      />
      <div className="characters-container">
        <h2>Personajes</h2>

        <div className="input-search-container">
          <input
            type="text"
            placeholder="Buscar por nombre de personaje..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>

        <CharactersContainer searchName={searchName} />
      </div>

    </div>
  )
}

export default CharactersPage
