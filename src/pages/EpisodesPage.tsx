import "../styles/episodes.css";
import Banner from "../components/Banner";
import EpisodesContainer from "../components/EpisodesContainer";


const EpisodesPage = () => {
  return (
    <div className="episodes-page">
      <Banner
      title="Episodios"
      description="¡Navega y descubre los episodios de esta serie!"
      />
      <section className="episodes-container">
        <h2>Episodios</h2>
      

        <EpisodesContainer/>

      </section>

    </div>
  )
}

export default EpisodesPage
