import { useQuery } from "@apollo/client"
import { GET_CHARACTERS } from "../graphql/queries/getCharacters"
import { Character } from "../interfaces";


export const DisplayCharacters = () => {

    const { loading, error, data } = useQuery(GET_CHARACTERS);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
        {
            data.characters.results.map((character: Character) => (
             <p>{character.name}</p>
            ))
        }
        </>
    )
   
}
