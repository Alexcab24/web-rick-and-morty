import "../styles/episodes.css";
import EpisodesCards from "../components/EpisodesCards"
import Banner from "../components/Banner";


const EpisodesPage = () => {
  return (
    <div className="episodes-page">
      <Banner
      title="Episodios"
      description="¡Navega y descubre los episodios de esta serie!"
      />
      <section className="episodes-container">
        <h2>Episodios</h2>
        <EpisodesCards />

      </section>

    </div>
  )
}

export default EpisodesPage
