import { useState } from "react";
import Pagination from "./Pagination"
import Loading from "./Loading";
import Error from "./Error";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../graphql/queries/getCharacters";
import CharactersCards from "./CharactersCards";


interface Props {
    searchName: string;
}

const CharactersContainer = ({ searchName }: Props) => {


    const [page, setPage] = useState(1);

    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        variables: { name: searchName, page: page },

    });


    if (loading) return <Loading />
    if (error) return <Error errorMessage={error.message} />



    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    return (
        <>
            <Pagination
                currentPage={page}
                totalPages={data.characters.info.pages}
                onPageChange={handlePageChange}
            />


            <CharactersCards data={data} />

            <Pagination
                currentPage={page}
                totalPages={data.characters.info.pages}
                onPageChange={handlePageChange}
            />
        </>
    )
}

export default CharactersContainer
