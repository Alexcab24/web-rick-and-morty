import {  Route, Routes } from "react-router-dom"
import CharactersPage from "../pages/CharactersPage"
import EpisodesPage from "../pages/EpisodesPage"
import { HomePage } from "../pages/HomePage"
import CharacterPage from "../pages/CharacterPage"






const AppRouter = () => {
    return (
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Characters" element={<CharactersPage />} />
                    <Route path="/Episodes" element={<EpisodesPage />} />
                    <Route path="/Character" element={<CharacterPage />} />
                </Routes>
    )
}

export default AppRouter
