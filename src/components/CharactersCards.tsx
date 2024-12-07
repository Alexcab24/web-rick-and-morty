import '../styles/characters.css'
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../graphql/queries/getCharacters";
import { Character } from "../interfaces";
import { useState } from 'react';
import Pagination from './Pagination';




const CharactersCards = () => {
    const [page, setPage] = useState(1);


    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        variables: { page }
    });


    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };



    if (loading) return
    if (error) return <p>Error: {error.message}</p>;
    return (
        <>

            <Pagination
                currentPage={page}
                totalPages={data.characters.info.pages}
                onPageChange={handlePageChange}
            />

            <div className='characters-cards-container'>


                {
                    data.characters.results.map((character: Character) => (
                        <div className='characters-cards' key={character.id}>
                            <img src={character.image} alt={character.name} />
                            <h3>{character.name}</h3>
                            <p>
                             {character.species}
                            </p>
                        </div>
                    ))

                }
            </div>

            <Pagination
                currentPage={page}
                totalPages={data.characters.info.pages}
                onPageChange={handlePageChange}
            />



        </>

    )
}

export default CharactersCards
