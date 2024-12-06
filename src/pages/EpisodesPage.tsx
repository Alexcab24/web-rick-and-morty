import "../styles/episodes.css";
import EpisodesCards from "../components/EpisodesCards"


const EpisodesPage = () => {
  return (
    <div className="episodes-page">
      <section className="home-hero">
        <div>
          <h1>Episodios</h1>
          <p>Navega y descubre los episodios de esta serie!</p>
        </div>
      </section>

      <section className="episodes-container">
        <h2>Episodios</h2>
       <EpisodesCards/>

      </section>

    </div>
  )
}

export default EpisodesPage
