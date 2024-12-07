import Banner from '../components/Banner'
import CharactersCards from '../components/CharactersCards'
import '../styles/characters.css'


const CharactersPage = () => {

  return (
    <div className="characters-page">
      <Banner
        title='Personajes'
        description='¡Descubre personajes todos los personajes de esta serie!'
      />
      <div className="characters-container">
        <h2>Personajes</h2>

        <CharactersCards />
      </div>

    </div>
  )
}

export default CharactersPage
