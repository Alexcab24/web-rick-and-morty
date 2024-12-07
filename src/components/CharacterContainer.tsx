import { useQuery } from "@apollo/client";
import { GET_CHARACTER_BY_ID } from "../graphql/queries/getCharacterById";
import Loading from "./Loading";
import Error from "./Error";
import CharacterCard from "./CharacterCard";




interface Props {
    characterId: string;
}

const CharacterContainer = ({ characterId }: Props) => {
    const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID, {
        variables: { id: characterId },
    });

    if (loading) return <Loading />;
    if (error) return <Error errorMessage={error.message} />;

    const character = data.character;

    return <CharacterCard character={character} />
}

export default CharacterContainer
