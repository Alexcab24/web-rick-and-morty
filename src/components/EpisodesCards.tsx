import '../styles/episodes.css'
import { Episode } from "../interfaces";



interface Props {
    data?: {
        episodes: {
            results: Episode[];
        };
    };
}

const EpisodesCards = ({ data }: Props) => {

    return (
        <>

            <div className="episodes-cards-container">
                {
                    data?.episodes.results.map((episode: Episode) => (
                        <div className="episode-card" key={episode.id}>
                            <h3>{episode.name}</h3>
                            <p>Episodio: {episode.episode}</p>
                            <p>Fecha de estreno: {episode.air_date}</p>
                        </div>

                    ))
                }
            </div>


        </>

    )
}

export default EpisodesCards
