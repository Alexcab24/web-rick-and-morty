import { Route, Routes } from "react-router-dom"
import CharactersPage from "../pages/CharactersPage"
import EpisodesPage from "../pages/EpisodesPage"
import { HomePage } from "../pages/HomePage"
import CharacterPage from "../pages/CharacterPage"






const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/episodes" element={<EpisodesPage />} />
            <Route path="/character/:id" element={<CharacterPage />} />


            <Route path="/*" element={<HomePage />} />
        </Routes>
    )
}

export default AppRouter
