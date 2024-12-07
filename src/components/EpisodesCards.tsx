import '../styles/episodes.css'
import { useState } from "react";
import Pagination from "./Pagination"
import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../graphql/queries/getEpisodes";
import { Episode } from "../interfaces";
import Loading from './Loading';


const EpisodesCards = () => {

    const [page, setPage] = useState(1);



    const { loading, error, data } = useQuery(GET_EPISODES, {
        variables: { page }
    });


    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };



    if (loading) return <Loading/>
    if (error) return <p>Error: {error.message}</p>;
    return (
        <>
            <Pagination
                currentPage={page}
                totalPages={data.episodes.info.pages}
                onPageChange={handlePageChange}
            />
            <div className="episodes-cards-container">
                {
                    data.episodes.results.map((episode: Episode) => (
                        <div className="episode-card" key={episode.id}>
                            <h3>{episode.name}</h3>
                            <p>Episodio: {episode.episode}</p>
                            <p>Fecha de estreno: {episode.air_date}</p>
                        </div>

                    ))
                }
            </div>


            <Pagination
                currentPage={page}
                totalPages={data.episodes.info.pages}
                onPageChange={handlePageChange}
            />
        </>

    )
}

export default EpisodesCards
