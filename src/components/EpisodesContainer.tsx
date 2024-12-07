import { useState } from "react";
import Pagination from "./Pagination"
import { useQuery } from "@apollo/client";
import Loading from "./Loading";
import Error from "./Error";
import { GET_EPISODES } from "../graphql/queries/getEpisodes";
import EpisodesCards from "./EpisodesCards";


const EpisodesContainer = () => {

    const [page, setPage] = useState(1);


    const { loading, error, data } = useQuery(GET_EPISODES, {
        variables: { page }
    });



    if (loading) return <Loading />
    if (error) return <Error errorMessage={error.message} />;


    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    return (
        <>
            <Pagination
                currentPage={page}
                totalPages={data.episodes.info.pages}
                onPageChange={handlePageChange}
            />

            <EpisodesCards data={data} />

            <Pagination
                currentPage={page}
                totalPages={data.episodes.info.pages}
                onPageChange={handlePageChange}
            />
        </>
    )
}

export default EpisodesContainer
