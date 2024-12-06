import CharactersCards from '../components/CharactersCards'
import '../styles/characters.css'


const CharactersPage = () => {
  
  return (
    <div className="characters-page">
      <section className="home-hero">
        <div>
          <h1>Personajes</h1>
          <p>Descubre personajes todos los personajes de esta serie!</p>
        </div>
      </section>
      <div className="characters-container">
        <h2>Personajes</h2>

        <CharactersCards />
      </div>

    </div>
  )
}

export default CharactersPage
